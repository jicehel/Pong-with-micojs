// Pong by Jicehel using micojs IDE
// https://micojs.github.io/
//
// Version for Gamebuino META
// https://gamebuino.com/
//
// source: 07/12/2022

// Define colors

"include /source/ball.js"
"include /source/game.js"
"include /source/paddle.js"

const BLACK = setPen(0, 0, 0);
const RED = setPen(240, 0, 0);
const GREEN = setPen(0, 240, 0);
const GRAY = setPen(100, 100, 100);
const YELLOW = setPen(240, 190, 140);
const TXT_COLOR = setPen(80, 0, 200);
const bgColor = setPen(BLACK);
const txtColor = setPen(TXT_COLOR);

let screenWidth, screenHeight;

const lpaddle = new paddle();
const rpaddle = new paddle();
const gameball = new ball();
const ponggame = new game();

function init() {
    setFPS(25);
    screenWidth = getWidth();
    screenHeight = getHeight();
    lpaddle.init();
    lpaddle.x = 2;
    rpaddle.init();
    rpaddle.x = screenWidth - rpaddle.width - 2;
    rpaddle.number = 2;
    rpaddle.color = RED;
    gameball.init();
    ponggame.init();
	gameball.newball();
}

function update(time) {
    if (ponggame.gamestate == "running") {
        ponggame.update();
        lpaddle.update();
        rpaddle.update();
        if (ponggame.ballLaunched == 1)
            gameball.update();
    } else if (ponggame.gamestate == "gameover") {
        ponggame.gameover();
    } else if (ponggame.gamestate == "gameover - A pressed") {
        if (A) {
            // Just wait that button A is released
        } else {
            ponggame.gamestate = "running";
        }
    } else if (ponggame.gamestate == "boot") {
        ponggame.boot();
    } else if (ponggame.gamestate == "boot - A pressed") {
        if (A) {
            // Just wait that button A is released
        } else {
            ponggame.gamestate = "running";
        }
    }                  
}

function render() {
    if (ponggame.gamestate == "boot" || ponggame.gamestate == "boot - A pressed") {
        ponggame.renderBoot();
        return;
    }
    if (ponggame.gamestate == "running") {
        ponggame.render();
        lpaddle.render();
        rpaddle.render();
        if (ponggame.ballLaunched == 1)
            gameball.render();
        return;
    }
    if (ponggame.gamestate == "gameover") {
        ponggame.renderGameOver();
        return;
    }
}