import React,{ PureComponent } from 'react';
import Author from './components/author';
import Download from './components/download';
import List from './components/list';
import Recommend from './components/recommend';
import { 
    HomeWrapper,
    LeftWrapper,
    RightWrapper,
    BackTop 
} from './style';
import homeImg from '../../statics/images/1.jpg';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends PureComponent {
    render() {

        const { showBackTop } = this.props;
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
                {showBackTop ? <BackTop onClick={this.backTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.initHomeData()
        this.bindEvent()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeBackTopShow)
    }

    backTop() {
        window.scrollTo(0,0)
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeBackTopShow)
    }
}

const mapState = (state) => ({
    showBackTop: state.getIn(['home', 'showBackTop'])
})

const mapDispatch = (dispatch) => ({
    initHomeData() {
        dispatch(actionCreators.initHomeData());
    },
    changeBackTopShow() {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.changeBackTopShow(true))
        }else {
            dispatch(actionCreators.changeBackTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home);