<template>
  <!-- 头部导航栏、一级导航栏 -->
  <div class="header-box">
    <h1 class="header-logo"><img :src="require('@/assets/logo.png')"><span>龙龙爱洋洋</span></h1>
    <div class="header-menu">
        <ul class="clearfix"> 
          <li v-for="(item,index) in mainMenuData" :class="{'active':curMenuIndex == index}" @click="setCurMenuIndex(index)">
              <span>{{item.menuName}}</span>
          </li>
        </ul> 
    </div>
    <div class="header-person">
        <div>
          <div class="head-img">
            <el-dropdown trigger="click" placement="bottom">
              <span class="el-dropdown-link">
                <span class="clearfix" style="color:#fff;font-weight: normal;"><i></i><i>{{name}}</i></span>
              </span>
              <el-dropdown-menu slot="dropdown" class="drop-menu">
                <el-dropdown-item>个人资料</el-dropdown-item>
                <el-dropdown-item disabled>安全</el-dropdown-item>
                <el-dropdown-item><i class="iconfont icon-xiaoxi" style="font-size: 13px;margin-right: 3px;"></i>我的消息</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="doc-nav">
            <el-dropdown trigger="click" placement="bottom">
              <span class="el-dropdown-link">
                <i class="iconfont icon-menu"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="drop-menu">
                <el-dropdown-item @click.native="showDetail"><span>UI 细节统一规范</span></el-dropdown-item>
                <el-dropdown-item @click.native="goPath('/doc/design')"><span>业务文档</span></el-dropdown-item>
                <el-dropdown-item @click.native="goPath('/doc/elementuiformat')"><span>UI文档</span></el-dropdown-item>
                <el-dropdown-item @click.native="goPath('/doc/webstandard')"><span>前端架构/规范文档</span></el-dropdown-item>
                <el-dropdown-item @click.native="goPath('/doc/print')"><span>打印模板演示</span></el-dropdown-item>
                <el-dropdown-item divided @click.native="loginOut">
                  <span style="font-size: 13px;">
                    <i class="iconfont icon-dianyuan" style="color:#ff4500;font-size: 13px;"></i> 退出登录
                  </span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div style="margin-left: 12px;">
            <el-tooltip class="item" effect="light" :open-delay="500" :content="changeText" placement="left">
              <span @click="switchBoxSize"><i class="iconfont icon-frameexpand"></i></span>
            </el-tooltip>
            <el-tooltip class="item" effect="light" :open-delay="1000" :content="changeText" placement="left">
              <span v-show="changeText != '最大化'" @click="switchBoxSize" class="box-recovery"><i class="iconfont icon-suoxiao"></i></span>
            </el-tooltip>
          </div>
        </div>
    </div>
    <el-dialog
      v-dialogDrag
      title="UI 细节统一规范"
      :visible.sync="detailVisible"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      width="80%"
      >
      <div class="detail-box">
          <v-detailstandard></v-detailstandard>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  const DetailStandard  = () => import('../doc/detailStandard.vue');
  export default {
    name: 'headermenu',
    data () {
      return {
        name:localStorage.getItem('userInfo')&&JSON.parse(localStorage.getItem('userInfo')).username,
        changeText:'最大化',
        curMenuIndex:0,//当前选中的主目录index
        mainMenuData:[//一级目录标题
          {
            "menuId": "1000",
            "menuName": "首页",
            "menuLevel": 1,
            "menuUrl": "/shouye",
            "menuOrder": 1,
          },
          {
            "menuId": "1003",
            "menuName": "天字榜",
            "menuLevel": 1,
            "menuUrl": "/tian",
            "menuOrder": 4,
          }, 
          {
            "menuId": "1004",
            "menuName": "地字榜",
            "menuLevel": 1,
            "menuUrl": "/di",
            "menuOrder": 5,
          }, 
          {
            "menuId": "1005",
            "menuName": "玄字榜",
            "menuLevel": 1,
            "menuUrl": "/xuan",
            "menuOrder": 6,
          }, 
          {
            "menuId": "1006",
            "menuName": "黄字榜",
            "menuLevel": 1,
            "menuUrl": "/huang",
            "menuOrder": 7,
          },
        ],
        detailVisible:false,
      }
    },
    components:{
      'v-detailstandard':DetailStandard,
    },
    methods:{
      switchBoxSize(){
        let isFullscreen = 'F';
        this.$parent.$parent.$parent.boxchange = !this.$parent.$parent.$parent.boxchange;
        if(this.$parent.$parent.$parent.boxchange){
          this.changeText = '恢复默认大小';
          isFullscreen = 'T';
        }else {
          this.changeText = '最大化';
          isFullscreen = 'F';
        }
        localStorage.setItem('isFullscreen', isFullscreen);
      },
      setCurMenuIndex(index){
        this.curMenuIndex = index;
        //home组件中 切换一级菜单函数
        //显示一级菜单下的第一个子目录
        this.$parent.$parent.$parent.setCurMenuType(this.mainMenuData[index].menuUrl.split('/')[1]);
      },
      loginOut(){
        //退出登录
        this.$confirm('您将退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$loginOut();

        }).catch(() => {

        })
      },
      showDetail(){
        //显示细节要求弹框
        this.detailVisible = true;
      },
      goPath(path){
        this.$router.push({path:path});
      },
    },
    beforeMount(){
      
    },
    mounted(){
      //首次进入页面，根据url地址，判断切换主菜单
      if(localStorage.getItem('activetagmenu')){
        let type = JSON.parse(localStorage.getItem('activetagmenu')).menutype; 
        for (let i = this.mainMenuData.length - 1; i >= 0; i--) {
          if(this.mainMenuData[i].menuUrl == ('/'+type)){
            this.curMenuIndex = i;
          }
        }
      }
      //如果目录为空则退出登录
      //目录为空，可能是清空了缓存，所以要退出登录，重新登录从登录接口中获取一级菜单
      if(!this.mainMenuData.length||!localStorage.getItem('hasLogin')){
        this.$loginOut();
      }
    },
    watch:{
      $route(to,from){
        //监听路由变化  根据路由的菜单类型变化，切换到对应的一级菜单活跃状态
        let type = to.path.split('/home/')[1].split('/')[0];
        for (let i = this.mainMenuData.length - 1; i >= 0; i--) {
          if(this.mainMenuData[i].menuUrl == ('/'+type)){
            this.curMenuIndex = i;
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .header-box {
      .header-logo {
        width: 280px;
        position: absolute;
        top: 0;
        left: 10px;
        img {
          width: 42px;
          border-radius: 2px;
          margin-top: -5px;
        }
        span {
          margin-left: 12px;
          color: #fff;
          font-size: 20px;
          font-weight:bold;
        }
      }
      .header-menu {
        position: absolute;
        left: 25%;
        top: 0;
        height: 100%;
        ul {
          display: block;
          li {
            float:left;
            display: block;
            width: 100px;
            padding: 0 10px;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 60px;
            line-height: 60px;
            color: #fff;
            text-align: center;
            cursor: pointer;
            span {
              // font-weight:bold;
            }
            &:hover {
              background-color: rgba(255, 255, 255, 0.1);
            }
            &.active {
              &:hover {
                background-color: #2e69ba;
              }
              background-color: #2f69ba;
            }
          }
        }
      }
      .header-person {
        height: 60px;
        line-height:60px;
        // background:$mainColor;
        position: absolute;
        top:0;
        right:20px;
          >div {
            margin-top: 10px;
            height: 40px;
            line-height:40px;
            color:#fff;
            font-size:13px;
            >div {
              float: left;
            }
            .icon-menu {
             font-size: 18px;
            }
            .head-img{
               span {
                 cursor: pointer;
                 font-weight: bold;
                 height: 40px;
                 line-height:40px;
                 display: block;
                 i {
                   display:block;
                   float: left;
                   &:nth-of-type(1) {
                     width:30px;
                     height: 40px;
                     margin-top: 2px;
                     margin-right: 6px;
                     background:url('../../assets/images/head.png') no-repeat center;
                     background-size:contain;
                   }
                   &:nth-of-type(2){
                     @include ellipsis(120px);
                     &:hover {
                       text-decoration: underline;
                     }
                   }
                 }
               }
            }
            .doc-nav{
               padding:0 6px;
               margin-left: 10px;
               border-radius:6px;
               &:hover {
                 background: #163465;
               }
            }
            .iconfont {
             color:rgba(255, 255, 255, 0.8);
             cursor: pointer;
             &.icon-frameexpand {
               font-weight: bold;
             }
            }
            .box-recovery {
               position: fixed;
               top: 0;
               right: 26px;
               background:$mainColor;
               color:#fff;
               z-index: 1000;
               display: block;
               width: 30px;
               height: 36px;
               line-height:40px;
               text-align:center;
               border-bottom-right-radius: 10px;
               border-bottom-left-radius: 10px;
               display: none;
            }

          }
      }
      .detail-box {
        height: 480px;
        overflow:auto;
        >div {
          padding-bottom: 20px;
          padding-left: 10px;
          p {
            height: 36px;
            line-height:initial;
            margin:0;
          }
        }
      }
    }
</style>
<style type="text/css" lang="scss">
  .drop-menu {
      background-color: #1466b8;
      border: 1px solid #1466b8;
      top: 48px;
      li {
        color:#fff;
        padding:0 20px;
        margin:0;
        color:rgba(250, 250, 250, 0.8);
        &:hover {
          background-color: rgba(0, 0, 0, 0.3) !important;
          color:rgba(250, 250, 250, 1);
        }
      }
      .popper__arrow{
        border-bottom-color: #1466b8 !important;
        &:after {
          border-bottom-color: #1466b8 !important;
        }
      }
      .el-dropdown-menu__item.is-disabled {
        color:#337fcc;
      }
      .el-dropdown-menu__item--divided {
        border-top: 1px solid rgba(0, 0, 0, 0.3);
      }
      .el-dropdown-menu__item--divided:before {
        background-color: transparent !important; 
      }
      .el-dropdown-menu__item {
        font-size: 13px;
      }
  }
  .header-box{
    .el-dialog__header{
      padding:0 20px; 
    }
  }
</style>
