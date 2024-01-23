import * as THREE from 'three'

import Gl from '../Gl'
import Plane from './Geometry/Plane'

export default class World {
  constructor() {
    this.gl = new Gl()
    this.plane = new Plane()

    this.gl.scene.fog = new THREE.Fog('#fff', 750, 1500)
  }

  update() {
    this.plane.update()
  }
}
