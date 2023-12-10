const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//   ctx.fillStyle ="red"  //estilo de preenchimento da figura
//   ctx.fillRect(300,300, 50, 50) //definir o formato

const size = 30;

const snake = [   //essa é a cobra
    { x: 200, y: 200 },
    { x: 230, y: 200 },
     
    
];

let direction 

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



setInterval(()=>{
    ctx.clearRect(0,0, 600, 600)
 moveSnake()
drawSnake();

},300)