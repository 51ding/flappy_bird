/*精灵基类，负责精灵加载的资源和大小以及位置*/
import {Store} from "./store.js";

class Sprite {

	/** 
	 * @param {Canvas} ctx
	 * @param {Image} image
	 * @param {Number} srcX  目标画布(image)的左上角在目标canvas上 X 轴的位置
	 * @param {Number} srcY  目标画布的左上角在目标canvas上 Y 轴的位置
	 * @param {Number} srcW 在目标画布上绘制图像的宽度(图像的宽高)。 允许对绘制的图像进行缩放.
	 * @param {Number} srcH 在目标画布上绘制图像的高度。 允许对绘制的图像进行缩放.
	 * @param {Number} x 需要绘制到目标上下文中的，源图像的矩形选择框的左上角 X 坐标(在canvas的位置)
	 * @param {Number} y 需要绘制到目标上下文中的，源图像的矩形选择框的左上角 Y 坐标。
	 * @param {Number} width 需要绘制到目标上下文中的，源图像的矩形选择框的宽度。如果不说明，整个矩形从坐标的sx和sy开始，到图像的右下角结束。
	 * @param {Number} height 需要绘制到目标上下文中的，源图像的矩形选择框的高度。
	 */
	constructor(
		img = null,
		srcX = 0,
		srcY = 0,
		srcW = 0,
		srcH = 0,
		x = 0,
		y = 0,
		width = 0,
		height = 0
	) {
		this.store=Store.getInstance();
		this.ctx=this.store.ctx;
		this.image=img;
		this.srcX=srcX;
		this.srcY=srcY;
		this.srcW=srcW;
		this.srcH=srcH;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
	}
	
	/* 相当于方法的重载*/
	draw(image = this.image,
	srcX=this.srcX,srcY=this.srcY,
	srcW=this.srcW,srcH=this.srcH,
	x=this.x,y=this.y,
	width=this.width,height=this.height){
		this.ctx.drawImage(image,srcX,srcY,srcW,srcH,x,y,width,height);
	}
	
	static getImage(key){
		return Store.getInstance().source.get(key);
	}
	
}


export {
	Sprite
}
