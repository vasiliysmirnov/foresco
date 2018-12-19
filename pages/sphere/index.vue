<template>
    <div>
        
    </div>
</template>

<script>
import * as THREE from 'three'
export default {
    mounted () {
        var container;
        var camera, scene, renderer;
        var spheres = [];
        var mouseX = 0, mouseY = 0;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        init();
        animate();
        function init() {
            container = document.createElement( 'div' );
            document.body.appendChild( container );
            camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 );
            camera.position.z = 1;
            scene = new THREE.Scene();

            var starsGeometry = new THREE.Geometry(); // creates new geometry

            for ( var i = 0; i < 10000; i ++ ) {  // Adds a partilce on each loop i < 10000 = 9999 particles rendered
                var star = new THREE.Vector3(); 
                star.x = THREE.Math.randFloatSpread( 2000 );
                star.y = THREE.Math.randFloatSpread( 2000 );
                star.z = THREE.Math.randFloatSpread( 2000 );

                starsGeometry.vertices.push( star );
            }

            var starsMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
            var starField = new THREE.Points( starsGeometry, starsMaterial );

            scene.add( starField );

            var cubeCamera = new THREE.CubeCamera( 1, 10000, 512 );
            scene.add( cubeCamera );

            var geometry = new THREE.SphereBufferGeometry( 200, 32, 32 );
            var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: cubeCamera.renderTarget, refractionRatio: 0.95 } );

            var mesh = new THREE.Mesh( geometry, material );
            scene.add( mesh );
            spheres.push( mesh );            

            //
            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );
            //
            window.addEventListener( 'resize', onWindowResize, false );

            cubeCamera.position.copy( mesh.position );
            cubeCamera.update( renderer, scene );
            
        }
        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
        function onDocumentMouseMove( event ) {
            mouseX = ( event.clientX - windowHalfX ) * 10;
            mouseY = ( event.clientY - windowHalfY ) * 10;
        }
        //
        function animate() {
            requestAnimationFrame( animate );
            render();
        }
        function render() {
            // camera.position.z -= 0.0004;
            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY - camera.position.y ) * .05;
            camera.lookAt( scene.position );
            renderer.render( scene, camera );
        }
    }
}
</script>

<style lang="stylus" scoped>
canvas
    width: 100%
    height: 100%
</style>
