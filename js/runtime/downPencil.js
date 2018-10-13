/* 向下的铅笔 */
import {Pencil} from "./pencil.js"

export class DownPencil extends Pencil {
	constructor(top){
		const image = Pencil.getImage("downPencil");
		super(image,top);
	}
	
	draw(){
		//两个铅笔的间隙
		let gap = window.innerHeight/5;
		this.y=this.top + gap;
		super.draw();
	}
}