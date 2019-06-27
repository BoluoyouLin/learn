import React,{ Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import "./todoItem.css";
import { CSSTransition ,TransitionGroup} from 'react-transition-group';
import store from './store'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state= store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    render(){
        return(
            <Fragment>
                <div>
                    <label htmlFor='insert'>内容</label>
                    <input 
                    id='insert'
                    value={this.state.inputValue} 
                    onChange={this.changeInputValue}
                    ref={(input) => {
                        this.input = input
                    }}/>
                    <button onClick={this.addItem}>提交</button>
                </div>
                <ul>
                    <TransitionGroup>
                    {
                        this.state.list.map((item,index) => {
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
                                    removeItem={this.removeItem}
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

    changeInputValue(e){
        const value = this.input.value;
        this.setState(() =>({inputValue:value}))
    }

    addItem(){
        this.setState((prevState) =>{
            const list = [...prevState.list,prevState.inputValue]
            return {
                list:list,
                inputValue:''
            }
        })
    }

    removeItem(index){
        this.setState((prevState,index)=>{
            const list = [...prevState.list]
            list.splice(index,1)
            return {
                list:list
            }
        })
    }
}

export default TodoList;