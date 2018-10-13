/* 陆地类 */
import {
	Sprite
} from "../base/sprite.js";
import {Director} from "../director.js";

 
export class Land extends Sprite {
	  constructor(){
		const image=Sprite.getImage("land");
		super(image,0,0,
		image.width,image.height,
		0,window.innerHeight-image.height,
		image.width,image.height);
		this.leftDistance=0;
		this.speed =Director.getInstance().speed;
	}
	
	draw(){
		this.leftDistance+=this.speed;
		if(this.leftDistance > (this.image.width - window.innerWidth)){
			this.leftDistance=0;
		}
		super.draw(this.image,this.srcX,this.srcY,this.srcW,this.srcH,-this.leftDistance,this.y,this.width,this.height);
	}
	
}