/*上部分铅笔*/
import {Pencil} from "./pencil.js";


export class  UpPencil extends Pencil{
	constructor(top){
		const image = Pencil.getImage("upPencil");
		super(image,top);
	}
	
	draw(){
		this.y =this.top - this.height;
		super.draw();
	}
}
