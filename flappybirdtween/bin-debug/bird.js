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
        _this.scaleNum = 3; // 放大倍数
        _this.birdWidth = _this.scaleNum * 35; //35是小鸟宽度 
        _this.init();
        _this.x = SWIDTH * .5 - _this.birdWidth / 2;
        _this.y = SHEIGHT * .4;
        _this.isAlive = true;
        _this.jumpHeight = 80;
        _this.g = .5; //加速度
        _this.tween = egret.Tween.get(_this);
        return _this;
    }
    Bird.prototype.init = function () {
        var birdData = RES.getRes("bird_json");
        var birdTextrue = RES.getRes("bird_png");
        var birdFactory = new egret.MovieClipDataFactory(birdData, birdTextrue);
        this.bird = new egret.MovieClip(birdFactory.generateMovieClipData("bird"));
        // bird.x = this.x
        // bird.y = this.y
        this.bird.anchorOffsetX = this.bird.width / 2;
        this.bird.anchorOffsetY = this.bird.height / 2;
        this.bird.x = this.bird.anchorOffsetX;
        this.bird.y = this.bird.anchorOffsetY;
        this.bird.scaleX = this.scaleNum;
        this.bird.scaleY = this.scaleNum;
        this.bird.gotoAndPlay(0, -1);
        this.addChild(this.bird);
    };
    Bird.prototype.fallDown = function () {
        // this.y += this.g
        // this.g += .5
        // this.rotation += 5
        // if (this.rotation >= 90) {
        //     this.rotation = 90
        // }
        egret.Tween.removeTweens(this);
        egret.Tween.removeTweens(this.bird);
        egret.Tween.get(this)
            .to({ "y": SHEIGHT }, 700, egret.Ease.cubicIn);
        egret.Tween.get(this.bird)
            .to({ "rotation": 90 }, 400, egret.Ease.cubicIn);
        if (this.y >= SHEIGHT - 75 - 136) {
            this.y = SHEIGHT - 75 - 136;
            this.die();
        }
    };
    Bird.prototype.jump = function () {
        var _this = this;
        // let bj = egret.Tween.get(this)
        egret.Tween.removeTweens(this);
        egret.Tween.removeTweens(this.bird);
        egret.Tween.get(this.bird)
            .to({ "rotation": -60 }, 100, egret.Ease.cubicOut);
        egret.Tween.get(this).to({ y: this.y - this.jumpHeight }, 100, egret.Ease.circOut).call(function () {
            _this.fallDown();
        });
        // this.y -= this.jumpHeight
        // this.g = 0
        // this.rotation = -60
        // if (this.y <= 0) {
        //     this.y = 0
        // }
    };
    Bird.prototype.die = function () {
        this.isAlive = false;
    };
    return Bird;
}(egret.Sprite));
__reflect(Bird.prototype, "Bird");
