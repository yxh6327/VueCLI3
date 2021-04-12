module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
    	viewportWidth: 375, //视口的宽度标准
    	viewportHeight: 667, //视口的高度标准
    	unitPrecision: 5, //最多保留的小数位数
    	viewportUnit: 'vw', //以宽度为基准进行转化
    	minPixelvalue: 1, //小于1px的不转化
    	mediaQuery: false //禁用媒体查询
    	// exclude: [/TabBar/] //这些文件不转换
    }
  }
}
