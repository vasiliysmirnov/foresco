<template>
    <div id="container">

      <script type="x-shader/x-vertex" id="vertexshader">
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
          gl_PointSize = size * ( 70.0 / -mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
        }
      </script>
      <script type="x-shader/x-fragment" id="fragmentshader">
        uniform sampler2D texture;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4( vColor, 1.0 );
          gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
        }
      </script>

    </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'foresco-stars',
  data: function () {
    return {
      renderer: null,
      scene: null,
      camera: null,
      shaderMaterial: null,
      particleSystem: null,
      uniforms: null,
      geometry: null,
      particles: 100000,
      radius: 200,
    }
  },
  methods: {
    onWindowResize: function() {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
		},
    init: function() {
			this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
			this.camera.position.z = 300;
			this.scene = new THREE.Scene();
			this.uniforms = {
				texture: { value: new THREE.TextureLoader().load( require('~/static/img/spark1.png') ) }
			};
			this.shaderMaterial = new THREE.ShaderMaterial( {
				uniforms: this.uniforms,
				vertexShader: document.getElementById( 'vertexshader' ).textContent,
				fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
				blending: THREE.AdditiveBlending,
				depthTest: false,
				transparent: true,
				vertexColors: true
			} );
			this.radius = 200;
			this.geometry = new THREE.BufferGeometry();
			var positions = [];
			var colors = [];
			var sizes = [];
			var color = new THREE.Color();
			for ( var i = 0; i < this.particles; i ++ ) {
				positions.push( ( Math.random() * 2 - 1 ) * this.radius );
				positions.push( ( Math.random() * 2 - 1 ) * this.radius );
				positions.push( ( Math.random() * 2 - 1 ) * this.radius );
				color.setHSL( i / this.particles, 1.0, 0.5 );
				colors.push( color.r, color.g, color.b );
				sizes.push( 20 );
			}
			this.geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
			// geometry.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
			this.geometry.addAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1 ).setDynamic( true ) );
			this.particleSystem = new THREE.Points( this.geometry, this.shaderMaterial );
			this.scene.add( this.particleSystem );
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.autoClear = true;
			this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      
			var container = document.getElementById( 'container' );
			container.appendChild( this.renderer.domElement );
			
      window.addEventListener( 'resize', this.onWindowResize, false );
		},
    render: function() {
			var time = Date.now() * 0.005;
			this.particleSystem.rotation.z = 0.01 * time;
			var sizes = this.geometry.attributes.size.array;
			for ( var i = 0; i < this.particles; i ++ ) {
				sizes[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );
			}
			this.geometry.attributes.size.needsUpdate = true;
			this.renderer.render( this.scene, this.camera );
    },
    animate: function() {
			requestAnimationFrame( this.animate );
			this.render();
    },
    enterTheSite: function(){
      // console.log('trigger'); TODO: fix this shiiiiit! trigger is working eternally
      requestAnimationFrame( this.enterTheSite );
      this.particleSystem.scale.z += 0.006;
      this.geometry.attributes.size.needsUpdate = true;
      this.renderer.render( this.scene, this.camera );
    },
  },
  mounted () {

		this.init();
    this.animate();

  },
  beforeDestroy: function () {
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.renderer.clear();
    this.particles = 0;
    cancelAnimationFrame(this.animate);
    cancelAnimationFrame(this.enterTheSite);
    this.renderer.domElement.addEventListener('dblclick', null, false);
    this.shaderMaterial.dispose();
    this.geometry.dispose();
    this.renderer.info.programs[0].destroy();
  },
  destroy: function () {
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