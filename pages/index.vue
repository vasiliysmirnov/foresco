<template>
  <div class="mainPage">
    <div class="mainPage__inner">
      <div class="background">
        <app-stars ref="triggerTheEnter" v-bind:particles="100000"></app-stars>
      </div>
      <div class="animateBlock">
        <div class="logo">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-50 0 1100 385" id="logoBig" >

            <path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-miterlimit="10" id="f" d="M163.4,114.7V97.8c-67.1,2-71.3,61.7-71.3,61.7H68.7v17.2h23.4v0h0.3v99.9h16.9c0,0,0-64.9,0-99.9h22.4v-17.2h-22.4C109.3,137.6,131.7,114.7,163.4,114.7z"/>
            <path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-miterlimit="10" id="o-1" d="M225.7,151.2c-7.9,0-15.4,1.5-22.3,4.1l5.9,15.9c5.1-1.9,10.6-3,16.3-3c25.2,0,45.7,20.4,45.7,45.7 c0,25.2-20.4,45.7-45.7,45.7s-45.7-20.4-45.7-45.7c0-6.6,1.4-12.9,4-18.6l-16-6c-3.2,7.6-5,15.9-5,24.6 c0,34.6,28.1,62.7,62.7,62.7c34.6,0,62.7-28.1,62.7-62.7C288.4,179.3,260.3,151.2,225.7,151.2z"/>
            <path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-miterlimit="10" id="r" d="M339.1,151.1l-16.9,0v125.1h17c0,0,0-2.4,0-32.6c0-14.9-0.7-26,1.6-35.7c0.5-2.2,1.2-4.3,2-6.3 c3-7.2,7.4-13.4,12.5-18.4c5.4-5.2,11.6-9.1,18.2-11.6c5.9-2.3,12.1-3.4,18.2-3.4v-17c-29.3,0-52.7,22.7-52.7,22.7V151.1z"/>
            <path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-miterlimit="10" id="e" d="M475.1,151.2c-34.6,0-62.7,28.1-62.7,62.7c0,34.6,28.1,62.7,62.7,62.7c20,0,37.9-9.4,49.3-24L511.1,242 c-8.4,10.7-21.3,17.5-35.9,17.5c-21.9,0-40.2-15.5-44.6-36.1h89.3h17.3c0.1-0.8,0.2-1.6,0.3-2.5v-14.2c0-0.1,0-0.2,0-0.3 C533.7,175.4,507.2,151.2,475.1,151.2z M430.1,206.5c3.6-21.7,22.4-38.2,45-38.2s41.5,16.5,45,38.2H430.1z"/>
            <path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-miterlimit="10" id="s" d="M629.9,213c-4.7-1.9-9.7-3.5-14.6-5c-2.2-0.7-4.4-1.4-6.6-2c-19.6-6.2-27.2-12.8-27.2-19.9 c0-9.3,8.2-17.8,27.4-17.8c17.6,0,28.8,14.7,31.8,19.9l13.5-10.6c-6.6-11.3-20.8-26.3-45.3-26.3c-35.8,0-43.9,23.1-43.9,34.5 c0,3.8,0.1,8.1,1.8,12.4c2.1,5.2,5.9,10,14.5,14.8c4.5,2.5,10.3,5,17.8,7.6c2.2,0.8,4.6,1.6,7.2,2.3c18.8,5.8,31,8.7,31,18.3 c0,5.3-3,18.2-28.5,18.2c-20,0-29-15.2-31.4-21.2c-0.1-0.2-0.1-0.3-0.2-0.5l-14.1,11c6.4,12.1,20.6,27.8,45.6,27.7 c15.8,0,45.8-10,45.8-35.1C654.6,226.2,643.4,218.4,629.9,213z"/>
            <path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-miterlimit="10" id="c" d="M742.3,168.2c14.6,0,27.6,6.9,35.9,17.5l13.4-10.5c-11.5-14.6-29.3-24-49.3-24c-34.6,0-62.7,28.1-62.7,62.7 c0,34.6,28.1,62.7,62.7,62.7c19.9,0,37.7-9.3,49.2-23.9l-13.4-10.5c-8.4,10.6-21.3,17.3-35.8,17.3c-25.2,0-45.7-20.4-45.7-45.7 C696.7,188.7,717.1,168.2,742.3,168.2z"/>
            <path fill="#FFF" stroke="#FFF" stroke-width="2" stroke-miterlimit="10" id="o" d="M870.5,151.2c-34.6,0-62.7,28.1-62.7,62.7c0,34.6,28.1,62.7,62.7,62.7c34.6,0,62.7-28.1,62.7-62.7 C933.2,179.3,905.2,151.2,870.5,151.2z M870.5,259.6c-25.2,0-45.7-20.4-45.7-45.7c0-25.2,20.4-45.7,45.7-45.7s45.7,20.4,45.7,45.7 C916.2,239.1,895.8,259.6,870.5,259.6z"/>
            
          </svg>
        </div>
        <div class="text">digital  design  studio</div>
      </div>
      
      <div class="pressBtn" @mousedown="letsfly()" @mouseup="godeep()">
        зажми
      </div>
      <div class="pressBtn pressBtn__mobile" @click="godeep()">
        нажми
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import TweenMax from "gsap"
import AppStars from '~/components/stars.1.vue'

