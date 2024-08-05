
import * as THREE from 'three/build/three.module.js';
import ThreeBase from './ThreeBase.js';
export { default as getRandLetterNum } from './rand.js';
import { getCanvasText, getTextMesh } from './util.js';
export class WordCloud extends ThreeBase {
  constructor() {
    super();
    this.initCameraPos = [35, 35, 35];
    this.pos = {};
    // this.isDepthBuffer = true;
    // this.isAxis = true;
  }
  getPos() {
    let a = parseInt(Math.random() * this.that.data.length);
    if (this.pos[a]) {
      return this.getPos();
    } else {
      this.pos[a] = true;
      return a;
    }
  }
  animateAction() {
    if (this.objGroup) {
      if (this.objGroup.rotation.y >= Math.PI * 2) {
        this.objGroup.rotation.y = 0;
      } else {
        this.objGroup.rotation.y += 0.002;
      }
    }
  }
  createChart(that) {
    if (this.objGroup) {
      this.cleanObj(this.objGroup);
      this.objGroup = null;
      this.pos = {};
    }
    this.that = that;
    const l = that.data.length;
    const material = new THREE.MeshBasicMaterial({
      color: that.color
    });
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    that.data.forEach((item) => {
      if (max < item.value) {
        max = item.value;
      }
      if (min > item.value) {
        min = item.value;
      }
    });

    const size = max - min;

    this.objGroup = new THREE.Group();
    this.scene.add(this.objGroup);
    let textGroup = new THREE.Group();
    this.objGroup.add(textGroup);
    that.data.forEach((item, idx) => {
      let text = item.name;
      if (text) {
        const color = `rgb(${Math.random() * 255},${Math.random() * 255},${
          Math.random() * 255
        })`;
        const vector = new THREE.Vector3();
        const phi = Math.acos(THREE.MathUtils.lerp(-1, 1, idx / (that.data.length - 1)));

        const theta = Math.sqrt(that.data.length * Math.PI) * phi;

        vector.setFromSphericalCoords(that.radius, phi, theta);

        let s = THREE.MathUtils.lerp(
          that.minFontSize,
          that.maxFontSize,
          (item.value - min) / size
        );

        let { mesh, geometry } = getTextMesh(THREE, text, s, color);

        mesh.name = 'text' + idx;
        mesh.position.set(vector.x, vector.y, vector.z);

        geometry.lookAt(vector);
        geometry.translate(vector.x, vector.y, vector.z);

        textGroup.add(mesh);
      }
    });
    if (that.data.length < 50) {
      const g = new THREE.IcosahedronGeometry(that.radius * 2, 2);
      const m = new THREE.MeshBasicMaterial({
        color: that.color,
        transparent: true,
        opacity: 0.2,

        wireframe: true
      });
      const mm = new THREE.Mesh(g, m);
      this.objGroup.add(mm);
    }
    this.scene.fog = new THREE.FogExp2(new THREE.Color('#00000000'), 0.0035);
    this.setView(
      {
        x: 126.17633606807345,
        y: 126.17633606807341,
        z: 126.17633606807348
      },
      {
        x: 0,
        y: 0,
        z: 0
      }
    );
  }
}
