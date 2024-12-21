window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
  canvasApp();
}

function canvasApp() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var mouseX;
  var mouseY;

  var tileSheet = new Image();
  tileSheet.addEventListener("load", eventSheetLoaded, false);
  tileSheet.src = "./assets/壁纸.jpg";
  var imageData = ctx.createImageData(32, 32);

  function eventSheetLoaded() {
    startUp(); // 画布加载完成，开始绘制
  }
  function startUp() {
    ctx.fillStyle = "#aaaaaa";
    ctx.fillRect(0, 0, 256, 256);

    drawTileSheet();
  }
  function drawTileSheet() {
    ctx.drawImage(tileSheet, 0, 0);
  }
  function highlightTile(tileId, x, y) {
    ctx.fillStyle = "#aaaaaa";
    ctx.fillRect(0, 0, 256, 256);
    drawTileSheet();
    imageData = ctx.getImageData(x, y, 32, 32);
    for (j = 3; j < imageData.data.length; j += 4) {
      imageData.data[j] = 128;
    }
    var startX = Math.floor(tileId % 8) * 32;
    var startY = Math.floor(tileId / 8) * 32;
    ctx.strokeStyle = "red";
    ctx.strokeRect(startX, startY, 32, 32);
  }
  function onMouseMove(e) {
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
  }
  function onMouseClick(e) {
    console.log(`click: ${mouseX}, ${mouseY}`);
    if (mouseY < 128) {
      var col = Math.floor(mouseX / 32);
      var row = Math.floor(mouseY / 32);
      var tileId = row * 7 + col + row;
      highlightTile(tileId, col * 32, row * 32);
    } else {
      var col = Math.floor(mouseX / 32);
      var row = Math.floor(mouseY / 32);

      ctx.putImageData(imageData, col * 32, row * 32);

    }
  }
  canvas.addEventListener("mousemove", onMouseMove, false);
  canvas.addEventListener("click", onMouseClick, false);
}
