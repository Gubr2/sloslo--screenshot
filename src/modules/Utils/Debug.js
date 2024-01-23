import * as dat from 'dat.gui'
import Stats from 'stats.js'

export default class Debug {
  constructor() {
    // // // // // // // // // // // // // // // // // // // // //
    // DAT GUI
    this.gui = new dat.GUI({
      width: 300,
    })

    // // // // // // // // // // // // // // // // // // // // //
    // FPS
    this.stats = new Stats()
    this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(this.stats.dom)
  }
}
