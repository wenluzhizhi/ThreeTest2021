"use strict";
// import * as THREE from 'three';
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import  {EarCut} from  '../libs/EarCut';
// import  CustomGeo from './CustomGeo'
exports.__esModule = true;
// console.log(CustomGeo);
//  console.log(EarCut)
// class ShowRoom {
//   public container: HTMLElement | undefined | null;
//   public camera: THREE.Camera;
//   public scence: THREE.Scene;
//   public renderer: THREE.WebGLRenderer;
//   public canvas: HTMLElement;
//   public width: number = 0;
//   public height: number = 0;
//   public control: OrbitControls;
//   constructor() {
//     this.container = document.getElementById("mainContainer");
//     this.width = this.container?.clientWidth || 800;
//     this.height = this.container?.clientHeight || 600;
//     this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 1.0, 100);
//     this.scence = new THREE.Scene();
//     this.renderer = new THREE.WebGLRenderer({
//       antialias:true,
//     });
//     this.renderer.setSize(this.width, this.height);
//     this.canvas = this.renderer.domElement;
//     this.container?.appendChild(this.canvas);
//     this.camera.position.set(0, 0, 30)
//     this.testScene(); 
//     this.initControl();
//     this.initHelper()
//     this.testGeo();
//     this.run();
//   }
//   private testGeo() {
//     const points = [
//       new THREE.Vector3(0, 0),
//       new THREE.Vector3(100, 0, 0),
//       new THREE.Vector3(100, 100, 0),
//       new THREE.Vector3(0, 100, 0)
//     ];
//     CustomGeo.GenPlaneShape(points);
//   }
//   private testScene() {
//     const box = new THREE.BoxGeometry(5, 5, 5);
//     const boxMesh = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: 0xff0000 }))
//     this.scence.add(boxMesh);
//   }
//   private initHelper() {
//     const axesHelper = new THREE.AxesHelper(100);
//     this.scence.add(axesHelper);
//   }
//   private initControl() {
//       this.control = new OrbitControls(this.camera, this.canvas);
//       this.control.enableDamping = true;
//   }
//   run() {
//     this.renderer.render(this.scence, this.camera);
//     this.control.update();
//     requestAnimationFrame(() => {
//       this.run();
//     })
//   }
// }
// new ShowRoom();
var CustomGeo_1 = require("./CustomGeo");
var ShowRoom = /** @class */ (function () {
    function ShowRoom() {
        console.log('init ...');
        new CustomGeo_1["default"]();
    }
    return ShowRoom;
}());
new ShowRoom();
