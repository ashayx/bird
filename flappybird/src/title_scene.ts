class SceneTitle extends egret.Sprite {
    constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createSceneTitle,this)
    }
    
    private createSceneTitle() {

        let bg = this.createBitmapByName("bg")
        this.addChild(bg)
        bg.width = SWIDTH
        bg.height = SHEIGHT

        let title = this.createBitmapByName('title_png')
        this.addChild(title)
        title.width = SWIDTH * .6
        title.height = SWIDTH * .6 * .27
        title.x = SWIDTH * .2
        title.y = SHEIGHT * .15
       /*  ready.width = 300
        ready.height = 200 */
        
        let startButton = this.createBitmapByName('button_play_png')
        this.addChild(startButton)
        startButton.x = SWIDTH * .4
        startButton.y = SHEIGHT * .6
        startButton.width = SWIDTH * .2
        startButton.height = SWIDTH * .2 * .6

        

        let bird = new Bird()
        this.addChild(bird)

        // let pipe = new Pipe()
        // this.addChild(pipe)

        let ground = new Ground()
        this.addChild(ground)

        startButton.touchEnabled = true;
        startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            console.log('开始')
            this.stage.addChild(new Game())  
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