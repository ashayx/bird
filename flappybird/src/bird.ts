class Bird extends egret.Sprite {

    private isAlive: boolean
    private scaleNum: number
    private jumpHeight: number
    private g: number
    private birdWidth: number

    constructor() {
        super() 
        this.scaleNum = 3    // 放大倍数
        this.birdWidth = this.scaleNum * 35  //35是小鸟宽度 
        this.init()
        
        this.x = SWIDTH * .5 - this.birdWidth / 2
        this.y = SHEIGHT * .4
        this.isAlive = true
        this.jumpHeight = 80
        this.g = .5 //加速度
        this.rotation = 0
    }

    init() {
        let birdData = RES.getRes("bird_json")
        let birdTextrue = RES.getRes("bird_png")
        let birdFactory = new egret.MovieClipDataFactory(birdData, birdTextrue)
        let bird: egret.MovieClip = new egret.MovieClip(birdFactory.generateMovieClipData("bird"))
        // bird.x = this.x
        // bird.y = this.y
        bird.anchorOffsetX += bird.width / 2
        bird.anchorOffsetY += bird.height / 2
        bird.x += bird.width / 2
        bird.y += bird.height / 2
        bird.rotation = this.rotation
        bird.scaleX = this.scaleNum
        bird.scaleY = this.scaleNum
        bird.gotoAndPlay(0, -1)
        this.addChild(bird)
    }

    fallDown() {
        this.y += this.g
        this.g += .5

        this.rotation += 5
        if (this.rotation >= 90) {
            this.rotation = 90
        }
        if (this.y >= SHEIGHT - 75 - 136) {
            this.y = SHEIGHT - 75 - 136
            this.die()
        }
    }

    jump() {
        this.y -= this.jumpHeight
        this.g = 0
        this.rotation = -60
        if (this.y <= 0) {
            this.y = 0
        }
    }

    die() {
        this.isAlive = false
    }
}