import React,{ PureComponent } from 'react';
import { 
    DetailWrapper,
    Header,
    Content
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { withRouter } from 'react-router-dom';

class Details extends PureComponent {
    render() {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.getArticle()
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getArticle() {
        dispatch(actionCreators.getArticle())
    }
})

export default connect(mapState, mapDispatch)(withRouter(Details));