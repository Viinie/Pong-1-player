// variaveis da bolinha
let xbolinha = 747.5;
let ybolinha = 357.5;
let dbolinha = 25;
let rbolinha = dbolinha /2;

let vxbolinha = 10;
let vybolinha = 10;


// variaveis da minha raquete
let xraquete1 = 20
let yraquete1 = 287.5
let craquete = 15
let araquete = 140


// variaveis do oponente
let xraquete2 = 1465
let yraquete2 = 150
let yvelocidadeoponente;
let colidiu = false


// placar do jogo
let meuspontos = 0
let pontosoponente = 0

function setup() {
  createCanvas(1495, 715);
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha();
  verificacolisao();
  mostraraquete(xraquete1, yraquete1);
  mostraraquete(xraquete2, yraquete2);
  movimentaraquete1();
  movimentaraquete2()
  colisao1bib(xraquete1, yraquete1);
  colisao1bib(xraquete2, yraquete2);
  placar();
  marcaponto();
} 

function mostrabolinha(){
  circle(xbolinha, ybolinha, dbolinha);
}

function mostraraquete (x, y){
  rect (x, y, craquete, araquete)
}

function movimentabolinha(){
  xbolinha += vxbolinha;
  ybolinha += vybolinha;
}

function verificacolisao (){
  if (xbolinha + rbolinha > width || xbolinha - rbolinha < 0){
    vxbolinha *= -1;
  }
  if (ybolinha + rbolinha > height || ybolinha - rbolinha < 0){
    vybolinha *= -1;
  }
}

function movimentaraquete1(){
  if (keyIsDown(87)){
    yraquete1 -= 10;
  }
  if (keyIsDown(83)){
    yraquete1 += 10;
  }
}

function movimentaraquete2(){
  yvelocidadeoponente = ybolinha - yraquete2 - craquete / 2 - 30
  yraquete2 += yvelocidadeoponente
}

function colisao1bib(x, y){
  colidiu = 
    collideRectCircle(x, y, craquete, araquete, xbolinha, ybolinha, rbolinha)
  if(colidiu){
    vxbolinha *= -1
  }
}

function placar(){
  fill(255)
  text(meuspontos, 597.5, 50)
  text(pontosoponente, 897.5, 50)
}

function marcaponto(){
  if (xbolinha > 1485){
    meuspontos += 1
  }
    if (xbolinha < 10){
    pontosoponente += 1
  }
}