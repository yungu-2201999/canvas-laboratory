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
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var angleInRadians = (45 * Math.PI) / 180;
    var x = 50;
    var y = 100;
    var width = 40;
    var height = 40;

    ctx.translate(x + 0.5 * width, y + 0.5 * height);
    ctx.rotate(angleInRadians);
    ctx.fillStyle = "red";
    ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var angleInRadians = (75 * Math.PI) / 180;
    var x = 100;
    ctx.translate(x + 0.5 * width, y + 0.5 * height);
    ctx.rotate(angleInRadians);
    ctx.fillStyle = "red";
    ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var angleInRadians = (100 * Math.PI) / 180;
    var x = 150;
    ctx.translate(x + 0.5 * width, y + 0.5 * height);
    ctx.rotate(angleInRadians);
    ctx.fillStyle = "red";
    ctx.fillRect(-0.5 * width, -0.5 * height, width, height);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var angleInRadians = (125 * Math.PI) / 180;
    var x = 200;
    ctx.translate(x + 0.5 * width, y + 0.5 * height);
    ctx.rotate(angleInRadians);
    ctx.fillStyle = "red";
    ctx.fillRect(-0.5 * width, -0.5 * height, width, height);
  }
}
