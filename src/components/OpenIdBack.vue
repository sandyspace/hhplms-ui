<template>
  <div class="index-wrap">
    <h3>{{ openId }}</h3>
    <div class="error-msg">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      openId: null,
      errorMessage: null
    }
  },
  mounted: function () {
    this.openId = this.$route.query.openId
  },
  methods: {
    login () {
      const that = this
      this.errorMessage = ''
      this.$http.post('/api/auth/account/wechatLogin', {
        'openId': this.openId
      })
        .then(response => {
          window.localStorage[this.G.openIdKey] = this.openId
          window.localStorage[this.G.tokenKey] = response.data.token
          // 登录成功去个人中心
          that.$router.push({path: '/user'})
        })
        .catch(error => {
          if (error.response) {
            let errorCode = error.response.data.errorCode
            if (errorCode === '60') {
              // 没有绑定手机号
              that.$router.push({path: '/binding', params: { openId: that.openId }})
            } else if (errorCode === '12') {
              // openId不存在
              that.$router.push({path: '/404'})
            } else {
              that.errorMessage = error.response.data.message
            }
          }
        })
    }
  }
}
</script>
<style scoped>
</style>
