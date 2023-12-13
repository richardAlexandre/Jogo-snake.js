const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const h1 = document.querySelector('h1')

//   ctx.fillStyle ="red"  //estilo de preenchimento da figura
//   ctx.fillRect(300,300, 50, 50) //definir o formato

const size = 30; // o tamanho de cada pedaço da cobra


const snake = [   //essa é a cobra
    { x: 270, y: 270 },



];

let direction, loopId

const randomNumber = (min, max)=>{
    return Math.round(Math.random()*(max - min)+ min)
}

h1.innerText = randomNumber(5,10 )


const food = {  //essa é a comida
    x: 90,
    y: 90,
    color: "yellow"
}



// função responsavel por desenhar a cobra
const drawSnake = () => {
    ctx.fillStyle = "red";

    snake.forEach((posicao, index) => {

        if (index == snake.length - 1) {
            ctx.fillStyle = "white"
        }

        ctx.fillRect(posicao.x, posicao.y, size, size);
    }); //usando foreach para percorrer o corpo da cobra
};

const drawFood = () => {
    const { x, y, color } = food

    ctx.shadowBlur = 16
    ctx.shadowColor = color
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    ctx.shadowBlur = 0
}

const moveSnake = () => { //mover a cobra
    if (!direction) return
    const head = snake[snake.length - 1]


    if (direction == "right") {
        snake.push({ x: head.x + size, y: head.y })
    }
    if (direction == "left") {
        snake.push({ x: head.x - size, y: head.y })
    }
    if (direction == "down") {
        snake.push({ x: head.x, y: head.y + size })
    }
    if (direction == "up") {
        snake.push({ x: head.x, y: head.y - size })
    }

    snake.shift()
}
const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"


    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }

}

const gameLoop = () => {
    clearInterval(loopId)
    ctx.clearRect(0, 0, 600, 600)
    drawFood()
    drawGrid()
    moveSnake()
    drawSnake()

    loopId = setTimeout(() => {
        gameLoop()
    }, 100)
}

gameLoop()

document.addEventListener('keydown', ({ key }) => {
    if (key == "ArrowRight" && direction !== "left") {
        direction = 'right'
    }
    if (key == "ArrowLeft" && direction !== "right") {
        direction = 'left'
    }
    if (key == "ArrowUp" && direction !== "down") {
        direction = 'up'
    }
    if (key == "ArrowDown" && direction !== "up") {
        direction = 'down'
    }
})
