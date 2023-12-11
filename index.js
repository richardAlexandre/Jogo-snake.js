const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//   ctx.fillStyle ="red"  //estilo de preenchimento da figura
//   ctx.fillRect(300,300, 50, 50) //definir o formato

const size = 30;

const snake = [   //essa é a cobra
    { x: 270, y: 270 },
    
     
    
];

let direction, loopId
// função responsavel por desenhar a cobra
const drawSnake = () => {
  ctx.fillStyle = "red";

  snake.forEach((posicao, index) => {

    if( index == snake.length -1){
        ctx.fillStyle = "white"
    }

    ctx.fillRect(posicao.x, posicao.y, size, size);
  }); //usando foreach para percorrer o corpo da cobra
};

// mover cobra

const moveSnake = () =>{
    if(!direction)return
    const head = snake[snake.length - 1]
    

    if(direction == "right"){
        snake.push({x: head.x + size, y: head.y})
    }
    if(direction == "left"){
        snake.push({x: head.x - size, y: head.y})
    }
    if(direction == "down"){
        snake.push({x: head.x , y: head.y+ size})
    }
    if(direction == "up"){
        snake.push({x: head.x, y: head.y-size})
    }

    snake.shift()
}
const drawGrid = ()=>{
    ctx.lineWidth = 1
    ctx.strokeStyle= "#191919"


    for(let i =30; i< canvas.width; i+30){
        ctx.beginPath()
        ctx.lineTo(i,0)
        ctx.lineTo(i , 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0,0)
        ctx.lineTo(i , 600)
        ctx.stroke()
    }

}
drawGrid()


 const gameLoop = ()=>{
    clearInterval(loopId)
    ctx.clearRect(0,0, 600, 600)
    moveSnake()
    drawSnake()

    loopId =setTimeout(()=>{
        gameLoop()
    },300)
 }

// gameLoop()

document.addEventListener('keydown',({key})=>{
 if(key == "ArrowRight" && direction !== "left"){
    direction= 'right'
 }
 if(key == "ArrowLeft" && direction !== "right"){
    direction= 'left'
 }
 if(key == "ArrowUp" && direction !== "down"){
    direction= 'up'
 }
 if(key == "ArrowDown" && direction !== "up"){
    direction= 'down'
 }
})

