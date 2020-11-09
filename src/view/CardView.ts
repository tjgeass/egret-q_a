class CardView extends eui.Component {
    private lb_text: eui.Label;
    public bg: eui.Rect;
    private elePadding: number = 5;
    public id: number;
    public name: string;
    public gp_id: number;
    public click_num: number;

    public constructor(id = 1, name = "字", gp_id, click_num) {
        super();
        this.skinName = 'resource/eui_skins/CardViewSkin.exml';
        this.touchChildren = false;
        this.id = id;
        this.lb_text.text = name;
        this.gp_id = gp_id;
        this.click_num = click_num;
    }
    
    public addBorder() {
        this.bg.strokeWeight = 3;
    }
    public removeBorder() {
        this.bg.strokeWeight = null;
    } 
    public clicked() {
        this.click_num = this.click_num-1;
        if(this.click_num == 0){
            this.touchEnabled =false;
        }
    }

    //连线点定位
    public targetX(floatLeft = true): number {
        if (floatLeft) {
            var x = this.x;
        } else {
            var x = this.x + this.width;
        }
        return x;
    }

    //连线点定位
    public targetY(): number {
        var y = this.y + (this.height / 2);
        return y;
    }
}