import React from "react"
import SEO from "../components/seo"

import { reveal as Menu } from 'react-burger-menu'
import '../components/flexbox.css'
import '../components/bm-burger-menu.css'
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
              <a href="/video" class="bm-item" tabIndex="0" style={{
                display:`block`,textDecorationLine: `none`,}}>
                <img src={require (`../images/video.png`)} alt="Video icon"width = {18}/>
                <span>视频集锦</span>
              </a>
            </nav>
          </div>
        </Menu>  
        <main id="page-wrap">     
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
                <a href="/video" style={{textDecorationLine: `none`,color:`white`,fontSize:`1.2rem`,
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
                沪ICP备19016098
                <br></br>上海钉南智能科技有限公司 版权所有 </div> 
              
                <img img src = {require(`../images/logo.png`)} alt="logo" 
                style = {{maxWidth: 32,}}></img> 
              </div>    
          </Footer>
          <p>this page is for Clients-Downloads</p>
        </main>
    </div>
  </div>
  )
}

export default DownloadPage