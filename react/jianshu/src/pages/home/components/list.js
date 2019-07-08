import React,{ Component } from 'react';
import { ListItem } from '../style';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        const { list } = this.props;
        return (
            list.map((item) => {
                return(
                    <ListItem key={item.get('id')}>
                        <img 
                            className="item-pic"
                            src={item.get('imgUrl')}
                            alt=""
                        />
                        <h3 className="item-title">{item.get('title')}</h3>
                        <p className="item-desc">{item.get('desc')}</p>
                    </ListItem>
                )
            })
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

export default connect(mapState, null)(List);