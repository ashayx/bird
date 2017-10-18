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
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        _this.init();
        _this.x = 280;
        _this.y = 400;
        _this.isAlive = true;
        _this.scaleNum = 3;
        _this.jumpHeight = 80;
        _this.g = .5; //加速度
        _this.rotation = 0;
        return _this;
    }
    Bird.prototype.init = function () {
        var birdData = RES.getRes("bird_json");
        var birdTextrue = RES.getRes("bird_png");
        var birdFactory = new egret.MovieClipDataFactory(birdData, birdTextrue);
        var bird = new egret.MovieClip(birdFactory.generateMovieClipData("bird"));
        bird.x = this.x;
        bird.y = this.y;
        bird.anchorOffsetX += bird.width / 2;
        bird.anchorOffsetY += bird.height / 2;
        bird.x += bird.width / 2;
        bird.y += bird.height / 2;
        bird.rotation = this.rotation;
        bird.scaleX = 3;
        bird.scaleY = 3;
        bird.gotoAndPlay(0, -1);
        this.addChild(bird);
    };
    Bird.prototype.fallDown = function () {
        this.y += this.g;
        this.g += .5;
        this.rotation += 5;
        if (this.rotation >= 90) {
            this.rotation = 90;
        }
        if (this.y >= SHEIGHT - 75 - 136) {
            this.y = SHEIGHT - 75 - 136;
            this.die();
        }
    };
    Bird.prototype.jump = function () {
        this.y -= this.jumpHeight;
        this.g = 0;
        this.rotation = -60;
        if (this.y <= 0) {
            this.y = 0;
        }
    };
    Bird.prototype.die = function () {
        this.isAlive = false;
    };
    return Bird;
}(egret.Sprite));
__reflect(Bird.prototype, "Bird");
