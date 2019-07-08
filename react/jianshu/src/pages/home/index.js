import React,{ Component } from 'react';
import Author from './components/author';
import Download from './components/download';
import List from './components/list';
import Recommend from './components/recommend';
import { 
    HomeWrapper,
    LeftWrapper,
    RightWrapper 
} from './style';
import homeImg from '../../statics/images/1.jpg';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <RightWrapper>
                    <Recommend />
                    <Download />
                    <Author />
                </RightWrapper>
                <LeftWrapper>
                    <img src={homeImg} alt='1.jpg' className="homeImg"/>
                    <List />
                </LeftWrapper>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.initHomeData()
    }
}

const mapDispatch = (dispatch) => ({
    initHomeData() {
        dispatch(actionCreators.initHomeData());
    }
})

export default connect(null, mapDispatch)(Home);