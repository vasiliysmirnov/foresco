<template>
  <div class="mainPage">
    <div class="mainPage__inner">
      <div class="background">
        <div id="canvas"></div>
        <div class="background__img"></div>
      </div>
      <div class="animateBlock">
        <div class="logo">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 384.7" xml:space="preserve" id="logoBig" >

            <path fill="#FFF" id="f" d="M163.4,114.7V97.8c-67.1,2-71.3,61.7-71.3,61.7H68.7v17.2h23.4v0h0.3v99.9h16.9c0,0,0-64.9,0-99.9h22.4v-17.2h-22.4C109.3,137.6,131.7,114.7,163.4,114.7z"/>
            <path fill="#FFF" id="o-1" d="M225.7,151.2c-7.9,0-15.4,1.5-22.3,4.1l5.9,15.9c5.1-1.9,10.6-3,16.3-3c25.2,0,45.7,20.4,45.7,45.7 c0,25.2-20.4,45.7-45.7,45.7s-45.7-20.4-45.7-45.7c0-6.6,1.4-12.9,4-18.6l-16-6c-3.2,7.6-5,15.9-5,24.6 c0,34.6,28.1,62.7,62.7,62.7c34.6,0,62.7-28.1,62.7-62.7C288.4,179.3,260.3,151.2,225.7,151.2z"/>
            <path fill="#FFF" id="r" d="M339.1,151.1l-16.9,0v125.1h17c0,0,0-2.4,0-32.6c0-14.9-0.7-26,1.6-35.7c0.5-2.2,1.2-4.3,2-6.3 c3-7.2,7.4-13.4,12.5-18.4c5.4-5.2,11.6-9.1,18.2-11.6c5.9-2.3,12.1-3.4,18.2-3.4v-17c-29.3,0-52.7,22.7-52.7,22.7V151.1z"/>
            <path fill="#FFF" id="e" d="M475.1,151.2c-34.6,0-62.7,28.1-62.7,62.7c0,34.6,28.1,62.7,62.7,62.7c20,0,37.9-9.4,49.3-24L511.1,242 c-8.4,10.7-21.3,17.5-35.9,17.5c-21.9,0-40.2-15.5-44.6-36.1h89.3h17.3c0.1-0.8,0.2-1.6,0.3-2.5v-14.2c0-0.1,0-0.2,0-0.3 C533.7,175.4,507.2,151.2,475.1,151.2z M430.1,206.5c3.6-21.7,22.4-38.2,45-38.2s41.5,16.5,45,38.2H430.1z"/>
            <path fill="#FFF" id="s" d="M629.9,213c-4.7-1.9-9.7-3.5-14.6-5c-2.2-0.7-4.4-1.4-6.6-2c-19.6-6.2-27.2-12.8-27.2-19.9 c0-9.3,8.2-17.8,27.4-17.8c17.6,0,28.8,14.7,31.8,19.9l13.5-10.6c-6.6-11.3-20.8-26.3-45.3-26.3c-35.8,0-43.9,23.1-43.9,34.5 c0,3.8,0.1,8.1,1.8,12.4c2.1,5.2,5.9,10,14.5,14.8c4.5,2.5,10.3,5,17.8,7.6c2.2,0.8,4.6,1.6,7.2,2.3c18.8,5.8,31,8.7,31,18.3 c0,5.3-3,18.2-28.5,18.2c-20,0-29-15.2-31.4-21.2c-0.1-0.2-0.1-0.3-0.2-0.5l-14.1,11c6.4,12.1,20.6,27.8,45.6,27.7 c15.8,0,45.8-10,45.8-35.1C654.6,226.2,643.4,218.4,629.9,213z"/>
            <path fill="#FFF" id="c" d="M742.3,168.2c14.6,0,27.6,6.9,35.9,17.5l13.4-10.5c-11.5-14.6-29.3-24-49.3-24c-34.6,0-62.7,28.1-62.7,62.7 c0,34.6,28.1,62.7,62.7,62.7c19.9,0,37.7-9.3,49.2-23.9l-13.4-10.5c-8.4,10.6-21.3,17.3-35.8,17.3c-25.2,0-45.7-20.4-45.7-45.7 C696.7,188.7,717.1,168.2,742.3,168.2z"/>
            <path fill="#FFF" id="o" d="M870.5,151.2c-34.6,0-62.7,28.1-62.7,62.7c0,34.6,28.1,62.7,62.7,62.7c34.6,0,62.7-28.1,62.7-62.7 C933.2,179.3,905.2,151.2,870.5,151.2z M870.5,259.6c-25.2,0-45.7-20.4-45.7-45.7c0-25.2,20.4-45.7,45.7-45.7s45.7,20.4,45.7,45.7 C916.2,239.1,895.8,259.6,870.5,259.6z"/>
            
          </svg>
        </div>
        <div class="text">digital  design  studio</div>
      </div>
      
      <div class="pressBtn" >
        зажми
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import TweenMax from "gsap"
// import Draggable from "gsap/Draggable"
import * as THREE from 'three'

