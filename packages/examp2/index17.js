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
      var gr = ctx.createLinearGradient(0, 0, 100, 0);

      gr.addColorStop(0, "red");
      gr.addColorStop(0.5, "yellow");
      gr.addColorStop(1, "green");

      ctx.strokeStyle = gr;
      ctx.strokeRect(10, 10, 100, 100);
      ctx.strokeRect(10, 110, 50, 100);
      ctx.strokeRect(10, 210, 200, 100);

    }
  }
  