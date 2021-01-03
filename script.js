const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const box = 25;
const canvasSize = 23;

//draw function
function draw() {
//draw the background
ctx.fillStyle = "lightgreen";
//(x,y,width,height)
ctx.fillRect(box,box,canvasSize*box - box,canvasSize*box - box);

}
let game =setInterval(draw,100);