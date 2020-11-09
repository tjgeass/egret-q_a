// TypeScript file
class HomeScreen extends eui.Component
{
    public name ="Home";
    private btn_back:eui.Button;

    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/HomeSence.exml';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    
    private static instance: HomeScreen;
    
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new HomeScreen();
        }
        return this.instance;
    }
    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,ScreenControl.loadBegin,ScreenControl)
        this.init();
    }
    private init() {

    }



}