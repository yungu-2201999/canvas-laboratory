window.addEventListener("load", () => {
  canvasApp();
});

function canvasSupport() {
  return !!document.createElement("canvas").getContext;
}

function canvasApp() {
  if (!canvasSupport()) return;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  drawScreen();
  function drawScreen() {
    // 改变这里

    ctx.shadowOffsetX = -4;
    ctx.shadowOffsetY = -4;
    ctx.shadowBlur = 4;
    ctx.shadowColor = "black";

    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 100, 100);

    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 4;
    ctx.shadowColor = "black";

    ctx.fillStyle = "red";
    ctx.fillRect(150, 10, 100, 100);

    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 4;
    ctx.shadowBlur = 8;
    ctx.shadowColor = "black";
    ctx.arc(200, 300, 100, 0, (Math.PI / 180) * 360, false);
    ctx.fill();
  }
}
