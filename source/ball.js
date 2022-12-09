// ball.js

class ball {
    init() {
        this.width = 4;
        this.height = 4;
        this.number = 1;
        this.maxXSpeed = 2;
        this.maxYSpeed = 3;
        this.color = YELLOW;
    }

    newball() {
        ponggame.ballLaunched = 0;
        ponggame.wait = ponggame.waitTime;
        this.x = (screenWidth  - this.width)  /2;
        this.y = (screenHeight - this.height) /2;
        this.speedX = 0;
        while (abs(this.speedX) < 2) {
            this.speedX = floor(rand(-this.maxXSpeed,this.maxXSpeed)); 
        }  
        this.speedY = 0;
        while (abs(this.speedY) < 2) {
            this.speedY = floor(rand(-this.maxYSpeed,this.maxYSpeed));
        }  
    }    

    update() {

        this.x += this.speedX;
        this.y += this.speedY;
        
        // Automatic bounce for y axis
        if((this.speedY < 0) && (this.y < 0)) {
            this.y = 0;
            this.speedY = -this.speedY;
        } else if((this.speedY > 0) && (this.y > (screenHeight - this.height))) {
            this.y = screenHeight - this.height;
            this.speedY = -this.speedY;
        }
    
        // Bounce only if ball is on paddle for x axis
        if((this.speedX < 0) && (this.x <= (lpaddle.x + lpaddle.width))) {
            if (((this.y + this.height) > lpaddle.y) && (this.y < (lpaddle.y + lpaddle.height)) ) {
                if (this.x > (lpaddle.x)) {
                    this.x = lpaddle.x + lpaddle.width;
                    this.speedX = -this.speedX;
                } else {
                    ponggame.rscore++;
                    this.newball();
                }    
            }
        } else if((this.speedX > 0) && ((this.x + this.width) > rpaddle.x)) {
            if (((this.y + this.height) > rpaddle.y) && (this.y < (rpaddle.y + rpaddle.height)) ) {
                if ((this.x + this.width) < (rpaddle.x + rpaddle.width)) {
                    this.x = rpaddle.x - this.width;
                    this.speedX = -this.speedX;
                } else {
                    ponggame.lscore++;
                    this.newball();    
                }    
            }
        }   

        // debug('BALL debug - x: ', this.x, '  y: ',this.y, '   speedX: ', this.speedX, '   speedY: ', this. speedY);
        
    }

    render() { 
        setPen(this.color);
         rect(this.x,this.y,this.width, this.height)
    }
}

