<template>
  <div class="c1818-wrap">
    <swiper :options="swiperOption" class="swiper-box" ref="swiperRef" @transitionEnd="onTransitionEnd">
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/1818/1.jpg)'}">
          <transition name="swp0-t0" enter-active-class="bounceInDown">
            <img v-if="swp.swp0[0]" src="static/images/1818/swp0-t0.png" class="swp0-t0 animated">
          </transition>
          <transition name="swp0-t1" enter-active-class="bounceIn delay-1s">
            <img v-if="swp.swp0[1]" src="static/images/1818/swp0-t1.png" class="swp0-t1 animated">
          </transition>
          <transition name="swp0-t2" enter-active-class="fadeInUp delay-2s">
            <img v-if="swp.swp0[2]" src="static/images/1818/swp0-t2.png" class="swp0-t2 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/1818/2.jpg)'}">
          <transition name="swp1-t0" enter-active-class="zoomIn">
            <img v-if="swp.swp1[0]" src="static/images/1818/swp1-t0.png" class="swp1-t0 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/1818/3.jpg)'}">
          <transition name="swp2-t0" enter-active-class="zoomIn">
            <img v-if="swp.swp2[0]" src="static/images/1818/swp2-t0.png" class="swp2-t0 animated">
          </transition>
          <transition name="swp2-t1" enter-active-class="fadeInUp delay-1s">
            <img v-if="swp.swp2[1]" src="static/images/1818/swp2-t1.png" class="swp2-t1 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/1818/4.jpg)'}">
          <div class="contact-us-box">
            <div class="contact-top">
                <div>热线电话：</div>
                <a href="tel:027-87302928">027-87302928</a>
                <a href="tel:4001127199">4001127199</a>
            </div>
            <div class="contact-center"><a href="https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E8%88%B9%E8%88%B6%E5%9B%BD%E9%99%851818&c=218&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&wd2=%E6%AD%A6%E6%B1%89%E5%B8%82%E6%AD%A6%E6%98%8C%E5%8C%BA&sug_forward=cee3584940e6bc388936eec3&src=1/vt="><img src="static/images/1818/map.jpg" style="width:100%;"></a></div>
            <div class="contact-bottom">
                <div><span>地址信息：</span><span>武汉市武昌区中北路交汇处</span></div>
                <div><span>交通方式：</span><span>轻轨四号线、楚河汉街站</span></div>
            </div>
          </div>
        </div>
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
  name: 'C1818Home',
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
        swp0: [false, false, false],
        swp1: [false],
        swp2: [false, false]
      },
      sliderArrow: false
    }
  },
  mounted: function () {
    this.swp.swp0 = [true, true, true]
    this.arrowInterval = setInterval(() => { this.sliderArrow = !this.sliderArrow }, 1000)
  },
  methods: {
    onTransitionEnd: function () {
      this.clearTransition()
      let swiper = this.$refs.swiperRef.swiper
      let i = swiper.activeIndex
      if (i === 0) {
        this.swp.swp0 = [true, true, true]
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
        swp0: [false, false, false],
        swp1: [false, false, false],
        swp2: [false, false]
      }
    }

  }
}
</script>
<style lang="less" scoped>
  .c1818-wrap{
    .swiper-box {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    .swiper-item {
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
    .swiper-item .swp-image{
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
    }
    .swp0-t0{
      margin-top: 140px;
      margin-left: auto;
      margin-right: auto;
      width: 86%;
    }
    .swp0-t1{
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }
    .swp0-t2{
      position: absolute;
      width: 94%;
      height: 320px;
      z-index: 100;
      left:3%;
      bottom: 0;
    }
    .swp1-t0{
      margin-top: 40px;
      margin-left: auto;
      margin-right: auto;
      width: 90%;
    }
    .swp2-t0{
      margin-top: 140px;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }
    .swp2-t1{
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      width: 74%;
    }
    .contact-us-box{
      padding:20px;
      font-size: 0.3rem;
      color: #182166;
      padding-top: 130px;
      font-weight: 400;
    }
    .contact-top {
      margin-bottom: 30px;
      font-size: 15px;
      text-align: left;
    }
    .contact-top > div{
      display: inline-block;
    }
    .contact-top a{
      color: #182166 !important;
      padding-right: 15px;
      text-decoration: underline;
      font-weight: bold;
      font-size: 18px;
    }
    .contact-top a:nth-last-of-type(1){
      padding-right:0;
    }
    .contact-bottom{
      margin-top: 20px;
    }
    .contact-bottom > div{
      margin-bottom: 15px;
      display: flex;
      font-size: 16px;
    }
    .contact-bottom > div > span:nth-child(2){
      -webkit-flex: 1;
      flex: 1;
      text-align: left;
    }
  }
</style>
