import React,{ PureComponent } from 'react';
import { 
    AuthorWrapper, 
    AuthorInfo, 
    AuthorSpin, 
    AuthorTitle,
    AuthorItem,
    ItemFollow,
    AuthorDetail,
    AuthorName
} from '../style';
import { connect } from 'react-redux';

class Author extends PureComponent {
    render() {

        const { list } = this.props;

        return (
            <AuthorWrapper>
                <AuthorInfo>
                    <AuthorSpin>
                        <i className="iconfont spin">&#xe851;</i>
                        换一批
                    </AuthorSpin>
                    <AuthorTitle>推荐作者</AuthorTitle>
                </AuthorInfo>
                {
                    list.map((item) => {
                        return(
                            <AuthorItem key={item.get('id')}>
                                <ItemFollow>+关注</ItemFollow>
                                <img
                                    className='avatar' 
                                    alt='' 
                                    src={item.get('imgUrl')}/>
                                <AuthorName>{item.get('name')}</AuthorName>
                                <AuthorDetail>{item.get('detail')}</AuthorDetail>
                            </AuthorItem>
                        )
                    })
                }
            </AuthorWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'authorList'])
});

export default connect(mapState, null)(Author);