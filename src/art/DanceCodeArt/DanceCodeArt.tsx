import React from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  DoubleSide,
  Clock,
  FontLoader,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  TextGeometry,
  WebGLRenderer,
  Group,
} from 'three';
// import * as dat from 'dat.gui';
// const gui = new dat.GUI();

/**
 *  I like it too much to get into it. - 好きすぎてのめり込んでる
 */
export const DanceCodeArt: React.FC = () => {
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    // setup
    const scene = new Scene();

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    let { width, height } = sizes;
    window.addEventListener('resize', () => {
      // Update sizes
      width = window.innerWidth;
      height = window.innerHeight;
      // Update camera
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      // Update renderer
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const fontLoader = new FontLoader();
    const group = new Group();
    fontLoader.load('fonts/helvetiker_regular.typeface.json', (font) => {
      const texts = [
        {
          text: 'Dance',
          position: 0.6,
        },
        {
          text: 'code',
          position: 0,
        },
        {
          text: 'Art',
          position: -0.6,
        },
      ];

      texts.map(({ text, position }) => {
        const parameters = {
          font: font,
          size: 0.5,
          height: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5,
        };
        const geometry = new TextGeometry(text, parameters);
        geometry.center();
        const material = new MeshNormalMaterial({ side: DoubleSide });
        const mesh = new Mesh(geometry, material);
        // Make a line for letters
        mesh.position.y = position;
        group.add(mesh);
      });
    });
    scene.add(group);

    const camera = new PerspectiveCamera(75, width / height, 0.1, 100);

    camera.position.x = 0.01;
    camera.position.y = 0.01;
    camera.position.z = 0.01;
    scene.add(camera);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const renderer = new WebGLRenderer({ canvas });
    renderer.setClearColor('#1d1d1d');
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const clock = new Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      group.rotation.x = Math.sin(elapsedTime * 0.03);
      group.rotation.y = Math.sin(elapsedTime * -0.03);

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  };
  return <canvas ref={onCanvasLoaded} />;
};
