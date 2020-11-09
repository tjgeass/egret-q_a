class PassView extends egret.Sprite{
	public constructor() {
		super();
		this.touchEnabled = true;
		this.init();
	}
	init(){
		this.createView();
	}
	private createView(){
		var image:eui.Image = new eui.Image();
		image.horizontalCenter = 0;
		image.verticalCenter = 0;
		image.source = RES.getRes("win_png");
        this.addChild(image);
	}
}