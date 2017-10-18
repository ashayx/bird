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
var game = (function (_super) {
    __extends(game, _super);
    function game() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    game.prototype.init = function () {
        var _this = this;
        this.score = 0;
        var bg = this.createBitmapByName("bg");
        this.addChild(bg);
        bg.width = SWIDTH;
        bg.height = SHEIGHT;
        this.textField = new egret.BitmapText();
        var font = RES.getRes('font_fnt');
        this.textField.font = font;
        this.addChild(this.textField);
        this.textField.x = 280;
        this.textField.y = 200;
        this.textField.text = "" + this.score;
        this.textField.letterSpacing = 2;
        this.textField.textAlign = "center";
        this.addChild(this.textField);
        this.bird = new Bird();
        this.addChild(this.bird);
        var ground = new Ground();
        this.addChild(ground);
        // 计时器不知道用什么
        egret.Ticker.getInstance().register(this.onTick, this);
        bg.touchEnabled = true;
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.bird.jump();
        }, this);
    };
    game.prototype.onTick = function (dt) {
        //累加时间，dt是帧时间间隔以毫秒为单位
        this.bird.fallDown();
        if (!this.bird.isAlive) {
            this.stage.addChild(new SceneEnd(this.score));
            this.stage.removeChild(this);
            egret.Ticker.getInstance().unregister(this.onTick, this);
        }
        this.textField.text = "" + this.score;
    };
    game.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return game;
}(egret.Sprite));
__reflect(game.prototype, "game");
