import { Scene, ShapeUtils } from "three"
import * as THREE from 'three';
import { Earcut } from '../libs/EarCut'
import PolyBool from 'polybooljs'

export default class PlaneGeoWithHole {
   constructor() {
   }

   public static getPlaneGeoHole(points2: Array<THREE.Vector3>, holeArray: Array<THREE.Vector3>) {
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
      return geo;
   }

   /**
    * 将要挖洞的平面：points
    * 挖洞的数据：holePoints
    * 该方法用于在被挖平面，找出洞的投影(此处还做了面的布尔运算)
    * @param points 
    * @param holePoints 
    * @returns 
    */
   public static getFiting(points: Array<THREE.Vector3>, holePoints: Array<THREE.Vector3>) {
      const lineEquation = this.getPlaneEquation(points);
      const newPoints: Array<THREE.Vector3> = [];
      holePoints.forEach((item) => {
         const nw = PlaneGeoWithHole.getProjectDotOnPlane(lineEquation, item);
         newPoints.push(nw);
      })

      const result = PlaneGeoWithHole.getD2Matrix(points, undefined);
      const mat = result[0];
      const mat_inverse = result[1];

      const pints_2d: Array<Array<number>> = [];
      const newPoints_2d: Array<Array<number>> = [];

      points.forEach((item) => {
         const v = item.clone().applyMatrix4(mat_inverse);
         pints_2d.push([v.x, v.y]);
      });

      newPoints.forEach((item) => {
         const v = item.clone().applyMatrix4(mat_inverse);
         newPoints_2d.push([v.x, v.y]);
      })
      const result2 = PolyBool.intersect(
         { regions: [pints_2d], inverted: false },
         { regions: [newPoints_2d], inverted: false },

      );
      const resultD3: Array<THREE.Vector3> = [];
      result2.regions[0].forEach((v) => {
         const nv = new THREE.Vector3(v[0], v[1], 0);
         nv.applyMatrix4(mat);
         resultD3.push(nv);
      });
      return resultD3;
   }

   public static getPlaneGeoAwayHole(points: Array<THREE.Vector3>, holeArray: Array<THREE.Vector3>) {
      const circlePoints = PlaneGeoWithHole.getFiting(points, holeArray);
      return PlaneGeoWithHole.getPlaneGeoHole(points, circlePoints);
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

   /**
    * 获取一个把3D平面转换到2D平面的矩阵
    */
   public static getD2Matrix(points: Array<THREE.Vector3>, scene: THREE.Scene) {
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
      const binNormal = normal.clone().cross(dir1);
      // 根据三个坐标轴构建新的坐标系
      const mat1 = new THREE.Matrix4();
      mat1.makeBasis(dir1, binNormal, normal);
      mat1.setPosition(firstPoint);
      const mat1_inverse = mat1.clone().invert();
      return [mat1, mat1_inverse];
   }


   private static addArrow(dir: THREE.Vector3, origin: THREE.Vector3, scene: THREE.Scene) {


      //normalize the direction vector (convert to vector of length 1)
      dir.normalize();
      var length = 5;
      var hex = 0xffff00;

      var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
      scene.add(arrowHelper);
   }

}

