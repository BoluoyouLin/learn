import React,{ Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Additional, NavImage } from './style';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="right login">登录</NavItem>
                    <NavImage></NavImage>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="home-page">首页</NavItem>
                    <NavItem>下载App</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Additional>
                    <Button className="reg-btn">注册</Button>
                    <Button className="write-btn">写文章</Button>
                </Additional>
            </HeaderWrapper>
        )
    }
}

export default Header;