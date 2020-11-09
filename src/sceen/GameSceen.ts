// TypeScript file
class GameScreen extends eui.Component {
    public name = "Game";
    private btn_start: eui.Button;
    private gm: GameMap;
    private popupView: PopupView;
    public constructor() {
        super();
        this.skinName = 'resource/eui_skins/GameSence.exml';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private static instance: GameScreen;

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new GameScreen();
        }
        return this.instance;

    }

    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    }


    public init() {
        
        //加载地图数据
        //GameData.timerManager = this.time_manager ;
        //GameData.timerManager.startPlay();
        //加载地图数据
        //this.gm.th
        this.gm.thisParent = this;
        GameData.gameMap = this.gm;
        GameData.popupView = this.popupView;
        // 
    }

    //游戏结束
    public showResult(result: boolean) {
        this.gm.touchChildren = false;
        const rv = new ResultView();
        rv.verticalCenter = 0;
        rv.horizontalCenter = 0;
        this.addChild(rv);
        setTimeout(function () {
            ScreenControl.loadBegin();
        }, 60000
        );
    }
}