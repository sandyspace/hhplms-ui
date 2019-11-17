<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    <router-link to="/count">Go to Count</router-link>
    <router-link to="/list">Go to List</router-link>
    <router-link to="/swiper">Go to swiper</router-link>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body {
  height: 100%;
}
body {
  height: 100%;
  background: #eee;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  height: 100%;
  margin-top: 0px;
}
#app > div{
  height: 100%;
}
.container-arrow{
  position: absolute;
  bottom: 40px;
  text-align: center;
  left: 45%;
  width: 27px;
  height: 15px;
  z-index: 1;
}
.container-arrow > img{
  width: 100%;
  height: 100%;
}
.verification{
  position: relative;
}
.verification > div{
  display: inline-block;
  position: absolute;
  right: 0;
  top: 10px;
  padding-right: 45px;
  font-size: 14px;
  border-left: 1px #ffffff9e solid;
  padding-left: 15px;
  height: 26px;
  line-height: 26px;
}
</style>
