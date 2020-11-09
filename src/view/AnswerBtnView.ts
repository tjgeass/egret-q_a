class AnswerBtnView extends eui.Component {
    private lbl_id: eui.Label;
    private lbl_text: eui.Label;


	public constructor() {
		super();
        this.skinName = 'resource/eui_skins/AnswerBtnSkin.exml';
	}

    private _title : string;
    public get title() : string {
        return this._title;
    }
    public set title(v : string) {
        this._title = v;
        this.lbl_text.text = v;
    }

    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
        switch (v ){
            case 0 :
            this.lbl_id.text = "A.";
            break;
            case 1 :
            this.lbl_id.text = "B.";
            break;
            case 2 :
            this.lbl_id.text = "C.";
            break;
            case 3 :
            this.lbl_id.text = "D.";
            break;
        }
    }
    private _status : string;
    public get status() : string {
        return this._status;
    }
    public set status(v : string) {
        this._status = v;
    }


}