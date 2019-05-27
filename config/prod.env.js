'use strict'
//生产环境下用正常的接口地址
const target = process.env.npm_lifecycle_event;
let obj;
if (target == 'dev') {
    //开发
    obj = {
        NODE_ENV: '"development"',
        //附件域名
        API_URL: '""',
    }
}else if(target == 'exam'){
    //测试
    obj = {
        NODE_ENV: '"exam"',
        //附件域名
        API_URL: '""',
    }

}else if(target == 'build') {
    //生产
    obj = {
        NODE_ENV: '"production"',
        //附件域名
        API_URL: '""',
    }
}

module.exports = obj;
