<template>
  <div class="index-wrap">
    <h3>页面索引</h3>
    <div><router-link to="/hhwy">海桦物业</router-link></div>
    <div><router-link to="/1818">1818中心</router-link></div>
    <div><router-link to="/cbgj">船舶国际广场</router-link></div>
    <div><router-link to="/xmgk">项目概况</router-link></div>
    <div><router-link to="/contactus">联系我们</router-link></div>
    <div><router-link to="/feedback">问题反馈</router-link></div>
    <div><router-link to="/activitys">商户资讯</router-link></div>
    <div><router-link to="/register">用户注册</router-link></div>
    <div><router-link to="/login">登录</router-link></div>
    <div><router-link to="/changePassword">修改密码</router-link></div>
    <div><router-link to="/user">用户中心</router-link></div>
    <div><router-link to="/joinCompany">加入企业</router-link></div>
    <div><router-link to="/uploadCompanyInfo">上传企业信息</router-link></div>
    <div><router-link to="/binding">绑定手机号</router-link></div>
    <div><router-link to="/NotFound">404</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  mounted: function () {},
  methods: {}
}
</script>
<style scoped>
.index-wrap h3{
  margin: 0;
  padding: 30px 0;
}
.index-wrap > div{
  margin-bottom: 20px;
  display: inline-block;
  background: #7eb5db;
  width: 85%;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
}
.index-wrap > div a{
  color: #fff;
  text-decoration:none;
}
</style>
