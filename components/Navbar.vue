<template>
  <div class="navbar">
    <a class="navbar-brand" href="#">
      <img src="~/assets/common/icon/logoRed.png" width="294" height="54" />
    </a>

    <Menu mode="horizontal" theme="light" active-name="1">
      <MenuItem v-for="(item,index) in menulist" :name="index+1">
        {{item.text}}
      </MenuItem>
    </Menu>

    <div class="login-btn">
      <a href="/login">
        登录 / 注册
      </a>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        theme1: 'light',
        menulist:[{name:'home',text:'首页'},{name:'active',text:'活动'},{name:'venue',text:'场馆'}],
      }
    }
  }
</script>
<style scoped lang="less">
  .navbar{
    height:106px;width:100%;
    padding:0 35px;display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom:solid 1px #ccc;
    .ivu-menu{
      margin-left:-35%;
      height:105px;
      line-height: 105px;

      li{
        font-size: 18px;
      }
      &:after{display: none}
    }
  }
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
</style>
