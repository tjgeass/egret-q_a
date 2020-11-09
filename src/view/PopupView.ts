// TypeScript file


class PopupView extends eui.Component {
    private ico: eui.Image;

    private gp_explain: eui.Group;
	private lb_title: eui.Label;
	private lb_explain: eui.Label;
	private lb_answer: eui.Label
	private btn_next: eui.Button;

    private gp_skip: eui.Group;

	private btn_home: eui.Button;
    private btn_end: eui.Button;
    private btn_close: eui.Button;

    public constructor() {
        super();
        this.skinName = 'resource/eui_skins/PopupSkin.exml';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    private onAddToStage(event: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.next, this);
        this.btn_home.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadBegin, ScreenControl);
        this.btn_end.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showResult, this);
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
	}
    /**
	 * 显示回答结果
	 */
	public showExplain(result: boolean) {
		GameData.timer.stop();
        this.gp_explain.visible = true;
        this.gp_skip.visible = false;
		this.lb_answer.text = GameData.element.answer;
		this.lb_explain.text = GameData.element.explain;
		if (result) {
			GameData.answerNum = GameData.answerNum + 1;
			this.lb_title.text = '回答正确';
            this.ico.source = RES.getRes("success_png");
			this.gp_explain.visible = true;
			GameData.onResourceLoadComplete("true_mp3");
		} else {
			this.lb_title.text = '回答错误';
            this.ico.source = RES.getRes("error_png");
			this.gp_explain.visible = true;
			GameData.onResourceLoadComplete("false_mp3");
		}
        this.visible = true;
	}

    public showBack(){
        this.ico.source = RES.getRes("end_png");
        this.gp_explain.visible = false;
        this.gp_skip.visible = true;
        this.visible = true;
    }


    /**
	 * 下一题
	 */
	private next() {
		if (GameData.chapter == GameData.level) {
            this.showResult();
            this.visible = false;
		} else {
			GameData.chapter = GameData.chapter + 1;
			GameData.gameMap.initView();
			GameData.timer.start();
            this.gp_explain.visible = false;
            this.visible = false;
		}
	}

    private close() {
        this.visible = false;
    }

    private showResult() {
        GameData.gameMap.showResult();
        this.visible = false;
    }
}