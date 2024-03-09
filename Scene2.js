class Scene2 extends Phaser.Scene{
  constructor(){
    super("playgame")
  }

  create(){
    this.add.text(400,300, "Jogar agora", { font: '100px Arial', fill: 'red'})
  }
}