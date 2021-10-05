import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

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
    const box = new THREE.BoxGeometry(5, 5, 5);
    const boxMesh = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: 0xff0000 }))
    this.scence.add(boxMesh);
    this.initControl();
    this.initHelper()
    this.run();
  }

  private initHelper() {
    const axesHelper = new THREE.AxesHelper(100);
    this.scence.add(axesHelper);
  }
  private initControl() {
      this.control = new OrbitControls(this.camera, this.canvas);
      this.control.enableDamping = true;
  }


  // private async LoadFurnitureSVG(length: number, width: number) {
  //   let name;
  //   name = "https://img.inbase.in-deco.com/crm_saas/release/20210923/b229d3b5534c42689521878e063ae71a/三人沙发.svg";

  //   const loader = new SVGLoader();
  //   const sc = 50;
  //   const paths = await loader.loadAsync(name);

  //   var group = new THREE.Group();
  //   const viewBox = paths.xml.attributes.viewBox;
  //   const data = viewBox.value.split(" ");
  //   var lScale = length * sc / data[2];
  //   var wScale = width * sc / data[3];



  //   for (var i = 0; i < paths.paths.length; i++) {
  //     var path = paths.paths[i];
  //     var shapes = path.toShapes(true);

  //     for (var j = 0; j < shapes.length; j++) {
  //       var shape = shapes[j];
  //       shape.autoClose = false;
  //       let geo = new THREE.Geometry();
  //       var points = geo.setFromPoints(shape.getPoints());
  //       points.vertices.forEach(element => {
  //         element.set(element.x / sc, element.y / sc, element.z / sc);
  //       });
  //       var mesh = new THREE.Line(points, new THREE.MeshBasicMaterial({color:0xff0000}))
  //       group.add(mesh);
  //     }
  //   }

  //   group.rotateX(Math.PI / 2);
  //   let box = new THREE.Box3();
  //   group.scale.set(lScale, wScale, 1);
  //   box.expandByObject(group);
  //   let center = new THREE.Vector3(0, 0, 0);
  //   box.getCenter(center);
  //   group.position.set(-center.x, 0, -center.z)
  //   this.scence.add(group);
  // }


  run() {
    this.renderer.render(this.scence, this.camera);
    this.control.update();
    requestAnimationFrame(() => {
      this.run();
    })
  }
}

new ShowRoom();