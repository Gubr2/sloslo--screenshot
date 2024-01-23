import * as THREE from 'three'
import html2canvas from 'html2canvas'
import gsap from 'gsap'

import planeVertex from '../../Shaders/Vertex/planeVertex.glsl'
import planeFragment from '../../Shaders/Fragment/planeFragment.glsl'

import Gl from '../../Gl'

export default class Plane {
  constructor() {
    this.gl = new Gl()

    this.texture = null
    this.geometry = new THREE.PlaneGeometry(window.innerWidth * 3, window.innerHeight * 3)
    // this.material = new THREE.ShaderMaterial({
    //   //
    //   fragmentShader: planeFragment,
    //   vertexShader: planeVertex,
    //   side: THREE.DoubleSide,
    // })
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.gl.scene.add(this.mesh)

    this.capture = document.querySelector('#capture')

    setTimeout(() => {
      html2canvas(this.capture).then((canvas) => {
        this.texture = new THREE.CanvasTexture(canvas)
        this.texture.minFilter = THREE.NearestFilter

        this.mesh.material.map = this.texture
        this.mesh.material.needsUpdate = true

        // Opacity
        gsap.to(this.capture, {
          opacity: 0,
          duration: 0.5,
        })

        // Rotation
        gsap.to(this.mesh.rotation, {
          duration: 3,
          ease: 'power3.inOut',
          x: -Math.PI / 6,
          z: -Math.PI / 6,
        })

        // this.capture.style.opacity = 0.5
      })
    }, 2000)
  }

  update() {}
}
