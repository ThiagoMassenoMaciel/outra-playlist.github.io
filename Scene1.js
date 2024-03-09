class Scene1 extends Phaser.Scene{
  constructor(){
    super("bootgame")
  }

  create(){
    this.add.text(200,200,"Carregando jogo ...")
    //setTimeout( this.scene.start("playgame"), 4000)           //assim n deu certo 
    //setTimeout(()=> this.scene.start("playgame"), 4000)       //assim deu certo
    this.scene.start("playgame")
  }
}