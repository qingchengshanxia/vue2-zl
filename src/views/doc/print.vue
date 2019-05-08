<template>
  <div class="print-box">
        <h2 style="text-align: center;font-size: 30px;font-weight: normal;margin-bottom: 40px;"><span>光船租赁合同</span></h2>
        <div style="width: 1000px;margin:auto;">
            <el-form ref="form" :model="data" label-position="right" size="mini">
                <el-row :gutter="10">
                  <el-col :span="6" :push="18">
                      <span><span>合同编号：</span><span contentEditable="true" class="input short"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="6" :push="18">
                      <span><span>签订时间：</span><span contentEditable="true" class="input short"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="6" :push="18">
                      <span><span>签订地点：</span><span contentEditable="true" class="input short"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>甲方（出租人）：</span><span contentEditable="true" class="input"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>联系地址：</span><span contentEditable="true" class="input"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>联系人：</span><span contentEditable="true" class="input"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>联系方式：</span><span contentEditable="true" class="input"></span></span>
                  </el-col>
                </el-row>
                <div style="margin-top: 40px;"></div>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>乙方（承租人）：</span><span contentEditable="true" class="input">中国华粮物流集团新良海运有限公司 （英文名称：CGLC XINLIANG SHIPPING CO.,LTD.）</span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>联系地址：</span><span contentEditable="true" class="input"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>联系人：</span><span contentEditable="true" class="input"></span></span>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>联系方式：</span><span contentEditable="true" class="input"></span></span>
                  </el-col>
                </el-row>
                <div style="padding-left: 20px;margin-top: 40px;text-indent: 40px;line-height: 30px;margin-bottom: 20px;">
                    <p>鉴于甲方<span class="input-text" contentEditable="true"></span>, 具备船舶租赁资质；乙方为中粮贸易有限公司的全资子公司，有光船租赁需求；本着公平、平等、诚实守信的原则，经双方充分协商, 甲方将一艘名为<span class="input-text" contentEditable="true"></span>的未设定任何抵押权的巴拿马型干散货船（以下简称“船舶”或“本船舶”）以光船租赁方式租赁予乙方，并达成如下协议：</p>
                </div>
                <el-row :gutter="10">
                  <el-col :span="24" class="text-bold">
                      <span><span>一、船舶概况</span></span>
                  </el-col>
                </el-row>
                <div style="padding-left: 40px;">
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>船名/IMO号：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>船型：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>船籍：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>总吨/净吨： </span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>载重吨/吃水：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>建造厂家：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>建造年份：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>船级社：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span>船级证书的有效期限：</span><span contentEditable="true" class="input"></span></span>
                      </el-col>
                    </el-row>
                </div>
                <el-row :gutter="10" style="margin-top: 20px;">
                  <el-col :span="24" class="text-bold">
                      <span><span>二、租赁先决条件</span></span>
                  </el-col>
                </el-row>
                <div style="margin-top: 20px;">
                    <el-row :gutter="10">
                      <el-col :span="24" class="text-bold">
                          <span><span style="text-indent: 40px;display: inline-block;">以下条件系甲方将船舶光租并交付给乙方的先决条件，如条件不满足的，甲方有权拒绝将船舶交付至乙方：</span></span>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="24">
                          <span><span style="text-indent: 40px;display: inline-block;">甲方与乙方签署了本光船租赁合同下的船舶交接议定书。</span></span>
                      </el-col>
                    </el-row>
                </div>
            </el-form> 
        </div>
  </div>
</template>

<script>
    export default {
        name: 'print',
        data () {
            return {
                data:{

                },
            }
        },
        props:[],
        components:{

        },
        methods:{

        },
        computed:{
            //computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化
            //computed用来监控自己定义的变量，该变量不在data里面声明(但和data定义的变量相关联，直接在computed里面定义
            
        },
        beforeCreate(){
            //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
            
        },
        created(){
            //数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

        },
        beforeMount(){
            //相关的 render 函数（模板）首次被调用

        },
        mounted(){
            //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。

        },
        beforeUpdate(){
            //数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。

        },
        updated(){
            //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。 
            //当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
            //然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。 
            //该钩子在服务器端渲染期间不被调用。

        },
        beforeDestroy(){
            //实例销毁之前调用。在这一步，实例仍然完全可用。

        },
        destroyed(){
            //调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。

        },
        watch:{
          // watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象，且只能监控整个对象或单个变量;
          
        }
    }
</script>
<style scoped lang="scss">
    .print-box {
        padding: 20px;
        background: #fff;
    }
</style>
<style type="text/css" lang="scss">
    #app .print-box {
        font-family: 'STFangsong';
        font-size:18px;
        color: #333;
        .el-row {
            margin-bottom: 15px;
            font-size: 18px;
        }
        .text-bold {
            >span>span:nth-of-type(1) {
                font-weight:bold;
            }
        }
        .input {
            padding-left:10px;
            padding-right: 760px;
            word-break: break-all;
            &.short {
                padding-right: 20px;
            }
        }
        .input-text {
            min-width: 80px;
            border-bottom: solid 1px #999;
            padding: 0 20px;
            word-break: break-all;
        }
    }
</style>