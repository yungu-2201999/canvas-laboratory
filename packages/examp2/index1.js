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
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#ff00ff";
    ctx.lineWidth = 2;
    ctx.fillRect(10, 10, 40, 40);
    ctx.strokeRect(0, 0, 60, 60);
    ctx.clearRect(20, 20, 20, 20);
  }
}
