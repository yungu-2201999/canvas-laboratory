window.addEventListener(
  "load",
  function () {
    canvasApp();
  },
  false
);

const image = new Image();
image.src = "./assets/image.png";
image.addEventListener("load", canvasApp, false);

function canvasApp() {
  if (!canvasSupport()) return;
  else {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  }
  function canvasSupport() {
    return !!document.createElement("canvas").getContext;
  }
  drawScreen();
  function drawScreen() {
    ctx.fillStyle = "#aaaaaa";
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(0, 0, 820, 500);
    ctx.fillRect(0, 0, 820, 500);
    ctx.drawImage(image, 0, 0, 820, 500, 0,0,720,500);
  }
}
