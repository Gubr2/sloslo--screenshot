import * as THREE from 'three'

import Camera from './Camera'
import Renderer from './Renderer'

import World from './World/World'

import Time from './Utils/Time'
import Sizes from './Utils/Sizes'
import Debug from './Utils/Debug'

let instance = null

export default class Gl {
  constructor(_canvas) {
    // Singleton
    if (instance) {
      return instance
    }

    instance = this

    this.canvas = _canvas

    // Utils
    this.time = new Time()
    this.sizes = new Sizes()
    this.debug = new Debug()

    // Default
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()

    // Geometry
    this.world = new World()

    // Update
    this.time.on('tick', () => {
      this.update()
    })

    // Resize
    this.sizes.on('resize', () => {
      this.resize()
    })
  }

  update() {
    this.debug.stats.begin()

    this.renderer.update()
    this.world.update()

    this.debug.stats.end()
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }
}
