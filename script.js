
const game = document.querySelector("canvas");
const ctx = game.getContext('2d');
let player;
game.setAttribute('height',400)
game.setAttribute('width',400)


function Crawler(x,y,color,height,width) {
    this.x = x
    this.y = y
    this.color = color
    this.height = height
    this.width = width
    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.height,this.width);

    }

}



function keydownHandler(key) {
    
    switch (key) {
        case ("KeyD"):
            console.log('move right')
            player.x += 10
            break
        case ("KeyW"):
            console.log('move up')
            player.y -= 10
            break
        case ("KeyA"):
            console.log('move left')
            player.x -= 10
            break
        case ("KeyS"):
            console.log('move down')
            player.y += 10
            break

    }

}

function gameloop() {
    ctx.clearRect(0,0,game.width,game.height)
    player.render()
    window.requestAnimationFrame(gameloop)
}

document.addEventListener('DOMContentLoaded',function() {
    player = new Crawler(10,10,'blue',16,16)
    document.addEventListener('keydown',function(event) {
        keydownHandler(event.code)
    })
    gameloop()
})
 