class SceneEnd extends egret.Sprite {

    private textField: egret.BitmapText
    private score: number

    constructor(score: number) {
        super()
        this.score = score
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createSceneTitle, this)
    }
    

    private createSceneTitle() {
        

        this.addEventListener(egret.Event.ENTER_FRAME, () => {
            // console.log(1)
        }, this);

        egret.lifecycle.onPause = () => {
            egret.ticker.pause()
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume()
        }

        let bg = this.createBitmapByName("bg")
        this.addChild(bg)
        bg.width = SWIDTH
        bg.height = SHEIGHT

        let gameOverTitle = this.createBitmapByName("text_game_over_png")
        this.addChild(gameOverTitle)
        gameOverTitle.x = SWIDTH * .2
        gameOverTitle.y = SHEIGHT * .15
        gameOverTitle.width = SWIDTH * .6
        gameOverTitle.height = SWIDTH * .6 * .265


        this.textField = new egret.BitmapText()
        let font = RES.getRes('font_fnt')
        this.textField.font = font;
        this.addChild(this.textField)
        this.textField.x = SWIDTH * .48
        this.textField.y = SHEIGHT * .4
        this.textField.scaleX = 2.5
        this.textField.scaleY = 2.5
        this.textField.text = `${this.score}`
        this.textField.letterSpacing = 2
        this.textField.textAlign = "center"
        this.addChild(this.textField)

        let buttonOk = this.createBitmapByName("button_ok_png")
        this.addChild(buttonOk)
        buttonOk.x = SWIDTH * .4 
        buttonOk.y = SHEIGHT * .6
        buttonOk.width = SWIDTH * .2
        buttonOk.height = SWIDTH * .2 * .35

        buttonOk.touchEnabled = true
        buttonOk.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            this.stage.addChild(new SceneTitle())
            this.stage.removeChild(this)
            // egret.ticker.resume()
            console.log('重新开始')
        },this)


        let ground = this.createBitmapByName('ground_png')
        this.addChild(ground)
        ground.x = 0
        ground.y = SHEIGHT - 136
        ground.width = 2 * SWIDTH
        ground.height = 136
    }
   

    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}