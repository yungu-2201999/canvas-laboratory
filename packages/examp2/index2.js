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
      ctx.strokeStyle = "black";
      ctx.lineWidth = 10;
      ctx.lineCap = "square";
      ctx.beginPath();
      ctx.moveTo(20, 0);
      ctx.lineTo(150, 0);
      ctx.stroke();
      ctx.closePath();
    }
  }
  