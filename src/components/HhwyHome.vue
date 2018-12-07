<template>
  <div>
    <swiper :options="swiperOption" class="swiper-box" ref="swiperRef" @transitionEnd="onTransitionEnd">
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/hhwy/1.jpg)'}">
          <transition name="swp1-t0" enter-active-class="bounceInDown">
            <img v-if="swp.swp1[0]" src="static/images/hhwy/swp1-t0.png" class="swp1-t0 animated">
          </transition>
          <transition name="swp1-t1" enter-active-class="bounceIn delay-1s">
            <img v-if="swp.swp1[1]" src="static/images/hhwy/swp1-t1.png" class="swp1-t1 animated">
          </transition>
          <transition name="swp1-t2" enter-active-class="lightSpeedIn delay-2s">
            <img v-if="swp.swp1[2]" src="static/images/hhwy/swp1-t2.png" class="swp1-t2 animated">
          </transition>
          <transition name="swp1-t3" enter-active-class="fadeInLeft delay-2s">
            <img v-if="swp.swp1[3]" src="static/images/hhwy/swp1-t3.png" class="swp1-t3 animated">
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="swp-image" :style="{backgroundImage: 'url(./static/images/hhwy/2.jpg)'}">
          <transition name="swp2-t0" enter-active-class="zoomIn">
            <img v-if="swp.swp2[0]" src="static/images/hhwy/swp2-t0.png" class="swp2-t0 animated">
          </transition>
          <transition name="swp2-t1" enter-active-class="zoomInUp delay-1s">
            <img v-if="swp.swp2[1]" src="static/images/hhwy/swp2-t1.png" class="swp2-t1 animated">
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
  name: 'PageHhwy',
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
        swp1: [false, false, false],
        swp2: [false, false]
      },
      sliderArrow: true
    }
  },
  mounted: function () {
    this.swp.swp1 = [true, true, true, true]
    this.arrowInterval = setInterval(() => { this.sliderArrow = !this.sliderArrow }, 1000)
  },
  methods: {
    onTransitionEnd: function () {
      this.clearTransition()
      let swiper = this.$refs.swiperRef.swiper
      let i = swiper.activeIndex
      if (i === 0) {
        this.swp.swp1 = [true, true, true, true]
      }
      if (i === 1) {
        this.swp.swp2 = [true, true]
      }
    },
    clearTransition: function () {
      this.swp = {
        swp1: [false, false, false, false],
        swp2: [false, false]
      }
    }

  }
}
</script>
<style>
  html,body {
    height: 100%;
  }
  body {
    background: #eee;
  }
  #app{
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
  .swp1-t0{
    margin-top: 120px;
    margin-left: auto;
    margin-right: auto;
    width: 86%;
  }
  .swp1-t1{
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 86%;
  }
  .swp1-t2{
    position: relative;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 293px;
    height: 197px;
  }
  .swp1-t3{
    margin-top: -260px;
    margin-left: auto;
    margin-right: auto;
    width: 293px;
    height: 197px;
  }

  .swp2-t0{
    margin-top: 185px;
    margin-left: auto;
    margin-right: auto;
    width: 86%;
  }

  .swp2-t1{
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 86%;
  }
</style>
