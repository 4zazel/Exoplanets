import * as THREE from 'three';

import { useEffect, useRef } from "react";

function Shape({planet}) {
  const refContainer = useRef(null);
  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(1200, 600);

    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.SphereGeometry(3, 45, 45)

    const light = new THREE.HemisphereLight( 0xffffff, 0x080808, 4 );
    scene.add( light );

    var texture = new THREE.TextureLoader().load('img/texture' + planet.id + ".png" );
    var mapTexture = new THREE.MeshStandardMaterial({
      map: texture,
    });
    var sphere = new THREE.Mesh(geometry, mapTexture);

    sphere.scale.set(1, 1, 1)
    scene.add(sphere);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.004;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      while (scene.children.length)
        {
          scene.remove(scene.children[0]);
        }
        renderer.setSize(0, 0)
    }
  }, [planet]);
  return (
    <div ref={refContainer}></div>

  );
}
export default Shape