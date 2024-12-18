window.addEventListener("load", () => {
  canvasApp();
});
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function canvasSupport() {
  return !!document.createElement("canvas").getContext;
}
var message = "Hello World";
const input = document.getElementById("textBox");
input.addEventListener("keyup", (e) => {
  var target = e.target;
  canvasApp(target.value);
});

const btn = document.getElementById("changeSize");
btn.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    canvas.width = 200;
    canvas.height = 200;
    canvasApp();
  },
  false
);

const btn2 = document.getElementById("changeStyle");
btn2.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    canvas.style = "width:200px;height:200px;";
    canvasApp();
  },
  false
);

const btn3 = document.getElementById("btn");

btn3.addEventListener("click", () => {
  var imageDataDisplay = document.getElementById("imageDataDisplay");
  imageDataDisplay.value = canvas.toDataURL();
  const dom = document.createElement("iframe");
  dom.src = imageDataDisplay.value;
  dom.style="border:none;width:100%;height:100%"
  const newopen = window.open('',"canvasImage",`left=0,top=0,width=500px,heigth=500px,toolbar=0,resizable=0`)
  newopen.document.body.style="margin:0;padding:0;overflow:hidden;"
  newopen.document.body.appendChild(dom)
}, false);

function canvasApp() {
  if (!canvasSupport()) return;

  drawScreen();
  function clearCanvas() {
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0, 0, w, h);
  }
  function drawScreen() {
    clearCanvas();
    // 改变这里
    ctx.shadowBlur = 3;
    ctx.shadowColor = "black";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
  }
}
