<template>
  <div class="not-found">
    <i class="weui-icon-warn weui-icon_msg-primary"></i>
    <p>页面错误，请稍后再试~</p>
    <div class="btn">
      <router-link to="/user">返回</router-link>
    </div>
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
<style lang="less" scoped>
.not-found{
  padding-top: 20%;
  i{
    color: #e64340;
  }
  p{
    color: #888;
    padding-top: 8px;
    margin: 0;
  }
  .btn{
    a{
      text-decoration: none;
      color: #fff;
      background: #09bb07;
      display: inline-block;
      border-radius: 4px;
      margin-top: 100px;
      padding: 10px 24px;
      width: 184px;
    }
  }
}
.weui-icon-warn {
    -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E);
    mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E);
}
.weui-icon_msg-primary {
    width: 100px!important;
    height: 100px!important;
}
[class^="weui-icon-"], [class*=" weui-icon-"] {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    -webkit-mask-position: 50% 50%;
    mask-position: 50% 50%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    background-color: currentColor;
}

</style>
