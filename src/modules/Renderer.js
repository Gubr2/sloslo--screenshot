import * as THREE from 'three'

import Gl from './Gl'

export default class Rendered {
  constructor() {
    this.gl = new Gl()

    this.instance = new THREE.WebGLRenderer({
      canvas: this.gl.canvas,
      alpha: true,
      preserveDrawingBuffer: true,
    })

    this.instance.setPixelRatio(window.devicePixelRatio)
    this.instance.outputEncoding = THREE.sRGBEncoding
    this.instance.setSize(window.innerWidth, window.innerHeight)
  }

  update() {
    this.instance.render(this.gl.scene, this.gl.camera.instance)
  }

  resize() {
    this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height)
    this.instance.setPixelRatio(Math.min(this.gl.sizes.pixelRatio, 2))
  }
}
