<template>
  <div class="mainPage">
    <div class="mainPage__inner">
      <div class="background">
        <div id="canvas"></div>
        <div class="background__img"></div>
      </div>
      <div class="animateBlock">
        <div class="logo">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="614" height="150" viewBox="0 0 614 150" id="logoBig">
            <g fill="none" fill-rule="evenodd" >
              <path fill="#FFF" id='fq' d="M17.458 33.965c.311-1.28 1.136-2.82 3.575-7.987 6.55-13.225 17.98-21.51 34.29-24.855 2.09-.522 2.818-.455 4.8-.455h2.745v11.17h-2.744c-3.813 0-8.613 1.45-14.404 4.335-3.963 1.975-7.582 5.015-10.856 9.118-3.278 4.104-5.527 8.434-6.745 12.997l-.915 3.193h14.631v11.4h-14.86V119H15.775V52.88H-.001v-11.4h15.547" mask="url(#c)" />
              <path fill="#FFF" id='oresco' d="M168 121V36h11.883v15.626l3.8-3.076c8.235-6.787 17.346-10.81 27.325-12.078L216 36v11.836h-2.853c-5.07 0-10.615 1.898-16.633 5.685-6.178 3.946-10.774 9.235-13.783 15.863-1.269 2.528-2.016 5.09-2.256 7.695-.237 2.604-.438 9.512-.592 20.717l-.24 23.204H168zM300.69 66.152c-2.028-5.696-5.643-10.327-10.859-13.886-5.218-3.562-11.249-5.345-18.098-5.345-3.114 0-5.917.32-8.406.953-12.46 2.692-20.085 10.367-22.884 23.03l-.468 3.084h40.866c9.07-.062 14.782.008 17.552 0 2.76-.007 3.93 0 3.93 0s-.545-4.985-1.633-7.836zm8.985 30.85s-.968 2.156-2.68 5.001c-4.515 6.97-10.43 12.111-17.748 15.436-4.826 2.371-11.056 3.561-18.682 3.561-4.36 0-8.173-.474-11.44-1.424C239.04 113.562 229 99.715 229 78.026c0-12.821 3.656-23.032 10.975-30.628C247.293 39.8 257.565 36 270.798 36h.469c12.764 0 23.078 4.001 30.942 11.989C310.067 55.986 314 66.314 314 78.976v5.697h-73.792l1.167 3.798c4.048 11.397 11.83 18.364 23.352 20.897 2.18.471 4.282.71 6.304.71 9.344 0 16.59-3.204 22.784-9.457 2.026-2.023 3.675-3.603 3.675-3.603l12.185-.016zM383.848 61.168c-1.989-4.75-4.715-8.74-10.523-11.435-3.208-1.583-8.474-2.278-10.61-2.278-1.379 0 1.068-.156 0 0-7.433 0-15.326 4.059-17.16 8.964a9.11 9.11 0 0 0-.92 4.038c0 2.057.994 4.033 2.98 5.936 2.753 2.848 9.25 5.696 19.494 8.544 12.842 3.486 21.018 8.31 24.539 14.486 0 0 2.315 3.374 2.315 8.529-.153 3.798-1.938 8.25-3.922 10.94-6.115 8.073-15.212 12.108-27.289 12.108-7.95 0-14.87-2.174-20.754-6.527-5.886-4.353-9.165-8.82-10.998-16.521h13.095c0 2.874 5.967 7.935 8.109 9.041 3.669 1.898 7.108 2.849 10.32 2.849 0 0 19.82.096 19.82-11.89 0-5.806-9.35-9.243-19.134-12.093-10.855-3.164-18.496-6.644-22.93-10.445-4.437-3.799-6.65-8.863-6.65-15.194 0-5.543 1.68-10.37 5.044-14.486 3.362-4.113 8.026-6.964 13.988-8.547 3.819-.791 7.032-1.187 9.632-1.187 7.028 0 13.377 1.82 19.032 5.462 5.655 3.642 9.706 8.232 12.155 13.77 1.68 3.486 2.33 5.131 2.519 6.172M480.447 109.204s-3.927 3.687-8.143 5.977c-4.225 2.3-7.765 3.762-10.628 4.392-3.317.953-7.008 1.427-11.076 1.427-7.992 0-15.228-1.66-21.706-4.988-6.183-3.163-11.041-8.268-14.582-15.313C410.768 93.657 409 86.097 409 78.024c0-13.293 3.991-23.66 11.981-31.103C428.668 39.642 438.311 36 449.921 36c4.068 0 7.687.396 10.85 1.187 4.22.95 8.516 2.653 12.889 5.105 4.37 2.455 7.34 5.51 7.34 5.51s-1.914 2.366-4.175 5.055l-2.992 3.6-2.434-1.7c-1.059-.789-3.47-2.215-7.234-4.274-3.317-1.58-7.737-2.796-13.763-2.796-5.848 0-7.757.538-9.185.778-1.435.24-3.428 1.067-5.992 2.494-5.729 2.85-9.945 7.44-12.66 13.772-1.51 3.165-3.163 7.914-3.163 14.245 0 6.173 1.653 10.843 3.163 14.01 4.217 9.017 11.604 14.48 22.155 16.38 2.41.32 4.22.473 5.426.473 7.383 0 14.091-2.213 20.122-6.649l3.164-2.371M552.273 49.73c-3.474-1.258-7.186-1.892-11.127-1.892-2.843 0-5.605.395-8.29 1.184-6.475 2.054-11.8 5.88-15.979 11.483-4.185 5.605-6.275 11.644-6.275 18.113 0 1.579.078 2.762.236 3.552.629 5.527 2.643 10.498 6.039 14.914 3.39 4.422 7.537 7.656 12.428 9.707 4.102 1.896 8.206 2.843 12.313 2.843 5.839 0 11.324-1.656 16.454-4.971 5.13-3.316 9.038-7.732 11.722-13.259 1.573-3.318 2.368-7.575 2.368-12.786 0-5.05-.87-9.387-2.604-13.022-1.74-3.315-4.227-6.511-7.459-9.59-3.237-3.08-6.511-5.17-9.826-6.275m-20.834-12.31A36.93 36.93 0 0 1 541.619 36c11.52 0 21.386 4.104 29.595 12.31C579.74 56.52 584 66.778 584 79.094c0 6.314-1.342 12.392-4.024 18.228-3.474 7.264-8.609 13.024-15.392 17.285-6.787 4.263-14.365 6.394-22.73 6.394-12.155 0-22.256-4.104-30.307-12.313C503.182 100.322 499 90.379 499 78.857c0-9.476 2.918-18.074 8.76-25.81 5.838-7.732 13.733-12.943 23.679-15.627M137.216 48.31C129.004 40.105 119.14 36 107.62 36c-3.476 0-6.867.472-10.182 1.42-1.659.45-3.243.992-4.79 1.584l3.65 10.953a34.466 34.466 0 0 1 2.56-.937 29.293 29.293 0 0 1 8.287-1.182c3.944 0 7.654.634 11.128 1.893 3.318 1.106 6.591 3.196 9.826 6.275 3.233 3.076 5.722 6.275 7.462 9.59 1.734 3.635 2.601 7.973 2.601 13.022 0 5.21-.789 9.468-2.365 12.786-2.687 5.527-6.594 9.943-11.722 13.259-5.132 3.312-10.618 4.971-16.455 4.971-4.107 0-8.211-.947-12.313-2.843-4.894-2.05-9.04-5.288-12.431-9.707-3.396-4.416-5.41-9.387-6.036-14.914-.161-.79-.24-1.973-.24-3.552 0-4.164.881-8.144 2.61-11.947l-11.117-3.705C66.046 67.958 65 73.249 65 78.857c0 11.522 4.18 21.465 12.547 29.83C85.598 116.896 95.7 121 107.856 121c8.365 0 15.943-2.131 22.73-6.394 6.786-4.26 11.916-10.021 15.39-17.285C148.66 91.485 150 85.407 150 79.09c0-12.314-4.26-22.571-12.784-30.78"/>
            </g>
          </svg> -->
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 384.7" xml:space="preserve" id="logoBig" >
          <g id="sloi-2" fill-rule="evenodd">

            <path fill="#FFF" id="f" d="M163.4,114.7V97.8c-67.1,2-71.3,61.7-71.3,61.7H68.7v17.2h23.4v0h0.3v99.9h16.9c0,0,0-64.9,0-99.9h22.4v-17.2
              h-22.4C109.3,137.6,131.7,114.7,163.4,114.7z"/>
            <path fill="#FFF" id="o-1" d="M225.7,151.2c-7.9,0-15.4,1.5-22.3,4.1l5.9,15.9c5.1-1.9,10.6-3,16.3-3c25.2,0,45.7,20.4,45.7,45.7 c0,25.2-20.4,45.7-45.7,45.7s-45.7-20.4-45.7-45.7c0-6.6,1.4-12.9,4-18.6l-16-6c-3.2,7.6-5,15.9-5,24.6 c0,34.6,28.1,62.7,62.7,62.7c34.6,0,62.7-28.1,62.7-62.7C288.4,179.3,260.3,151.2,225.7,151.2z"/>
            <path fill="#FFF" id="r" d="M339.1,151.1l-16.9,0v125.1h17c0,0,0-2.4,0-32.6c0-14.9-0.7-26,1.6-35.7c0.5-2.2,1.2-4.3,2-6.3 c3-7.2,7.4-13.4,12.5-18.4c5.4-5.2,11.6-9.1,18.2-11.6c5.9-2.3,12.1-3.4,18.2-3.4v-17c-29.3,0-52.7,22.7-52.7,22.7V151.1z"/>
            <path fill="#FFF" id="e" d="M475.1,151.2c-34.6,0-62.7,28.1-62.7,62.7c0,34.6,28.1,62.7,62.7,62.7c20,0,37.9-9.4,49.3-24L511.1,242 c-8.4,10.7-21.3,17.5-35.9,17.5c-21.9,0-40.2-15.5-44.6-36.1h89.3h17.3c0.1-0.8,0.2-1.6,0.3-2.5v-14.2c0-0.1,0-0.2,0-0.3 C533.7,175.4,507.2,151.2,475.1,151.2z M430.1,206.5c3.6-21.7,22.4-38.2,45-38.2s41.5,16.5,45,38.2H430.1z"/>
            <path fill="#FFF" id="s" d="M629.9,213c-4.7-1.9-9.7-3.5-14.6-5c-2.2-0.7-4.4-1.4-6.6-2c-19.6-6.2-27.2-12.8-27.2-19.9 c0-9.3,8.2-17.8,27.4-17.8c17.6,0,28.8,14.7,31.8,19.9l13.5-10.6c-6.6-11.3-20.8-26.3-45.3-26.3c-35.8,0-43.9,23.1-43.9,34.5 c0,3.8,0.1,8.1,1.8,12.4c2.1,5.2,5.9,10,14.5,14.8c4.5,2.5,10.3,5,17.8,7.6c2.2,0.8,4.6,1.6,7.2,2.3c18.8,5.8,31,8.7,31,18.3 c0,5.3-3,18.2-28.5,18.2c-20,0-29-15.2-31.4-21.2c-0.1-0.2-0.1-0.3-0.2-0.5l-14.1,11c6.4,12.1,20.6,27.8,45.6,27.7 c15.8,0,45.8-10,45.8-35.1C654.6,226.2,643.4,218.4,629.9,213z"/>
            <path fill="#FFF" id="c" d="M742.3,168.2c14.6,0,27.6,6.9,35.9,17.5l13.4-10.5c-11.5-14.6-29.3-24-49.3-24c-34.6,0-62.7,28.1-62.7,62.7 c0,34.6,28.1,62.7,62.7,62.7c19.9,0,37.7-9.3,49.2-23.9l-13.4-10.5c-8.4,10.6-21.3,17.3-35.8,17.3c-25.2,0-45.7-20.4-45.7-45.7 C696.7,188.7,717.1,168.2,742.3,168.2z"/>
            <path fill="#FFF" id="o" d="M870.5,151.2c-34.6,0-62.7,28.1-62.7,62.7c0,34.6,28.1,62.7,62.7,62.7c34.6,0,62.7-28.1,62.7-62.7 C933.2,179.3,905.2,151.2,870.5,151.2z M870.5,259.6c-25.2,0-45.7-20.4-45.7-45.7c0-25.2,20.4-45.7,45.7-45.7s45.7,20.4,45.7,45.7 C916.2,239.1,895.8,259.6,870.5,259.6z"/>
            
          </g>
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
      var degree = (radius * 10);
      // animate text
      TweenLite.to("#logoBig", 5, {
        transform:'rotate3d(' + tiltx/5 + ', ' + tilty/5 + ', 0, ' + degree + 'deg) ', ease: Power2.easeOut, force3D:false
      });
      TweenLite.to(".text", 3, {
        transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg) ', ease:Power2.easeOut, force3D:false
      });
    }
    
    $(window).resize(function() {
      cx = window.innerWidth / 2;
      cy = window.innerHeight / 2;
    });

    
