export class Dispatcher {
  constructor() {
      this.listeners = {};
  }

  addEventListener(type, callback) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }

    this.listeners[type].push(callback);
  }

  clearEventListener() {
    this.listeners = {};
  }

  dispatchEvent(event) {
    if (this.listeners[event.type]) {
      for (let listener in this.listeners[event.type]) {
        this.listeners[event.type][listener].apply(this.listeners, arguments);
      }
    }
  }
}