import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

abstract class ThreeAnimation<C extends Camera> {
  public static readonly P2 = 2 * Math.PI;

  public static degToRad(deg: number): number {
    return (deg * Math.PI) / 180;
  }
  public static radToDeg(rad: number): number {
    return (rad * 180) / Math.PI;
  }

  private scene = new Scene();
  private renderer = new WebGLRenderer();
  private camera: C;
  private isRunningAnimation = false;
  public constructor(private container: HTMLElement) {
    this.camera = this.createCamera();
    this.update();
  }
  /**
   * Use this method to setup the camera
   */
  protected abstract createCamera(): C;
  /**
   * This method is called to update the camera detail
   * Every time the update method is called
   * @param camera The current camera
   */
  protected abstract updateCamera(camera: C): void;

  /**
   * Setup the scene and mount the canvas inside the container
   */
  public mount() {
    this.setupScene(this.scene, this.camera);
    this.container.appendChild(this.renderer.domElement);
  }

  /**
   * Stop animation if running and remove the canvas from the container
   */
  public unmount() {
    this.stop();
    this.container.removeChild(this.renderer.domElement);
  }

  /**
   * Start an animation
   */
  public start() {
    if (!this.isRunningAnimation) {
      this.update();
      this.isRunningAnimation = true;
      this.runAnimation(0);
    }
  }

  /**
   * Stop the animation
   */
  public stop() {
    this.isRunningAnimation = false;
  }

  /**
   * Update renderer size and optionally the camera setting (Adjust camera aspect ratio on resize for example)
   */
  public update() {
    this.updateRenderer();
    this.updateCamera(this.camera);
  }

  /**
   * Utility method to get container sizes
   * @returns an object with `width` and `height` properties
   */
  protected getContainerSize(): Pick<DOMRect, 'width' | 'height'> {
    const { width, height } = this.container.getBoundingClientRect();
    return { width, height };
  }

  /**
   * Update the renderer size to match the size of the container
   */
  private updateRenderer() {
    const { width: newContainerWidth, height: newContainerHeight } = this.getContainerSize();
    this.renderer.setSize(newContainerWidth, newContainerHeight);
  }

  /**
   * Implement this method to setup the scene that will be rendered
   * @param scene The Scene object
   * @param camera The Camera object
   */
  protected abstract setupScene(scene: Scene, camera: C): void;

  /**
   * Every frame the animation is running it will call this function to update
   * scene data
   * @param time Timestamp from window.requestAnimationFrame
   * @param props An object with the current Scene and Camera objects
   */
  protected abstract animate(time: DOMHighResTimeStamp, props: { scene: Scene; camera: C }): void;

  private applyAnimationAndRenderFrame(time: DOMHighResTimeStamp) {
    this.animate(time, { scene: this.scene, camera: this.camera });
    this.renderer.render(this.scene, this.camera);
  }

  private runAnimation(time: DOMHighResTimeStamp) {
    if (this.isRunningAnimation) {
      window.requestAnimationFrame(this.runAnimation.bind(this));
      this.applyAnimationAndRenderFrame(time);
    }
  }

  /**
   * Render a single frame instead of starting an animation
   */
  public renderFrame() {
    this.update();
    this.applyAnimationAndRenderFrame(0);
  }

  public addContainerListener(...params: Parameters<InstanceType<typeof Element>['addEventListener']>) {
    this.container.addEventListener(...params);
  }

  public removeContainerListener(...params: Parameters<InstanceType<typeof Element>['removeEventListener']>) {
    this.container.removeEventListener(...params);
  }
}

export abstract class ThreeAnimationWithPerspectiveCamera extends ThreeAnimation<PerspectiveCamera> {
  protected updateCamera(camera: PerspectiveCamera): void {
    const { width: newContainerWidth, height: newContainerHeight } = this.getContainerSize();
    camera.aspect = newContainerWidth / newContainerHeight;
    camera.updateProjectionMatrix();
  }
}

export default ThreeAnimation;
