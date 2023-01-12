import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, MeshNormalMaterial } from 'three';

/**
 * @link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
 * @param container
 * @returns The functions dedicated to run this sample
 */
export const getDocsCubeAnimation = (container: HTMLElement) => {
  const scene = new Scene();
  const renderer = new WebGLRenderer();

  let camera = new PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  const updateRendererAndCameraAspect = () => {
    const { width: newContainerWidth, height: newContainerHeight } = container.getBoundingClientRect();
    camera.aspect = newContainerWidth / newContainerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newContainerWidth, newContainerHeight);
  };

  updateRendererAndCameraAspect();

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({
    color: 0xf4bb00,
  });
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  let runAnimation = false;

  const animate = (time: DOMHighResTimeStamp) => {
    if (runAnimation) {
      requestAnimationFrame(animate);
      cube.rotation.x = time / 2000;
      cube.rotation.y = time / 1000;
      renderer.render(scene, camera);
    }
  };

  const update = () => {
    updateRendererAndCameraAspect();
  };

  const mount = () => {
    container.appendChild(renderer.domElement);
  };
  const unmount = () => {
    stop();
    container.removeChild(renderer.domElement);
  };

  const start = () => {
    update();
    runAnimation = true;
    animate(0);
  };

  const stop = () => {
    runAnimation = false;
  };

  return { start, stop, update, mount, unmount };
};

/**
 * @link https://github.com/mrdoob/three.js/tree/r148 for the sample
 * @param container
 * @returns The functions dedicated to run this sample
 */
export const getSrcCubeAnimation = (container: HTMLElement) => {
  const scene = new Scene();
  const renderer = new WebGLRenderer();

  let camera = new PerspectiveCamera(70, 1, 0.01, 10);
  camera.position.z = 1;

  const updateRendererAndCameraAspect = () => {
    const { width: newContainerWidth, height: newContainerHeight } = container.getBoundingClientRect();
    camera.aspect = newContainerWidth / newContainerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newContainerWidth, newContainerHeight);
  };

  updateRendererAndCameraAspect();

  const geometry = new BoxGeometry(0.2, 0.2, 0.2);
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  let runAnimation = false;

  const animate = () => {
    if (runAnimation) {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
  };

  const update = () => {
    updateRendererAndCameraAspect();
  };

  const mount = () => {
    container.appendChild(renderer.domElement);
  };
  const unmount = () => {
    stop();
    container.removeChild(renderer.domElement);
  };

  const start = () => {
    update();
    runAnimation = true;
    animate();
  };

  const stop = () => {
    runAnimation = false;
  };

  return { start, stop, update, mount, unmount };
};
