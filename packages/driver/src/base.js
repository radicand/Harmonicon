import { Logger } from '@composer/util';

export class BaseDriver {

  get name () {
    return this.constructor.name;
  }

  constructor(options = {}) {
    this.options = options;
    this.logger = new Logger(this.constructor.name);
  }

}