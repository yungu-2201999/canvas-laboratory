document.getElementById("btn").style.display = "none";

var alpha = 0;
var fadeIn = true;
var text = "Hello World";
var helloWorldImage = new Image();
helloWorldImage.src = "./assets/canvas1.png";

canvasApp();

function canvasApp() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  function drawScene() {
    // 背景
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 640, 480);

    ctx.globalAlpha = 0.25;
    ctx.drawImage(helloWorldImage, 0, 0);

    if (fadeIn) {
      alpha += 0.01;
      if (alpha >= 1) {
        alpha = 1;
        fadeIn = false;
      }
    } else {
      alpha -= 0.01;
      if (alpha <= 0) {
        alpha = 0;
        fadeIn = true;
      }
    }

    ctx.font = "72px Arial";
    ctx.textBaseline = "top";

    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(text, 150, 100);
  }
  function gameLoop() {
    window.setTimeout(gameLoop, 20);
    drawScene();
  }
  gameLoop();
}
