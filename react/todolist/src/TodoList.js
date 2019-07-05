import React from 'react';
import { connect } from 'react-redux';
import { changeInputValueAction, addTodoItemAction, deleteTodoItemAction } from './store/actionCreator';

const TodoList = (props) => {
    const { inputValue, changeInputValue, addTodoItem, list, deleteTodoItem } = props
        return (
            <div>
                <div>
                    <input value = {inputValue} onChange = {changeInputValue}/>
                    <button onClick = {addTodoItem}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index} onClick={deleteTodoItem.bind(index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action  = changeInputValueAction(e.target.value)
            dispatch(action)
        },
        addTodoItem() {
            const action = addTodoItemAction()
            dispatch(action)
        },
        deleteTodoItem(index) {
            const action = deleteTodoItemAction(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
