/* 背景类，继承精灵类 */
import {
	Sprite
} from "../base/sprite.js";

class Background extends Sprite {
	constructor(){
		const image = Sprite.getImage("background");
		//调用父类构造函数l
		super(image,
		0,0,
		image.width,image.height,
		0,0,
		window.innerWidth,window.innerHeight);
	}
}


export {
	Background
}