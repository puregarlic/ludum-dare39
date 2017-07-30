import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor({ game, x, y }) {
    super(game, x, y, 'orb')
    this.anchor.setTo(0.5, 1.0)
    this.level = 100
  }

  drain(amt) {
    this.level -= amt
    if (this.level <= 0) {
      return false
    } else {
      return true
    }
  }
}
