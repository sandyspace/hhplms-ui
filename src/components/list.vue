<template>
  <div>
    <div>msg: {{msg}}</div>
    <button @click='list'>点击</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  methods: {
    list: function () {
      var _this = this
      this.$http.get('/rs/api/list')
        .then(function (rsp) {
          _this.msg = rsp.data.data[0].name
        })
    }
  }
}
</script>
