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

export const SearchWrapper = styled.div`
    position: relative;
    display: inline-block;
    .iconfont {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 30px;
        border-radius: 20px;
        line-height: 30px;
        text-align: center;
        &.focus {
            background-color: #999;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    &.focus-enter {
        transition: all .3s ease-in;
    }
    &.focus-enter-active {
        width: 280px;
    }
    &.focus-enter-done {
        width: 280px;
    }
    &.focus-exit {
        transition: all .3s ease-in;
    }
    &.focus-exit-active {
        width: 180px;
    }
    &.focus-exit-done {
        width: 180px;
    }
    width: 180px;
    font-size: 14px;
    border: 1px solid #eee;
    background-color: #eee;
    border-radius: 40px;
    height:38px;
    line-height: 58px;
    outline: none;
    padding: 0 40px 0 20px;
    color: #777;
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
    min-width: 80px;
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

export const SearchInfo = styled.div`
    position: absolute;
    width: 250px;
    box-sizing: border-box;
    padding 20px 20px 10px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    margin-top: 10px;
    display: none;
    &.show {
        display: block;
    }
`;

export const SearchInfoTitle = styled.span`
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    color: #969696;
    float: right;
`;

export const SearchInfoList = styled.div`
    list-style: none;
    margin-top: 10px;
`;

export const SearchInfoItem = styled.a`
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
`;