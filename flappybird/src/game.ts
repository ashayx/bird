class game extends egret.Sprite {
    constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this)
    }
    
    private textField: egret.BitmapText
    private score: number
    private bird

    init() {
       
        this.score = 0

        let bg = this.createBitmapByName("bg")
        this.addChild(bg)
        bg.width = SWIDTH
        bg.height = SHEIGHT

        this.textField = new egret.BitmapText()
        let font = RES.getRes('font_fnt')
        this.textField.font = font;
        this.addChild(this.textField)
        this.textField.x = 280
        this.textField.y = 200
        this.textField.text = `${this.score}`
        this.textField.letterSpacing = 2
        this.textField.textAlign = "center"
        this.addChild(this.textField)

        this.bird = new Bird()
        this.addChild(this.bird)

        let ground = new Ground()
        this.addChild(ground)

        // 计时器不知道用什么
        egret.Ticker.getInstance().register(this.onTick, this);

        bg.touchEnabled = true
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            this.bird.jump()
        },this)
    }

    private onTick(dt: number): void {
        //累加时间，dt是帧时间间隔以毫秒为单位
        this.bird.fallDown()
        if(!this.bird.isAlive){
            this.stage.addChild(new SceneEnd(this.score))
            this.stage.removeChild(this)
            egret.Ticker.getInstance().unregister(this.onTick, this);
        }
        this.textField.text = `${this.score}`
    }

    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}