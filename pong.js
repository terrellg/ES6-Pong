
class Vector{
    constructor(x=0,y=0){
        this.x = x;
        this.y =y;
        
    }

}
class Rectangle{
    constructor(w,h){
        this.pos = new Vector;
        this.size = new Vector(w,h);
    }
    get left(){
        return this.pos.x - this.size.x / 2;
    }
    get right(){
        return this.pos.x + this.size.x / 2;
    }
    get top(){
        return this.pos.y - this.size.y / 2;
    }
    get bottom(){
        return this.pos.y + this.size.y / 2;
    }

}

class Player extends Rectangle{
    constructor(){
       super(20,100);
       this.score=0; 
    }
}

class Ball extends Rectangle{
constructor(){
    super(10,10);
    this.vel = new Vector;
}


}

class Pong{
    constructor(canvas){
        this._canvas = canvas;
        this._context = canvas.getContext('2d');

        this.ball = new Ball;
        this.ball.pos.x = 50;
        this.ball.pos.y = 50;

        this.ball.vel.x = 150;
        this.ball.vel.y = 150;

        this.players = [new Player, new Player];
        this.players[0].pos.x = 20;
        this.players[1].pos.x = 580;
        this.players.forEach(player =>{
            player.pos.y = this._canvas.height / 2

        });


        let oldTime;
        const callback = (mS) => {
            if  (oldTime){
                //convert mS to seconds
                this.update((mS - oldTime)/1000);
            }
            oldTime = mS;
            requestAnimationFrame(callback);
        }
        callback();
    }
    draw(){
        this._context.fillStyle= '#000';
        this._context.fillRect(0,0, this._canvas.width, this._canvas.height);

        this.drawRect(this.ball);
        this.players.forEach(player => this.drawRect(player));

        this._context.fillStyle = '#fff';
        this._context.font = '32px monospace';
        this._context.textAlign = 'center';
        this._context.fillText(this.players[0].score, this._canvas.width / 4,     50);
        this._context.fillText(this.players[1].score, this._canvas.width * 3 / 4, 50);
    }

    drawRect(rect){
        this._context.fillStyle= '#fff';
        this._context.fillRect(rect.left,rect.top,
                                rect.size.x, rect.size.y);
    }
    
    resetBall(){
        this.ball.pos.x = this._canvas.width / 2;
        this.ball.pos.y = this._canvas.height / 2;
        this.ball.vel.x *= -1;
    }

    collide(player, ball){
        if (ball.right > player.left && ball.left < player.right &&
            ball.bottom > player.top && ball.top < player.bottom){
            ball.vel.x *= -1;
            // nudge ball outside the paddle so it doesn't stick
            if (ball.vel.x > 0){
                ball.pos.x = player.right + ball.size.x / 2;
            } else {
                ball.pos.x = player.left - ball.size.x / 2;
            }
        }
    }

    update(time){
        this.ball.pos.x += this.ball.vel.x * time;
        this.ball.pos.y += this.ball.vel.y * time;

        if (this.ball.left < 0){
            this.players[1].score++;
            this.resetBall();
        } else if (this.ball.right > this._canvas.width){
            this.players[0].score++;
            this.resetBall();
        }
        if(this.ball.top < 0 || this.ball.bottom > this._canvas.height){
            this.ball.vel.y= (-1 * this.ball.vel.y);
        }

        this.players.forEach(player => this.collide(player, this.ball));
        //set lower limit for p1
        if(pong.players[0].pos.y >= canvas.height-50){
            pong.players[0].pos.y = canvas.height-50;
        }
        //set lower limit for p2
        if(pong.players[1].pos.y >= canvas.height-50){
            pong.players[1].pos.y = canvas.height-50;
        }
        //set upper limit for p1
        if(pong.players[0].pos.y<= 50){
            pong.players[0].pos.y = 50;
        }  
        if(pong.players[1].pos.y <=50){
            pong.players[1].pos.y = 50;
        }      

        // console.log(pong.players[0].pos.y);
        // console.log(canvas.height);


        this.draw();
    }
}    
       
    
    

const canvas = document.getElementById("pong");
const pong = new Pong(canvas);

//Add KeyListener to move player 1 if w or s is pressed
window.addEventListener("keydown", movePlayers, false);
function movePlayers(e){
    if(e.keyCode ==87){
        // if w key is pressed move p1 up
        pong.players[0].pos.y = pong.players[0].pos.y-20;
    }
    //is s key is pressed move p1 down
    if(e.keyCode==83){
        pong.players[0].pos.y = pong.players[0].pos.y+20;
    }

}
//Add EventListener to map mouse's y position to player 2 y position
window.addEventListener("mousemove", event =>{
    pong.players[1].pos.y = event.offsetY;
});











//Tried to make it able to control both at time with keyboard using else if
// window.onkeydown - function(e){
//     let key = e.key.toUpperCase();

//     //if i key is pressed
//     if(key == 'W'){
//         pong.players[0].pos.y = pong.players[0].pos.y-10;
//     }
//     else if(key ==73){
//         pong.players[1].pos.y = pong.players[1].pos.y+10;
// }
// }




// window.addEventListener("keydown", movePlayers, false);
// function movePlayers(e) {
//     switch(e.keyCode) {
//         case 73:
//         // i key is pressed
//         pong.players[1].pos.y = pong.players[1].pos.y-10;
//         break;

//         case 75:
//         // k key is pressed
//         pong.players[1].pos.y = pong.players[1].pos.y+10;
//         break;  

//         case 83:
//         // s key is pressed
//         pong.players[0].pos.y = pong.players[0].pos.y+10;
//         break;  

//         case 87:
//         // w key is pressed
//         pong.players[0].pos.y = pong.players[0].pos.y-10;
//         break;


//     }   
// }


