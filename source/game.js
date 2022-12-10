// game.js

class game {

    init() {
        this.lscore = 0;
        this.rscore = 0;
        this.gamestate = "boot";
        this.waitTime = 40;
        this.winscore = 10;
        this.color = GRAY;
    }

    renderBoot() {
        
        // Color to use with the image version
        setPen(0);
        
        // Color used with print version
        // setPen(BLACK);
        
        clear();
        image(R.Screen1,screenWidth/2, screenHeight/2);

        // Old code used to generate boot screen
        //
        // setPen(RED);
        // rect(15,0,130,46);
        // setPen(BLACK);
        // rect(18,3,124,40);
        // rect(0,62,screenWidth,20);
        // rect(0,95,screenWidth,35);
        // setPen(txtColor);
        // setFont(R.fontAdventurer);    
        // text("Pong by Jicehel", 23, 8);
        // setPen(GREEN);
        // text(" Press <A> to start", 0,65);
        // setPen(RED);
        // setFont(R.fontTiny);
        // text ("For Gamebuino META", 35, 28);
        // text("written with micojs", 0,100);
        // text("https://micojs.github.io/",0, 115);
    }

    boot() {
        // don't draw in update!
        if(A) {
            this.gamestate = "boot - A pressed";
        }
    }

    renderGameOver() {
        this.render();
        // setPen(BLACK);
        setPen(YELLOW);
        if (ponggame.lscore > ponggame.winscore)
            text("Well done left player,", 4, 35);
        else    
            text("Well done right player,", 4, 35);
        text("  you won the game !! ", 10, 55);
        
        setPen(GREEN);
        text("Press <A> to start", 20,85);
    }

    gameover() {
        if(A) {
            this.init();
            this.gamestate = "gameover - A pressed";   
        }    
    }

    update() {
        if (this.lscore >= this.winscore || this.rscore >= this.winscore)
            this.gamestate = "gameover";
        if (this.ballLaunched == 0) {
            if (this.wait > 0)
                this.wait--;
            if(this.wait < 1)    
                this.ballLaunched = 1;
        }
    }


    render() {

        // color used with print version
        // setPen(30,30,80);

        // color used with image version
        setPen(0);
        clear();

        image(R.Fond,screenWidth/2, screenHeight/2);
        
        // Old game field drawn
        // setPen(GRAY);
        // rect(0, 0, 1, screenHeight);
        // rect(0, 0, screenWidth, 1);
        // rect(screenWidth - 1, 0, 1, screenHeight);
        // for (let i = 0; i < screenHeight; i = i + 30) {
        //     rect(screenWidth/2 - 1, i + 13, 1, 15);
        // }
        // rect(0, screenHeight - 1, screenWidth, 1);
        
        // show score
        setFont(R.fontDonut);
        // setPen(BLACK);
        setPen(YELLOW);
        text("Score : ", 60, 112)
        text("/", 130, 112);
        setPen(GREEN);
        text(ponggame.lscore, 115, 112);
        setPen(RED);
        text(ponggame.rscore, 145, 112);
    }
}