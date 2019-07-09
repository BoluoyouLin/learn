import React,{ PureComponent } from 'react';
import { DownloadWrapper } from '../style';

class Download extends PureComponent {
    render() {
        return (
            <DownloadWrapper>
                <img
                    className='picture' 
                    alt=''
                    src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
                <div className="text">
                    <p className='app'>下载简书手机APP</p>
                    <p className='content'>随时随地发现和创作内容</p>
                </div>
            </DownloadWrapper>
        )
    }
}

export default Download;