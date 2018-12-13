<template>
  <div class="activitys-wrap">
    <div v-if="currentActivity == null" class="section hdxq-list">
      <div class="wenzi2">
        <a v-for="(activity, index) in activitys" class="containerBox" :key="index" @click="showDetail(index)">
          <div class="leftBox">
            <h3>{{activity.title}}</h3>
            <p>{{activity.content}}</p>
            <span>{{activity.companyName}}</span>
            <span>
              <img src="static/images/time.png">{{activity.formatDate}}</span>
          </div>
          <div class="rightBox">
            <img :src="activity.fullImageUrl" alt="" width="100%">
          </div>
        </a>
      </div>
    </div>
    <!-- 活动详情 -->
    <div v-else class="section hdxq-box">
      <div class="fh_list" @click="backToList">返回</div>
      <div class="activity-content">
        <div class="title">{{currentActivity.title}}</div>
          <div class="information-box">
            <div class="qy-box">{{currentActivity.companyName}}</div>
            <div class="sj-box">
              <img src="static/images/time.png">{{currentActivity.formatDate}}</div>
          </div>
          <img :src="currentActivity.fullImageUrl" alt="" style="width: 90%;margin: 20px auto 0;display: block;">
          <p class="containerCon">{{currentActivity.content}}</p>
          <div class="dh-box">
            <span>联系方式:</span>{{currentActivity.companyContactPhone}}</div>
          <div class="footer" style="bottom: -8px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
let moment = require("moment");

