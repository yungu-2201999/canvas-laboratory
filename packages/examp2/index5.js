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
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 5;
      ctx.moveTo(0, 0);
      ctx.lineTo(100, 300);
      ctx.arcTo(350, 350, 100, 100, 40);
      ctx.stroke();
      ctx.closePath();
    }
  }
  