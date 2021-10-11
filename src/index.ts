import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import PlaneGeoWithHole from './PlaneGeoWithHole'
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
      antialias: true,
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

    const mat1 = new THREE.Matrix4();
    const rot1 = new THREE.Quaternion();
    rot1.setFromEuler(new THREE.Euler(0, THREE.MathUtils.DEG2RAD * 0, 0));
    mat1.compose(new THREE.Vector3(0, 0, 0), rot1, new THREE.Vector3(1, 1, 1))

    points.forEach((item) => {
      item.applyMatrix4(mat1)
    })



    const holes = [
      new THREE.Vector3(-halfContour, -halfContour, 0),
      new THREE.Vector3(halfContour, -halfContour, 0),
      new THREE.Vector3(halfContour, halfContour, 0),
      new THREE.Vector3(-halfContour, halfContour, 0),
    ];

    const mat = new THREE.Matrix4();
    const rot = new THREE.Quaternion();
    rot.setFromEuler(new THREE.Euler(0, THREE.MathUtils.DEG2RAD * 45, 0));
    mat.compose(new THREE.Vector3(0, 0, 13), rot, new THREE.Vector3(1, 1, 1))
    holes.forEach((item) => {
      item.applyMatrix4(mat)
    })







    // const circlePoints = PlaneGeoWithHole.getFiting(points, holes);

    // circlePoints.forEach((item) => {
    //   this.addNewPoint(item)
    // })

    const geo = PlaneGeoWithHole.getPlaneGeoHole(holes, []);
    this.scence.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({color:0xff0000})));

    const holeGeo = PlaneGeoWithHole.getPlaneGeoAwayHole(points, holes);
    this.scence.add(new THREE.Mesh(holeGeo, new THREE.MeshBasicMaterial({color:0x00ff00})));
    //PlaneGeoWithHole.getD2Matrix(points,this.scence);

  }

  private addNewPoint(pos: THREE.Vector3) {
    var geometry = new THREE.SphereBufferGeometry(0.5, 32, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var sphere = new THREE.Mesh(geometry, material);
    sphere.position.copy(pos);
    this.scence.add(sphere);
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

