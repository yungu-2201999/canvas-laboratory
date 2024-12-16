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
    var gr = ctx.createRadialGradient(50, 50, 25, 100, 100, 100);

    gr.addColorStop(0, "red");
    gr.addColorStop(0.5, "yellow");
    gr.addColorStop(1, "green");

    ctx.fillStyle = gr;
    // ctx.fillRect(0, 0, 200, 200);
    ctx.arc(100, 100,100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
    ctx.fill()
  }
}
