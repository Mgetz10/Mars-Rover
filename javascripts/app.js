// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
      case "W":
      rover.direction = "S";
      break;
      case "S":
      rover.direction = "E";
      break;
      case "E":
      rover.direction = "N";
      break;
    }
    console.log("Rover Direction: " + rover.direction);
}

function turnRight(){
  console.log("turnRight was called");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("Rover Direction: " + rover.direction);
}

function moveForward(){
  console.log("moveForward was called")
  rover.travelLog.push(" [" + rover.x + "][" + rover.y + "]");
  switch (rover.direction) {
    case "N":
      if (rover.y > 0){
        rover.y--;
        if (isObstacle(rover.x, rover.y)){
          rover.y++;
          console.log("ouch!");
        }
      }
      break;
    case "E":
      if (rover.x < 9){
        rover.x++;
        if (isObstacle(rover.x, rover.y)){
          rover.x--;
          console.log("ouch!");
        }
      }
      break;
    case "S":
      if (rover.y < 9){
        rover.y++;
        if (isObstacle(rover.x, rover.y)){
          rover.y--;
          console.log("ouch!");
        }
      }
      break;
    case "W":
      if (rover.x > 0){
        rover.x--;
        if (isObstacle(rover.x, rover.y)){
          rover.x++;
          console.log("ouch!");
        }
      }
      break;
  }
  console.log("Rover Position: " + rover.x + ", " + rover.y);
}

function moveBackwards(){
  console.log("moveBackwards was called")
  rover.travelLog.push(" [" + rover.x + "][" + rover.y + "]");
  switch (rover.direction) {
    case "N":
      if (rover.y < 9){
        rover.y++;
        if (isObstacle(rover.x, rover.y)){
          rover.y--;
          console.log("ouch!");
        }
      }
      break;
    case "E":
      if (rover.x > 0){
        rover.x--;
        if (isObstacle(rover.x, rover.y)){
          rover.x++;
          console.log("ouch!");
        }
      }
      break;
    case "S":
      if (rover.y > 0){
        rover.y--;
        if (isObstacle(rover.x, rover.y)){
          rover.y++;
          console.log("ouch!");
        }
      }
      break;
    case "W":
      if (rover.x < 9){
        rover.x++;
        if (isObstacle(rover.x, rover.y)){
          rover.x--;
          console.log("ouch!");
        }
      }
      break;
  }
  console.log("Rover Position: " + rover.x + ", " + rover.y);
}

function commandString(commands){
  for (let i = 0; i < commands.length; i++) {
    if (isValid(commands[i])) {
      switch (commands[i]) {
        case "r":
        turnRight();
        break;
        case "l":
        turnLeft();
        break;
        case "f":
        moveForward();
        break;
        case "b":
        moveBackwards();
      }
    }
  }
}

function travelLog() {
  console.log("Travel Log:" + rover.travelLog)
}

function isValid(char) {
  let validResult = false;
  if (
      char === 'r' || 
      char === 'l' ||
      char === 'f' ||
      char === 'b') {
        validResult = true;
      }
  return validResult;
}

let grid = [];
for (var i = 0; i < 10; i++){
  grid.push([]);
  for (var j = 0; j < 10; j++){
    grid[i].push(0);
  }
}

for (let i = 0; i < 4; i++){
  grid[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = 1;
}

function isObstacle(x, y){
  let obstacleResult = false;
  if (grid[x][y] === 1){
    obstacleResult = true;
  }
  return obstacleResult;
}