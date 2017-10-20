class Game extends egret.Sprite {
    constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this)
    }
    
    private textField: egret.BitmapText
    private score: number
    private bird: any
    private pipe: any
    private ground: any
    private distance: number = SWIDTH * .8

    init() {
       
        this.score = 0

        let bg = this.createBitmapByName("bg")
        this.addChild(bg)
        bg.width = SWIDTH
        bg.height = SHEIGHT

        
        this.pipe = []
        for(let i = 0;i < 3;i++) {
            let p = new Pipe()
            p.x = this.distance * i + SWIDTH
            this.pipe.push(p)
            this.addChild(p) 
        }

        this.ground = new Ground()
        this.addChild(this.ground)

        this.bird = new Bird()
        this.addChild(this.bird)
        this.bird.fallDown()
        
        // 分数
        this.calculatedScore()
        // 计时器
        egret.Ticker.getInstance().register(this.runGame, this);

        bg.touchEnabled = true
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            if (this.bird.isAlive) {
                this.bird.jump()
            }
        },this)

    }

    private runGame(dt: number): void {
        //累加时间，dt是帧时间间隔以毫秒为单位
        // console.log(dt)
        if(this.bird.isAlive){
            // this.bird.fallDown()
            // this.ground.move()
            // 管子移动
            let bx = this.bird.x
            let by = this.bird.y
            let bw = this.bird.birdWidth

            for(let i in this.pipe) {
                let p = this.pipe[i]
                p.move()
                // 计算分数
                if(p.x < this.bird.x && !p.isAddScore) {
                    this.score ++ 
                    this.textField.text = `${this.score}`
                    p.isAddScore = true
                }
                // 碰撞检测
                if (bx + bw/2 > p.x && bx < p.x + p.pipeWidth) {
                    if (by < p.y + p.pipeHeight || by + 50 > p.y + p.pipeHeight + p.space) {
                        this.bird.isAlive = false
                        console.log('碰撞')
                    }
                }

            }
        }else {
            // this.stage.addChild(new SceneEnd(this.score))
            // this.stage.removeChild(this)
            egret.Tween.removeAllTweens();
            egret.Ticker.getInstance().unregister(this.runGame, this);
            console.log(this.bird.isAlive,'die')
        }

    }

    private calculatedScore (){
        this.textField = new egret.BitmapText()
        let font = RES.getRes('font_fnt')
        this.textField.font = font;
        this.addChild(this.textField)
        this.textField.x = SWIDTH * .48
        this.textField.y = SHEIGHT * .15
        this.textField.scaleX = 2.5
        this.textField.scaleY = 2.5
        this.textField.text = `${this.score}`
        this.textField.letterSpacing = 2
        this.textField.textAlign = "center"
        this.addChild(this.textField)
    }

    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}