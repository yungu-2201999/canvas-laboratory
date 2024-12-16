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
    ctx.fillRect(20, 20, 25, 25);
 

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var angleInRadians = (45 * Math.PI) / 180;
    ctx.rotate(angleInRadians);
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 50, 50);
    
  }
}
