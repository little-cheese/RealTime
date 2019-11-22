<template>
  <div class="Index">
    <el-container>
      <el-header class="header">
        <div class="header-l">
          <div class="logo-img"></div>
          <div class="header-title">智能审核平台</div>
        </div>
        <div class="header-r">
          <div class="topButtonArea">
            <el-tooltip class="item" effect="light" placement="left">
              <div slot="content">admin</div>
              <el-dropdown trigger="click">
                <span @mouseenter="judgeTooltip($event)" class="el-dropdown-link">
                  <i class="el-icon-user"></i>admin
                </span>
                <el-dropdown-menu slot="dropdown" class="edit-user">
                  <el-dropdown-item @click.native="changePassword">修改密码</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-tooltip>
          </div>
          <div class="logOutTxt" @click="logout()"><i class="iconfont icontuichu"></i> 退出</div>
        </div>

      </el-header>
      <el-container>
        <el-aside class="hone_aside">
          <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="1"  @click="()=>{this.$router.push('/home')}">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2"  @click="()=>{this.$router.push('/table')}">
              <i class="el-icon-menu"></i>
              <span slot="title">表格</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4" @click="()=>{this.$router.push('/echarts')}">
              <i class="el-icon-setting"></i>
              <span slot="title">echarts</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="home_main">
            <div @click="setcollapse" class="showHidenButton">
              <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
            </div>
            <!-- <el-breadcrumb separator="/" class="breadcrumb">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">模拟面包屑</a></el-breadcrumb-item>
              <el-breadcrumb-item>模拟面包屑xx</el-breadcrumb-item>
            </el-breadcrumb> -->
            <!-- 面包屑 -->
            <Breadcrumb></Breadcrumb>
          </div>
          <div>
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
import Breadcrumb from '@/components/Breadcrumb';

export default {
  name: 'Index',
  components: {
    Breadcrumb
  },
  data () {
    return {
      isCollapse: true, //菜单展开收起。
    };
  },
  computed: {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    setcollapse () {
      this.isCollapse = !this.isCollapse;
    },
    //判断是否显示tips
    judgeTooltip ($event) {
      //超出长度hover时tips显示
      if ($event.target.scrollWidth > $event.target.clientWidth) {
        this.tipFlag = false
      }
    },
  },
  created () {

  },
  mounted () {

  },

}
</script>
<style lang="less" scoped>
.Index {
  .header {
    display: flex;
    justify-content: space-between;
     background-color: #0199ff;
     height: 60px;
     line-height: 60px;
    .header-l {
      display: flex;
      .logo-img {
        background: url("../../assets/logo.png") no-repeat 100%;
        height: 42px;
        width: 133px;
        background-size: 42px 133px;
      }
    }
    .header-r{
      display: flex;
    }
    .header-title {
    }
  }
 /deep/ .hone_aside{
    width: auto !important;
    height: 100%;
  }
  /deep/  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .home_main{
    display: flex;
    justify-items: center;
    .breadcrumb{
      margin-left: 20px;
      height: 22px;
      line-height: 22px;
    }
  }
  
}
</style>

