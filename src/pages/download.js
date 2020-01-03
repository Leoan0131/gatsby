import React from "react"
import SEO from "../components/seo"

import { reveal as Menu } from 'react-burger-menu'
import '../components/flexbox.css'
import '../components/bm-burger-menu.css'
import Darkwood from"../components/darkwood"
import Footer from"../components/footer"


const DownloadPage = () => {
  return (  
  <div>
    <SEO title="口袋网盘"></SEO>
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } 
          width = {256} right>
          <div class = "bm-menu" style ={{ height: `100%`, boxSizing: `border-box`,
            overflow: `auto`,outline: `none`,}}>
            <nav class ="bm-item-list" style={{height:`100%`,}}>
              <a href="/" class="bm-item" tabIndex="0" style={{
                display:`block`,textDecorationLine: `none`,marginTop: 32,}}>
                <img src={require (`../images/home.png`)} alt="Home icon" width = {18}></img>
                <span>首页</span>
              </a>
              <a href="/os" class="bm-item" tabIndex="0" style={{
                display:`block`,textDecorationLine: `none`,}}>
                <img src={require (`../images/os.png`)} alt="OS icon" width = {18}/>
                <span>软件介绍</span>
              </a>
              <a href="/download" class="bm-item" tabIndex="0" style={{
                display:`block`,textDecorationLine: `none`,}}>
                <img src={require (`../images/download.png`)} alt="Download icon" width = {18}/>
                <span>客户端下载</span>
              </a>
              <a href="https://space.bilibili.com/437917953" class="bm-item" tabIndex="0" style={{
                display:`block`,textDecorationLine: `none`,}}>
                <img src={require (`../images/video.png`)} alt="Video icon"width = {18}/>
                <span>视频集锦</span>
              </a>
            </nav>
          </div>
        </Menu>  
        <main id="page-wrap">    
        <Darkwood id = "div2-consitution" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 120, marginBottom: 56, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `white`, fontSize: `2rem`,}}>
               客户端下载
            </center>
            <div style={{ flexDirection: `row`, justifyContent:`space-around`,display:`flex`,
                alignContent: `space-evenly`,alignItems:`strech`,flexWrap:`wrap`, 
                maxWidth:800,marginBottom:108,}}> 
              <div style = {{
                background: 'lightgrey',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 336, borderRadius: 6,margin:16,
              }}>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/win.png`)} alt="windows icon" 
                    style = {{maxHeight:48,marginTop:16, marginLeft:16,}}></img> 
                  <div style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:16, marginLeft:16}}>Windows电脑</div>
                </div>
                <div style={{opacity:`100%`,color:`black`,fontSize:`1.1rem`,
                   marginTop:8, marginLeft:80}}>支持Windows 7及以上版本</div>
                <div style={{opacity:`100%`,color:`grey`,fontSize:`0.8rem`,
                   marginTop:8, marginLeft:80}}>更新日期: 2019-11-08</div>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/dld.png`)} alt="download icon" 
                    style = {{maxHeight:36,marginTop:16, marginLeft:22,}}></img> 
                  <a href="http://www.aidingnan.com/files/KouDaiWangPan-1.0.7-x64.exe"download
                  style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:24, marginLeft:22}} >版本: 1.0.7</a>
                </div>
              </div>
              <div style = {{
                background: 'lightgrey',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 336, borderRadius: 6,margin:16,
              }}>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/mac.png`)} alt="mac icon" 
                    style = {{maxHeight:48,marginTop:16, marginLeft:16,}}></img> 
                  <a 
                  style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:16, marginLeft:16}}>Mac电脑</a>
                </div>
                <div style={{opacity:`100%`,color:`black`,fontSize:`1.1rem`,
                   marginTop:8, marginLeft:80}}>支持Mac 10.10及以上版本</div>
                <div style={{opacity:`100%`,color:`grey`,fontSize:`0.8rem`,
                   marginTop:8, marginLeft:80}}>更新日期: 2019-11-08</div>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/dld.png`)} alt="download icon" 
                    style = {{maxHeight:36,marginTop:16, marginLeft:22,}}></img> 
                  <a href="http://www.aidingnan.com/files/KouDaiWangPan-1.0.7.dmg" 
                  style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:24, marginLeft:22}}>版本: 1.0.7</a>
                </div>
              </div>
              <div style = {{
                background: 'lightgrey',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 336, borderRadius: 6,margin:16,
              }}>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/android.png`)} alt="android icon" 
                    style = {{maxHeight:48,marginTop:16, marginLeft:16,}}></img> 
                  <div style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:16, marginLeft:16}}>安卓手机</div>
                </div>
                <div style={{opacity:`100%`,color:`black`,fontSize:`1.1rem`,
                   marginTop:8, marginLeft:80}}>支持Android 4.4及以上版本</div>
                <div style={{opacity:`100%`,color:`grey`,fontSize:`0.8rem`,
                   marginTop:8, marginLeft:80}}>更新日期: 2019-11-08</div>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/dld.png`)} alt="download icon" 
                    style = {{maxHeight:36,marginTop:16, marginLeft:22,}}></img> 
                  <a href="http://www.aidingnan.com/files/KouDaiWangPan-1.8.8.apk" 
                   style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:24, marginLeft:22}}>版本: 1.8.8</a>
                </div>
              </div>
              <div style = {{
                background: 'lightgrey',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 336, borderRadius: 6,margin:16,
              }}>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/ios.png`)} alt="iPhone icon" 
                    style = {{maxHeight:48,marginTop:16, marginLeft:16,}}></img> 
                  <div style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:16, marginLeft:16}}>苹果手机</div>
                </div>
                <div style={{opacity:`100%`,color:`black`,fontSize:`1.1rem`,
                   marginTop:8, marginLeft:80}}>支持iOS 8及以上版本</div>
                <div style={{opacity:`100%`,color:`grey`,fontSize:`0.8rem`,
                   marginTop:8, marginLeft:80}}>更新日期: 2019-11-08</div>
                <div style={{ flexDirection:`row`, display:`flex`,
                  justifyContent:`flex-start`,alignItems:`center`}}>  
                  <img src = {require(`../images/p3/dld.png`)} alt="download icon" 
                    style = {{maxHeight:36,marginTop:16, marginLeft:22,}}></img> 
                  <a href="https://apps.apple.com/cn/app/口袋网盘/id1465080320" 
                   style={{opacity:`87%`,color:`black`,fontSize:`1.5rem`,
                   marginTop:24, marginLeft:22}}>版本: 1.8.8</a>
                </div>
              </div>             
            </div>
    </Darkwood>
        <Footer id = "div6-footer" style ={{
            verticalAlign: `0 auto`, maxHeight: 600, padding: `1.45rem 1.0875rem`,}}>
              
              <div id="follow us" class="flex-footer" style = {{
                marginTop:32,maxWidth: 600, padding: `1rem`, 
                color: `white`,fontSize: `1.35rem`,fontFamily:`-apple-system, BlinkMacSystemFont, 
                Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, 
                sans-serif`}}>
                了解更多
                <a href="/miniprogram" style={{marginLeft:24,}}>
                <span class="icon icon-wechat"></span>
                </a>
                
                <a href="https://weibo.com/7188458904" style={{marginLeft:24,}}>
                <span class="icon icon-weibo"></span>
                </a>
                
                <a href="https://space.bilibili.com/437917953" style={{marginLeft:24,}}> 
                <span class="icon icon-bili"></span>
                </a> 
              </div>
              
              <div class="line2"/>
            
              <div id="footermenu"class="flex-footer" style = {{
                marginTop: 8, maxWidth: 600, padding: `1rem`,
                color: `white`,fontFamily:`-apple-system, BlinkMacSystemFont, 
                Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, 
                sans-serif`}}>
                <a href="/download" style={{textDecorationLine: `none`,color:`white`,fontSize:`1.2rem`,
                marginRight: 16, }}>客户端下载</a> 
                <div> | </div>
                <a href="/os" style={{textDecorationLine: `none`,color:`white`,fontSize:`1.2rem`,
                marginLeft: 16,marginRight: 16,}}>软件介绍</a> 
                <div> | </div>
                <a href="https://space.bilibili.com/437917953" style={{textDecorationLine: `none`,color:`white`,fontSize:`1.2rem`,
                marginLeft: 16,}}>视频集锦</a> 
              </div>  

              <div id="footer"class="flex-footer" style = {{
                maxWidth: 1920, padding: `1rem`, marginTop: 32, marginBottom:0,
                justifyContent: `space-between`,
                color: `white`,fontSize: `1.5rem`,fontFamily:`-apple-system, BlinkMacSystemFont, 
                Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, 
                sans-serif`}}>
                <div style={{color:`white`,fontSize:`0.7rem`,
                }}>©Copyright 2019-2020 Shanghai DingNan IntelliTech Co.,Ltd. All Rights Reserved. 
                <a href="http://www.beian.miit.gov.cn" style={{color:`white`}}> 
               沪ICP备19016098 </a> 
                <br></br>Tel:173-1656-0021 上海钉南智能科技有限公司 版权所有 </div> 
              
                <img img src = {require(`../images/logo.png`)} alt="logo" 
                style = {{maxWidth: 32,}}></img> 
              </div>    
          </Footer>
        </main>
    </div>
  </div>
  )
}

export default DownloadPage