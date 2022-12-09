// paddle.js

class paddle {
    init() {
        this.width = 4;
        this.height = 20;
        this.number = 1;
        this.x = screenWidth/2;
        this.y = (screenHeight - this.height) /2;
        this.maxXSpeed = 0;
        this.maxYSpeed = 3;
        this.speedX = 0;
        this.speedY = 0;
        this.color = GREEN;
    }

    update() {
        if(((this.number == 1 && UP) || (this.number == 2 && B)) && this.speedY > -this.maxYSpeed)
            this.speedY -=this.maxYSpeed;

        if(((this.number == 1 && DOWN) || (this.number == 2 && A)) && this.speedY < this.maxYSpeed)
            this.speedY +=this.maxYSpeed;    

        if(this.speedY < 0 && this.y > 0) {
            this.y += this.speedY;
            if(!(this.number == 1 && UP) || (this.number == 2 && B))
                this.speedY++;
        }
        
        if(this.y < 0) {
            this.y = 0;
            this.speedY = 0;
        }    

        if(this.speedY > 0 && this.y < screenHeight - this.height) {
            this.y += this.speedY;
            if(!(this.number == 1 && DOWN) || (this.number == 1 && B))
                this.speedY--;
        }    
        
        if(this.y > screenHeight - this.height) {
            this.y = screenHeight - this.height;
            this.speedY = 0;
        }

        this.x += this.speedX;
        // debug(this.x, this.y, this.speedX, this. speedY);
        
    }

    render() { 
        setPen(this.color);
        rect(this.x,this.y,this.width, this.height)
    }
}

