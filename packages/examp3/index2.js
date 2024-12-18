window.addEventListener("load", () => {
  canvasApp();
});

function canvasSupport() {
  return !!document.createElement("canvas").getContext;
}

const input = document.getElementById("textBox");

input.addEventListener("keyup", (e) => {
  canvasApp(e.target.value);
}, false);
function canvasApp(message) {
  if (!canvasSupport()) return;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  drawScreen();
  function clearCanvas() {
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0, 0, w, h);
  }
  function drawScreen() {
    clearCanvas();
    // 改变这里
    ctx.fillStyle = "#FF0000";
    ctx.fillText(message || "", 100, 100);
  }
}
