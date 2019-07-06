import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper,
            Logo, 
            Nav, 
            NavItem, 
            NavSearch, 
            Button, 
            Additional, 
            NavImage, 
            SearchWrapper, 
            SearchInfo, 
            SearchInfoTitle,
            SearchInfoSwitch,
            SearchInfoList,
            SearchInfoItem 
        } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {

    const { list, page, focus, mouse, totalPage, handleSearchFocus, handleSearchBlur, handleMouseEnter, handleMouseLeave, changePage } = props;
    const pageList = [];

    if(list.length) {
        const size = (page + 1) * 10 < list.length ?  (page + 1) * 10 : list.length;
        for(let i = page * 10; i < size; i++) {
            pageList.push(list[i])
        }
    }

    return (
        <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="right login">登录</NavItem>
                    <NavImage></NavImage>
                    <NavItem className="right">
                        <i className = "iconfont">&#xe602;</i>
                    </NavItem>
                    <NavItem className="home-page">首页</NavItem>
                    <NavItem>
                        <i className="iconfont">&#xe666;</i>
                        下载App
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focus}
                            timeout={300}
                            classNames="focus"
                        >
                            <NavSearch
                                onFocus={handleSearchFocus}
                                onBlur={handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={ focus ? "iconfont focus" : "iconfont"}>&#xe620;</i>
                        <SearchInfo className={ focus || mouse ? 'show' : ''}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <SearchInfoSwitch onClick={() => changePage(page, totalPage)}>换一批</SearchInfoSwitch>
                            <SearchInfoTitle>热门搜索</SearchInfoTitle>
                            <SearchInfoList>
                                {
                                    pageList.map((item) => {
                                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    })
                                }
                            </SearchInfoList>
                        </SearchInfo>
                    </SearchWrapper>
                </Nav>
                <Additional>
                    <Button className="reg-btn">注册</Button>
                    <Button className="write-btn">
                        <i className="iconfont">&#xe60b;</i>
                        写文章
                    </Button>
                </Additional>
            </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focus: state.getIn(['header', 'focus']),
        list: state.getIn(['header', 'list']),
        mouse: state.getIn(['header', 'mouse']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}

const mapToDispatchProps = (dispatch) => {
    return {
        handleSearchFocus() {
            dispatch(actionCreators.initList())
            dispatch(actionCreators.getSearchFocus())
        },
        handleSearchBlur() {
            dispatch(actionCreators.getSearchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        changePage(page, totalPage) {
            if(page < totalPage - 1) {
                dispatch(actionCreators.changePage(page + 1))
            }else {
                dispatch(actionCreators.changePage(0))
            }
        }
    }
}

export default connect(mapStateToProps,mapToDispatchProps)(Header);