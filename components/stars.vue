<template>
    <div id="canvas"></div>
</template>
<style lang="stylus" scoped>

</style>
<script>
import * as THREE from 'three'

export default {
  data: function () {
    return {
      // fpsStats: null,
      // scene: null,
      // starsGeometry: null,
      // starsMaterial: null,
    }
  },
  mounted () {
    // three.js
    var height = window.innerHeight,
        width = window.innerWidth;

    var scene = new THREE.Scene(); // Creates a new scene

    var camera = new THREE.PerspectiveCamera( 70, width / height, 1, 10000 );
    scene.add(camera);

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

    var starsGeometry = new THREE.Geometry(); // creates new geometry

    for ( var i = 0; i < 10000; i ++ ) {  // Adds a partilce on each loop i < 10000 = 9999 particles rendered
      var star = new THREE.Vector3(); 
      star.x = THREE.Math.randFloatSpread( 2000 );
      star.y = THREE.Math.randFloatSpread( 2000 );
      star.z = THREE.Math.randFloatSpread( 2000 );

      starsGeometry.vertices.push( star );
    }

    var starsMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true} );
    var starField = new THREE.Points( starsGeometry, starsMaterial );

    scene.add( starField );

    // Render loop to move through star field
    var render = () => {
      requestAnimationFrame( render ); // requestAnimationFrame will pause when the user navigates to a new tab
      starField.rotation.z -= 0.0004;
      renderer.render( scene, camera );
    };

    render();

    var render2 = () => {
        requestAnimationFrame( render2 );
        starField.rotation.y = 0;
        starField.scale.z -= 0.006;
        renderer.render( scene, camera );
    }

  },

  beforeDestroy: function () {
    // clear fps stats script
    // fpsStats = null
    //clear scene three js
    // starsGeometry.dispose();
    // starsMaterial.dispose();
  }
}
</script>