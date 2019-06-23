import React,{ Component,Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[]
        } 
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
                    onChange={this.changeInputValue}/>
                    <button onClick={this.addItem}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return(
                               <TodoItem
                               key={index}
                               content={item}
                               index={index}
                               removeItem={this.removeItem}
							   />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    changeInputValue(e){
        const value = e.target.value;
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