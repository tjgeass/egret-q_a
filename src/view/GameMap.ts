class GameMap extends eui.Component {
	public thisParent: GameScreen;
	private gp_main: eui.Group;
	private gp_que: eui.Group;
	private gp_ans: eui.Group;


	private timer: egret.Timer;
	private lb_time: eui.Label;
	private lb_question: eui.Label;
	private lb_que1: eui.Label;
	private lb_num: eui.Label;

	private btn_back: eui.Button;

	


	private gp_result: eui.Group;
	private lb_text0: eui.Label;
	private lb_text1: eui.Label;
	private lb_text2: eui.Label;
	private lb_text3: eui.Label;
	private btn_again: eui.Button;

	private btn_goHome: eui.Button;

	public tweenGroup: egret.tween.TweenGroup;

	public isReady: boolean = false;//是否可以开始


	public constructor() {
		super();
		this.skinName = 'resource/eui_skins/GameMapSkin.exml';
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
		this.btn_goHome.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadBegin, ScreenControl);
		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.back, this);
		this.init();
	}

	private init() {
		GameData.resetData();
		this.createTimer();
		GameData.timer = this.timer;
		this.initData();
		this.initView();
	}

	private createTimer() {
		this.lb_time.text = GameData.time.toString();
		this.timer = new egret.Timer(1000, GameData.time);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.update, this);
		this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.complete, this);
	}

	public update() {
		let num: number = this.timer.repeatCount - this.timer.currentCount;
		//设置显示文本
		this.lb_time.text = num.toString();
		//添加到显示列表
	}
	//计时结束
	private complete() {
		this.timer.removeEventListener(egret.TimerEvent.TIMER, this.update, this);
		this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.complete, this);
		this.showResult();
	}
	/**
	 * 初始化数据
	 */
	private initData() {
		let temp: GameElement[] = new Array();
		for (let i: number = 0; i < GameData.getDataNum(); i++) {
			let id = i + 1;
			let item = GameData.getData(i);
			let gele: GameElement = new GameElement(id, item.question, item.answer, item.options, item.explain);
			temp.push(gele);
		}
		GameData.elements = new Array();
		temp = temp.sort(() => 0.5 - Math.random()); //打乱数据数组
		GameData.elements = temp;
	}

	//初始化页面
	public initView() {
		this.tweenGroup.play();
		this.gp_main.visible =true;
		this.gp_result.visible =false;
		switch(GameData.choice){
			case 1:
			this.lb_que1.text = "(打一节气)";
			break;
			case 2:
			this.lb_que1.text = "(打一节日)";
			break;
			case 3:
			this.lb_que1.text = "(打一习俗)";
			break;
			case 4:
			this.lb_que1.text = "(打一美食)";
			break;
		}
		GameData.element = GameData.elements[GameData.chapter - 1]; // 题号索引从0开始
		this.lb_num.text = GameData.chapter + "/"+GameData.level;
		this.lb_question.text = GameData.element.question;
		if(GameData.element.question.length >12){
			this.lb_question.size =40;	
		}else{
			this.lb_question.size =70;
		}
		let options = GameData.element.options;
		this.gp_ans.removeChildren();
		for (var i: number = 0; i < 4; i++) {
			var btn: AnswerBtnView = new AnswerBtnView();
			btn.id = i;
			btn.status = options[i].status;
			btn.title = options[i].title;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.judge, this);
			btn.touchChildren = false;
			btn.touchEnabled = true;
			this.gp_ans.addChild(btn);
		}
		this.gp_que.visible = true;
		GameData.popupView.visible = false;
	}
	/**
	 * 选项事件
	 *
	 */

	private judge(event: egret.TouchEvent): void {
		GameData.popupView.showExplain(event.target.status);
	}

	/**
	 * 跳过
	 */
	private back() {
		GameData.popupView.showBack();
	}

	public showResult() {
		this.btn_again.addEventListener(egret.TouchEvent.TOUCH_TAP, ScreenControl.loadChoice, ScreenControl);
		this.timer.stop();
		this.btn_back.visible = false;
		this.gp_main.visible = false;
		var text0 = String(GameData.answerNum);
		GameData.saveLocalData(text0);
		this.lb_text0.textFlow = <Array<egret.ITextElement>>[
			{ text: "您共答对了 ", style: { "size": 24 } }
			, { text: text0, style: { "textColor": 0x900000, "size": 45 } }
			, { text: " 道题 ", style: { "size": 24 } }
		];
		var text1 = String(Math.round(GameData.answerNum / GameData.level * 100));
		this.lb_text1.textFlow = <Array<egret.ITextElement>>[
			{ text: "答题正确率  ", style: { "size": 24 } }
			, { text: text1, style: { "textColor": 0x900000, "size": 30 } }
			, { text: " % ", style: { "size": 24 } }
		];
		var text2 = String(GameData.timer.currentCount);
		this.lb_text2.textFlow = <Array<egret.ITextElement>>[
			{ text: "共计用时  ", style: { "size": 24 } }
			, { text: text2, style: { "textColor": 0x900000, "size": 30 } }
			, { text: " 秒 ", style: { "size": 24 } }
		];
		var text3 = GameData.getRank(text0);
		this.lb_text3.textFlow = <Array<egret.ITextElement>>[
			{ text: "击败了  ", style: { "size": 24 } }
			, { text: text3, style: { "textColor": 0x900000, "size": 30 } }
			, { text: " % 的小伙伴 ", style: { "size": 24 } }
		];
		this.lb_num.visible =false;
		this.btn_goHome.visible =true;
		this.gp_result.visible =true;
		GameData.onResourceLoadComplete("result_mp3");
	}


	/**
     * 动画组播放完成
     */
    private onTweenGroupComplete(): void {
        console.log('TweenGroup play completed.');
        this.timer.start();
    }


}