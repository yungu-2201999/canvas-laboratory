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
    
  }
}