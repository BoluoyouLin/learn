import React,{ Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Additional, NavImage, SearchWrapper } from './style';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focus: false
        }
        this.handleSearchFocus = this.handleSearchFocus.bind(this);
        this.handleSearchBlur = this.handleSearchBlur.bind(this)
    }

    render() {
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
                            in={this.state.focus}
                            timeout={300}
                            classNames="focus"
                        >
                            <NavSearch
                                onFocus={this.handleSearchFocus}
                                onBlur={this.handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={ this.state.focus ? "iconfont focus" : "iconfont"}>&#xe620;</i>
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

    handleSearchFocus() {
        this.setState({
            focus: true
        })
    }

    handleSearchBlur() {
        this.setState({
            focus: false
        })
    }
}

export default Header;