<template>
  <div class="xmgk-wrap">
    <swiper :options="swiperOption" class="swiper-box" ref="swiperRef" @transitionEnd="onTransitionEnd">
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/xmgk/1.jpg)'}">
          <transition name="swp0-t0" enter-active-class="bounceInDown">
            <img v-if="swp.swp0[0]" src="static/images/xmgk/swp0-t0.png" class="swp0-t0 animated">
          </transition>
          <transition name="swp0-t1" enter-active-class="bounceIn delay-1s">
            <img v-if="swp.swp0[1]" src="static/images/xmgk/swp0-t1.png" class="swp0-t1 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/xmgk/2.jpg)'}">
          <transition name="swp1-t0" enter-active-class="zoomIn">
            <img v-if="swp.swp1[0]" src="static/images/xmgk/swp1-t0.png" class="swp1-t0 animated">
          </transition>
          <transition name="swp1-t1" enter-active-class="fadeInLeft">
            <img v-if="swp.swp1[1]" src="static/images/xmgk/swp1-t1.png" class="swp1-t1 animated">
          </transition>
          <transition name="swp1-t2" enter-active-class="fadeInUp">
            <img v-if="swp.swp1[2]" src="static/images/xmgk/swp1-t2.png" class="swp1-t2 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/xmgk/3.jpg)'}">
          <transition name="swp2-t0" enter-active-class="zoomIn">
            <img v-if="swp.swp2[0]" src="static/images/xmgk/swp2-t0.png" class="swp2-t0 animated">
          </transition>
          <transition name="swp2-t1" enter-active-class="rollIn">
            <img v-if="swp.swp2[1]" src="static/images/xmgk/swp2-t1.png" class="swp2-t1 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/xmgk/4.jpg)'}">
          <transition name="swp3-t0" enter-active-class="fadeInLeft">
            <img v-if="swp.swp3[0]" src="static/images/xmgk/swp3-t0.png" class="swp3-t0 animated">
          </transition>
          <transition name="swp3-t1" enter-active-class="fadeInRight">
            <img v-if="swp.swp3[1]" src="static/images/xmgk/swp3-t1.png" class="swp3-t1 animated">
          </transition>
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

<script>
export default {
  name: 'XmgkHome',
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
        swp1: [false, false, false],
        swp2: [false, false],
        swp3: [false, false]
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
        this.swp.swp1 = [true, true, true]
      }
      if (i === 2) {
        this.swp.swp2 = [true, true]
      }
      if (i === 3) {
        this.swp.swp3 = [true, true]
      }
    },
    clearTransition: function () {
      this.swp = {
        swp0: [false, false],
        swp1: [false, false, false],
        swp2: [false, false],
        swp3: [false, false]
      }
    }

  }
}
</script>
<style scoped>
  .xmgk-wrap .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .xmgk-wrap .swiper-item {
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
  .xmgk-wrap .swiper-item .swp-image{
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }
  .xmgk-wrap .swp0-t0{
    margin-top: 120px;
    margin-left: auto;
    margin-right: auto;
    width: 86%;
  }
  .xmgk-wrap .swp0-t1{
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
  .xmgk-wrap .swp1-t0{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .xmgk-wrap .swp1-t1{
    margin-top: 60px;
    margin-left: 0px;
    margin-right: auto;
    width: 80%;
  }
  .xmgk-wrap .swp1-t2{
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
    height: 266px;
  }
  .xmgk-wrap .swp2-t0{
    margin-top: 320px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
  .xmgk-wrap .swp2-t1{
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 180px;
  }
  .xmgk-wrap .swp3-t0{
    position: relative;
    display: block;
    margin-top: 400px;
    margin-left: 40px;
    width: 190px;
    height: 125px;
    z-index: 100;
  }
  .xmgk-wrap .swp3-t1{
    position: relative;
    margin-top: -80px;
    margin-left: 40px;
    width: 261px;
    z-index: 99;
  }
</style>
