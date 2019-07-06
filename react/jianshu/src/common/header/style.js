import styled from 'styled-components';
import logoPath from '../../statics/logo/logo.png';
import betaImage from '../../statics/images/beta.png';

export const HeaderWrapper = styled.div`
    height: 58px;
    margin: 0 auto;
    border-bottom: 1px solid #eee; 
`;
export const Logo = styled.a.attrs({
    href: '/'
})`
    width: 100px;
    height: 56px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoPath});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    &.right {
        float: right;
    }
    &.home-page {
        color: #ea6f5a;
    }
    &.login {
        color: #969696;
        font-size: 15px;
    }
    padding: 15px;
    display: inline-block;
    height: 56px;
    line-height: 26px;
    box-sizing: border-box;
    font-size: 17px;
    color: #333;
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 180px;
    font-size: 14px;
    border: 1px solid #eee;
    background-color: #eee;
    border-radius: 40px;
    height:38px;
    line-height: 58px;
    outline: none;
    padding: 0 40px 0 20px;
`;

export const Button = styled.div`
    &.write-btn {
        background-color: #ea6f5a;
        color: #fff;
        height: 40px;
    }
    &.reg-btn {
        background-color: #fff;
        color: #ea6f5a;
    }
    width: 80px;
    height: 38px;
    line-height: 24px;
    text-align: center;
    font-size: 15px;
    border: 1px solid #ea6f5a;
    display: inline-block;
    border-radius: 20px;
    padding: 6px 12px;
    box-sizing: border-box;
    margin: 9px 5px 0 15px;
`;

export const Additional = styled.div`
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
`;

export const NavImage = styled.img.attrs({
    src: `${betaImage}`
})`
    display: inline-block;
    float: right;
    height: 25px;
    padding: 15px 0px;
    margin: 0 12px;
`;