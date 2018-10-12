/*精灵基类，负责精灵加载的资源和大小以及位置*/

class Sprite {

	/** 
	 * @param {Canvas} ctx
	 * @param {Image} image
	 * @param {Number} srcX  目标画布的左上角在目标canvas上 X 轴的位置
	 * @param {Number} srcY  目标画布的左上角在目标canvas上 Y 轴的位置
	 * @param {Number} srcW 在目标画布上绘制图像的宽度。 允许对绘制的图像进行缩放.
	 * @param {Number} srcH 在目标画布上绘制图像的高度。 允许对绘制的图像进行缩放.
	 * @param {Number} x 需要绘制到目标上下文中的，源图像的矩形选择框的左上角 X 坐标
	 * @param {Number} y 需要绘制到目标上下文中的，源图像的矩形选择框的左上角 Y 坐标。
	 * @param {Number} width 需要绘制到目标上下文中的，源图像的矩形选择框的宽度。如果不说明，整个矩形从坐标的sx和sy开始，到图像的右下角结束。
	 * @param {Number} height 需要绘制到目标上下文中的，源图像的矩形选择框的高度。
	 */
	constructor(ctx = null,
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
		
	}
}
