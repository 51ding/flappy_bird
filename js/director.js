/*导演类，基于es6的单例模式*/
class Director{
	
	constructor(){
		console.log("构造器初始化");
	}
	
	static getInstance(){
		if(!Director.instance){
			Director.instance = new Director();
		}
		return Director.instance;
	}
}


export {
	Director
};