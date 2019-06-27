import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.removeItem = this.removeItem.bind(this)
    }

    shouldComponentUpdate(nextProp,nextState){
        if(nextProp.content !== this.props.content){
            return true;
        }
        return false;
    }
    
    render(){
        const { content , text } = this.props
        return(
            <div onClick={this.removeItem} >{text}-{content}</div>
        )
    }

    removeItem(){
        const { index , removeItem } = this.props;
        removeItem(index)
    }
}

TodoItem.propTypes = {
    content : PropTypes.string,
    index : PropTypes.number,
    removeItem : PropTypes.func,
    text : PropTypes.string.isRequired
}

TodoItem.defaultProps = {
    text : "hello world"
}


export default TodoItem;