class Scene1 extends Phaser.Scene{
  constructor(){
    super("bootgame")
  }

  preload(){
    this.load.image("background", "./assents/images/background.png")

    this.load.image("ship", "./assents/images/ship.png")
    this.load.image("ship2", "./assents/images/ship2.png")
    this.load.image("ship3", "./assents/images/ship3.png")


  }

  create(){

    this.add.text(0,0,"Carregando jogo ...")
    //setTimeout( this.scene.start("playgame"), 4000)           //assim n deu certo 
    //setTimeout(()=> this.scene.start("playgame"), 4000)       //assim deu certo
    this.scene.start("playgame")
  }
}