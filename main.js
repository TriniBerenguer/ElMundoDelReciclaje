const backgroundWidth = document.getElementById("background").offsetWidth
let leftValue = backgroundWidth/2
let verticalPosition = 0
const moveElement = 10
const move = 35

document.onkeydown = function(e){
  if(e.key == 'ArrowRight' && leftValue < backgroundWidth - 86) {
    leftValue = leftValue + move;
    document.getElementById('character').style.left = leftValue+"px";
  } else if(e.key == 'ArrowLeft' && leftValue > 0) {
    leftValue = leftValue - move;
    document.getElementById('character').style.left = leftValue+"px";
  } else if(e.key == 'ArrowUp') {
    verticalPosition = verticalPosition - moveElement;
    document.getElementById('element').style.top = verticalPosition+"px";
  } else if(e.key == 'ArrowDown') {
    verticalPosition = verticalPosition + moveElement;
    document.getElementById('element').style.top = verticalPosition+"px";
  }

}

