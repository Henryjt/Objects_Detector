objects = []


function draw() {
    image(img,0,0,640,420)

    if (statusModelo == true) {
    for (i = 0; i < objects.length; i++) {
        document.getElementById("stats").innerHTML = "Status: Detectando Objetos"
        Nome = objects[i].label
        PosicaoX = objects[i].x
        Altura = objects[i].height
        Largura = objects[i].width
        PosicaoY = objects[i].y
        fill(255, 0, 0)
        text(Nome, PosicaoX, PosicaoY)
        noFill()
        stroke(255, 0, 0)
        rect(PosicaoX, PosicaoY, Largura, Altura)
    }
    }
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("stats").innerHTML = "Status: Detectando Objetos"
}

function preload() {
    img = loadImage('dog_cat.jpg')
}

var statusModelo = false

function modelLoaded() {
    console.log("Modelo carregado")
    statusModelo = true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }else{
        console.log(results)
        objects = results
    }
}