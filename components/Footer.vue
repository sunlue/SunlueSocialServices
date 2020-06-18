<template>
    <div class="footer">
      <div class="min_width">
        <div class="footer_left">
          <a href="javascript:;">首页</a>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">联系我们</a>
          <a href="javascript:;">会员中心</a>
          <a href="javascript:;">服务条款</a>
          <a href="javascript:;">意见反馈</a>
          <a href="javascript:;">友情链接</a>
          <a href="javascript:;">法律声明</a>
          <a href="javascript:;">站长统计</a>
          <p>
            Copyright © 涪城文旅公共服务平台 All Rights Reserved.Powered by
            <a target="_blank" href="http://www.sunlue.com">上略互动</a>
            <a target="_blank" href="http://beian.miit.gov.cn/">&nbsp;蜀ICP备20002010号-1  </a>
          </p>
        </div>
        <div class="footer_right">
          <a href="javascript:;"><span class="icon iconapp"></span> <span>移动端</span></a>
          <a href="javascript:;"><span class="icon iconweixin"></span> <span>微信</span></a>
          <a href="javascript:;"><span class="icon iconqq"></span> <span>在线客服</span></a>
          <a href="javascript:;"><span class="icon iconfenxiang"></span> <span>分享</span></a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less">
  .footer{
    padding: 32px 0px;
    font-size: 14px;
    height: 122px;
    color: #fff;
    background-color: #222;
    text-align: center;
    .footer_left{
      width:60%;
      float: left;
      margin-top: 10px;
      a{
        color: #f5f5f5;
        margin-right: 15px;
      }
      p{
        color: #b2b2b2;margin-bottom:0;
        a{color: #b2b2b2;}
      }
    }
    .footer_right{
      float: right;
      a{
        text-decoration:none;
        display: inline-block;
        text-align: center;
        margin-left: 25px;
        color: #cccccc;
        .icon{
          width: 45px;
          height: 45px;
          display: block;
          border-radius: 50%;
          margin: 0 auto;
          background-position: center center;
          background-repeat: no-repeat;
        }
        .iconapp{
          background-image:url(../assets/icon/app.png);
          &:hover{
            background-image:url(../assets/icon/app_cur.png);
          }
        }
        .iconweixin{
          background-image:url(../assets/icon/weixin.png);
          &:hover{
            background-image:url(../assets/icon/weixin_cur.png);
          }
        }
        .iconqq{
          background-image:url(../assets/icon/qq.png);
          &:hover{
            background-image:url(../assets/icon/qq_cur.png);
          }
        }
        .iconfenxiang{
          background-image:url(../assets/icon/fenxiang.png);
          &:hover{
            background-image:url(../assets/icon/fenxang_cur.png);
          }
        }
      }
    }
  }
</style>
