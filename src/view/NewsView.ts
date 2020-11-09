class NewsView extends eui.Component {

    private lbl_text:eui.Label;
	private img :eui.Image;


	public constructor() {
		super();
        this.skinName = 'resource/eui_skins/NewsViewSkin.exml';
        //this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}
	/**
	 private onAddToStage(event: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		//this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.back,this)
	}
	 */
    
	private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v;
        this.lbl_text.text = v;
    }

	private _image : string;
    public get image() : string {
        return this._image;
    }
    public set image(v : string) {
        this._image = v;
		this.img.source = RES.getRes(v);;
    }

    private _desc : string;
    public get desc() : string {
        return this._desc;
    }
    public set desc(v : string) {
        this._desc = v;
    }
}