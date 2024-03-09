class Scene2 extends Phaser.Scene{
  constructor(){
    super("playgame")
  }

  create(){
    this.background = this.add.image(0,0,"background")
    this.background.setOrigin(0,0)
    // config.width/2   =    128  
    // config.height/2   =    36
    // é aqui que eu vou passar por parametro os indices de linha e coluna para representar os blocos de parede e chão
    this.ship1 = this.add.image(config.width/2 - 50 , config.height/2 , "ship")
    this.ship2 = this.add.image(config.width/2      , config.height/2 , "ship2")
    this.ship3 = this.add.image(config.width/2 + 50 , config.height/2 , "ship3")

    //this.ship1.setScale(1) para aumentar os quadradinhos do chao e pareide é so aumentar a scale do quadradinhos para os diferentes níveis
    //this.ship1.setScale(0.8)  medio
    //this.ship1.setScale(0.3)  dificil
    
    this.add.text(0,0, "Jogar agora", { font: '10px Arial', fill: 'white'})
  }
}