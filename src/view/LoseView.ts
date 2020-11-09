class LoseView extends egret.Sprite{
	public constructor() {
		super();
		this.touchEnabled = true;
		this.init();
	}

	init(){
		this.createView();
	}

	private createView(){
		let bgImg:egret.Bitmap = new egret.Bitmap();
		bgImg.width = GameData.stageW;
		bgImg.height = GameData.stageH;
        bgImg.texture = RES.getRes("lose_png");
        this.addChild(bgImg);
	}

	
}