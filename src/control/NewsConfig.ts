class NewsConfig {
	public static getData(id: number){
		let json = RES.getRes("newsList_json");
		return json[id];
	}
	public static getNewsNum(){
		let json = RES.getRes("newsList_json");
		return Object.keys(json).length;
	}
}