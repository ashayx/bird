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
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.init();
        return _this;
    }
    Ground.prototype.init = function () {
        var g = new egret.Bitmap();
        g.texture = RES.getRes('ground_png');
        this.addChild(g);
        g.x = 0;
        g.y = SHEIGHT - 136;
        g.width = 2 * SWIDTH;
        g.height = 136;
        // let gAni = egret.Tween.get(g, { loop: true })
        // gAni.to({ x: -SWIDTH }, 2500)
    };
    Ground.prototype.move = function () {
        this.x -= 5;
        if (this.x === -SWIDTH) {
            this.x = 0;
        }
    };
    return Ground;
}(egret.Sprite));
__reflect(Ground.prototype, "Ground");
