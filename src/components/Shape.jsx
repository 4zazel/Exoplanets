import * as THREE from 'three';

import { useEffect, useRef } from "react";

function Shape({planet}) {
  const refContainer = useRef(null);
  useEffect(() => {
   
    console.log("SPHERE")

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.SphereGeometry(3, 45, 45)

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );

    var texture = new THREE.TextureLoader().load('img/texture' + planet.id + ".png" );
    var mapTexture = new THREE.MeshStandardMaterial({
      map: texture,
    });
    var sphere = new THREE.Mesh(geometry, mapTexture);


    sphere.scale.set(0.5, 0.5, 0.5)
    scene.add(sphere);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div ref={refContainer}></div>

  );
}
export default Shape