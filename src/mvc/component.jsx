import React from 'react';
import { Model } from './model';
import { Controller } from './controller';


export class MVCComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
      taskStore: [],
    };

    this.model = new Model();
    this.controller = new Controller(this.model);

    this.onChangeForm = this.onChangeForm.bind(this);
    this.onClickSubmitButtonAction = this.onClickSubmitButtonAction.bind(this);
    this.onClickDeleteButtonAction = this.onClickDeleteButtonAction.bind(this);
  }

  componentDidMount() {
    this.model.addEventListener('add', (e) => {
      const { taskStore } = this.state;
      taskStore.push(e.task);
      this.setState({
        taskStore,
      });
    });

    this.model.addEventListener('remove', (e) => {
      const { taskStore } = this.state;
      taskStore.splice(e.index, 1);
      this.setState({
        taskStore,
      });
    });
  }

  render() {
    const { taskName, taskStore } = this.state;

    return (
      <div className={'c-mvc'}>
        <div>mvc</div>
        <input type="text" placeholder="タスク名を入力"  value={taskName} onChange={this.onChangeForm}></input>
        <button onClick={this.onClickSubmitButtonAction}>登録</button>
        <ul>
          {taskStore && taskStore.map((task, index) => {
            return (
              <li key={index}>
                <span>{task}<button onClick={() => this.onClickDeleteButtonAction(index)}>削除</button></span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  onChangeForm(e) {
    this.setState({
      taskName: e.target.value,
    });
  }

  onClickSubmitButtonAction() {
    const { taskName } = this.state;
    if (!taskName) {
      return;
    }
    this.controller.addNewTask(taskName);
    this.setState({
      taskName: '',
    });
  }

  onClickDeleteButtonAction(index) {
    this.controller.removeTask(index);
  }
}