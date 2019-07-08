import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 20px auto 0;
    .homeImg {
        width: 625px;
        height: 270px;
    }
`;

export const LeftWrapper = styled.div`
    width: 640px;
    box-sizing: border-box;
    padding-right: 15px;
`;

export const RightWrapper = styled.div`
    width: 280px;
    float: right;
`;

export const ListItem = styled.div`
    overflow: hidden;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    .item-pic {
        float: right;
        width: 150px;
        height: 100px;
        line-height: 100%;
    }
    .item-title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
        color: #333;
        padding-right: 165px;
    }
    .item-desc {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
        padding-right: 165px;
    }
`;

export const RecommendWrapper = styled.div`
    width: 280px;
`;

export const RecommendItem = styled.div`
    background: url(${(props) => props.imgUrl });
    width:100%;
    height: 50px;
    margin: 0 0 6px;
    background-size: contain;
`;

export const DownloadWrapper = styled.div`
    overflow: hidden;
    width: 280px;
    height: 82px;
    color: #333;
    background-color: #fff;
    padding: 10px 22px;
    margin: 0 0 30px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #f0f0f0;
    .picture {
        float: left;
        width: 60px;
        height: 60px;
    }
    .text {
        margin-left: 67px;
        padding: 15px 0;
    }
    .app {
        font-size: 15px;
    }
    .content {
        font-size: 13px;
        color: #999;
        margin-top: 4px;
    }
`;

export const AuthorWrapper = styled.div`
    width: 280px;
    margin-top: 20px;
`;

export const AuthorTitle = styled.span`
    font-size: 14px;
    color: #969696;
`;

export const AuthorInfo = styled.div`
    width: 100%;
`;

export const AuthorSpin = styled.span`
    font-size: 14px;
    float: right;
    color: #969696;
    .spin {
        font-size: 14px;
        color: #969696;
    }
`;

export const AuthorItem = styled.div`
    width: 280px;
    margin-top: 15px;
    overflow: hidden;
    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 24px;
        float: left;
        margin-right: 10px;
    }
`;

export const AuthorDetail = styled.p`
    margin: 2px 0 10px;
    color: #969696;
    font-size: 12px;
    line-height: 20px;
    box-sizing: border-box;
`;

export const ItemFollow = styled.p`
    font-size: 13px;
    color: #42c02e;
    margin-top: 5px;
    float: right;
`;

export const AuthorName = styled.p`
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    box-sizing: border-box;
`;