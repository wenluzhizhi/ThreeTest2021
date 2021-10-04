import * as THREE from 'three';

class ShowRoom {
  public container: HTMLElement | undefined | null;
  public camera: THREE.Camera;
  public scence: THREE.Scene;
  public renderer: THREE.WebGLRenderer;
  constructor() {
    this.container = document.getElementById("mainContainer");
    this.camera = new THREE.PerspectiveCamera(60, 1.0, 1.0, 1000);
    this.scence = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.container?.append
    this.container?.appendChild( this.renderer.domElement );
  }

  run() {
     this.renderer.render(this.scence, this.camera);
     requestAnimationFrame(()=>{
       this.run();
     })
  }
}

new ShowRoom();