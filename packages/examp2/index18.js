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
    var gr = ctx.createLinearGradient(0, 0, 0, 100);

    gr.addColorStop(0, "red");
    gr.addColorStop(0.5, "yellow");
    gr.addColorStop(1, "green");

    ctx.fillStyle = gr;
    ctx.strokeStyle = gr;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 0);
    ctx.lineTo(100, 50);
    ctx.lineTo(50, 100);
    ctx.lineTo(0, 100);

    ctx.lineTo(0, 0);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}
