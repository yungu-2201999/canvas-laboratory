window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded() {
  canvasApp();
}

function canvasSupport() {
  return !!document.createElement("canvas").getContext("2d");
}

function canvasApp() {
  if (!canvasSupport()) return;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  function drawScreen() {
    ctx.fillStyle = "#EEEEEE";
    ctx.fillRect(0,0,width,height);
  }
}
