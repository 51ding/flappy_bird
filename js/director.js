/*导演类，基于es6的单例模式*/
import {Store} from "./base/store.js";
import {UpPencil} from "./runtime/upPencil.js";
import {DownPencil} from "./runtime/downPencil.js";
class Director{
	
	constructor(){
		this.store= Store.getInstance();
		
		/* 游戏速度 */
		this.speed=2;
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
		//先渲染铅笔，后渲染陆地
		this.store.get("pencils").forEach(item => {
			item.draw();
		})
		this.store.get("land").draw();
		let timer = requestAnimationFrame(()=> this.run());
		this.store.put("timer",timer);
	}
	
	/** 
	 * 创建铅笔
	 * 
	 * */
	createPencil(){
		//上铅笔的最小高度 
		const minTop = window.innerHeight / 8;
		//上铅笔的最大高度
		const maxTop = window.innerHeight / 2;
		//生成随机高度的铅笔
		const top = minTop + Math.random()*(maxTop - minTop);
		//添加一组铅笔
		this.store.get("pencils").push(new UpPencil(top));
		this.store.get("pencils").push(new DownPencil(top));
	}
}


export {
	Director
};