import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import  CustomGeo from './CustomGeo'

console.log(CustomGeo);



class ShowRoom {
  public container: HTMLElement | undefined | null;
  public camera: THREE.Camera;
  public scence: THREE.Scene;
  public renderer: THREE.WebGLRenderer;
  public canvas: HTMLElement;
  public width: number = 0;
  public height: number = 0;
  public control: OrbitControls;
  constructor() {

    this.container = document.getElementById("mainContainer");
    this.width = this.container?.clientWidth || 800;
    this.height = this.container?.clientHeight || 600;
    this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 1.0, 100);
    this.scence = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      antialias:true,
    });
    this.renderer.setSize(this.width, this.height);
    this.canvas = this.renderer.domElement;
    this.container?.appendChild(this.canvas);
    this.camera.position.set(0, 0, 30)
    // this.testScene(); 
    this.initControl();
    this.initHelper()
    this.testGeo();
    this.run();
  }

  private testGeo() {
    const contourSize = 10;
    const halfContour = 5
    const points = [
      new THREE.Vector3(-contourSize, -contourSize, 0),
      new THREE.Vector3(contourSize, -contourSize, 0),
      new THREE.Vector3(contourSize, contourSize, 0),
      new THREE.Vector3(-contourSize, contourSize, 0),
    ];

    const holes = [
      new THREE.Vector3(-halfContour, -halfContour, 0),
      new THREE.Vector3(halfContour, -halfContour, 0),
      new THREE.Vector3(halfContour, halfContour, 0),
      new THREE.Vector3(-halfContour, halfContour, 0),
    ];

    const mat = new THREE.Matrix4();
    mat.compose(new THREE.Vector3(5, 0, 0), new THREE.Quaternion(0, 0, 0, 1), new THREE.Vector3(1,1,1))
    holes.forEach((item)=>{
      item.applyMatrix4(mat)
    })


    points.push(...holes);

    const mesh = CustomGeo.GenPlaneShape(points);
    this.scence.add(mesh);
  }



  private testScene() {
    const box = new THREE.BoxGeometry(5, 5, 5);
    const boxMesh = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    this.scence.add(boxMesh);
  }

  private initHelper() {
    const axesHelper = new THREE.AxesHelper(100);
    this.scence.add(axesHelper);
  }
  private initControl() {
      this.control = new OrbitControls(this.camera, this.canvas);
      this.control.enableDamping = true;
  }


  

  run() {
    this.renderer.render(this.scence, this.camera);
    this.control.update();
    requestAnimationFrame(() => {
      this.run();
    })
  }
}

new ShowRoom();



// import  CustomGeo from './CustomGeo'
// class ShowRoom {
//   constructor() {
//     console.log('init ...')
//     new CustomGeo();
//   }

// }

new ShowRoom();