let colors = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(255, 81, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 21)", "rgb(255, 0, 255)"]

let body = document.querySelector ('body')
let cuadrados = document.querySelectorAll(".square")
let clickedColor
let colorDisplay = document.querySelector("#colorDisplay")
let pickedColor
pickedColor = pickColor ()
colorDisplay.textContent = pickedColor
let numeroDeCuadrados = 6
let message = document.querySelector("#message")
let h1 = document.querySelector ('h1')
let botones = document.querySelectorAll(".boton")
let easyButton = document.querySelector("#easyButton")
let hardButton = document.querySelector("#hardButton")
let botonReset = document.querySelector("#reset")
let newColors = ["rgb(79, 181, 245", "rgb(255, 2, 145)", "rgb(175, 2, 255)", "rgb(125, 93, 252)", "rgb(93, 252, 241)", "rgb(9, 245, 20)"]


function establecerCuadrados(){
for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i]

    cuadrados[i].addEventListener("click", function(e){
        clickedColor = this.style.backgroundColor
    
        if(clickedColor != pickedColor){
            message.textContent = "Intentelo de nuevo"
            cuadrados[i].style.backgroundColor = document.body.style.backgroundColor

        } else {
            cuadrados[i].style.backgroundColor = 
            clickedColor
            message.textContent = "Correcto!"
            botonReset.textContent = "Play Again"
            h1.style.backgroundColor = clickedColor
            
            function changeColors (){
                for (let i = 0; i < cuadrados.length; i++) {
                    cuadrados[i].style.backgroundColor = pickedColor;
                }
            }
            changeColors()
        }
    })
}
}

establecerCuadrados()



function pickColor (){
    let aleatorio = Math.floor (Math.random () * colors.length)
    return colors [aleatorio]
}
pickColor()

function randomColor () {
    let r = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    return "rgb("+r+", "+g+", "+b+")"
}
randomColor()

function generateRandomColors(numeroDeCuadrados){
    let arr = []
    for (let i = 0; i < numeroDeCuadrados; i++) {
     arr[i] = randomColor()
    }
    return arr
}
generateRandomColors()

function reset(){
    colors = generateRandomColors(numeroDeCuadrados)
    pickedColor = pickColor ()
    colorDisplay.textContent = pickedColor
    h1.style.backgroundColor = document.body.style.backgroundColor
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i]
        if (pickedColor != pickColor()) {
            botonReset.textContent = "Nuevos colores"
        } else {
            botonReset.textContent = "Play Again"
        }
       
    }
    }
    botonReset.addEventListener("click", reset)



function easy(){
 easyButton.addEventListener("click", function(){
    numeroDeCuadrados = 3
    easyButton.classList.add ("selected")
    hardButton.classList.remove ("selected")
    reset()
    for (let i = 3; 3 < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i]
        reset()
            if(i > 2){
                cuadrados[i].style.display = "none"
                
            } else{
                cuadrados[i].style.display = "block"
            }
        }
 })   
}
easy()


function hard(){
    hardButton.addEventListener("click", function(){
        numeroDeCuadrados = 6
        hardButton.classList.add ("selected")
        easyButton.classList.remove ("selected")
        reset()
       for (let i = 0; i < cuadrados.length; i++) {
           cuadrados[i].style.backgroundColor = colors[i]   
            cuadrados[i].style.display = "block"
               
       }
    })
}
      
   hard()