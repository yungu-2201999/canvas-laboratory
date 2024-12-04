window.addEventListener('load', () => {
    canvasApp();
}, false)

function canvasApp() {
    const canvas = document.getElementById('canvas');
    
    // 判断是否支持canvas
    if (!canvasSupport()) return;
    
    // 获取2d环境
    const context = canvas.getContext('2d');
    
    // 填充矩形
    context.fillStyle = '#ffffaa';
    context.fillRect(0, 0, 500, 300);
    
    // 绘制文字
    context.fillStyle = '#000000';
    context.font = '20px serif';
    context.textBaseline = 'top';
    context.fillText('Hello Canvas', 195, 80);

    // 绘制图片
    const img = new Image();
    img.onload = () => {
        context.drawImage(img, 160, 130);
    }
    img.src = './assets/canvas.png';

    // 绘制边框
    context.strokeStyle = '#000000';
    context.strokeRect(5, 5, 490, 290);
}

// 判断是否支持canvas
function canvasSupport() {
    return !!document.createElement('canvas').getContext;
}