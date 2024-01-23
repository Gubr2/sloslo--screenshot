import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Gl from './Gl'

export default class Camera {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000)
    this.instance.position.z = 750 // fov

    this.instance.fov = 2 * Math.atan(window.innerHeight / 2 / this.instance.position.z) * (180 / Math.PI)

    this.setOrbitControls()
    this.instance.updateProjectionMatrix()
  }

  resize() {
    this.instance.aspect = this.gl.sizes.width / this.gl.sizes.height
    this.instance.updateProjectionMatrix()
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.gl.canvas)
    this.controls.enableDamping = true
  }
}
