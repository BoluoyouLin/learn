import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Additional, NavImage, SearchWrapper } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

const Header = (props) => {
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
                            in={props.focus}
                            timeout={300}
                            classNames="focus"
                        >
                            <NavSearch
                                onFocus={props.handleSearchFocus}
                                onBlur={props.handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={ props.focus ? "iconfont focus" : "iconfont"}>&#xe620;</i>
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
        focus: state.header.focus
    }
}

const mapToDispatchProps = (dispatch) => {
    return {
        handleSearchFocus() {
            dispatch(actionCreators.getSearchFocus())
        },
        handleSearchBlur() {
            dispatch(actionCreators.getSearchBlur())
        }
    }
}

export default connect(mapStateToProps,mapToDispatchProps)(Header);