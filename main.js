import {ResourceLoader} from "./js/base/resourceLoader.js";
import {Director} from "./js/director.js";
import {Store} from "./js/base/store.js";

/* 资源类 */
import {Background} from "./js/runtime/background.js";
import {Land} from "/js/runtime/land.js";
import {UpPencil} from "/js/runtime/upPencil.js";
class Main {
    constructor() {
       this.canvas=document.getElementById("canvas");
			 this.ctx = this.canvas.getContext("2d");
			 this.store = Store.getInstance();
			 const loader= ResourceLoader.create();
			 loader.onLoaded(source =>{this.sourceFirstLoaded(source)});
    }
		
		/* 资源第一次加载，加载完成之后再开始资源的渲染 */
		sourceFirstLoaded(source){
			this.store.ctx= this.ctx;
			this.store.source= source;
			this.init();
		}
		
		init(){
			this.store.put("background",Background)
								.put("land",Land)
								//铅笔这里保存数组
								.put("pencils",[]);
			let director = Director.getInstance();
			//创建第一组铅笔
			director.createPencil();
	    director.run();
		}
}

export {Main};