//Declare three.js variables
var camera, scene, renderer,sphere, stars=[];
//assign three.js objects to each variable
function init(){
    //camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 5;
    //scene
    scene = new THREE.Scene();
    //renderer
    renderer = new THREE.WebGLRenderer();
    //set the size of the renderer
    renderer.setSize( window.innerWidth, window.innerHeight );
    //add the renderer to the html document body
    var canvas;
    canvas = $("#canvas").get(0);
    canvas.appendChild( renderer.domElement );
}
function addSphere(){
    // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
    for ( var z= -1000; z < 1000; z+=8 ) {
      // Make a sphere (exactly the same as before). 
      var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
      var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
      sphere = new THREE.Mesh(geometry, material);
      // This time we give the sphere random x and y positions between -500 and 500
      sphere.position.x = Math.random() * 1000 - 500;
      sphere.position.y = Math.random() * 1000 - 500;
      // Then set the z position to where it is in the loop (distance of camera)
      sphere.position.z = z;
      // scale it up a bit
      sphere.scale.x = sphere.scale.y = 1;
      //add the sphere to the scene
      scene.add( sphere );
      //finally push it to the stars array 
      stars.push(sphere);
    }
}

function animateStars() { 
  // loop through each star
  for(var i=0; i<stars.length; i++) {
    
    var star = stars[i];
    // and move it forward dependent on the mouseY position.
    star.position.z +=  i/10;
    // if the particle is too close move it to the back
    if(star.position.z>1000) star.position.z-=2000;   
  }
}
function render() {
    //get the frame
    requestAnimationFrame( render );
    //render the scene
    renderer.render( scene, camera );
    animateStars();
}

