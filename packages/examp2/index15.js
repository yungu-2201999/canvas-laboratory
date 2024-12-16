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
    var x = 100;
    var y = 100;
    var width = 100;
    var height = 100;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(Math.PI * 45 /180);
    ctx.scale(2, 1);
    ctx.fillStyle = "red";
    ctx.fillRect(-0.5 * width, -0.5 * height,  width, height);
  }
}
