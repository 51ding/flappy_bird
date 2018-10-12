import {ResourceLoader} from "./js/base/resourceLoader.js";
import {Director} from "./js/director.js";
class Main {
    constructor() {
       this.canvas=document.getElementById("canvas");
			 this.ctx = this.canvas.getContext("2d");
			 const loader= ResourceLoader.create();
			 loader.onLoaded(source =>{this.sourceFirstLoaded(source)});
			 let image=new Image();
			 image.src="./image/background.png";
			 image.onload= () => {
				 this.ctx.drawImage(image,0,0,image.width,image.height,0,0,image.width,image.height);
			 }
    }
		
		/* 资源第一次加载，加载完成之后再开始资源的渲染 */
		sourceFirstLoaded(source){
			
		}
}

export {Main};