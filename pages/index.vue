<template>
  <div class="mainPage">
    <div class="mainPage__inner">
      <div class="qwe">
        <div class="background"></div>
        <div class="logo">
          <img src="~/static/img/logo-big.svg" alt="foresco">
        </div>
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
import TweenMax from "gsap"
// import Draggable from "gsap/Draggable"

// import * as THREE from 'three'

export default {
  beforeCreate() {
    
  },
  
  mounted () {
    //fps stats
    var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);
    
    var request = null;
    var mouse = { x: 0, y: 0 };
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;

    $('body').mousemove(function(event) {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    
      cancelAnimationFrame(request);
      request = requestAnimationFrame(update);	
    });

    function update() {
      var dx = mouse.x - cx;
      var dy = mouse.y - cy;

      var tiltx = (dy / cy);
      var tilty = - (dx / cx);

      var radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      var degree = (radius * 20);
      TweenLite.to(".qwe", 1, {
        transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)', ease:Power2.easeOut
      });
    }
    
    $(window).resize(function() {
      cx = window.innerWidth / 2;
      cy = window.innerHeight / 2;
    });
    
  }
}
</script>

<style lang="stylus" scoped>
.mainPage
  height: 100vh
  width 100%
  overflow hidden
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
    .qwe
      -webkit-transform-style: preserve-3d
      -moz-transform-style: preserve-3d
      transform-style: preserve-3d
      transform: translateZ(0px)
      -moz-transform: translateZ(0px)
      -webkit-transform: translateZ(0px)
      position relative
    .background
      width 500px
      height 500px
      position absolute
      z-index 1
      top 0
      left 0
      background: url('http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg') no-repeat
      transform: translateZ(60px)
      -moz-transform: translateZ(60px)
      -webkit-transform: translateZ(60px)
    .logo
      margin 0 auto
      transform: translateZ(120px)
      -moz-transform: translateZ(120px)
      -webkit-transform: translateZ(120px)
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
      cursor pointer
</style>

