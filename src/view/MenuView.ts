class MenuView extends eui.Component {

    //private btn_back:eui.Button;
    private btn_game: eui.Button;
    private btn_home: eui.Button;
    private btn_article: eui.Button;

    public constructor() {
        super();
        this.skinName = 'resource/eui_skins/MenuSkin.exml';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadHome, this);
        this.btn_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loadGame, this);
        this.init();
    }
    private init() {
        switch (GameData.screen.name){
			case "Home":
				this.btn_home.enabled=false
				break;
			case "Article":
				this.btn_article.enabled=false
				break;
			case "Game":
				this.btn_game.enabled=false
				break;
		}
        
        //(<eui.Label>this.btn_article.labelDisplay).size = 42;
    }
    //加载主页
    private loadHome() {
        ScreenControl.loadHome();
    }
    //加载主页
    private loadGame() {
        ScreenControl.loadGame();
        
    }
}