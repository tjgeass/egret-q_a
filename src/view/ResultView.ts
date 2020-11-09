class ResultView extends eui.Component{
	private bitmap: string;
	public constructor() {
		super();
		this.init()
	}

	init(){
		var image:eui.Image = new eui.Image();
		image.horizontalCenter = 0;
		image.verticalCenter = 0;
		image.source = RES.getRes("win_png");
		this.anchorOffsetX =image.width/2;
		this.anchorOffsetY =image.height/2;
        this.addChild(image);
	}

}