export default {
   components:{
    AppStars
  },
  methods: {
    // start page transition animation
    letsfly: function(){
      // trigger the child function
      this.$refs.triggerTheEnter.enterTheSite();
      
      TweenMax.to("#logoBig", 3, {
        transform:'scale(100) translate(0px, -100px)', ease: Power4.easeIn, force3D:false,
      }, 0);
      TweenMax.to(".text", 4.5, {
        transform:'scale(100) translate(0px, 100px)', ease: Power2.easeIn, force3D:false,
        opacity: 0
      }, 0);

      setTimeout(function() {
        $nuxt.$router.push('projects')
      }, 2000);

    },
    
    // go to projects page
    godeep: function(){
      $nuxt.$router.push('projects');
    },

  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/rem.styl'

.mainPage
  height: 100vh
  width 100%
  overflow hidden
  &__inner
    // display: flex
    // align-items: center
    // justify-content: center
    // flex-direction: column
    width: 100%
    height: 100%
    text-align center
    position relative
    // overflow hidden
    .animateBlock
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index 2
      overflow: visible
      perspective: rem(500px)
    .background
      width 100%
      height 100%
      position absolute
      z-index 1
      top 0
      left 0
      .background__img
        width: 100%
        height: 100%
        position: absolute
        z-index: 1
        top: 0
        left: 0
        background-size: cover
        transform: translateZ(rem(30px))
        transform: scale(1.2)
    .logo
      margin 0 auto
      // perspective: 300px
      overflow visible
      @media(max-width 900px)
        // transform: translateZ(70px)
      @media(max-width 700px)
        // transform: translateZ(50px)
      @media(max-width 600px)
        padding rem(0 20px)
        // transform: translateZ(20px)
      svg#logoBig
        max-width 100%
        width rem(500px)
        overflow visible!important
        transform-box: fill-box
        #f
          fill transparent
          stroke-dasharray: 542
          stroke-dashoffset: 542
          animation: f-letter 8s linear, lines1 2s linear, colorW .5s 2s ease
          animation-fill-mode forwards
        #o-1
          fill transparent
          stroke-dasharray: 629
          stroke-dashoffset: 629
          animation o1-letter 8s linear, lines2 2s linear, colorW .5s 2s ease
          animation-fill-mode forwards
        #r
          fill transparent
          stroke-dasharray: 395
          stroke-dashoffset: 395
          animation r-letter 8s linear, lines3 2s linear, colorW .5s 2s ease
          animation-fill-mode forwards
        #e
          fill transparent
          stroke-dasharray: 807
          stroke-dashoffset: 807
          animation lines4 2s linear, colorW .5s 2s ease
          animation-fill-mode forwards
        #s
          fill transparent
          stroke-dasharray: 623
          stroke-dashoffset: 623
          animation s-letter 8s linear, lines5 2s linear, colorW .5s 2s ease
          animation-fill-mode forwards
        #c
          fill transparent
          stroke-dasharray: 570
          stroke-dashoffset: 570
          animation c-letter 8s linear, lines6 2s linear, colorW .5s 2s ease
          animation-fill-mode forwards
          transform-origin center
        #o
          fill transparent
          stroke-dasharray: 681
          stroke-dashoffset: 681
          animation o-letter 8s linear, lines7 2s linear, colorW .5s 2s ease
          animation-fill-mode forwards
          

    .text
      font-size: rem(14px)
      font-weight: normal
      font-style: normal
      font-stretch: normal
      line-height: normal
      letter-spacing: rem(4px)
      color: #eeeeee
      text-transform uppercase
      animation text-text .8s linear
      animation-fill-mode forwards
      animation-delay 2s
      opacity 0
    .pressBtn
      width: rem(80px)
      height: rem(80px)
      margin: 0 auto
      border: rem(1px) solid #fff
      border-radius: 50%
      text-align: center
      line-height: rem(80px)
      text-transform: uppercase
      font-size: rem(13px)
      position absolute
      left calc(50% - 2.5rem)
      bottom rem(50px)
      cursor pointer
      z-index 2
      animation text-text .8s linear
      animation-fill-mode forwards
      animation-delay 2.8s
      opacity 0
      user-select none
      @media(max-width 1024px)
        display none
      a
        text-decoration none
        color #ffffff
        display: block
      &__mobile
        display none
        @media(max-width 1024px)
          display inline

@keyframes lines1 {
  0%{
    stroke-dashoffset: 542;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
@keyframes lines2 {
  0%{
    stroke-dashoffset: 629;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
@keyframes lines3 {
  0%{
    stroke-dashoffset: 395;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
@keyframes lines4 {
  0%{
    stroke-dashoffset: 807;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
@keyframes lines5 {
  0%{
    stroke-dashoffset: 623;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
@keyframes lines6 {
  0%{
    stroke-dashoffset: 570;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
@keyframes lines7 {
  0%{
    stroke-dashoffset: 681;
  }
  100%{
    stroke-dashoffset: 0;
  }
}
@keyframes f-letter {
  0% {
    transform: translate(0,0);
  }
  100% {
    transform: translate(-105px,0);
  }
}
@keyframes o1-letter {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(-65px,0);
  }
}
@keyframes r-letter {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(-25px,0);
  }
}
@keyframes s-letter {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(25px,0);
  }
}
@keyframes c-letter {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(65px,0);
  }
}
@keyframes o-letter {
  0%{
    transform: translate(0,0);
  }
  100%{
    transform: translate(105px,0);
  }
}
@keyframes text-text {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes colorW {
  0%{
    fill: transparent;
  }
  100%{
    fill: #FFF;
  }
}
</style>

