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
var Pipe = (function (_super) {
    __extends(Pipe, _super);
    function Pipe() {
        var _this = _super.call(this) || this;
        _this.isAddScore = false;
        _this.space = SHEIGHT * .25;
        _this.x = SWIDTH * .6;
        _this.y = -_this.randomBetwen(SHEIGHT * .1, SHEIGHT * .5);
        _this.pipeWidth = SWIDTH * .2;
        _this.pipeHeight = SHEIGHT * .7;
        _this.pipeDistance = SWIDTH * .6;
        _this.init();
        return _this;
    }
    Pipe.prototype.init = function () {
        this.pipeTop = new egret.Bitmap();
        this.pipeTop.texture = RES.getRes('tube_png');
        this.pipeTop.x = 0;
        this.pipeTop.y = 0;
        this.pipeTop.width = this.pipeWidth;
        this.pipeTop.height = this.pipeHeight;
        this.addChild(this.pipeTop);
        this.pipeDown = new egret.Bitmap();
        this.pipeDown.texture = RES.getRes('tube_png');
        this.pipeDown.x = 0;
        this.pipeDown.y = this.pipeHeight + this.space;
        this.pipeDown.width = this.pipeWidth;
        this.pipeDown.height = this.pipeHeight;
        this.addChild(this.pipeDown);
    };
    Pipe.prototype.move = function () {
        this.x -= 5;
        if (this.x <= -SWIDTH * 1.6) {
            this.isAddScore = false;
            this.y = -this.randomBetwen(SHEIGHT * .1, SHEIGHT * .6);
            this.x = SWIDTH * 1;
        }
    };
    Pipe.prototype.randomBetwen = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return Pipe;
}(egret.Sprite));
__reflect(Pipe.prototype, "Pipe");
