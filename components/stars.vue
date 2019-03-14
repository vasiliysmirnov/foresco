<template>
    <div id="canvas"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'foresco-stars',
  data: function () {
    return {
      scene: null,
      starsGeometry: null,
      starsMaterial: null,
      renderer: null,
      camera: null,
      starField: null,
      height: 0,
      width: 0,
    }
  },
  beforeMount () {
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene(); // Creates a new scene
    this.starsGeometry = new THREE.Geometry(); // creates new geometry
    this.starsMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true} );
    this.starField = new THREE.Points( this.starsGeometry, this.starsMaterial );
  },
  methods: {
    init: function() {
      // three.js
      this.height = window.innerHeight;
      this.width = window.innerWidth;

      this.camera = new THREE.PerspectiveCamera( 150, this.width / this.height, 1, 10000 );
      this.scene.add(this.camera);

      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( this.width, this.height ); // sets size of render to the screen size
      let canvas = document.getElementById('canvas');
      canvas.appendChild( this.renderer.domElement );

      for ( var i = 0; i < 4000; i ++ ) {  // Adds a partilce on each loop i < 10000 = 9999 particles rendered
        var star = new THREE.Vector3(); 
        star.x = THREE.Math.randFloatSpread( 2000 );
        star.y = THREE.Math.randFloatSpread( 2000 );
        star.z = THREE.Math.randFloatSpread( 2000 );

        this.starsGeometry.vertices.push( star );
      }

      this.scene.add( this.starField );
    },
    animate: function() {
      requestAnimationFrame( this.animate ); // requestAnimationFrame will pause when the user navigates to a new tab
      this.camera.rotation.z += 0.0008;
      this.renderer.render( this.scene, this.camera );
    },
    render2: function() {
      requestAnimationFrame( this.render2 );
      // this.camera.position.z += 0.008;
      this.starField.scale.z -= 0.006;
      this.renderer.render( this.scene, this.camera );
    },
    onWindowResize: function() {
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( this.width, this.height );
    },
    
  },
  mounted () {
    this.init();
    this.animate();
    this.$nextTick(function() {
      window.addEventListener( 'resize', this.onWindowResize);
      this.onWindowResize()
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  destroy: function () {
    // clear scene three js
    this.scene.dispose();
    this.starsGeometry.dispose();
    this.starsMaterial.dispose();
    this.renderer.dispose();
    this.camera.dispose();
    this.starField.dispose();
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
</style>