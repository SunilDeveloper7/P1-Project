const canvas = document.getElementById('canvas');
//Allow us to do many things
const ctx = canvas.getContext('2d');
//creating box for my snake
const box = 25;
//both for width and height
const canvasSize = 23;

//load snake starting position
let snake =[];
snake[0] =
{
    x:Math.floor((canvasSize/2)) * box,
    y:Math.floor((canvasSize/2)) * box
}
// Set direction with my arrow key
let dir;
let pressed = false;
document.addEventListener('keydown', direction);

function direction(event) {
    if(event.keyCode==37)
        dir ='LEFT';
    if(event.keyCode==38)
        dir ='UP';
    if(event.keyCode==39)
        dir ='RIGHT';
    if(event.keyCode==40)
        dir ='DOWN';
}
//set the location of our food
let food = {
    x:Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
    y:Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
}
//draw function
function draw() {
//draw the background
ctx.fillStyle = "lightgreen";
//(x,y,width,height)
ctx.fillRect(box,box,canvasSize*box - box,canvasSize*box - box);
ctx.fillStyle = "green";
ctx.fillRect(snake[0].x,snake[0].y,box,box);

//draw snake head
for(let i = 0; i<snake.length; i++)
{
    ctx.fillStyle ='green[0],red[1]';
    ctx.fillRect(snake[i].x,snake[i].y,box,box);
}

//move the snake head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(dir == 'LEFT')
        snakeX -= box;
    if(dir == 'RIGHT')
        snakeX += box;
    if(dir == 'UP')
        snakeY -= box;
    if(dir == 'DOWN')
        snakeY += box;

    //if my snake eat fruit
    if(snakeX == food.x && snakeY == food.y)
    {
        score +=1;
        food = {
            x:Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
            y:Math.floor(1 + (Math.random() * (canvasSize - 1))) * box 
        }
    }
        else
        {
            snake.pop();
        }
        let newHead = {
            x: snakeX,
            y: snakeY

    };
    snake.unshift(newHead);
    //draw in food
    ctx.fillStyle ='red';
    ctx.fillRect(food.x, food.y,box,box);
    
}
let game = setInterval(draw,100);