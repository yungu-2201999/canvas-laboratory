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
      ctx.lineJoin = "level";
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(25, 0);
      ctx.lineTo(25, 25);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(10, 50);
      ctx.lineTo(35, 50)
      ctx.lineTo(35, 75);
      ctx.stroke();
      ctx.closePath();

      ctx.lineJoin = "round";
      ctx.lineCap = "butt";
      ctx.beginPath();
      ctx.moveTo(10, 100);
      ctx.lineTo(35, 100);
      ctx.lineTo(35, 125);
      ctx.stroke();
      ctx.closePath();
    }
  }
  