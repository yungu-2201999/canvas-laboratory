window.addEventListener(
  "load",
  function () {
    canvasApp();
  },
  false
);

const image = new Image();
image.src = "./assets/壁纸.jpg";
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
    var windowX = 0;
    var windowY = 0;
    var windowWidth = 500;
    var windowHeight = 500;

    var viewPortWidth = 100;
    var viewPortHeight = 100;

    ctx.drawImage(
      image,
      windowX,
      windowY,
      windowWidth * 2,
      windowHeight * 2,
      0,
      0,
      viewPortWidth,
      viewPortHeight
    );
  }
}
