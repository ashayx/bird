class Pipe extends egret.Sprite {
    private space: number
    private pipeDistance: number
    private pipeWidth: number
    private pipeHeight: number
    private isAddScore: boolean = false
    private pipeTop: egret.Bitmap
    private pipeDown: egret.Bitmap

    constructor() {
        super()
        this.space = SHEIGHT * .25
        this.x = SWIDTH * .6
        this.y = - this.randomBetwen(SHEIGHT * .1, SHEIGHT * .5)
        this.pipeWidth = SWIDTH * .2
        this.pipeHeight = SHEIGHT * .7
        this.pipeDistance = SWIDTH * .6

        this.init()

    }

    init() {
        this.pipeTop = new egret.Bitmap()
        this.pipeTop.texture = RES.getRes('tube_png')
        this.pipeTop.x = 0
        this.pipeTop.y = 0
        this.pipeTop.width = this.pipeWidth
        this.pipeTop.height = this.pipeHeight
        this.addChild(this.pipeTop)

        this.pipeDown = new egret.Bitmap()
        this.pipeDown.texture = RES.getRes('tube_png')
        this.pipeDown.x = 0 
        this.pipeDown.y = this.pipeHeight + this.space 
        this.pipeDown.width = this.pipeWidth
        this.pipeDown.height = this.pipeHeight
        this.addChild(this.pipeDown)

    }

    move() {
        this.x -=5
        if (this.x <= - SWIDTH * 1.6  ) {
            this.isAddScore = false
            this.y = - this.randomBetwen(SHEIGHT * .1, SHEIGHT * .6)
            this.x = SWIDTH * 1
        }
    }

    randomBetwen(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}