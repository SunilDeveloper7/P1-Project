function keydownHandler(key) {
    
    switch (key) {
        case ("KeyD"):
            console.log('move right')
            break
        case ("KeyW"):
            console.log('move up')
            break
        case ("KeyA"):
            console.log('move left')
            break
        case ("KeyS"):
            console.log('move down')
            break

    }

}



document.addEventListener('DOMContentLoaded',function() {
    document.addEventListener('keydown',function(event) {

        keydownHandler(event.code)

    })
    console.log('its working')
})
 