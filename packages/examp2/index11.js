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
    // 改变这里、
    ctx.fillStyle = "black";
    ctx.fillRect(10, 10, 50, 50);

    var x = 100;
    var y = 100;
    var width = 50;
    var height = 50;

    ctx.translate(x + 0.5 * width, y + 0.5 * height);
    ctx.rotate((Math.PI * 45) / 180);
    ctx.fillStyle = "red";
    ctx.fillRect(-0.5 * width, -0.5 * height, width, height);
  }
}
