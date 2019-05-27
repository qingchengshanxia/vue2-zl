<template>
  <!-- 左侧边栏目录，一级目录下所属的二级目录 -->
  <div class="aside-box">
      <div class="search-box">
        <span>
          <el-input placeholder="搜索菜单" v-model="searchMenuVal" @keyup.native="searchMenu" @keyup.enter.native="goPath" @clear="searchMenu" size="small" clearable>
              <template slot="prepend"><i class="iconfont icon-guolvqi"></i></template>
          </el-input>
        </span>
      </div>
      <div class="aside-menu">
        <el-menu :default-active="defaultAactiveIndex" :default-openeds="openeds" class="zl-aside-menu" :collapse="isCollapse" @select="activeMenuItem">
          <!-- 一级 --> 
          <el-submenu v-for="(nav1,index1) in menus" v-if="nav1.childs" :index="switchString(nav1.submenu.id)" :key="nav1.submenu.id" :class="{'one-active':curOneMenuIndex==index1}">
            <!-- 一级目录 -->
            <template slot="title"> 
              <span>
                <i :class="nav1.submenu.icon"></i>
                <span slot="title">{{nav1.submenu.title}}</span>
              </span>
            </template>

            <!-- 二级 -->
            <div v-for="(nav2,index2) in nav1.childs" :key="nav2.id">
              <!--含有三级的二级 -->
              <el-submenu v-if="nav2.childs" :index="switchString(nav2.id)" :key="nav2.id">
                <template slot="title">
                  <span slot="title">{{nav2.submenu.title}}</span>
                </template>

                <!-- 三级 -->
                <el-menu-item-group v-for="(nav3,index3) in nav2.childs" :key="nav3.id">
                  <el-menu-item :class="setonlyClass(nav3.submenu.id)" :index="switchString(nav3.submenu.id)" @click="changeTitle(nav3.submenu.title,nav3.submenu.url,nav3.submenu.id,nav3.submenu.type)"><span :data-id="nav3.id">{{nav3.submenu.title}}</span></el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <!--不含三级的二级-->
              <el-menu-item-group v-else>
                <el-menu-item :class="setonlyClass(nav2.submenu.id)" :index="switchString(nav2.submenu.id)" @click="changeTitle(nav2.submenu.title,nav2.submenu.url,nav2.submenu.id,nav2.submenu.type)"><span :data-id="nav2.submenu.id">{{nav2.submenu.title}}</span></el-menu-item>
              </el-menu-item-group>
            </div>
          </el-submenu>
          
          <!-- 没有二级、三级目录的一级目录 -->
          <el-menu-item  v-for="(nav1,index1) in menus" v-if="!nav1.childs" :index="switchString(nav1.submenu.id)" :key="nav1.submenu.id" :class="setonlyClass(nav1.submenu.id,nav1.submenu.type)" @click="changeTitle(nav1.submenu.title,nav1.submenu.url,nav1.submenu.id,nav1.submenu.type)"><i :class="nav1.submenu.icon" style="margin-right: 2px;font-size: 12px;"></i><span :data-id="nav1.submenu.id">{{nav1.submenu.title}}</span></el-menu-item>
        </el-menu>
      </div>
  </div>
</template>

