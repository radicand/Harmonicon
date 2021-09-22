import {
  MenuDropdownItem,
  MenuDropdownDivider,
} from '@composer/web-components';

import {
  IoAddSharp,
  IoDownloadOutline,
  IoTrashSharp,
} from "react-icons/io5";

import { useController } from '../providers/controller';

export function FileDropdown() {
  const controller = useController();

  return (
    <div>
      <MenuDropdownItem
        label="New Session"
        icon={IoAddSharp}
        onClick={() => { controller.addFile(); }}
      />
      <MenuDropdownDivider />
      <MenuDropdownItem
        label="Save"
        onClick={() => { controller.save(); }}
      />
      <MenuDropdownItem
        label="Delete"
        onClick={() => { 
          if (confirm(`Are you sure you want to delete ${controller.file.name}?`)) {
            controller.destroyFile(controller.file);
          };
        }}
      />
      <MenuDropdownItem
        label="Download"
        icon={IoDownloadOutline}
        disabled
      />
      <MenuDropdownDivider />
      <MenuDropdownItem
        label="Export..."
        disabled
      />
      <MenuDropdownDivider />
      <MenuDropdownItem
        label="Reset Workspace"
        icon={IoTrashSharp}
        onClick={() => { 
          if (confirm("This will erase your workspace and reset to a blank slate.\n\nYou sure bout that, Clark?")) {
            controller.wipe();
          };
        }}
      />
    </div>
  )
}