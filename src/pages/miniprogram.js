import React from "react"
import SEO from "../components/seo"

import { reveal as Menu } from 'react-burger-menu'
import '../components/flexbox.css'
import '../components/bm-burger-menu.css'
import Footer from"../components/footer"


const VideoPage = () => {
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
        <center><img src={require (`../images/miniprogram.jpg`)} alt="wechat miniprogramm icon" 
        style={{
          maxWidth:240, marginTop:120,marginBottom:48}}
        /> 
        <p Style={{color:`black`,fontsize:32}}> 
        更多口袋网盘详情,请扫码关注微信小程序 </p>
        </center>
          
        </main>
    </div>
  </div>
  )
}

export default VideoPage