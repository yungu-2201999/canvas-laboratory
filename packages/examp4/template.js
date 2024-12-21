window.addEventListener("load", function () {
    canvasApp();
  },false);
  function canvasApp() {
    if (!canvasSupport()) return;
    else {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
    }
    function canvasSupport() {
      return !!document.createElement("canvas").getContext;
    }
  
  
  
  
  }
  