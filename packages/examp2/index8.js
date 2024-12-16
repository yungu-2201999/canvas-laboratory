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
      ctx.fillRect(10, 10, 200, 200);

      ctx.fillStyle = "red";
      ctx.fillRect(1, 1, 50, 50);

      ctx.gloablCompositeOperation = "source-over";
      ctx.fillRect(60, 1, 50, 50);

      ctx.gloablCompositeOperation = "destination-atop";
      ctx.fillRect(1, 60, 50, 50);

      ctx.globalAlpha = 0.5;

      ctx.globalCompositeOperation = "source-atop";
      ctx.fillRect(60, 60, 50, 50);
 

    }
  }
  