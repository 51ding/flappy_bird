/*静态资源加载器*/
import {
	resources
} from "./resources.js";

class ResourceLoader {
	constructor() {
		this.init();
	}

	init() {
		//键值对
		this.source = new Map(resources);
		for (let [key, value] of this.source) {
			let image = new Image();
			image.src = value;
			this.source.set(key, image);
		}
	}

	/**
	 *加载完成之后会的操作
	 */
	onLoaded(callback) {
		let loadedCount = 0;
		for(let image of this.source.values()){
			image.onload= () => {
				loadedCount++;
				if(loadedCount == this.source.size){
					callback(this.source);
				}
			}
		}
	}

	static create(){
		//使用静态方法实例化,全局唯一资源加载器只会加载一次，所以使用工厂方法
		return new ResourceLoader();
	}
}

export {
	ResourceLoader
};
