import React,{ Fragment } from 'react';
import TodoItem from './TodoItem';
import { CSSTransition ,TransitionGroup} from 'react-transition-group';

//无状态组件
const TodoListUI = (props) => {
    return (
        <Fragment>
            <div>
                <label htmlFor='insert'>内容</label>
                <input 
                id='insert'
                value={props.inputValue} 
                onChange={props.changeInputValue}/>
                <button onClick={props.addItem}>提交</button>
            </div>
            <ul>
                <TransitionGroup>
                {
                    props.list.map((item,index) => {
                        return(
                            <CSSTransition
                            key={index}
                            classNames="item"
                            timeout={1000}
                            unmountOnExit
                            >
                                <TodoItem
                                content={item}
                                index={index}
                                removeItem={props.removeItem}
                           />
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
            </ul>
        </Fragment>
    )
}

export default TodoListUI;