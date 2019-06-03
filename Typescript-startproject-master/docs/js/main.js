"use strict";
var Dragon = (function () {
    function Dragon() {
        this.element = document.createElement("dragon");
        var background = document.getElementsByTagName("background")[0];
        background.appendChild(this.element);
        this.posx = 250;
        this.posy = 100;
    }
    Dragon.prototype.update = function () {
        this.posx += 1;
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
        if (this.posx >= 400) {
            this.posx--;
        }
    };
    Dragon.prototype.reset = function () {
        console.log("dragon heeft positie 400 behaald ");
    };
    return Dragon;
}());
var Game = (function () {
    function Game() {
        this.score = 5;
        this.health = 0;
        this.power = 0;
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.startScreen = function () {
        document.body.innerHTML = "";
        this.scorenMaken();
        this.currentscreen = new StartScreen(this);
    };
    Game.prototype.shopscreen = function () {
        document.body.innerHTML = "";
        this.scorenMaken();
        this.healthMaken();
        this.powerMaken();
        this.currentscreen = new Shop(this);
    };
    Game.prototype.playscreen = function () {
        document.body.innerHTML = "";
        this.scorenMaken();
        this.healthMaken();
        this.powerMaken();
        this.currentscreen = new playscreen(this);
    };
    Game.prototype.scorenMaken = function () {
        this.scoreElement = document.createElement("scoreElement");
        document.body.appendChild(this.scoreElement);
        this.scoreElement.innerHTML = "SCORE: " + this.score;
        console.log("scoreLEement:" + this.score);
    };
    Game.prototype.healthMaken = function () {
        this.healthElement = document.createElement("healthElement");
        document.body.appendChild(this.healthElement);
        if (this.health == 1) {
            this.healthElement.innerHTML = " + health ";
        }
        else {
            console.log("nog geen health");
        }
    };
    Game.prototype.powerMaken = function () {
        this.powerElement = document.createElement("powerElement");
        document.body.appendChild(this.powerElement);
        if (this.power == 1) {
            this.powerElement.innerHTML = " + power ";
        }
        else {
            console.log("nog geen power");
        }
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Tekst = (function () {
    function Tekst(x, y, scale, type, g) {
        var _this = this;
        this.game = g;
        if (type == "naam") {
            this.tekst = document.createElement("naam");
            document.body.appendChild(this.tekst);
            this.tekst.style.transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
        }
        if (type == "start") {
            this.tekst = document.createElement("start");
            document.body.appendChild(this.tekst);
            this.tekst.style.transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
            this.tekst.addEventListener("click", function () { return _this.start(); });
        }
    }
    Tekst.prototype.start = function () {
        this.game.playscreen();
        console.log("next scene");
    };
    return Tekst;
}());
var playscreen = (function () {
    function playscreen(g) {
        var _this = this;
        this.game = g;
        this.nextGame = document.createElement("nextGame");
        document.body.appendChild(this.nextGame);
        this.nextGame.addEventListener("click", function () { return _this.naarDeShop(); });
    }
    playscreen.prototype.naarDeShop = function () {
        this.game.shopscreen();
    };
    playscreen.prototype.update = function () {
    };
    return playscreen;
}());
var Shop = (function () {
    function Shop(g) {
        var _this = this;
        this.game = g;
        this.achtergrond = document.createElement("achtergrondShop");
        document.body.appendChild(this.achtergrond);
        this.health = document.createElement("health");
        this.health.innerHTML = "HEALTH";
        document.body.appendChild(this.health);
        this.health.addEventListener("click", function () { return _this.kooptHealth(); });
        this.powerUp = document.createElement("powerUp");
        this.powerUp.innerHTML = "POWER UP";
        document.body.appendChild(this.powerUp);
        this.powerUp.addEventListener("click", function () { return _this.kooptPowerUp(); });
        this.nextGame = document.createElement("nextGame");
        document.body.appendChild(this.nextGame);
        this.nextGame.addEventListener("click", function () { return _this.naarStart(); });
    }
    Shop.prototype.naarStart = function () {
        console.log("start button werkt");
        this.game.playscreen();
    };
    Shop.prototype.kooptHealth = function () {
        if (this.game.health == 0) {
            this.game.health = this.game.health + 1;
            this.game.score = this.game.score - 1;
            this.updateScore(this.game.score);
            var healthElement = document.getElementsByTagName("healthElement")[0];
            healthElement.innerHTML = "+ Health";
        }
        else {
            console.log("kan je niet meer kopen, je hebt er al een");
        }
    };
    Shop.prototype.kooptPowerUp = function () {
        if (this.game.power == 0) {
            this.game.power = this.game.power + 1;
            this.game.score = this.game.score - 1;
            this.updateScore(this.game.score);
            var powerElement = document.getElementsByTagName("powerElement")[0];
            powerElement.innerHTML = "+ Power";
        }
        else {
            console.log("kan je niet meer kopen, je hebt er al een");
        }
    };
    Shop.prototype.updateScore = function (nieuweScore) {
        var scoreElement = document.getElementsByTagName("scoreElement")[0];
        scoreElement.innerHTML = "SCORE: " + nieuweScore;
    };
    return Shop;
}());
var Sign = (function () {
    function Sign(x, y, scale, type) {
        if (type == 0) {
            this.sign = document.createElement("sign");
            document.body.appendChild(this.sign);
            this.sign.style.transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
            console.log("signcreated");
        }
        else {
            this.bord = document.createElement("bord");
            document.body.appendChild(this.bord);
            this.bord.style.transform = "translate(" + x + "px, " + y + "px) scale(" + scale + ")";
            console.log("bordcreated");
        }
    }
    return Sign;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        this.game = g;
        var background = document.createElement("startbackground");
        document.body.appendChild(background);
        var sign = new Sign(260, 150, 1, 0);
        var name = new Tekst(430, 250, 1, "naam", g);
        var sign2 = new Sign(365, 600, 0.5, 1);
        var start = new Tekst(625, 670, 1, "start", g);
    }
    return StartScreen;
}());
//# sourceMappingURL=main.js.map