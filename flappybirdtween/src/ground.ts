class Ground extends egret.Sprite {
    constructor() {
        super()
        this.x = 0
        this.init()
    }

    init() {
        let g = new egret.Bitmap()
        g.texture = RES.getRes('ground_png')
        this.addChild(g)
        g.x = 0
        g.y = SHEIGHT - 136
        g.width = 2 * SWIDTH
        g.height = 136

        let gAni = egret.Tween.get(g, { loop: true })
        gAni.to({ x: -SWIDTH }, 2500)
        
    }

    move() {


    //    this.x -= 5
    //    if(this.x === -SWIDTH) {
    //        this.x = 0
    //    }
    }
}