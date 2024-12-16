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
    // 水平渐变值必须保持为0
    var gr = ctx.createLinearGradient(0, 0, 100, 0);

    gr.addColorStop(0, "rgb(255,0,0)");
    gr.addColorStop(0.5, "rgb(0,255,0)");
    gr.addColorStop(1, "rgb(255,0,0)");

    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, 100, 100);
    ctx.fillRect(0,100, 50 ,100)
    ctx.fillRect(0,200,200,100)
  }
}
