/* 铅笔基类 */
import {Sprite} from "../base/sprite.js";
import {Director} from "../director.js";

export class Pencil extends Sprite{
	/** 
	 * @param {Image}  image 要渲染的图片
	 * @param {Number} top 铅笔图片的偏移量
	 */ 
	constructor(image,top){
		super(image,0,0,
		image.width,image.height,
		//刚好在右侧看不到的位置
		window.innerWidth,0,
		image.width,image.height);
		this.top=top;
	}
	
	draw(){
		/* 铅笔向左移动 */
		this.x=this.x-Director.getInstance().speed;
		super.draw(this.image,0,0,this.srcW,this.srcH,this.x,this.y,this.width,this.height)
	}
}