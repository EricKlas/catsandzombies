let catsfound = 0;

function addCat() {
  let character = characters.find((char) => char.role === "cat");

  var div = document.getElementById("locationdiv");
  var cat = document.createElement("IMG");
  cat.setAttribute("src", "images/cat.png");
  cat.setAttribute("id", "catexist");
  cat.setAttribute("class", "catimage");
  div.appendChild(cat);

  character.coords[0].x = newPostion(size);
  character.coords[0].z = newPostion(size);

  document.getElementById("locationtext").innerHTML =
    "Du hittade en katt! kattens namn är: " + character.name;
}

function updateScore() {
  document.getElementById("catscore").innerHTML =
    "Du har hittat " + catsfound + " katter!";
}

function checkEncounters() {
  var catexist = document.getElementById("catexist");
  if (catexist) {
    catexist.parentNode.removeChild(catexist);
    updateCatName();
    catsfound += 1;
    updateScore();
  }
  let player = characters.find((char) => char.role === "player");
  let playerPos = player.coords[0];

  characters.forEach((char) => {
    if (char.coords[0].x === playerPos.x && char.coords[0].z === playerPos.z) {
      if (char.role === "zombie") {
        window.location.href = "gameover.html";
      } else if (char.role === "cat") {
        addCat();
      }
    }
  });
}

function newPostion(size) {
  return Math.floor(Math.random() * size);
}

function catCompass() {
    let player = characters.find(char => char.role === "player");
    let cat = characters.find(char => char.role === "cat");


    let directionX = cat.coords[0].x - player.coords[0].x;
    let directionZ = player.coords[0].z - cat.coords[0].z;

    let angleRadians = Math.atan2(directionZ, directionX);
    let angleDegrees = angleRadians * (180 / Math.PI);

    rotateCatArrowImage(angleDegrees - 180);
}

function rotateCatArrowImage(angleDegrees) {
    document.getElementById('catarrow').style.transform = `rotate(${angleDegrees}deg)`;
}

function zombieCompass() {
    let player = characters.find(char => char.role === "player");
    let zombie = characters.find(char => char.role === "zombie");


    let directionX = zombie.coords[0].x - player.coords[0].x;
    let directionZ = player.coords[0].z - zombie.coords[0].z;

    let angleRadians = Math.atan2(directionZ, directionX);
    let angleDegrees = angleRadians * (180 / Math.PI);

    rotatezombieArrowImage(angleDegrees - 180);
}

function rotatezombieArrowImage(angleDegrees) {
    document.getElementById('zombiearrow').style.transform = `rotate(${angleDegrees}deg)`;
}
