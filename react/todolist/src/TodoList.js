import React,{ Component } from 'react';
import "./todoItem.css";
import TodoListUI from './TodoListUI';
import store from './store';
import { getListData, getChangeInputValueAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state= store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.changeStoreState = this.changeStoreState.bind(this)
        store.subscribe(this.changeStoreState)
    }

    render(){
        return <TodoListUI 
        inputValue = {this.state.inputValue}
        changeInputValue = {this.changeInputValue}
        addItem = {this.addItem}
        list = {this.state.list}
        removeItem = {this.removeItem}
        />
    }

    componentDidMount() {
        const action = getListData();
        store.dispatch(action)
    }


    changeInputValue(e) {
        const action = getChangeInputValueAction(e.target.value)
        store.dispatch(action)
    }

    addItem() {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }

    removeItem(index) {
        const action = getDeleteTodoItemAction(index)
        store.dispatch(action)
    }

    changeStoreState() {
        this.setState(store.getState())
    }
}

export default TodoList;