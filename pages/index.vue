<template>
  <div class="mainPage">
    <div class="mainPage__inner">
      <div class="logo">
        <img src="~/static/img/logo-big.svg" alt="foresco">
      </div>
      <div class="text">digital  design  studio</div>
      <div class="pressBtn">
        зажми
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
// import { TweenLite } from "gsap/TweenMax";
// import Draggable from "gsap/Draggable"; 

// import * as THREE from 'three'

export default {
  mounted () {
    $('#qwe').on('mousemove', function(e){
      var centerX = $(this).width()/2
      var moveX = centerX - e.offsetX
      $(this).css({
        'transform': 'perspective(500px) rotateY('+ moveX/100 +'deg)'
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
.mainPage
  height: 100vh
  &__inner
    text-align: center
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 100%
    height: 100%
    text-align center
    position relative
    .logo
      margin 0 auto
    .text
      font-size: 14px
      font-weight: normal
      font-style: normal
      font-stretch: normal
      line-height: normal
      letter-spacing: 4px
      color: #eeeeee
      text-transform uppercase
    .pressBtn
      width: 80px
      height: 80px
      margin: 0 auto
      border: 1px solid #fff
      border-radius: 50%
      text-align: center
      line-height: 80px;
      text-transform: uppercase
      font-size: 13px
      position absolute
      bottom 50px
</style>

