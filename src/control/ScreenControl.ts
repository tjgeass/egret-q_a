class ScreenControl{

	//加载开始页面
	public static loadBegin(){
		this.load(new BeginScreen())
		
	}
	//加载开始页面
	public static loadChoice(){
		this.load(new ChoiceScreen())
	}
	//加载主页面
	public static loadHome(){
		this.load(new HomeScreen())
	}

	//加载游戏页面
	public static loadGame(){
		this.load(new GameScreen())
	}


	private static load(fn){
		GameData.stage.removeChildren();
		const child = fn;
		GameData.screen = child;
		GameData.stage.addChild(child);
	}
	
}