export default {
  name: 'ActivityList',
  data () {
    return {
      activitys: [],
      currentActivity: null
    }
  },
  mounted: function () {
    this.$http.get('/api/pm/preferentialMsgs/latest', {})
      .then(response => {
        console.log(response)
        var activitys = response.data.content;
        if(activitys != null && activitys.length > 0){
          for(let i=0; i<activitys.length; i++){
            var activity = activitys[i]
            activity.formatDate = moment(new Date(activity.createdTime)).format('YYYY-MM-DD')
            activity.fullImageUrl = this.G.getImageURL(activity.imgUrl)
          }
          this.activitys = activitys
        }else{
          this.activitys = []
        }
      })
      .catch(error => {
        if(!!error.response){
          console.log(error.response)
          this.G.validateTokenExpired(this, error.response.data)
        }
      })
  },
  methods: {
    backToList(){
      this.currentActivity = null
    },
    showDetail(index){
      this.currentActivity = this.activitys[index]
      console.log(this.currentActivity)
    }
  }
}
</script>
<style lang="less" scoped>
.activitys-wrap{
  height: 100%;
  background: url(/static/images/lxwm-bg.png) no-repeat;
  background-size: 100% 100%;

  .hdxq-list {
    height:100%;
  }
  .hdxq-list .title {
    font-size:0.5rem;
    margin-top:2.5rem;
    text-align:center;
    font-weight:bold;
  }
  .hdxq-list .maioshu {
    height:0.5rem;
    text-align:center;
  }
  .hdxq-list .maioshu span {
    font-size:0.01rem;
    color:rgba(0,0,0,0.63);
  }
  .hdxq-list .containerCon {
    font-size:0.25rem;
    padding:0 0.7rem;
  }
  .hdxq-list .containerBox {
    overflow:hidden;
    box-sizing:border-box;
    margin:0 6px;
    margin-bottom:0px;
    display:block;
    padding-bottom:10px;
    padding:16px 6px;
    background:#fff;
    border-bottom:1px #f0f0f0 solid;
  }
  .hdxq-list .containerBox:nth-last-of-type(1) {
    border:none;
  }
  .hdxq-list .containerBox .leftBox,.containerBox .rightBox {
    color:#fff;
    font-size:0.5rem;
  }
  .hdxq-list .containerBox .leftBox {
    width:55%;
  }
  .containerBox .rightBox {
    width:45%;
  }
  .hdxq-list .containerBox .leftBox {
    float:right;
  }
  .hdxq-list .containerBox .leftBox h3,.hdxq-list .containerBox .leftBox p,.hdxq-list .containerBox .leftBox span {
    margin-left:15px;
  }
  .hdxq-list .leftBox h3 {
    font-size:15px;
    margin:0;
    color:#6764a7;
    overflow:hidden;
    height:20px;
  }
  .hdxq-list .leftBox p {
    margin:0;
    font-size:12px;
    margin-top:15px;
    color:#666;
    height:34px;
    overflow:hidden;
  }
  .hdxq-list .leftBox span {
    color:#999;
    display:inline-block;
    margin-top:19px;
    font-size:12px;
  }
  .hdxq-list .leftBox span:nth-of-type(1) {
    border:1px #6764a7 solid;
    border-radius:3px;
    color:#6764a7;
    padding:2px 12px;
    margin-top:17px;
    float:right;
  }
  .hdxq-list .leftBox span img {
    width:14px;
    padding-right:5px;
    position:relative;
    top:2px;
  }
  .tu1 {
    transform:none;
  }
  .hdxq-list .wenzi2 {
    opacity:1;
    margin:0;
    width:100%;
  }
  .hdxq-list hdxq-list .rightBox {
    background:#ebca8c;
    height:98px;
  }
  .hdxq-list .containerBox .rightBox img {
    height:100px;
  }
  .hdxq-list .rightBox {
    background:#d0d0d0;
    height:100px;
  }
  .hdxq-box {
    height:100%;
    background:url(../../static/images//hdxq_bj.jpg);
    background-size:100% 100%;
  }
  .hdxq-box  .maioshu {
    text-align:center;
  }
  .hdxq-box  .maioshu span {
    font-size:12px;
    color:rgba(0,0,0,0.63);
  }
  .hdxq-box .containerCon {
    font-size:0.25rem;
    text-indent:2em;
    width:90%;
    margin:15px auto;
  }
  .hdxq-box .containerBox {
    overflow:hidden;
    box-sizing:border-box;
    padding:0 5%;
  }
  .hdxq-box .leftBox h3 {
    font-size:0.3rem;
    margin:0;
    color:#ebca8c;
  }
  .hdxq-box .leftBox p {
    margin:0;
    font-size:0.25rem;
    margin-top:0.25rem;
    color:#ebca8c;
  }
  .hdxq-box .fp-tableCell {
    padding-top:2rem;
  }
  .hdxq-box .title {
    font-size:0.4rem;
    text-align:center;
    font-weight:bold;
    padding-top:40px;
    padding-bottom:10px;
    width:90%;
    margin:0 auto;
  }
  .footer {
    position:fixed;
    bottom:0;
  }
  .section {
    overflow-y:auto !important;
  }
  .banner-box img {
    width:100%;
    height:220px;
  }
  .fh_list {
    position:fixed;
    right:10px;
    width:50px;
    height:50px;
    border-radius:50%;
    background:#86b1f5;
    text-align:center;
    line-height:50px;
    bottom:100px;
    color:#fff;
    font-size:12px;
    box-shadow:0px 1px 3px #0000005c;
  }
  .information-box {
    width:90%;
    margin:20px auto;
  }
  .information-box > div {
    font-size:0.25rem;
    float:left;
    color:#999;
  }
  .information-box:before {
    content:" ";
    display:table;
  }
  .information-box:after {
    clear:both;
    content:" ";
    display:table;
  }
  .sj-box {
    font-size:12px;
  }
  .sj-box img {
    width:14px;
    padding-right:5px;
    position:relative;
    top:1px;
  }
  .qy-box {
    border:1px #6764a7 solid;
    border-radius:3px;
    color:#6764a7 !important;
    padding:2px 12px;
  }
  .sj-box {
    float:right!important;
    padding-top:2px;
  }
  .dh-box {
    font-size:0.25rem;
    width:90%;
    margin:40px auto;
    color:#6764a7;
    border-top:1px #eee solid;
    padding-top:15px;
    text-align:right;
  }
  .dh-box span {
    padding-right:8px;
  }

}
</style>
