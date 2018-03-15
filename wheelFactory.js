/**
 * 种子模块
 */
//扩展对象，支持多对象合并和选择是否覆写
function mix(target, source){
	//首先将参数转化为数组
	var args = [].slice.call(arguments),
		i =1,
		key,
		ride = typeof args[args.length - 1] == "boolean"?args.pop(): true;
		if(args.length === 1){     //处理$.mix(hash)的情形
			target = !this.window?this:{};
			i = 0;
		}
		while((source = args[i++])){
			for(key in source){  //允许对象糅杂，用户保证都是对象
				if(ride || !(key in target)){
					target[key] = source[key];
				}
			}
		}
		return target;
}

//将类数组转化为数组

//类型的判定，
//基本数据类型: undefined, string, null, boolean, function, object  通过typeof来判断
//对象类型系统: 以基础类型系统为基础，通过instanceof来判断

var class2type = {
	"[objectHTMLDocument]":"Document",
	"[objectHTMLCollection]":"NodeList",
	"[objectHTMLStaticNodeList]":"NodeList",
	"[objectIXMLDOMNodeList]":"NodeList",
	"[objectDOMWindow]":"Window",
	"[object global]":"Window",
	"null": "Null",
	"NaN": "NaN",
	"undefined":"undefined"
},
toString = class2type.toString;
"Boolean,Number,String,Function,Array,Date,RegExp,Window,Document,Arguments,NodeList".replace($.rword, function(name){
	class2type["[object "+name+"]"] = name;
});

mass.type = function(obj, str){
	var result = class2type[]
}

/**
 * 模块加载系统
 */


/**
 * 语言模块
 * 1. 对字符串的扩展和修复
 * 2. 数组的扩展和修复
 * 3. 数值的扩展和修复（数值精度的扩展和修复）
 * 4. 函数的扩展和修复
 * 5. 日期的扩展与修复
 */

/**
 * 浏览器嗅探与特征侦测
 */

/**
 * 类工厂
 */

/**
 * 选择器引擎
 */