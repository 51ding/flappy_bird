/*导演类，基于es6的单例模式*/
import {Store} from "/js/base/store.js";

class Director{
	
	constructor(){
		this.store= Store.getInstance();
	}
	
	static getInstance(){
		if(!Director.instance){
			Director.instance = new Director();
		}
		return Director.instance;
	}
	
	/* 行为 */
	run(){
		this.store.get("background").draw();
		this.store.get("land").draw();
		//动画线程
		let timer = requestAnimationFrame(()=> this.run());
		this.store.put("timer",timer);
	}
}


export {
	Director
};