<script>
  /**
   * 一级菜单和二级菜单分离设计：
   *
   * 是为了后面，根据一级菜单对应的二级菜单的权限，来显示权限内的菜单；
   *
   * 
   */
  let menu = require('../../menu.js');

  export default {
    name: 'asidemenu',
    data () {
      return {
        defaultAactiveIndex:'',//默认打开的菜单的索引----必须是字符串
        openeds:['0'], //展开菜单项的索引
        menus:menu.shouye.childs, //默认 获取首页的菜单目录
        oldmenu:[],
        isCollapse:false, //是否折叠
        curOneMenuIndex:0,//当前激活的菜单所属的一级菜单index值；
        menuType:'shouye', //切换一级菜单时，对应的菜单单词
        searchMenuVal:'',//搜索关键字
      }
    },
    props:[],
    components:{

    },
    methods:{
      switchString(num){
        //将 menu的index 标志改成字符串，不能用纯数字；
        return num+'-';
      },
      searchMenu(){
        let menus = this.oldmenu;
        let newmenu = [];
        if(this.searchMenuVal){
          for (let i = 0; i < menus.length; i++) {
            if(menus[i].submenu.title.indexOf(this.searchMenuVal)>-1){
              newmenu.push(menus[i]);
            }
          }
          this.menus = newmenu;
        }else {
          this.menus = this.oldmenu;
        }
      },
      goPath(){
        //搜索时，按下enter键，切换到搜索结果中的第一个页面；
        if(!this.searchMenuVal && !this.menus.length){
          return;
        }
        this.changeTitle(this.menus[0].submenu.title,this.menus[0].submenu.url,this.menus[0].submenu.id,this.menus[0].submenu.url.split('/home/')[1].split('/')[0]);
        this.searchMenuVal = '';
        this.searchMenu();
      },
      initCurmenu(){
        //页面首次渲染，初始化显示被选中的菜单
        this.defaultAactiveIndex = '11-'; //页面的id+'-'
        this.changeTitle(this.menus[0].submenu.title,this.menus[0].submenu.url,this.menus[0].submenu.id,this.menuType);
      },
      switchMainMenu(type){
        //点击一级菜单切换一级菜单
        //显示一级菜单下的第一个子菜单
        this.menus = menu[type].childs;
        this.oldmenu = menu[type].childs;

        this.menuType = type;
        if(this.menus.length>0){
          // this.changeTitle(this.menus[0].submenu.title,this.menus[0].submenu.url,this.menus[0].submenu.id);
        }else {
          this.$parent.$parent.$parent.$parent.curMenuId = '';
        }
      },
      switchTargetMenu(tag,id){
        //点击标签项，切换一级菜单目录，切换到对应的一级目录下的二级目录菜单
        this.menus = menu[tag.menutype].childs;
        this.oldmenu = menu[tag.menutype].childs;
        this.menuType = tag.menutype;
        if(id){
          this.defaultAactiveIndex = id+'-';
          this.changeTitle(tag.menutitle,tag.url,tag.id,tag.menutype);
        }
      },
      showSlide(index){
        //父组件触发，展开菜单
        this.openeds = [index+''];
      },
      changeTitle(title,url,id,type){
        // 点击菜单目录、添加标签
        /**
         *
         * t:标题 url:跳转地址  id:菜单id  
         * 
         *
         * home标签页面跳转
         * 添加标签页面步骤：
         * ------1，在menu.js中需要存在带menu属性含有值路径的值；
         * ------2,添加标签页面的vue文件；
         * ------3，在router中添加路径；
         * 
         */
        let homedata = this.$parent.$parent.$parent.$parent; //Home组件中的数据
        if(!homedata){
          return;
        }
        //如果添加标签超过50个，提示
        if(homedata.tags.length>50){
          this.$message({
            message: '您点击的菜单太多啦，请关闭部分标签再点击!（最多不超过50个）',
            showClose:true,
            center:true,
            type: 'warning'
          });
          return;
        }


        this.$router.push({path:url});
        let curtag = {
            menutitle:title,
            type: '',
            menutype:type,
            id:id,
            url:url
        };

        let isNotHave = true; //点击的菜单是否不存在于标签栏
        for (let i = 0; i < homedata.tags.length; i++) {
          if(homedata.tags[i].id == id){
            isNotHave = false;
            break;
          }
        }
        if(isNotHave){
          homedata.tags.push(curtag);
        }
       
        localStorage.setItem('activetagmenu',JSON.stringify(curtag));//设置当前活跃的标签缓存，下次进入页面时，显示该活跃标签
        localStorage.setItem('tagmenu',JSON.stringify(homedata.tags));//设置标签缓存，下次进入页面时，显示缓存

        homedata.isShowSlide(); //展开二级菜单所属的一级菜单栏（中粮没有三级菜单，但也作了处理，可以添加三级菜单）
        homedata.curMenuId = id; //设置当前点击的二级菜单项的id，便于设定当前被处于活跃状态的标签
        
        this.defaultAactiveIndex = id+'-'; //设置活跃二级菜单
        setTimeout(function(){
          homedata.setCurtagPosition(curtag);
        }, 200)
      },
      setonlyClass(id){
        //动态设置类名，便于通过该类名找到某菜单，从而被点击
        return 'menu'+id;
      },
      activeMenuItem(key, keyPath){
        //点击菜单目录项时触发,赋予处于活跃状态菜单的顶级父菜单一个类名，用以加背景颜色；
        this.curOneMenuIndex = Number(keyPath[0]);
      },
    },
    computed:{
        
    },
    beforeCreate(){
        
    },
    created(){
        if(localStorage.getItem('activetagmenu')){
          this.menus = menu[JSON.parse(localStorage.getItem('activetagmenu')).menutype].childs;
          this.oldmenu = menu[JSON.parse(localStorage.getItem('activetagmenu')).menutype].childs;
        }
    },
    beforemount(){
        
    },
    mounted(){
      
    },
    beforeUpdate(){
        
    },
    updated(){

    },
    beforeDestroy(){
        
    },
    destroyed(){
        
    },
    watch:{
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .aside-box {
    height: 100%;
    border-right: solid 1px #e6e6e6;
    background-color: #fff;
    position: relative;
    padding-bottom: 112px;
    .search-box {
      transition: all 0.5s cubic-bezier(0.78, 0.02, 0.2, 1), z-index 0.12s 0.12s;
      height:40px;
      line-height:40px;
      background-color: transparent;
      // box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      z-index: 11;
      padding:0 10px;
      position: relative;
      top: 0;
      left: 0;
      width: 200px;
      overflow: hidden;
      z-index: 1001;
      background: url('../../assets/images/searchbg.jpg') no-repeat center;
      background-size: cover;
      font-size: 14px;
      ::-webkit-input-placeholder { /* Chrome */
        color: #99abb4;
      }
      :-ms-input-placeholder { /* IE 10+ */
        color: #99abb4;
      }
      ::-moz-placeholder { /* Firefox 19+ */
        color: #99abb4;
        opacity: 1;
      }
      :-moz-placeholder { /* Firefox 4 - 18 */
        color: #99abb4;
        opacity: 1;
      }
      .el-input {
        position: relative;
        z-index: 1;
        border-bottom: solid 1px #c6d2da;
      }
      .icon-guolvqi {
        color:#c0c4cb;
      }
      &:after {
        content: '';
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(250,250,250,.7);
      }
    }
    &:hover {
      .aside-menu {
        overflow: auto !important;
        z-index: 1000;
      }
    }
    .aside-menu {
      height: 100%;
      position:relative;
      overflow: hidden;
      z-index: 1;
      background:#fff;
      .zl-aside-menu {
        position: relative;
        z-index: 10;
      }
    }
  }
</style>
<style type="text/css" lang="scss">
  .aside-box {
    overflow: hidden;
    .zl-aside-menu {
      font-size: 16px;
      background: #fff;
      .el-submenu .el-menu-item {
        &:hover {
          background: #e6eff8;
        }
      }
      .el-menu-item.is-active{
        background-color: #f7fafb;
        color: #1976d2;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          top:0;
          left: 0;
          height: 100%;
          width: 5px;
          background: $mainColor;
        }
      }
      .el-submenu__title i {
          font-weight: bold;
      }
      .one-active {
        >.el-submenu__title {
          background: #e6eff8;
        }
      }
      .el-submenu__icon-arrow,.el-submenu__icon-arrow{
        left: 180px;
        right: auto;
      }
    }
    .search-box{
      .el-input-group__append, .el-input-group__prepend {
        background:transparent;
        border: 0;
        padding: 0 10px 0 0;
      }
      .el-input__inner {
        border:0;
        padding: 0 10px;
      }
      .el-input__inner,.el-input-group__prepend {
        background: transparent;
      }
    }
  }
</style>

