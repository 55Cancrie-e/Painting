const ctx = document.getElementById('canvas').getContext('2d');
resize();
window.addEventListener('resize', resize);
let mousePos = {
    x: 0,
    y: 0
};

let color = '#ffffff';


document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', mousePosition);
document.addEventListener('mouseenter', mousePosition);

function setColor(elm) {
    color = elm.dataset.color;
}

function mousePosition(e){
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
}

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function draw(e){
    if (e.buttons !== 1) return;

    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.moveTo(mousePos.x, mousePos.y);
    mousePosition(e);
    ctx.lineTo(mousePos.x, mousePos.y)
    ctx.stroke();
}