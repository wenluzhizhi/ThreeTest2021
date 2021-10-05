/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './CustomGeo'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// import * as THREE from 'three';\r\n// import {OrbitControls} from \"three/examples/jsm/controls/OrbitControls\";\r\n// import  {EarCut} from  '../libs/EarCut';\r\n// import  CustomGeo from './CustomGeo'\r\n// console.log(CustomGeo);\r\n//  console.log(EarCut)\r\n// class ShowRoom {\r\n//   public container: HTMLElement | undefined | null;\r\n//   public camera: THREE.Camera;\r\n//   public scence: THREE.Scene;\r\n//   public renderer: THREE.WebGLRenderer;\r\n//   public canvas: HTMLElement;\r\n//   public width: number = 0;\r\n//   public height: number = 0;\r\n//   public control: OrbitControls;\r\n//   constructor() {\r\n//     this.container = document.getElementById(\"mainContainer\");\r\n//     this.width = this.container?.clientWidth || 800;\r\n//     this.height = this.container?.clientHeight || 600;\r\n//     this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 1.0, 100);\r\n//     this.scence = new THREE.Scene();\r\n//     this.renderer = new THREE.WebGLRenderer({\r\n//       antialias:true,\r\n//     });\r\n//     this.renderer.setSize(this.width, this.height);\r\n//     this.canvas = this.renderer.domElement;\r\n//     this.container?.appendChild(this.canvas);\r\n//     this.camera.position.set(0, 0, 30)\r\n//     this.testScene(); \r\n//     this.initControl();\r\n//     this.initHelper()\r\n//     this.testGeo();\r\n//     this.run();\r\n//   }\r\n//   private testGeo() {\r\n//     const points = [\r\n//       new THREE.Vector3(0, 0),\r\n//       new THREE.Vector3(100, 0, 0),\r\n//       new THREE.Vector3(100, 100, 0),\r\n//       new THREE.Vector3(0, 100, 0)\r\n//     ];\r\n//     CustomGeo.GenPlaneShape(points);\r\n//   }\r\n//   private testScene() {\r\n//     const box = new THREE.BoxGeometry(5, 5, 5);\r\n//     const boxMesh = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: 0xff0000 }))\r\n//     this.scence.add(boxMesh);\r\n//   }\r\n//   private initHelper() {\r\n//     const axesHelper = new THREE.AxesHelper(100);\r\n//     this.scence.add(axesHelper);\r\n//   }\r\n//   private initControl() {\r\n//       this.control = new OrbitControls(this.camera, this.canvas);\r\n//       this.control.enableDamping = true;\r\n//   }\r\n//   run() {\r\n//     this.renderer.render(this.scence, this.camera);\r\n//     this.control.update();\r\n//     requestAnimationFrame(() => {\r\n//       this.run();\r\n//     })\r\n//   }\r\n// }\r\n// new ShowRoom();\r\n\r\nclass ShowRoom {\r\n    constructor() {\r\n        console.log('init ...');\r\n        new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './CustomGeo'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n    }\r\n}\r\nnew ShowRoom();\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBQzNFLDJDQUEyQztBQUMzQyx1Q0FBdUM7QUFFdkMsMEJBQTBCO0FBRTFCLHVCQUF1QjtBQUd2QixtQkFBbUI7QUFDbkIsc0RBQXNEO0FBQ3RELGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDLGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLG1DQUFtQztBQUNuQyxvQkFBb0I7QUFFcEIsaUVBQWlFO0FBQ2pFLHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQseUZBQXlGO0FBQ3pGLHVDQUF1QztBQUN2QyxnREFBZ0Q7QUFDaEQsd0JBQXdCO0FBQ3hCLFVBQVU7QUFDVixzREFBc0Q7QUFDdEQsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCx5Q0FBeUM7QUFDekMseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixNQUFNO0FBRU4sd0JBQXdCO0FBQ3hCLHVCQUF1QjtBQUN2QixpQ0FBaUM7QUFDakMsc0NBQXNDO0FBQ3RDLHdDQUF3QztBQUN4QyxxQ0FBcUM7QUFDckMsU0FBUztBQUVULHVDQUF1QztBQUN2QyxNQUFNO0FBSU4sMEJBQTBCO0FBQzFCLGtEQUFrRDtBQUNsRCw0RkFBNEY7QUFDNUYsZ0NBQWdDO0FBQ2hDLE1BQU07QUFFTiwyQkFBMkI7QUFDM0Isb0RBQW9EO0FBQ3BELG1DQUFtQztBQUNuQyxNQUFNO0FBQ04sNEJBQTRCO0FBQzVCLG9FQUFvRTtBQUNwRSwyQ0FBMkM7QUFDM0MsTUFBTTtBQUtOLFlBQVk7QUFDWixzREFBc0Q7QUFDdEQsNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQyxvQkFBb0I7QUFDcEIsU0FBUztBQUNULE1BQU07QUFDTixJQUFJO0FBRUosa0JBQWtCO0FBSWxCLE9BQVEsU0FBUyxNQUFNLGFBQWEsQ0FBQTtBQUNwQyxNQUFNLFFBQVE7SUFDWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBRUY7QUFFRCxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=\n\n//# sourceURL=webpack://ThreeTest2021/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;