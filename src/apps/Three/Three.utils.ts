import { Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshPhongMaterial, HemisphereLight, ConeGeometry, SphereGeometry } from 'three';
import ThreeAnimation, { KeyboardPresser, MouseDragger, MovementDirection, ThreeAnimationWithPerspectiveCamera } from './Three.lib';

export class LightingThreeAnimation extends ThreeAnimationWithPerspectiveCamera {
  private cube: Mesh | undefined;
  private mouseDragger: MouseDragger | undefined;
  private keyboardPresser: KeyboardPresser | undefined;

  /**
   * @link https://en.wikipedia.org/wiki/Spherical_coordinate_system on how to move the camera on spherical coords
   */
  private cameraRho = 4;
  // Azimuth (height on the horizon)
  private cameraPhi = Math.PI / 4;
  // Theta (in this case rotation on the Y axis)
  private cameraTheta = this.cameraPhi + 0;

  protected createCamera(): PerspectiveCamera {
    return new PerspectiveCamera(75, 1, 0.1, 1000);
  }

  protected setupScene(scene: Scene, camera: PerspectiveCamera): void {
    camera.position.setFromSphericalCoords(this.cameraRho, this.cameraPhi, this.cameraTheta);
    camera.lookAt(0, 0, 0);
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshPhongMaterial({
      color: 0xf4bb00,
    });
    this.cube = new Mesh(geometry, material);
    scene.add(this.cube);

    const cubeX = new Mesh(new ConeGeometry(0.1, 0.2), new MeshPhongMaterial({ color: 0xff0000 }));
    const cubeY = new Mesh(new ConeGeometry(0.1, 0.2), new MeshPhongMaterial({ color: 0x00ff00 }));
    const cubeZ = new Mesh(new ConeGeometry(0.1, 0.2), new MeshPhongMaterial({ color: 0x0000ff }));
    const sphere = new Mesh(new SphereGeometry(0.1), new MeshPhongMaterial({ color: 0xffffff }));
    cubeX.position.set(1, 0, 0);
    cubeX.rotation.z = -Math.PI / 2;
    cubeY.position.set(0, 1, 0);
    cubeZ.position.set(0, 0, 1);
    cubeZ.rotation.x = Math.PI / 2;

    scene.add(cubeX);
    scene.add(cubeY);
    scene.add(cubeZ);
    scene.add(sphere);

    const light = new HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
  }

  protected animate(time: DOMHighResTimeStamp, { camera }: { camera: PerspectiveCamera }): void {
    if (this.cube != null) {
      this.cube.rotation.set((time / 2000) % ThreeAnimation.P2, (time / 1000) % ThreeAnimation.P2, (time / 3000) % ThreeAnimation.P2);
      this.cube.position.set(
        this.getAxisRocker(4000, time) * 4 - 2,
        this.getAxisRocker(2000, time) * 2 - 1,
        this.getAxisRocker(6000, time) * 3 - 1.5
      );
    }
    // This will set camera position along a sphere
    camera.position.setFromSphericalCoords(this.cameraRho, this.cameraPhi, this.cameraTheta);
    camera.lookAt(0, 0, 0);
  }

  /**
   *
   * @param movementDuration Movement duration from one side to the other
   * @param time timestamp to calculate position in viewport
   * @returns a number between 0 and 1
   */
  private getAxisRocker(movementDuration: number, time: DOMHighResTimeStamp) {
    // Full movement duration is a double movement "back and forth"
    const fullMovementDuration = 2 * movementDuration;
    // Direction changes every single movement
    const isForward = Math.sign((time % fullMovementDuration) / movementDuration - 1) >= 0;
    // Reduce the easing axis input to a number between 0 and 1
    const easingInput = (time % movementDuration) / movementDuration;
    // Get the eased value to provide eased movement
    return this.easeInOutSine(isForward ? easingInput : 1 - easingInput);
  }

  private easeInOutSine(x: number): number {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }

  protected override setupCanvas(canvas: HTMLCanvasElement): void {
    this.mouseDragger = new MouseDragger(canvas, this.dragCameraAround.bind(this));
    this.keyboardPresser = new KeyboardPresser(document.documentElement, this.moveCameraAround.bind(this));
  }
  protected override teardownCanvas(): void {
    this.mouseDragger?.teardown();
    this.mouseDragger = undefined;
    this.keyboardPresser?.teardown();
    this.keyboardPresser = undefined;
  }

  private setCameraThetaDelta(delta: number) {
    // Since we can rotate as we please on the Y axis we limit values between 0 and 2 PI
    this.cameraTheta = ThreeAnimation.getNormalizedSphericAngle(this.cameraTheta + delta);
  }

  private setCameraPhiDelta(delta: number) {
    // Limit value between 0 and PI because full rotation's a bitch.
    this.cameraPhi = ThreeAnimation.limitNumericValue(0, Math.PI, this.cameraPhi + delta);
  }

  private setCameraRhoDelta(delta: number) {
    // Zoom in and out between 2 and 7 (empirically determined values, nothing scientific)
    this.cameraRho = ThreeAnimation.limitNumericValue(2, 7, this.cameraRho + delta);
  }

  private dragCameraAround({ x, y, z }: MovementDirection) {
    this.setCameraThetaDelta(-x / 100);
    this.setCameraPhiDelta(x / 100);
    this.setCameraRhoDelta(z / 100);
  }

  private getKeyDefaultDelta(delta: number, defaultDelta: number): number {
    return delta > 0 ? delta : defaultDelta;
  }

  private moveCameraAround(key: string, delta: number, preventDefault: () => void) {
    let willPreventDefault = true;
    switch (key) {
      // Move up
      case 'w':
        this.setCameraPhiDelta(this.getKeyDefaultDelta(delta, 50) / 1000);
        break;
      // Move left
      case 'a':
        this.setCameraThetaDelta(this.getKeyDefaultDelta(delta, 50) / 1000);
        break;
      // Move down
      case 's':
        this.setCameraPhiDelta(-this.getKeyDefaultDelta(delta, 50) / 1000);
        break;
      // Move right
      case 'd':
        this.setCameraThetaDelta(-this.getKeyDefaultDelta(delta, 50) / 1000);
        break;
      // Zoom in (moving towards center rho lowers)
      case '+':
        this.setCameraRhoDelta(-this.getKeyDefaultDelta(delta, 50) / 1000);
        break;
      // Zoom out (moving away from center rho increases)
      case '-':
        this.setCameraRhoDelta(this.getKeyDefaultDelta(delta, 50) / 1000);
        break;
      default:
        willPreventDefault = false;
        break;
    }
    if (willPreventDefault) {
      preventDefault();
    }
  }
}
