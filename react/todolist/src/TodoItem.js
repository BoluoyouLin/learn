import React,{ Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.removeItem = this.removeItem.bind(this)
    }
    
    render(){
        return(
            <div onClick={this.removeItem}>{this.props.content}</div>
        )
    }

    removeItem(){
        this.props.removeItem(this.props.index)
    }
}

export default TodoItem;