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
var sceneTitle = (function (_super) {
    __extends(sceneTitle, _super);
    function sceneTitle() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createSceneTitle, _this);
        return _this;
    }
    sceneTitle.prototype.createSceneTitle = function () {
        var _this = this;
        var bg = this.createBitmapByName("bg");
        this.addChild(bg);
        bg.width = SWIDTH;
        bg.height = SHEIGHT;
        var ready = this.createBitmapByName('text_ready_png');
        this.addChild(ready);
        ready.x = 100;
        ready.y = 100;
        /*  ready.width = 300
         ready.height = 200 */
        var startButton = this.createBitmapByName('button_play_png');
        this.addChild(startButton);
        startButton.x = 200;
        startButton.y = 700;
        startButton.width = 116;
        startButton.height = 70;
        var bird = new Bird();
        this.addChild(bird);
        var ground = new Ground();
        this.addChild(ground);
        startButton.touchEnabled = true;
        startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('开始');
            _this.stage.addChild(new game());
            _this.stage.removeChild(_this);
        }, this);
    };
    sceneTitle.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return sceneTitle;
}(egret.Sprite));
__reflect(sceneTitle.prototype, "sceneTitle");
