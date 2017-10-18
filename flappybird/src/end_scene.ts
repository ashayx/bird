class SceneEnd extends egret.Sprite {

    private textField: egret.BitmapText
    private score: number

    constructor(score: number) {
        super()
        this.score = score
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createSceneTitle, this)
    }
    

    private createSceneTitle() {
        let W = this.stage.stageWidth
        let H = this.stage.stageHeight

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
        bg.width = W
        bg.height = H

        let gameOverTitle = this.createBitmapByName("text_game_over_png")
        this.addChild(gameOverTitle)
        gameOverTitle.x = .1 * W
        gameOverTitle.y = .1 * H
        gameOverTitle.width = .8 * W
        gameOverTitle.height = 200


        this.textField = new egret.BitmapText()
        let font = RES.getRes('font_fnt')
        this.textField.font = font;
        this.addChild(this.textField)
        this.textField.x = 280
        this.textField.y = 600
        this.textField.text = `${this.score}`
        this.textField.letterSpacing = 2
        this.textField.textAlign = "center"
        this.addChild(this.textField)

        let buttonOk = this.createBitmapByName("button_ok_png")
        this.addChild(buttonOk)
        buttonOk.x = .45 * W
        buttonOk.y = .6 * H
        buttonOk.width = 100
        buttonOk.height = 50

        buttonOk.touchEnabled = true
        buttonOk.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            this.stage.addChild(new sceneTitle())
            this.stage.removeChild(this)
            console.log('重新开始')
        },this)


        let ground = this.createBitmapByName('ground_png')
        this.addChild(ground)
        ground.x = 0
        ground.y = H - 136
        ground.width = 2 * W
        ground.height = 136
    }
   

    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}