'use strict';

/**
 * 统一存放所有的api请求地址
 * 在所有的组件中使用方法：'/api'+this.$api.接口属性名 (/api应用了本地跨域代理，发布线上后会自动除去)
 *
 *
 * 请注意：添加接口，请在对应模块下添加
 * 
 * 
 */
let systemPre = '/user-center/user'; //系统模块前缀

let apiUrl = {

	//系统接口
	system:{
		login:systemPre+'/member/login',		//登录接口
		register:systemPre+'',	//注册接口
	}



	//首页模块接口
	



	//物流运输模块接口
	



	//物流结算接口
	



	//服采管理接口
	



	//分析报表接口
	




	//系统管理接口
	

};




export default apiUrl;
