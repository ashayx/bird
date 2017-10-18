class sceneTitle extends egret.Sprite {
    constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createSceneTitle,this)
    }
    
    private createSceneTitle() {

        let bg = this.createBitmapByName("bg")
        this.addChild(bg)
        bg.width = SWIDTH
        bg.height = SHEIGHT

        let ready = this.createBitmapByName('text_ready_png')
        this.addChild(ready)
        ready.x = 100
        ready.y =100
       /*  ready.width = 300
        ready.height = 200 */
        
        let startButton = this.createBitmapByName('button_play_png')
        this.addChild(startButton)
        startButton.x = 200
        startButton.y = 700
        startButton.width = 116
        startButton.height = 70

        

        let bird = new Bird()
        this.addChild(bird)

        let ground = new Ground()
        this.addChild(ground)

        startButton.touchEnabled = true;
        startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            console.log('开始')
            this.stage.addChild(new game())  
            this.stage.removeChild(this)
        }, this)
    }

    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}