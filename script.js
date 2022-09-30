// function for changing background if 1 appears or hold is clicked
function changebg(turn) {
  if (!turn) {
    document.querySelector(".box1").style.backgroundColor = "#ed50f1";
    document.querySelector(".box2").style.backgroundColor = "rgb(173, 88, 145)";
  } else {
    document.querySelector(".box1").style.backgroundColor = "rgb(173, 88, 145)";
    document.querySelector(".box2").style.backgroundColor = "#ed50f1";
  }
}

// go all dull for better ux if win
function win() {
  document.querySelector(".box1").style.backgroundColor = "rgb(173, 88, 145)";
  document.querySelector(".box2").style.backgroundColor = "rgb(173, 88, 145)";
}

// event listener for new game
document.querySelector(".new_game").addEventListener("click", function () {
  document.querySelector(".score1").textContent = 0;
  document.querySelector(".score2").textContent = 0;
  document.querySelector(".curr1_score").textContent = 0;
  document.querySelector(".curr2_score").textContent = 0;
  document.querySelector(".num").textContent = "?";
  net1 = curr1 = curr2 = net2 = 0;
  changebg(false);
});

// variables to keep track of scores
let x = 0,
  curr1 = 0,
  net1 = 0,
  curr2 = 0,
  net2 = 0,
  turn = true;

// event listener when someone want to roll dice
document.querySelector(".roll").addEventListener("click", function () {
  //computing dice digit
  x = Math.round(Math.random() * 6) + 1;

  // case if we get 1 on dice roll
  if (x === 1) {
    if (turn) {
      curr1 = 0;
      document.querySelector(".curr1_score").textContent = curr1;
    } else {
      curr2 = 0;
      document.querySelector(".curr2_score").textContent = curr2;
    }
    document.querySelector(".num").textContent = x;
    changebg(turn);
    turn = !turn;
  }

  // otherwise
  else {
    document.querySelector(".num").textContent = x;
    if (turn) {
      curr1 += x;
      document.querySelector(".curr1_score").textContent = curr1;
    } else {
      curr2 += x;
      document.querySelector(".curr2_score").textContent = curr2;
    }
  }
});
// event listener for hold button
document.querySelector(".hold").addEventListener("click", function () {
  if (turn) {
    net1 += curr1;
    document.querySelector(".score1").textContent = net1;
    document.querySelector(".curr1_score").textContent = 0;
    if (net1 >= 100) {
      document.querySelector(".won").style.display = "flex";
      win();
      // break;
    } else changebg(turn);
    curr1 = 0;
  } else {
    net2 += curr2;
    document.querySelector(".score2").textContent = net2;
    document.querySelector(".curr2_score").textContent = 0;
    curr2 = 0;
    if (net2 >= 100) {
      document.querySelector(".won").style.display = "flex";
      win();
    } else changebg(turn);
  }

  turn = !turn;
  x = 0;
  document.querySelector(".num").textContent = x;
});
