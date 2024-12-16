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
    ctx.fillStyle = "black";
    ctx.fillRect(10, 10, 200, 200);
    ctx.save();
    ctx.beginPath();

     // 裁切画布从(0,0)点至50 * 50的矩形
    ctx.rect(0,0,50,50);
    ctx.clip();

    // 红色圆
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(100, 100, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    // 整圆
    ctx.stroke();
    ctx.closePath();

    ctx.restore();

    // 再次裁切整个画布
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.clip();

    // 绘制一个没有裁切的蓝线
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(100, 100, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    // 整圆
    ctx.stroke();
    ctx.closePath();
  }
}
