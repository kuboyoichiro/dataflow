import { Dispatcher } from './dispatcher';

export class Model extends Dispatcher {
  constructor() {
    super();
  }

  addTask(value) {
    this.dispatchEvent({type: 'add', task: value});
  }

  removeTask(index) {
    this.dispatchEvent({type: 'remove', index,});
  }
} 