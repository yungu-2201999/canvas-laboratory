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
      var fillImg = new Image();
      fillImg.src = "./assets/canvas1.png";
      fillImg.style = "width: 100%;height: 100%;";
      fillImg.onload = function() {
        var fillPattern = ctx.createPattern(fillImg, "no-repeat");
        ctx.fillStyle = fillPattern;
        ctx.fillRect(0, 0, 200, 200);
      }
    }
  }
  