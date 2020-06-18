<template>
  <nav class="navbar">
    <a class="navbar-brand" href="#">
      <img src="~/assets/icon/logoRed.png" width="294" height="54" />
    </a>
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">首页</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">活动</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">场馆</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">名人堂</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">志愿者</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">体验</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">云图</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">涪城荟</a>
        </li>
      </ul>
      <div class="login-btn">
        <a href="/login">
          登录 / 注册
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped lang="less">
  .navbar{
    height:106px;width:100%;
    padding:0 35px;display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    border-bottom:solid 1px #ccc;
  }
  .navbar-brand{display: inline-block;}
  .login-btn{
    width:135px;
    display: inline-block;
    a{
      display: block;
      font-size: 16px;
      color: #fff;
      line-height: 44px;
      text-align: center;
      background-color: #cc0000;
      border-radius: 4px;
    }
  }
  .navbar-collapse{
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;

  }

    .navbar-nav{
      flex-direction: row;
      display: flex;

      max-width:845px;
      width: 90%;
      margin-left:10%;
      justify-content: space-around;
      .nav-item{
        /*margin:0 16px;*/
      }
      .nav-link{
        color: #000000;
        font-size: 18px;
        padding-right: 0.8rem;
        padding-left: 0.8rem;
        position: relative;
        height: 50px;
        line-height: 50px;
        display: block;
      }
      .active > .nav-link{
        &:after{
          content: '';
          position: absolute;
          display: block;
          width: 100%;
          height: 3px;
          bottom: 0px;
          left: 0;
          background-color: #cc0000;
          -webkit-transition: .4s;
          transition: .4s;

        }
      }
    }



</style>
