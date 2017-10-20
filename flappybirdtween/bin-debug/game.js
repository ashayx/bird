var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.distance = SWIDTH * .8;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    Game.prototype.init = function () {
        var _this = this;
        this.score = 0;
        var bg = this.createBitmapByName("bg");
        this.addChild(bg);
        bg.width = SWIDTH;
        bg.height = SHEIGHT;
        this.pipe = [];
        for (var i = 0; i < 3; i++) {
            var p = new Pipe();
            p.x = this.distance * i + SWIDTH;
            this.pipe.push(p);
            this.addChild(p);
        }
        this.ground = new Ground();
        this.addChild(this.ground);
        this.bird = new Bird();
        this.addChild(this.bird);
        this.bird.fallDown();
        // 分数
        this.calculatedScore();
        // 计时器
        egret.Ticker.getInstance().register(this.runGame, this);
        bg.touchEnabled = true;
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.bird.isAlive) {
                _this.bird.jump();
            }
        }, this);
    };
    Game.prototype.runGame = function (dt) {
        //累加时间，dt是帧时间间隔以毫秒为单位
        // console.log(dt)
        if (this.bird.isAlive) {
            // this.bird.fallDown()
            // this.ground.move()
            // 管子移动
            var bx = this.bird.x;
            var by = this.bird.y;
            var bw = this.bird.birdWidth;
            for (var i in this.pipe) {
                var p = this.pipe[i];
                p.move();
                // 计算分数
                if (p.x < this.bird.x && !p.isAddScore) {
                    this.score++;
                    this.textField.text = "" + this.score;
                    p.isAddScore = true;
                }
                // 碰撞检测
                if (bx + bw / 2 > p.x && bx < p.x + p.pipeWidth) {
                    if (by < p.y + p.pipeHeight || by + 50 > p.y + p.pipeHeight + p.space) {
                        this.bird.isAlive = false;
                        console.log('碰撞');
                    }
                }
            }
        }
        else {
            // this.stage.addChild(new SceneEnd(this.score))
            // this.stage.removeChild(this)
            egret.Tween.removeAllTweens();
            egret.Ticker.getInstance().unregister(this.runGame, this);
            console.log(this.bird.isAlive, 'die');
        }
    };
    Game.prototype.calculatedScore = function () {
        this.textField = new egret.BitmapText();
        var font = RES.getRes('font_fnt');
        this.textField.font = font;
        this.addChild(this.textField);
        this.textField.x = SWIDTH * .48;
        this.textField.y = SHEIGHT * .15;
        this.textField.scaleX = 2.5;
        this.textField.scaleY = 2.5;
        this.textField.text = "" + this.score;
        this.textField.letterSpacing = 2;
        this.textField.textAlign = "center";
        this.addChild(this.textField);
    };
    Game.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
