window.addEventListener("load", () => {
  canvasApp();
});

function canvasSupport() {
  return !!document.createElement("canvas").getContext;
}
var message = "Hello World"
const input = document.getElementById("textBox"); 
input.addEventListener("keyup", (e) => {
      var target = e.target;
      canvasApp(target.value);
})

function canvasApp() {
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
    
  }
}
