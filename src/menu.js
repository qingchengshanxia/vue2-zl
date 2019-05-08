/**
 *
 * 系统菜单目录结构
 *
 *
 *   这里先设定静态目录，等二级目录权限接口设定好了后，改为从接口中获取数据
 * 
 */

'use strict';

 
let menuData={
    // 首页菜单
    'shouye':{
        "submenu": null,
        "childs": [
            {
                "submenu": {
                    "id": 10,
                    "parentMenuId": 0,
                    "name": "shouye1",
                    "icon": "el-icon-setting\r\n",
                    "title": "首页1",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/shouye/shouye1',
                    "type": "shouye",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 11,
                    "parentMenuId": 0,
                    "name": "shouye2",
                    "icon": "el-icon-setting\r\n",
                    "title": "首页2",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/shouye/shouye2',
                    "type": "shouye",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 12,
                    "parentMenuId": 0,
                    "name": "shouye3",
                    "icon": "el-icon-setting\r\n",
                    "title": "首页3",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/shouye/shouye3',
                    "type": "shouye",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 13,
                    "parentMenuId": 0,
                    "name": "shouye4",
                    "icon": "el-icon-setting\r\n",
                    "title": "首页4",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/shouye/shouye4',
                    "type": "shouye",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 14,
                    "parentMenuId": 0,
                    "name": "shouye5",
                    "icon": "el-icon-setting\r\n",
                    "title": "首页5",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/shouye/shouye5',
                    "type": "shouye",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
        ]
    },
    // 
    'tian':{
        "submenu": null,
        "childs":[
            {
                "submenu": {
                    "id": 201,
                    "parentMenuId": 0,
                    "name": "tian1",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜1",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian1',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 202,
                    "parentMenuId": 0,
                    "name": "tian2",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜2",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian2',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 203,
                    "parentMenuId": 0,
                    "name": "tian3",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜3",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian3',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 204,
                    "parentMenuId": 0,
                    "name": "tian4",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜4",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian4',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 205,
                    "parentMenuId": 0,
                    "name": "tian5",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜5",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian5',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 206,
                    "parentMenuId": 0,
                    "name": "tian6",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜6",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian6',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 207,
                    "parentMenuId": 0,
                    "name": "tian7",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜7",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian7',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 208,
                    "parentMenuId": 0,
                    "name": "tian8",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜8",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian8',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 209,
                    "parentMenuId": 0,
                    "name": "tian9",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜9",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian9',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 210,
                    "parentMenuId": 0,
                    "name": "tian10",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜10",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian10',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 211,
                    "parentMenuId": 0,
                    "name": "tian11",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜11",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian11',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 212,
                    "parentMenuId": 0,
                    "name": "tian12",
                    "icon": "el-icon-setting\r\n",
                    "title": "天字榜12",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/tian/tian12',
                    "type": "tian",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
        ]
    },
    // 
    'di':{
        "submenu": null,
        "childs":[
            {
                "submenu": {
                    "id": 31,
                    "parentMenuId": 0,
                    "name": "di1",
                    "icon": "el-icon-setting\r\n",
                    "title": "地字榜1",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/di/di1',
                    "type": "di",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 32,
                    "parentMenuId": 0,
                    "name": "di2",
                    "icon": "el-icon-setting\r\n",
                    "title": "地字榜2",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/di/di2',
                    "type": "di",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 33,
                    "parentMenuId": 0,
                    "name": "di3",
                    "icon": "el-icon-setting\r\n",
                    "title": "地字榜3",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/di/di3',
                    "type": "di",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 34,
                    "parentMenuId": 0,
                    "name": "di4",
                    "icon": "el-icon-setting\r\n",
                    "title": "地字榜4",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/di/di4',
                    "type": "di",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 35,
                    "parentMenuId": 0,
                    "name": "di5",
                    "icon": "el-icon-setting\r\n",
                    "title": "地字榜5",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/di/di5',
                    "type": "di",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 36,
                    "parentMenuId": 0,
                    "name": "di6",
                    "icon": "el-icon-setting\r\n",
                    "title": "地字榜6",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/di/di6',
                    "type": "di",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
        ]
    },
    // 
    'xuan':{
        "submenu": null,
        "childs":[
            {
                "submenu": {
                    "id": 41,
                    "parentMenuId": 0,
                    "name": "xuan",
                    "icon": "el-icon-setting\r\n",
                    "title": "玄字榜1",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/xuan/xuan1',
                    "type": "xuan",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 42,
                    "parentMenuId": 0,
                    "name": "xuan2",
                    "icon": "el-icon-setting\r\n",
                    "title": "玄字榜2",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/xuan/xuan2',
                    "type": "xuan",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 43,
                    "parentMenuId": 0,
                    "name": "xuan3",
                    "icon": "el-icon-setting\r\n",
                    "title": "玄字榜3",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/xuan/xuan3',
                    "type": "xuan",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
        ]
    },
    // 
    'huang':{
        "submenu": null,
        "childs":[
            {
                "submenu": {
                    "id": 51,
                    "parentMenuId": 0,
                    "name": "huang1",
                    "icon": "el-icon-setting\r\n",
                    "title": "黄字榜1",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/huang/huang1',
                    "type": "fenxibaobiao",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 52,
                    "parentMenuId": 0,
                    "name": "huang2",
                    "icon": "el-icon-setting\r\n",
                    "title": "黄字榜2",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/huang/huang2',
                    "type": "fenxibaobiao",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
        ]
    },
}

module.exports = menuData;