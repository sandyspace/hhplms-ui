<template>
  <div class="cbgj-wrap">
    <swiper :options="swiperOption" class="swiper-box" ref="swiperRef" @transitionEnd="onTransitionEnd">
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/cbgj/1.jpg)'}">
          <transition name="swp0-t0" enter-active-class="bounceInDown">
            <img v-if="swp.swp0[0]" src="static/images/cbgj/swp0-t0.png" class="swp0-t0 animated">
          </transition>
          <transition name="swp0-t1" enter-active-class="bounceIn delay-1s">
            <img v-if="swp.swp0[1]" src="static/images/cbgj/swp0-t1.png" class="swp0-t1 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/cbgj/2.jpg)'}">
          <transition name="swp1-t0" enter-active-class="zoomIn">
            <img v-if="swp.swp1[0]" src="static/images/cbgj/swp1-t0.png" class="swp1-t0 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/cbgj/3.jpg)'}">
          <transition name="swp2-t0" enter-active-class="zoomIn">
            <img v-if="swp.swp2[0]" src="static/images/cbgj/swp2-t0.png" class="swp2-t0 animated">
          </transition>
          <transition name="swp2-t1" enter-active-class="fadeInUp delay-1s">
            <img v-if="swp.swp2[1]" src="static/images/cbgj/swp2-t1.png" class="swp2-t1 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/cbgj/4.jpg)'}">
          <div class="contact-us-box">
              <div class="contact-top">
                  <div>热线电话：</div>
                  <a href="tel:027-82337199">027-82337199</a>
              </div>
              <div class="contact-center"><a href="https://m.amap.com/search/mapview/poiid=B0FFIJP5W9&keywords=%E8%88%B9%E8%88%B6%E5%9B%BD%E9%99%85%E5%B9%BF%E5%9C%BA"><img src="static/images/cbgj/map.jpg" style="width:100%;"></a></div>
              <div class="contact-bottom">
                  <div><span>地址信息：</span><span>武汉市江岸区江汉路与京汉大道交汇处</span></div>
                  <div><span>交通方式：</span><span>轻轨一号线、地铁二号线、循礼门站</span></div>
              </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image"><img src="static/images/cbgj/5.jpg" alt="" class="arrow" style="width:100%;height:100%;"></div>
      </swiper-slide>
    </swiper>
    <transition name="container-arrow" enter-active-class="fadeInUp Slow" leave-active-class="zoomOut">
      <div v-if="sliderArrow" class="container-arrow animated">
          <img src="static/images/arrow.png" alt="" class="arrow">
      </div>
    </transition>
  </div>
</template>

<script scoped>
export default {
  name: 'CbgjHome',
  data () {
    return {
      /* swiper选项 */
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true
      },
      swp: {
        swp0: [false, false],
        swp1: [false],
        swp2: [false, false]
      },
      sliderArrow: false
    }
  },
  mounted: function () {
    this.swp.swp0 = [true, true]
    this.arrowInterval = setInterval(() => { this.sliderArrow = !this.sliderArrow }, 1000)
  },
  methods: {
    onTransitionEnd: function () {
      this.clearTransition()
      let swiper = this.$refs.swiperRef.swiper
      let i = swiper.activeIndex
      if (i === 0) {
        this.swp.swp0 = [true, true]
      }
      if (i === 1) {
        this.swp.swp1 = [true]
      }
      if (i === 2) {
        this.swp.swp2 = [true, true]
      }
    },
    clearTransition: function () {
      this.swp = {
        swp0: [false, false],
        swp1: [false, false, false],
        swp2: [false, false]
      }
    }

  }
}
</script>
<style>
  .cbgj-wrap .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .cbgj-wrap .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .cbgj-wrap .swiper-item .swp-image{
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }
  .cbgj-wrap .swp0-t0{
    margin-top: 140px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .cbgj-wrap .swp0-t1{
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .cbgj-wrap .swp1-t0{
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 96%;
  }
  .cbgj-wrap .swp2-t0{
    margin-top: 140px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .cbgj-wrap .swp2-t1{
    height: 100px;
    display: block;
    margin-left: 50px;
    margin-top: -20px;
  }
  .cbgj-wrap .contact-us-box{
    padding:20px;
    font-size: 0.3rem;
    color: #182166;
    padding-top: 130px;
    font-weight: 400;
  }
  .cbgj-wrap .contact-top {
    margin-bottom: 30px;
    text-align: left;
    font-size: 15px;
  }
  .cbgj-wrap .contact-top > div{
    display: inline-block;
  }
  .cbgj-wrap .contact-top a{
    color: #182166 !important;
    padding-right: 15px;
    text-decoration: underline;
    font-weight: bold;
    font-size: 18px;
  }
  .cbgj-wrap .contact-top a:nth-last-of-type(1){
    padding-right:0;
  }
  .cbgj-wrap .contact-bottom{
    margin-top: 20px;
  }
  .cbgj-wrap .contact-bottom > div{
    margin-bottom: 15px;
    display: flex;
    font-size: 16px;
  }
  .cbgj-wrap .contact-bottom > div > span:nth-child(2){
    -webkit-flex: 1;
    flex: 1;
    text-align: left;
  }
</style>
