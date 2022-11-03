let estadoDoJogo = true;
let playerTurno = "X";
let jogadorDaVez = document.getElementById("sJogadorDaVez");
jogadorDaVez.innerText = playerTurno;
let jogadorA = "";
let jogadorB = "";
let quantidadeJogadas = 0;
let ganhador = document.getElementById("ganhador");
let placarA = 0;
let placarB = 0;
let numeroJogadasA = 0;
let numeroJogadasB = 0;


function selecionarCasa(event, numCasa) {
  let marcarCasa = event.target;
  if (estadoDoJogo && (playerTurno === "X")){
    // alert(`Jogador A clicou na casa ${numCasa}`);
    marcarCasa.innerText = "X"
    jogadorA += numCasa;
    numeroJogadasA++;
    trocarTurno();
    verificarLinhaJogadorA(jogadorA);
  } else if(estadoDoJogo && (playerTurno === "O")){
    // alert(`Jogador B clicou na casa ${numCasa}`);
    marcarCasa.innerText = "O"
    jogadorB += numCasa;
    numeroJogadasB++;
    verificarLinhaJogadorB(jogadorB);
    trocarTurno();
   
  }else{
    
  } 
  quantidadeJogadas++;
  marcarCasa.style = "pointer-events: none;"
}

function trocarTurno() {
  if (playerTurno === "X") {
    playerTurno = "O";
  } else {
    playerTurno = "X"
  }
  playerVez();
}

function playerVez() {
  jogadorDaVez.innerText = playerTurno;
}

function verificarLinhaJogadorA(jogadorA){
  if(jogadorA.includes(1) && jogadorA.includes(2) && jogadorA.includes(3)){
    if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
    
  }else if(jogadorA.includes(4) && jogadorA.includes(5) && jogadorA.includes(6)){
    if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
  }else if(jogadorA.includes(7) && jogadorA.includes(8) && jogadorA.includes(9)){
    if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
  }else{
    verificarColunaJogadorA(jogadorA);
  }
}

function verificarLinhaJogadorB(jogadorB){
  if(jogadorB.includes(1) && jogadorB.includes(2) && jogadorB.includes(3)){
    if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else if(jogadorB.includes(4) && jogadorB.includes(5) && jogadorB.includes(6)){
    if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else if(jogadorB.includes(7) && jogadorB.includes(8) && jogadorB.includes(9)){
    if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else{
    verificarColunaJogadorB(jogadorB);
  }
}

function verificarColunaJogadorA(jogadorA){
  if(jogadorA.includes(1) && jogadorA.includes(4) && jogadorA.includes(7)){
    if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
  }else if(jogadorA.includes(2) && jogadorA.includes(5) && jogadorA.includes(8)){
    if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
  }else if(jogadorA.includes(3) && jogadorA.includes(6) && jogadorA.includes(9)){
   if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
  }else{
    verificarDiagonalJogadorA(jogadorA);
  }
}

function verificarColunaJogadorB(jogadorB){
  if(jogadorB.includes(1) && jogadorB.includes(4) && jogadorB.includes(7)){
    if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else if(jogadorB.includes(2) && jogadorB.includes(5) && jogadorB.includes(8)){
    if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else if(jogadorB.includes(3) && jogadorB.includes(6) && jogadorB.includes(9)){
    if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else{
    verificarDiagonalJogadorB(jogadorB);
  }
}

function verificarDiagonalJogadorA(jogadorA){
  if(jogadorA.includes(1) && jogadorA.includes(5) && jogadorA.includes(9)){
    if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
  }else if(jogadorA.includes(3) && jogadorA.includes(5) && jogadorA.includes(7)){
    if(numeroJogadasA <= 4){
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA += 4;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: X")
      ganhador.innerText = "X";
      placarA++;
      pontoA.innerText = placarA;
      return estadoDoJogo = false;
    }
  }else{
    verificarVelha(quantidadeJogadas);
  }
}

function verificarDiagonalJogadorB(jogadorB){
  if(jogadorB.includes(1) && jogadorB.includes(5) && jogadorB.includes(9)){
    if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else if(jogadorB.includes(3) && jogadorB.includes(5) && jogadorB.includes(7)){
      if(numeroJogadasB <= 4){
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB += 4;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }else{
      alert("O jogador vencedor foi: O")
      ganhador.innerText = "O";
      placarB++;
      pontoB.innerText = placarB;
      return estadoDoJogo = false;
    }
  }else{
    verificarVelha(quantidadeJogadas);
  }
}

function verificarVelha(quantidadeJogadas){
  if(quantidadeJogadas === 8){
    alert("Deu Velha");
    ganhador.innerText = "Deu Velha";
  }
}

function reiniciarJogo(){
  limpar();
  ativarCelulas();
estadoDoJogo = true;
jogadorA = "";
jogadorB = "";
quantidadeJogadas = 0;
numeroJogadasA = 0;
numeroJogadasB = 0;
  
}

function limpar(){
  clear1.innerHTML = "";
  clear2.innerHTML = "";
  clear3.innerHTML = "";
  clear4.innerHTML = "";
  clear5.innerHTML = "";
  clear6.innerHTML = "";
  clear7.innerHTML = "";
  clear8.innerHTML = "";
  clear9.innerHTML = "";
}

function ativarCelulas(){
  clear1.style = "pointer-events: all;"
  clear2.style = "pointer-events: all;"
  clear3.style = "pointer-events: all;"
  clear4.style = "pointer-events: all;"
  clear5.style = "pointer-events: all;"
  clear6.style = "pointer-events: all;"
  clear7.style = "pointer-events: all;"
  clear8.style = "pointer-events: all;"
  clear9.style = "pointer-events: all;"
}