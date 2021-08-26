import { BaseNodeModel } from './base/node';

export class InstrumentModel extends BaseNodeModel {

  static properties = {
    name: {
      type: String
    },
    fn: {
      type: Function
    }
  }

}

InstrumentModel.init();