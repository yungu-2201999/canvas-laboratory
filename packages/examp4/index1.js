window.addEventListener(
  "load",
  function () {
    canvasApp();
  },
  false
);

const image = new Image();
image.src ="./assets/image.png";
image.addEventListener("load", canvasApp ,false)

function canvasApp() {
  if (!canvasSupport()) return;
  else {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  }
  function canvasSupport() {
    return !!document.createElement("canvas").getContext;
  }
  drawScreen()
  function drawScreen() {
    
    ctx.drawImage(image, 0, 0, 100,50);
    ctx.drawImage(image, 0, 450);

  }
}
