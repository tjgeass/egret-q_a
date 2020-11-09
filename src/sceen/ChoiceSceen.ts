// TypeScript file
class ChoiceScreen extends eui.Component {
    private gp: eui.Group;
    private btn_c1: eui.Button;
    private btn_c2: eui.Button;
    private btn_c3: eui.Button;
    private btn_c4: eui.Button;
    public tweenGroup: egret.tween.TweenGroup;
    public image: eui.Image;


    public constructor() {
        super();
        this.skinName = 'resource/eui_skins/ChoiceSence.exml';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private static instance: BeginScreen;

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new BeginScreen();
        }
        return this.instance;
    }
    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
        this.btn_c1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHandler.bind(this,1 ,false),this);
        this.btn_c2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHandler.bind(this,2 ,false),this);
        this.btn_c3.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHandler.bind(this,3 ,false),this);
        this.btn_c4.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHandler.bind(this,4 ,false),this);
        this.init();
    }
    private init() {
        this.playAnimation(this.tweenGroup, true);
    }


    private clickHandler(id):void {
        GameData.choice = id;
        ScreenControl.loadGame();
    }
    /**
     * 动画组播放完成
     */
    private onTweenGroupComplete(): void {
        console.log('TweenGroup play completed.');
        //this.tweenGroup.play();
    }

    private playAnimation(target: egret.tween.TweenGroup, isLoop: boolean): void {
        if (isLoop) {
            for (var key in target.items) {
                target.items[key].props = { loop: true };
            }
        }
        target.play();
    }
}