init();
addSphere();
renderer.render( scene, camera );

$('.pressBtn')
  .mouseup(function() {
    // console.log('up')
    $nuxt.$router.push('projects')
  })
  .mousedown(function() {
    // start the animation
    render();
    TweenLite.to("#logoBig", 4.5, {
      transform:'scale(40) translate(15px, 2px)', ease: Power4.easeIn, force3D:false,
      onComplete: function() {
        $nuxt.$router.push('projects')
      }
    });
    TweenLite.to(".text", 2, {
      transform:'scale(0)', ease: Power2.easeIn, force3D:false,
      opacity: 0
    }, 0);
  });
    
  }
}
</script>

<style lang="stylus" scoped>
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
    overflow hidden
    .animateBlock
      -webkit-transform-style: preserve-3d
      -moz-transform-style: preserve-3d
      transform-style: preserve-3d
      transform: translateZ(0px)
      -moz-transform: translateZ(0px)
      -webkit-transform: translateZ(0px)
      position relative
      z-index 2
      perspective: 500px
    .background
      width 100%
      height 100%
      position absolute
      z-index 1
      top 0
      left 0
      .background__img
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        background-size: cover;
        transform: translateZ(30px);
        -moz-transform: translateZ(30px);
        -webkit-transform: translateZ(30px);
        transform: scale(1.2);
    .logo
      margin 0 auto
      // perspective: 300px
      @media(max-width 900px)
        // transform: translateZ(70px)
      @media(max-width 700px)
        // transform: translateZ(50px)
      @media(max-width 600px)
        padding 0 20px
        // transform: translateZ(20px)
      svg
        max-width 100%
        width 600px
        overflow visible
        backface-visibility: hidden
        -webkit-backface-visibility: hidden
        #f
          animation f-letter 80s linear
          animation-fill-mode forwards
        #o-1
          animation o1-letter 80s linear
          animation-fill-mode forwards
        #r
          animation r-letter 80s linear
          animation-fill-mode forwards
        #s
          animation s-letter 80s linear
          animation-fill-mode forwards
        #c
          animation c-letter 80s linear
          animation-fill-mode forwards
          transform-origin center
        #o
          animation o-letter 80s linear
          animation-fill-mode forwards
          

    .text
      font-size: 14px
      font-weight: normal
      font-style: normal
      font-stretch: normal
      line-height: normal
      letter-spacing: 4px
      color: #eeeeee
      text-transform uppercase
      // transform: translateZ(120px)
      // @media(max-width 600px)
      //   transform: translateZ(10px)
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
      z-index 2
      a
        text-decoration none
        color #ffffff
        display: block

@keyframes f-letter {
  0%{
    transform: translateX(0px) rotate(0deg);
  }
  100%{
    transform: translateX(-30%) rotate(-5deg);
  }
}
@keyframes o1-letter {
  0%{
    transform: translateX(0px) rotate(0deg);
  }
  100%{
    transform: translateX(-15%) translateY(-12%) rotate(15deg);
  }
}
@keyframes r-letter {
  0%{
    transform: translateX(0px) rotate(0deg);
  }
  100%{
    transform: translateX(-10%) translateY(-20%) rotate(5deg);
  }
}
@keyframes s-letter {
  0%{
    transform: translateX(0px) rotate(0deg);
  }
  100%{
    transform: translateX(10%) translateY(44%) rotate(-17deg);
  }
}
@keyframes c-letter {
  0%{
    transform: translateX(0px) rotate(0deg);
  }
  100%{
    transform: translateX(23%) translateY(1%) rotate(10deg);
  }
}
@keyframes o-letter {
  0%{
    transform: translateX(0px) rotate(0deg);
  }
  100%{
    transform: translateX(30%) translateY(-18%);
  }
}
</style>

