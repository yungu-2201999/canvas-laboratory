const canvas = document.getElementById("canvas");
const canvas1 = document.getElementById("canvas1");

const ctx1 = canvas.getContext("2d");
const ctx2 = canvas1.getContext("2d");

const image = new Image();
image.src = "./assets/壁纸.jpg";
image.addEventListener("load", function () {
  ctx1.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx2.drawImage(canvas, 32,0,32,32,0,0,32,32)
});

