import { ShapeUtils } from "three"
import * as THREE from 'three';
import { Earcut } from '../libs/EarCut'
console.log(Earcut)


export default class CustomGeo {
   constructor() {
      console.log('CustomGeo....')
   }

   public static GenPlaneShape(points2: Array<THREE.Vector3>, holeArray: Array<THREE.Vector3>, color: THREE.Color) {
      const pos: Array<number> = [];
      const points = [...points2];
      points.push(...holeArray);
      const len = points2.length;
      points.forEach((item) => {
         pos.push(item.x);
         pos.push(item.y);
         pos.push(item.z);
      });
      let indexArray: Array<number> = [];
      if (holeArray.length != 0) {
         indexArray = Earcut.triangulate(pos, [len], 3);
      } else {
         indexArray = Earcut.triangulate(pos, [], 3);
      }

      const geo = new THREE.BufferGeometry();
      const vertices: Array<number> = [];
      indexArray.forEach((index) => {
         const p = points[index];
         vertices.push(p.x, p.y, p.z);
      })
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: color, side: 2 }));
      return mesh;
   }


   public static getFiting(points: Array<THREE.Vector3>, holePoints: Array<THREE.Vector3>) {
      const lineEquation = this.getPlaneEquation(points);
      const newPoints: Array<THREE.Vector3> = [];
      holePoints.forEach((item) => {
         const nw = CustomGeo.getProjectDotOnPlane(lineEquation, item);
         newPoints.push(nw);
      })
      return newPoints;
   }

   private static getPlaneEquation(points: Array<THREE.Vector3>) {
      const len = points.length;
      if (len < 3) {
         console.log("not exist one plane less three point");
         return;
      }
      // get first two points:
      const firstPoint = points[0];
      const scecond = points[1];
      const dir1 = scecond.clone().sub(firstPoint).normalize();
      let index = 2;
      let dir2 = points[index].clone().sub(firstPoint).normalize();
      while (index < len && Math.abs(dir2.dot(dir1)) >= 0.999) {
         index++;
         dir2 = points[index];
      }
      if (Math.abs(dir2.dot(dir1)) >= 0.999) {
         return;
      }
      const normal = dir1.clone().cross(dir2).normalize();
      // 方程的形式 ax + by + cz + d = 0;
      const d = normal.clone().dot(firstPoint);
      return new THREE.Vector4(normal.x, normal.y, normal.z, -d);
   }

   private static getProjectDotOnPlane(planeEquation: THREE.Vector4, dot: THREE.Vector3) {
      const normal = new THREE.Vector3(planeEquation.x, planeEquation.y, planeEquation.z);
      const normalP2 = normal.dot(normal);
      const t = (normal.dot(dot) + planeEquation.w) / normalP2;
      return new THREE.Vector3(dot.x - t * normal.x, dot.y - normal.y * t, dot.z - normal.z * t);
   }
}