export default {
  data: function () {
    return {
      fpsStats: null,
      scene: null,
      starsGeometry: null,
      starsMaterial: null,
    }
  },
  mounted () {

    //fps stats
    this.fpsStats=document.createElement('script');this.fpsStats.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};this.fpsStats.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(this.fpsStats);
    
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
      var degree = (radius * 10);
      // animate text
      TweenLite.to("#logoBig", 5, {
        transform:'rotate3d(' + tiltx/5 + ', ' + tilty/5 + ', 0, ' + degree + 'deg) ',
        ease: Power2.easeOut, 
        force3D:false
      });
      TweenLite.to(".text", 3, {
        transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg) ', ease:Power2.easeOut, force3D:false
      });
    }
    
    $(window).resize(function() {
      cx = window.innerWidth / 2;
      cy = window.innerHeight / 2;
    });

    
    // three.js
    var height = window.innerHeight,
        width = window.innerWidth;

    this.scene = new THREE.Scene(); // Creates a new scene

    var camera = new THREE.PerspectiveCamera( 65, width / height, 1, 1000 );
    this.scene.add(camera);

    var renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( width, height ); // sets size of render to the screen size
    var canvas;
    canvas = $("#canvas").get(0);
    canvas.appendChild( renderer.domElement );

    // Listen for resizing of window
    window.addEventListener( 'resize', onWindowResize, false );
    // Resize Three.js scene on window resize
    function onWindowResize(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    this.starsGeometry = new THREE.Geometry(); // creates new geometry

    for ( var i = 0; i < 10000; i ++ ) {  // Adds a partilce on each loop i < 10000 = 9999 particles rendered
      var star = new THREE.Vector3(); 
      star.x = THREE.Math.randFloatSpread( 2000 );
      star.y = THREE.Math.randFloatSpread( 2000 );
      star.z = THREE.Math.randFloatSpread( 2000 );

      this.starsGeometry.vertices.push( star );
    }

    this.starsMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var starField = new THREE.Points( this.starsGeometry, this.starsMaterial );

    this.scene.add( starField );

    // Render loop to move through star field
    var render = () => {
      requestAnimationFrame( render ); // requestAnimationFrame will pause when the user navigates to a new tab
      starField.rotation.z -= 0.0004;
      renderer.render( this.scene, camera );
    };

    render();

    var render2 = () => {
        requestAnimationFrame( render2 );
        starField.rotation.y = 0;
        starField.scale.z -= 0.006;
        renderer.render( this.scene, camera );
    }

    $('.pressBtn')
      .mouseup(function() {
        $nuxt.$router.push('projects')
      })
      .mousedown(function(){
        // start the animation
        render2();
        TweenLite.to("#logoBig", 3, {
          transform:'scale(100) translate(0px, -100px)', ease: Power4.easeIn, force3D:false,
        }, 0);
        TweenLite.to(".text", 4.5, {
          transform:'scale(100) translate(0px, 100px)', ease: Power2.easeIn, force3D:false,
          opacity: 0
        }, 0);
        setTimeout(function() {
          $nuxt.$router.push('projects')
        }, 2000);
      });
    
  },

  beforeDestroy: function () {
    // clear fps stats script
    this.fpsStats = null
    //clear scene three js
    this.starsGeometry.dispose();
    this.starsMaterial.dispose();
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/rem.styl'

#canvas
  width 100%
  height 100%
  position absolute
  z-index 1
  top 0
  left 0
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
    // overflow hidden
    .animateBlock
      position relative
      z-index 2
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
      svg
        max-width 100%
        width rem(500px)
        overflow visible!important
        #f
          animation f-letter 8s linear
          animation-fill-mode forwards
        #o-1
          animation o1-letter 8s linear
          animation-fill-mode forwards
        #r
          animation r-letter 8s linear
          animation-fill-mode forwards
        #s
          animation s-letter 8s linear
          animation-fill-mode forwards
        #c
          animation c-letter 8s linear
          animation-fill-mode forwards
          transform-origin center
        #o
          animation o-letter 8s linear
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
      // transform: translateZ(120px)
      // @media(max-width 600px)
      //   transform: translateZ(10px)
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
      bottom rem(50px)
      cursor pointer
      z-index 2
      animation text-text .8s linear
      animation-fill-mode forwards
      animation-delay 2.8s
      opacity 0
      a
        text-decoration none
        color #ffffff
        display: block

@keyframes f-letter {
  0%{
    transform: translate(0,0);
  }
  100%{
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
</style>

