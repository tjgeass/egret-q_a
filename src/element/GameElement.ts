class GameElement extends egret.Sprite {
	public id: number;
	public question: string;
	public answer: string;
	public options: Array<any>;
	public explain: string;
	constructor(id, question, answer, options, explain) {
		super();
		this.id = id;
		this.question = question;
		this.answer = answer;
		this.explain = explain;
		let temp = [];
		let ans = []
		ans["title"] = answer;
		ans["status"] = true;
		temp.push(ans);
		for (let i: number = 0; i < options.length; i++) {
			var item = [];
			item["title"] = options[i];
			item["status"] = false;
			temp.push(item);
		}
		temp = temp.sort(() => 0.5 - Math.random()); //打乱数据数组
		this.options = temp;
	}
	public update(id: number) {
	}
}