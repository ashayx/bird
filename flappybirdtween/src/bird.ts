class Bird extends egret.Sprite {

    private bird: egret.MovieClip
    private isAlive: boolean
    private scaleNum: number
    private jumpHeight: number
    private g: number
    private birdWidth: number
    private tween

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
        this.tween = egret.Tween.get(this)
    }

    init() {
        let birdData = RES.getRes("bird_json")
        let birdTextrue = RES.getRes("bird_png")
        let birdFactory = new egret.MovieClipDataFactory(birdData, birdTextrue)
        this.bird = new egret.MovieClip(birdFactory.generateMovieClipData("bird"))
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
    }

    fallDown() {
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
            .to({"rotation": 90 }, 400, egret.Ease.cubicIn);

        if (this.y >= SHEIGHT - 75 - 136) {
            this.y = SHEIGHT - 75 - 136
            this.die()
        }
    }

    jump() {
        // let bj = egret.Tween.get(this)
        egret.Tween.removeTweens(this)
        egret.Tween.removeTweens(this.bird);

        egret.Tween.get(this.bird)
            .to({ "rotation": -60 }, 100, egret.Ease.cubicOut);
        egret.Tween.get(this).to({ y: this.y - this.jumpHeight}, 100, egret.Ease.circOut).call(()=>{
            this.fallDown()
        })

        // this.y -= this.jumpHeight
        // this.g = 0
        // this.rotation = -60
        // if (this.y <= 0) {
        //     this.y = 0
        // }
    }

    die() {
        this.isAlive = false
    }
}