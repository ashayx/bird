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
var SceneEnd = (function (_super) {
    __extends(SceneEnd, _super);
    function SceneEnd(score) {
        var _this = _super.call(this) || this;
        _this.score = score;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createSceneTitle, _this);
        return _this;
    }
    SceneEnd.prototype.createSceneTitle = function () {
        var _this = this;
        var W = this.stage.stageWidth;
        var H = this.stage.stageHeight;
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            // console.log(1)
        }, this);
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        var bg = this.createBitmapByName("bg");
        this.addChild(bg);
        bg.width = W;
        bg.height = H;
        var gameOverTitle = this.createBitmapByName("text_game_over_png");
        this.addChild(gameOverTitle);
        gameOverTitle.x = .1 * W;
        gameOverTitle.y = .1 * H;
        gameOverTitle.width = .8 * W;
        gameOverTitle.height = 200;
        this.textField = new egret.BitmapText();
        var font = RES.getRes('font_fnt');
        this.textField.font = font;
        this.addChild(this.textField);
        this.textField.x = 280;
        this.textField.y = 600;
        this.textField.text = "" + this.score;
        this.textField.letterSpacing = 2;
        this.textField.textAlign = "center";
        this.addChild(this.textField);
        var buttonOk = this.createBitmapByName("button_ok_png");
        this.addChild(buttonOk);
        buttonOk.x = .45 * W;
        buttonOk.y = .6 * H;
        buttonOk.width = 100;
        buttonOk.height = 50;
        buttonOk.touchEnabled = true;
        buttonOk.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.stage.addChild(new sceneTitle());
            _this.stage.removeChild(_this);
            console.log('重新开始');
        }, this);
        var ground = this.createBitmapByName('ground_png');
        this.addChild(ground);
        ground.x = 0;
        ground.y = H - 136;
        ground.width = 2 * W;
        ground.height = 136;
    };
    SceneEnd.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return SceneEnd;
}(egret.Sprite));
__reflect(SceneEnd.prototype, "SceneEnd");
