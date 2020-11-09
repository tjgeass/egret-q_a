class TimerView extends eui.Component {

	/**
	 * 时间统计
	 */
	private _timeCount: number;
	private _timeTxt: string = "00:00:00";
	private _time: egret.Timer;

	private stepLabel: eui.Label;
	private timeLabel: eui.Label;




	public get timeTxt(): string {
		return this._timeTxt;
	}

	public constructor() {
		super();
		this.initView();
		this.addEventListener("timeChange", this.onTimeReflash, this);//
	}

	private initView() {
		this.timeLabel = new eui.Label();
		this.addChild(this.timeLabel);
		this._timeCount = new Date().getTime();
		this._time = new egret.Timer(1000);

	}

	public startPlay(): void {
		this._time.addEventListener(egret.TimerEvent.TIMER, this.onTimeHandler, this);
		this._time.start();
	}

	public stopTime(): void {
		this._time.stop();
		this._time.removeEventListener(egret.TimerEvent.TIMER, this.onTimeHandler, this);
	}

	/**
	 * 时间
	 */
	private onTimeHandler(event: egret.TimerEvent): void {
		var timeCount: number = new Date().getTime() - this._timeCount;
		this._timeTxt = this.parseTime(timeCount);
		this.dispatchEvent(new egret.Event("timeChange"));
	}

	/**
	 * 刷新label
	 */
	private onTimeReflash(event: egret.Event): void {
		this.timeLabel.text = this._timeTxt;
	}
	/**
	 * 格式化时间
	 */
	private parseTime(t: number): string {
		var hour: number = 0;
		var minute: number = 0;
		var second: number = 0;

		hour = Math.floor(t / 3600000);
		minute = Math.floor((t % 3600000) / 60000);
		second = Math.floor((t % 60000) / 1000);

		return (this.getTwoLength(hour) + ":" + this.getTwoLength(minute) + ":" + this.getTwoLength(second));
	}

	private getTwoLength(data: number): string {
		if (data < 10) {
			return "0" + data;
		} else {
			return "" + data;
		}
	}

}