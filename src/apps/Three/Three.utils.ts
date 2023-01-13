import {
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  MeshBasicMaterial,
  MeshPhongMaterial,
  HemisphereLight,
} from 'three';
import { ThreeAnimationWithPerspectiveCamera } from './Three.lib';

/**
 * @link https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
 * @param container
 * @returns The functions dedicated to run this sample
 */

export class DocsCubeThreeAnimation extends ThreeAnimationWithPerspectiveCamera {
  private cube: Mesh | undefined;

  protected createCamera(): PerspectiveCamera {
    return new PerspectiveCamera(75, 1, 0.1, 1000);
  }

  protected setupScene(scene: Scene, camera: PerspectiveCamera): void {
    camera.position.z = 5;
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
      color: 0xf4bb00,
    });
    this.cube = new Mesh(geometry, material);
    scene.add(this.cube);
  }

  protected animate(): void {
    if (this.cube != null) {
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
    }
  }
}

/**
 * @link https://github.com/mrdoob/three.js/tree/r148 for the sample
 * @param container
 * @returns The functions dedicated to run this sample
 */
export class SrcCubeThreeAnimation extends ThreeAnimationWithPerspectiveCamera {
  private cube: Mesh | undefined;

  protected createCamera(): PerspectiveCamera {
    return new PerspectiveCamera(70, 1, 0.01, 10);
  }

  protected setupScene(scene: Scene, camera: PerspectiveCamera): void {
    camera.position.z = 1;
    const geometry = new BoxGeometry(0.2, 0.2, 0.2);
    const material = new MeshNormalMaterial();
    this.cube = new Mesh(geometry, material);
    scene.add(this.cube);
  }

  protected animate(time: number): void {
    if (this.cube != null) {
      this.cube.rotation.x = time / 2000;
      this.cube.rotation.y = time / 1000;
    }
  }
}

export class LightingThreeAnimation extends ThreeAnimationWithPerspectiveCamera {
  private cube: Mesh | undefined;

  protected createCamera(): PerspectiveCamera {
    return new PerspectiveCamera(75, 1, 0.1, 1000);
  }

  protected setupScene(scene: Scene, camera: PerspectiveCamera): void {
    camera.position.x = 0;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.rotateX(DocsCubeThreeAnimation.degToRad(-45));
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshPhongMaterial({
      color: 0xf4bb00,
    });
    this.cube = new Mesh(geometry, material);
    scene.add(this.cube);

    const light = new HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
  }

  protected animate(time: DOMHighResTimeStamp): void {
    if (this.cube != null) {
      this.cube.rotation.x = time / 2000;
      this.cube.rotation.y = time / 1000;
      this.cube.rotation.z = time / 3000;
    }
  }
}
