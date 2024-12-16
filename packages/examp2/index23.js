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
      ctx.strokeStyle = "red";
      ctx.lineWidth = 5;
      ctx.moveTo(0, 0);
      ctx.lineTo(50, 0);
      ctx.lineTo(50,50);
      ctx.stroke();

      var isPoint1InPath1 = ctx.isPointInPath(2,0);
      var isPoint1InPath2 = ctx.isPointInPath(10,11);
      console.log(isPoint1InPath1); // true
      console.log(isPoint1InPath2); // false
      ctx.closePath();
    }
  }
  