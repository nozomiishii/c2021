import React from 'react';
import { Layout } from 'src/components';
import {
  BoxGeometry,
  Clock,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const Home: React.FC = () => {
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    }
    const scene = new Scene();

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // init scene
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshNormalMaterial();
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    scene.add(camera);

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const renderer = new WebGLRenderer({ canvas });
    renderer.setClearColor('#1d1d1d');

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const clock = new Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      if (cube) {
        cube.rotation.x = elapsedTime * 0.5;
        cube.rotation.y = elapsedTime * 0.5;
      }

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  };
  return (
    <Layout title="NOZOMI ISHII = Dance + Code + Art">
      <canvas ref={onCanvasLoaded} />
    </Layout>
  );
};

export default Home;
