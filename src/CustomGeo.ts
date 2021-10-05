import { ShapeUtils } from "three"
import * as THREE from 'three';
import { Earcut } from '../libs/EarCut'
console.log(Earcut)


export default class CustomGeo {
   constructor() {
      console.log('CustomGeo....')
   }

   public static GenPlaneShape(points: Array<THREE.Vector3>) {
      const pos: Array<number> = [];
      points.forEach((item) => {
         pos.push(item.x);
         pos.push(item.y);
         pos.push(item.z);
      });
      const indexArray = Earcut.triangulate(pos, [4], 3);
      const geo = new THREE.BufferGeometry();
      const vertices: Array<number> = [];
      indexArray.forEach((index)=>{
         const p = points[index];
         vertices.push(p.x, p.y, p.z);
      })
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices),3));
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({color:0xfff000}));
      return mesh;
   }
}

