window.addEventListener(
  "load",
  function () {
    // canvasApp();
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
    var windowWidth = 1200;
    var windowHeight = 1200;

    var viewPortWidth = 200;
    var viewPortHeight = 200;


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

    const imageData1 = ctx.createImageData(200, 300);
    console.log(imageData1);
    const imageData2 = ctx.getImageData(0, 0, 300, 200);
    console.log("imageData2:", imageData2);
    ctx.putImageData(imageData2, 200, 100, 50, 50, 150, 150);
  }
}
