<template>
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
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-item">
      <div class="swp-image" :style="{backgroundImage: 'url(./static/images/hhwy/2.jpg)'}"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swp: {
        swp1: [false, false, false],
        swp2: [false, false, false]
      }
    }
  },
  mounted: function () {
    this.swp.swp1 = [true, true, true]
  },
  methods: {
    onTransitionEnd: function () {
      this.clearTransition()
      let swiper = this.$refs.swiperRef.swiper
      let i = swiper.activeIndex
      if (i === 0) {
        this.swp.swp1 = [true, true, true]
      }
    },
    clearTransition: function () {
      this.swp = {
        swp1: [false, false, false],
        swp2: [false, false, false]
      }
    }

  }
}
</script>
<style>
  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  #app{
    height: 100%;
    margin-top: 0px;
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
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 293px;
    height: 197px;
  }
</style>
