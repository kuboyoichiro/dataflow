export class Controller {
  constructor(model) {
    this.model = model;
  }

  addNewTask(value) {
    this.model.addTask(value);
  }

  removeTask(index) {
    this.model.removeTask(index);
  }
}