import React,{ Component,Fragment } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[]
        }
    }

    render(){
        return(
            <Fragment>
                <input value={this.state.inputValue} 
                    onChange={this.changeInputValue.bind(this)}/>
                    <button>提交</button>
            </Fragment>
        )
    }

    changeInputValue(e){
        this.setState({
            inputValue:e.target.value
        })
    }
}

export default TodoList;