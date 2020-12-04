let x = `<img src="img/x.png" alt="x" />`;
let o = `<img src="img/o.png" alt="o" />`;
let count = 1;
let M = [];
let n = 3;
// let xscr = 0;
// let oscr = 0;
// document.getElementById("x").innerHTML = `Eli - X: ${xscr}`;
// document.getElementById("o").innerHTML = `Veli - O: ${oscr}`;



onload = function () {
  Start();
};

function Start() {
  count = 1;
  Arr();
  Table();
}

function Arr() {
  for (let i = 0; i < n; i++) {
    M[i] = [];
  }
}

function Table() {
  let tbl = "<table>";
  for (let i = 0; i < n; i++) {
    tbl += "<tr>";
    for (let j = 0; j < n; j++) {
      M[i][j] = M[i][j] === undefined ? "" : M[i][j];
      tbl += `<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
    }
    tbl += "</tr>";
  }
  tbl += "</table>";
  document.getElementsByTagName("main")[0].innerHTML = tbl;
}

function Click(i, j) {
  if (M[i][j] === "") {
    if (count % 2 == 0) {
      M[i][j] = o;
    } else {
      M[i][j] = x;
    }
    count++;
    Table();
    setTimeout(Check, 300);
    setTimeout(Row, 300);
    setTimeout(Col, 300);
   

  }
  
}

function Check() {
  if (M[0][0] == M[1][1] && M[0][0] == M[2][2] && M[0][0] != "") {
    alert("Win! ");
    // if (M[0][0] == x){
    //   xscr+1;
    // }
    // else {
    //   oscr+1;
    // }
    Start();
    

  }

  if (M[0][2] == M[1][1] && M[0][2] == M[2][0] && M[0][2] != "") {
    alert("Win! " );
    Start();
  }


}
function Row() {

  if (M[0][0] == M[1][0] && M[0][0] == M[2][0] && M[0][0] != "") {
    alert("Win! " );
    Start();
  }

  if (M[0][1] == M[1][1] && M[0][1] == M[2][1] && M[0][1] != "") {
    alert("Win! " );
    Start();
  }
  if (M[0][2] == M[1][2] && M[0][2] == M[2][2] && M[0][2] != "") {
    alert("Win! " );
    Start();

  }

}

function Col() {

  if (M[0][0] == M[0][1] && M[0][0] == M[0][2] && M[0][0] != "") {
    alert("Win! " );
    Start();
  }

  if (M[1][0] == M[1][1] && M[1][0] == M[1][2] && M[1][0] != "") {
    alert("Win! " );
    Start();
  }
  if (M[2][0] == M[2][1] && M[2][0] == M[2][2] && M[2][0] != "") {
    alert("Win! " );
    Start();

  }

}