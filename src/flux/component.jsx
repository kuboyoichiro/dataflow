import React from 'react';
import { Subject } from 'rxjs';


export class FluxComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
      taskStore: [],
    };

    this.onChangeForm = this.onChangeForm.bind(this);
    this.onClickSubmitButtonAction = this.onClickSubmitButtonAction.bind(this);
    this.onClickDeleteButtonAction = this.onClickDeleteButtonAction.bind(this);
    this._taskCreateDispatcher$ = new Subject();
    this._taskDeleteDispatcher$ = new Subject();
  }

  componentDidMount() {
    this._taskCreateDispatcher$.subscribe((value) => {
      const { taskStore } = this.state;
      taskStore.push(value);
      this.setState({
        taskStore,
      })
    });

    this._taskDeleteDispatcher$.subscribe((index) => {
      const { taskStore } = this.state;
      taskStore.splice(index, 1);
      this.setState({
        taskStore,
      });
    });
  }

  render() {
    const { taskName, taskStore } = this.state;

    return (
      <div className={'c-flux'}>
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
    this._taskCreateDispatcher$.next(taskName);
    this.setState({
      taskName: '',
    });
  }

  onClickDeleteButtonAction(index) {
    this._taskDeleteDispatcher$.next(index);
  }
}