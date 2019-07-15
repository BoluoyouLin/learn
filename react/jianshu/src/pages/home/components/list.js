import React,{ PureComponent, Fragment } from 'react';
import { ListItem, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, getMoreDate } = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => {
                        return(
                            <Link to={'/detail/' + item.get('id') } key={index}>
                                 <ListItem>
                                    <img 
                                        className="item-pic"
                                        src={item.get('imgUrl')}
                                        alt=""
                                    />
                                    <h3 className="item-title">{item.get('title')}</h3>
                                    <p className="item-desc">{item.get('desc')}</p>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={getMoreDate}>阅读更多</LoadMore>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
});

const mapDispatch = (dispatch) => ({
    getMoreDate() {
        dispatch(actionCreators.getMoreDate())
    }
});

export default connect(mapState, mapDispatch)(List);