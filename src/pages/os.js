import React from "react"
import SEO from "../components/seo"

import { reveal as Menu } from 'react-burger-menu'
import '../components/flexbox.css'
import '../components/bm-burger-menu.css'
import Blurbkgd from"../components/blurbkgd"
import Bluebkgd from"../components/bluebkgd"
import P2home from"../components/p2home"
import Darkwood from"../components/darkwood"
import Footer from"../components/footer"


const OsPage = () => {
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
          <Blurbkgd id = "div1-howitworks" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 160, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `white`, fontSize: `2rem`,}}>
               正确打开方式
            </center>
            <div style = {{ color: `lightgrey`, fontSize: `1.2rem`,
              flexDirection: `row`, display: `flex`, justifyContent: `space-evenly`, 
              flexWrap: `wrap`,lineHeight:`1.6rem`,margin:8,}}>
                <div style={{marginRight:8,marginLeft:8,}}>口袋网盘与路由器成功连接</div>
                <div style={{marginRight:8,marginLeft:8,}}>使用官方APP玩转口袋网盘</div>
            </div>
            <img src = {require(`../images/p2/howitworks.png`)} alt="howitworks" 
              style = {{minHeight: 168, padding: `2rem`,marginBottom:56,marginTop:32,}}>
            </img>
            
            <div style={{ flexDirection: `row`, justifyContent:`flex-start`,display:`flex`,
                alignContent: `space-around`,alignItems:`strech`,flexWrap:`wrap`, 
                marginBottom: 56, marginLeft:24,}}> 
              
              <div style = {{ flexDirection: `row`, display: `flex`, margin:8,
              justifyContent: `flex-start`, minWidth: 380,maxHeight:26,}}>
                <img src = {require(`../images/p2/pdicon.png`)} alt="pdicon" 
                  style = {{maxWidth:24,maxHeight:24,marginLeft:23,marginRight:24,}}></img> 
                <div style={{color: `lightgrey`, fontSize: `1.1rem`,
                  marginLeft:16,marginRight:16,}}>
                  口袋网盘: 接通电源打开官方APP</div>
              </div>
              <div style = {{ flexDirection: `row`, display: `flex`, margin:8,
              justifyContent: `flex-start`, minWidth: 380,maxHeight:26,}}>
                <img src = {require(`../images/p2/wifi.png`)} alt="router" 
                  style = {{maxHeight:24,marginLeft:16,marginRight:16,}}></img> 
                <div style={{color: `lightgrey`, fontSize: `1.1rem`,
                  marginLeft:16,marginRight:16,}}>
                  路由器: 口袋网盘Wi-Fi连接路由器</div>
              </div>  
              <div style = {{ flexDirection: `row`, display: `flex`, margin:8,
              justifyContent: `flex-start`, minWidth: 380,maxHeight:26,}}>
                <img src = {require(`../images/p2/devices.png`)} alt="apps" 
                  style = {{maxHeight:20,marginLeft:16,marginRight:16,}}></img> 
                <div style={{color: `lightgrey`, fontSize: `1.1rem`,
                  marginLeft:16,marginRight:16,}}>
                  APP: 使用官网APP玩转口袋网盘</div>
              </div>  
              <div style = {{ flexDirection: `row`, display: `flex`, margin:8,
              justifyContent: `flex-start`, minWidth: 380,maxHeight:26,}}>
                <img src = {require(`../images/p2/clser.png`)} alt="cloud services" 
                  style = {{maxHeight:20,marginLeft:16,marginRight:15,}}></img> 
                <div style={{color: `lightgrey`, fontSize: `1.1rem`,
                 marginLeft:16,marginRight:16,}}>
                  云服务: 无需任何设置随时随地访问</div>
              </div> 
            </div>
          </Blurbkgd>
          
          <Bluebkgd id = "div3-haredware consitution" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 56, marginBottom: 24, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `white`, fontSize: `2rem`,}}>
              口袋网盘的构成
            </center>
            <center style = {{
               marginTop: 0, marginBottom: 56, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `lightgrey`, fontSize: `1.8rem`}}>
               ① 硬件核心部分
            </center>
           
          
          <div style={{ flexDirection: `row`, display:`flex`,
                flexWrap:`wrap`, alignItems:`center`,justifyContent:`space-around`,
                maxWidth:600,marginBottom:108,}}> 
            
            <div style = {{ flexDirection: `row`, display: `flex`, margin:16,
              justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
              minWidth: 240,maxHeight:32,}}>
                <img src = {require(`../images/p2/cpu2.png`)} alt="cpu icon" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}> CPU</div>
            </div>
            <div style = {{ flexDirection: `row`, display: `flex`, margin:16,
              justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
              minWidth: 240,maxHeight:32,}}>
                <img src = {require(`../images/p2/wifi.png`)} alt="wifi icon" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}> Wi-Fi</div>
              </div>    
              <div style = {{ flexDirection: `row`, display: `flex`, margin:16,
              justifyContent: `flex-start`,alignItems:`center`,
              minWidth: 240,maxHeight:32,}}>
                <img src = {require(`../images/p2/memory.png`)} alt="memory icon" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}> 内存</div>
              </div>   
              <div style = {{ flexDirection: `row`, display: `flex`, margin:16,
              justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
              minWidth: 240,maxHeight:32,}}>
                <img src = {require(`../images/p2/ble.png`)} alt="bluetooth icon" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}> 蓝牙</div>
              </div>
              <div style = {{ flexDirection: `row`, display: `flex`, margin:16,
              justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
              minWidth: 240,maxHeight:32,}}>
                <img src = {require(`../images/p2/ssd.png`)} alt="ssd icon" 
                  style = {{maxWidth:40,maxHeight:40,marginLeft:28,marginRight:28,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}> 固态存储</div>
              </div>
              <div style = {{ flexDirection: `row`, display: `flex`, margin:16,
              justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
              minWidth: 240,maxHeight:32,}}>
                <img src = {require(`../images/p2/ecc.png`)} alt="ecc icon" 
                  style = {{maxWidth:26,maxHeight:26,marginLeft:35,marginRight:34,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}> 加密芯片</div>
              </div>
          </div>  
          </Bluebkgd>
          <Blurbkgd id = "div4-server software" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 56, marginBottom: 56, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `lightgrey`, fontSize: `1.8rem`,}}>
               ② 服务器端软件
            </center>

            <div style={{ flexDirection: `row`, display:`flex`,
                flexWrap:`wrap`, alignItems:`center`,justifyContent:`space-around`,
                maxWidth:600,marginBottom:40,}}> 

              <div style = {{ flexDirection: `column`, display: `flex`, margin:16,
                justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
                minWidth: 128}}>
                <img src = {require(`../images/p2/linux.png`)} alt="linux icon" 
                  style = {{maxHeight:64}}></img> 
                <div style={{padding:8, color: `lightgrey`, fontSize: `0.8rem`,}}> 
                Linux Kernel</div>
              </div>
              <div style = {{ flexDirection: `column`, display: `flex`, margin:16,
                justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
                minWidth: 128}}>
                <img src = {require(`../images/p2/debian.png`)} alt="debian icon" 
                  style = {{maxHeight:64}}></img> 
                <div style={{padding:8, color: `lightgrey`, fontSize: `0.8rem`,}}> 
                Debian 10</div>
              </div>
              <div style = {{ flexDirection: `column`, display: `flex`, margin:16,
                justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
                minWidth: 128}}>
                <img src = {require(`../images/p2/btrfs2.png`)} alt="btrfs icon" 
                  style = {{maxHeight:64}}></img> 
                <div style={{padding:8, color: `lightgrey`, fontSize: `0.8rem`,}}> 
                Btrfs</div>
              </div>
            </div>
            <div style={{ color: `lightgrey`, font:`1rem`, lineHeight: `1.6rem`,
              marginBottom: 32, padding: `2rem`}}>
            <li>基于Linux Kern 5.3 | Debian 10 | Btrfs文件系统等作为口袋网盘的基础操作系统</li>
            <li>搭载钉南自研的虚拟文件系统(VFS,Virtual File System) 、内存树文件索引系统以及API等</li>
            </div>
          </Blurbkgd>
          <Bluebkgd id = "div5-app develop framework" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 56, marginBottom: 56, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `lightgrey`, fontSize: `1.8rem`,}}>
               ③ 手机 | 平板 | 电脑 APP
            </center>

            <div style={{ flexDirection: `row`, display:`flex`,
                flexWrap:`wrap`, alignItems:`center`,justifyContent:`space-between`,
                maxWidth:800,marginBottom:40,}}> 
              <div style = {{ flexDirection: `column`, display: `flex`, margin:16,
                justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
                minWidth: 128}}>
                <img src = {require(`../images/p2/flutter.png`)} alt="flutter icon" 
                  style = {{maxHeight:80}}></img> 
                <div style={{padding:8, color: `lightgrey`, fontSize: `0.8rem`,}}> 
                Flutter</div>
              </div>
              <div style = {{ flexDirection: `column`, display: `flex`, margin:16,
                justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
                minWidth: 128}}>
                <img src = {require(`../images/p2/electron.png`)} alt="electron icon" 
                  style = {{maxHeight:80}}></img> 
                <div style={{padding:8, color: `lightgrey`, fontSize: `0.8rem`,}}> 
                Electron</div>
              </div>
            </div>
            <div style={{ color: `lightgrey`, font:`1rem`, lineHeight: `1.6rem`,
              marginBottom: 32, padding: `2rem`}}>
              <li>基于Flutter与Electron跨平台框架开发全操作系统客户端</li>
              <li>支持Windows | Mac | Linux | Android | iOS 操作系统  </li>
            </div>



          </Bluebkgd>
          <Blurbkgd id = "div6-cloud services" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 56, marginBottom: 56, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `lightgrey`, fontSize: `1.8rem`,}}>
               ④ 云服务与私有传输协议
            </center>

            <div style={{ flexDirection: `row`, display:`flex`,
                flexWrap:`wrap`, alignItems:`center`,justifyContent:`space-between`,
                maxWidth:800,marginBottom:40,}}> 
              <div style = {{ flexDirection: `column`, display: `flex`, margin:16,
                justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
                minWidth: 128}}>
                <img src = {require(`../images/p2/aws.png`)} alt="aws icon" 
                  style = {{maxHeight:60, marginBottom: 10, marginTop:10,}}></img> 
                  <div style={{padding:8, color: `lightgrey`, fontSize: `0.8rem`,}}> 
                Amozon Web Service</div>
              </div>
              <div style = {{ flexDirection: `column`, display: `flex`, margin:16,
                justifyContent: `flex-start`,alginSelf:`center`,alignItems:`center`,
                minWidth: 128}}>
                <img src = {require(`../images/p2/tls.png`)} alt="TLS icon" 
                  style = {{maxHeight:80}}></img> 
                  <div style={{padding:8, color: `lightgrey`, fontSize: `0.8rem`,}}> 
                  Transport Layer Security</div>
              </div>
            </div>
            <div style={{ color: `lightgrey`, font:`1rem`, lineHeight: `1.6rem`,
              marginBottom: 32, padding: `2rem`}}>
              <li>云服务只中转不存储数据</li>
              <li>基于HTTPS对等的加密私有传输协议实现数据传输、身份认证等业务</li>
            </div>
          </Blurbkgd>
          
          <Darkwood id = "div2-consitution" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 56, marginBottom: 56, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `white`, fontSize: `2rem`,}}>
               四位一体
            </center>
            
            <div style = {{ flexDirection: `row-reverse`, display: `flex`, margin:16,
              justifyContent: `flex-start`, alignItems:`center`,minWidth: 380,maxHeight:32,}}>
                <img src = {require(`../images/p2/pdicon.png`)} alt="pdicon" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:37,marginRight:38,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}>
                  (硬件）口袋网盘 </div>
            </div>
            <div style = {{ flexDirection: `row-reverse`, display: `flex`, margin:16,
              justifyContent: `flex-start`, alignItems:`center`,minWidth: 380,maxHeight:32,}}>
                <img src = {require(`../images/p2/serversoft.png`)} alt="server software icon" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}>
                  (服务器端）硬件端软件</div>
            </div>
            <div style = {{ flexDirection: `row-reverse`, display: `flex`, margin:16,
              justifyContent: `flex-start`,alignItems:`center`, minWidth: 380,maxHeight:32,}}>
                <img src = {require(`../images/p2/devices.png`)} alt="app" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}>
                  手机 | 平板 | 电脑 APP</div>
            </div>
            <div style = {{ flexDirection: `row-reverse`, display: `flex`, margin:16,
              justifyContent: `flex-start`, alignItems:`center`,minWidth: 380,maxHeight:32,}}>
                <img src = {require(`../images/p2/clser.png`)} alt="cloud services" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16}}>
                  云服务与私有传输协议
                  
                  </div>
                  

            </div>  
            <div class="line3" style={{marginRight:96, marginTop:16, marginBottom:16,}}/>
            
            <div style = {{ flexDirection: `row-reverse`, display: `flex`, margin:8,
              marginBottom: 96, justifyContent: `flex-start`, alignItems:`center`,minWidth: 380,}}>
                <img src = {require(`../images/logo.png`)} alt="logo" 
                  style = {{maxWidth:32,maxHeight:32,marginLeft:32,marginRight:32,}}></img> 
                <div style={{color: `white`, fontSize: `1.4rem`,
                  marginLeft:16,marginRight:16,}}>
                  口袋网盘</div>
            </div>  
         
            <center style = {{
               marginTop: 56, marginBottom: 56, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `white`, fontSize: `2rem`,}}>
               超凡特性
            </center>
            
            <div style={{ flexDirection: `row`, justifyContent:`space-around`,display:`flex`,
                alignContent: `space-evenly`,alignItems:`strech`,flexWrap:`wrap`, 
                maxWidth:800,marginBottom:108,}}> 
              <div style = {{
                background: '#13c7af',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 320, borderRadius: 6,margin:16,
              }}>
                <div class="flex-intro2" style={{padding:16}}>
                 <img src = {require(`../images/p2/plugin.png`)} alt="plugin icon" 
                  style = {{maxHeight:24,marginRight:16}}></img> 
                  <div>即插即用 免UPS 
                        <br></br> <div style = {{
                          marginTop: 16, fontSize: `1rem`,fontWeight: `lighter`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          在传输写入过程中如果断电，钉南自研的VFS也可会在口袋网盘在下次启动时重建
                          数据索引以保证文件系统可用
                        </div>
                  </div>
                </div>
              </div>

              <div style = {{
                background: '#f57a62',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 320, borderRadius: 6,margin:16,
              }}>
                <div class="flex-intro2" style={{padding:16}}>
                 <img src = {require(`../images/p2/index.png`)} alt="index icon" 
                  style = {{maxHeight:24,marginRight:16}}></img> 
                  <div> 内存索引 毫秒级搜索
                        <br></br> <div style = {{
                          marginTop: 16, fontSize: `1rem`,fontWeight: `lighter`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          在内存中索引常用类型文件，例如：Word|Excel|PPT|视频|音乐|图片等。搬动或修改文件夹也能
                          毫秒级搜索
                        </div>
                  </div>
                </div>
              </div>

              <div style = {{
                background: '#3b9ac6',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 320, borderRadius: 6,margin:16,
              }}>
                <div class="flex-intro2" style={{padding:16}}>
                 <img src = {require(`../images/p2/compare.png`)} alt="hash icon" 
                  style = {{maxHeight:24,marginRight:16}}></img> 
                  <div> 双重校验 完整可靠
                        <br></br> <div style = {{
                          marginTop: 16, fontSize: `1rem`,fontWeight: `lighter`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          文件上传 | 下载 | 自动备份 等传输过程均有HASH校验确保传输文件的一致性。
                        </div>
                  </div>
                </div>
              </div>


              <div style = {{
                background: '#bd8a61',boxShadow: '2px 2px 8px black',opacity: `67%`,
                height: 200,width: 320, borderRadius: 6,margin:16,
              }}>
                <div class="flex-intro2" style={{padding:16}}>
                 <img src = {require(`../images/p2/metadata.png`)} alt="metadata icon" 
                  style = {{maxHeight:24,marginRight:16}}></img> 
                  <div> 保存原图 分类方便
                        <br></br> <div style = {{
                          marginTop: 16, fontSize: `1rem`,fontWeight: `lighter`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          保存媒体类型文件原图与METADATA信息，并按时间轴排序；iPhone手机向iCloud请求原图后备份
                        </div>
                  </div>
                </div>
              </div>
            </div>
            </Darkwood>
          
          <P2home id = "div2-consitution" style={{
            verticalAlign: `0 auto`, maxHeight: 1280, 
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          }}>
            <center style = {{
               marginTop: 400, marginBottom: 800, height: 72, minWidth: 300, 
               padding: `1.45rem 0.1rem`, color: `white`, fontSize: `4rem`,
               lineHeight: `6rem`}}>
               口袋网盘 存储新体验
            </center>
          </P2home>
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
                <br></br>上海钉南智能科技有限公司 版权所有 </div> 
              
                <img img src = {require(`../images/logo.png`)} alt="logo" 
                style = {{maxWidth: 32,}}></img> 
              </div>    
          </Footer>
        </main>
    </div>
  </div>
  )
}

export default OsPage