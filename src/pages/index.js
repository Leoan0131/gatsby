/*
import { Link, withAssetPrefix } from "gatsby"
import Layout from "../components/layout"

*/

import React from "react"
import SEO from "../components/seo"

import { reveal as Menu } from 'react-burger-menu'
import '../components/flexbox.css'
import '../components/bm-burger-menu.css'

import Homebkgd from"../components/homebkgd"
import Blurbkgd from"../components/blurbkgd"
import Bluebkgd from"../components/bluebkgd"
import Darkwood from"../components/darkwood"
import Footer from"../components/footer"
  

  
  const IndexPage = () => {
  return (  
  <div>
    <SEO title="口袋网盘" />
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
        <Homebkgd id="div1" style = {{padding: `1.45rem 1.0875rem`,}}>
           <div style = {{
            marginTop: 232,marginBottom: 64,height: 400,
            minWidth: 320,padding: `1.45rem 1.0875rem`,
          }}>
            <div class = "flex-container" style = {{ 
            margin: 16, maxWith: 600,color: 'white',
            }}>
              <div>数据存在家里</div>
              <div>出门在外也能调用</div>
            </div>
            <p style={{ color:`lightgrey`,fontSize:`1.6rem`,marginTop: 32, marginLeft:16
             }}> 口袋网盘NAS新体验</p>
              
            <button style = {{
              background: '#005661', boxShadow: '2px 2px 8px black', backgroundPosition: 'center',
              height: 48,borderRadius: 6,marginTop: 56,marginLeft:16,border:`none`}}>
              <a href="https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-22137702668.
                    10.ff2d7fc8jE03Xu&id=601704964279" style={{
                  textDecorationLine: `none`,color:`white`, 
                  }}>  点击购买 
              </a>
            </button>
          </div>
        </Homebkgd>
        <Blurbkgd id = "div2" style = {{
         verticalAlign: `0 auto`,
         maxHeight: 1280,
         padding: `1.45rem 1.0875rem`,
       }}>
          <center style = {{marginTop: 56, marginBottom: 72, minWidth: 320, 
          padding: `1.45rem 1.0875rem`, color: `white`,fontSize: `2rem`,
          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
          }}>多端并用 云盘体验</center>
           <center> <img src = {require (`../images/appic.png`)} alt="口袋网盘全客户端体验"
           style = {{
              maxHeight: 400, minWidth: 320,padding: `1.45rem 1.0875rem`,
          }}></img></center>
          <center> <img src = {require (`../images/apcli.png`)} alt="全客户端的口袋网盘"style = {{
              marginBottom: 56,maxHeight: 120,minWidth: 320,
              padding: `1.45rem 1.0875rem`,}}>
          </img></center>
    </Blurbkgd>
        <Bluebkgd id = "div3" style = {{overflow:`auto`, padding: `1.45rem 1.0875rem`,}}> 
          <div style={{height:32}}></div>
          <center class = "v-align" style={{minWidth: 320, color:`white`,
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif` }}
          >远程访问 数据随身带</center>
          
          <div class = "flex-box">
            <img src = {require(`../images/remote.png`)} alt="fly icon" style = {{
              maxWidth: 48, marginRight: 16,}}></img>
            <div>无需设置，自带远程访问 
              <br></br> 远程访问与局域网自动切换
            </div>
          </div>
           
           <center> <img src = {require (`../images/wldmap.png`)} alt="口袋网盘可以随时随地访问"
            style = {{
              marginTop: 56,
              marginBottom: 56,
              maxHeight: 480,
              minWidth: 320,
              padding: `1.15rem 1.0875rem`,
              //background: '#4f83cc',
              }}>
            </img></center>
    </Bluebkgd>
        <Darkwood id = "div4-feature1" style = {{
         verticalAlign: `0 auto`,
         maxHeight: 1280,
         //maxWidth: 1920,
         padding: `1.45rem 1.0875rem`,
         background: '#0277bd',
       }}>
          <center><div style = {{
            marginTop: 56,
            //marginBottom: 56,
            height: 72,
            minWidth: 320,
            padding: `1.45rem 0.1rem`,
            //background: '#4f83cc',
            color: `white`,
            fontSize: `2rem`,
            fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
            }}>
            功能便捷 安密环保
          </div></center>
            <div class = "flex-feature" style = {{ 
                margin: `2rem `,
                color: 'white',
                marginRight: `1rem`,
                minWidth: 320,
                //background: '#b4a446',
            }}>
              <div>
                <center> <img src = {require (`../images/iphone.png`)} alt="口袋网盘手机端展示" 
                style = {{
                  marginTop: 16,
                  maxHeight: 480,
                  padding: `1.15rem 1.0875rem`,
                  }}>
                  </img></center>
              </div>
                <div class = "flex-featureColumn">
                <div style = {{
                  height: 72,
                  minWidth: 320,
                  padding: `1.2rem 0rem`,
                  marginLeft: `0.8rem`,
                  //background: '#4f83cc',
                  color: `white`,
                  fontSize: `1.6rem`,
                  fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                }}>
                  功能便捷
                </div>
                  <div class = "line" ></div>

                  <div class = "flex-intro">
                    <img src = {require(`../images/autobackup.png`)} alt="口袋网盘自动备份功能" 
                    style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>自动备份 
                        <br></br> <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          手机相簿自动备份，PC文件夹自动备份
                        </div>
                      </div>
                  </div>
                  <div class = "flex-intro">
                    <img src = {require(`../images/search.png`)} alt="口袋网盘全盘搜索" 
                    style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>全盘搜索
                      <br></br> 
                        <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          支持全盘文件名、文件类型搜索
                          <br></br> 搬动文件夹仍旧毫秒级搜索
                        </div>
                      
                      </div>
                  </div>
                  <div class = "flex-intro">
                    <img src = {require(`../images/upload.png`)} alt="口袋网盘多选上传" 
                    style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>多选上传
                      <br></br> <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          手机端也可多选文件上传
                        </div>
                      </div>
                  </div>
                  <div class = "flex-intro">
                    <img src = {require(`../images/wechat.png`)} alt="口袋网盘微信互传功能" 
                    style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>微信互传
                      <br></br> <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          可以使用微信、QQ等第三方应用互传数据
                        </div>
                      </div>
                  </div>                                 
                 </div>
                        
              </div> 
             
     </Darkwood>
        <Darkwood id = "div5-feature2" style = {{
         verticalAlign: `0 auto`,
         maxHeight: 1280,
         //maxWidth: 1920,
         padding: `1.45rem 1.0875rem`,
         background: '#0277bd',
       }}>
            <div class = "flex-feature2" style = {{ 
                margin: `2rem `,
                minWidth: 320,
                color: 'white',
                marginRight: `1rem`,
                //background: '#b4a446',
            }}>
              <div>
                <center> <img src = {require (`../images/pd.png`)} alt="安密环保的口袋网盘" 
                style = {{
                  marginTop: 16,
                  marginLeft: 48,
                  maxHeight: 480,
                  padding: `1.15rem 1.0875rem`,
                  }}>
                  </img></center>
              </div>
                <div class = "flex-featureColumn">
                <div style = {{
                  height: 72,
                  minWidth: 320,
                  padding: `1.2rem 0rem`,
                  marginLeft: `0.8rem`,
                  //background: '#4f83cc',
                  color: `white`,
                  fontSize: `1.6rem`,
                  fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                }}>
                  安密环保
                </div>
                  <div class = "line" ></div>

                  <div class = "flex-intro">
                    <img src = {require(`../images/security.png`)} alt="口袋网盘安全加密" style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>安全加密
                        <br></br> <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          内置硬件加密身份认证芯片
                          <br></br> 使用私有加密安全协议传输
                        </div>
                      </div>
                  </div>
                  <div class = "flex-intro">
                    <img src = {require(`../images/performance.png`)} alt="口袋网盘性能强大" style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>性能强大
                      <br></br> 
                        <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          内置大容量固态硬盘
                          <br></br> 4核cortex-A53+1GB RAM
                        </div>
                      
                      </div>
                  </div>
                  <div class = "flex-intro">
                    <img src = {require(`../images/wireless.png`)} alt="口袋网盘无线链接" style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>无线链接
                      <br></br> <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          高速Wi-Fi省去布线烦恼
                        </div>
                      </div>
                  </div>
                  <div class = "flex-intro">
                    <img src = {require(`../images/eco.png`)} alt="口袋网盘环保达人" style = {{
                      maxWidth: 48,
                      marginRight: 16,
                    }}></img>
                      <div>环保达人
                      <br></br> <div style = {{
                          marginTop: 8,
                          fontSize: `1rem`,
                          opacity: `54%`,
                          fontFamily:`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
                        }}>
                          安静无声、极低功耗（5W以下）
                        </div>
                      </div>
                  </div>                                 
                 </div>
                        
              </div> 
             
     </Darkwood>        
        <Footer id = "div6-footer" style ={{
          verticalAlign: `0 auto`, maxHeight: 600, padding: `1.45rem 1.0875rem`,}}>
            
            <div id="follow us" class="flex-footer" style = {{
              paddingTop:32,maxWidth: 600, padding: `1rem`, 
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

export default IndexPage
