<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <h3>比尔之家</h3>
      <el-button size="small" round @click="logout">退出登录</el-button>
    </el-header>

    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'66px':'200px'">
        <!-- 折叠侧边栏按钮 -->
        <div class="toogle-button" @click="toogleCollapse">|||</div>

        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409fff" unique-opened
          :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>用户管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="users" @click="saveNavuState(users)">
              <!-- 二级菜单模板 -->
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>权限管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="task">
              <!-- 二级菜单模板 -->
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>任务分配</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <!-- 一级菜单模板 -->
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>资金管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="money">
              <!-- 二级菜单模板 -->
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>资金分配</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        isCollapse: false,
        activePath: ''
      }
    },
    methods: {
      logout() {
        // 清空token
        // window.sessionStorage.clear()
        // 重定向到login
        this.$router.push('/login')
      },

      // 折叠侧边栏
      toogleCollapse() {
        this.isCollapse = !this.isCollapse
      },

      //保存侧边栏二级菜单index地址
      saveNavuState(e) {
        window.sessionStorage.setItem('path', e)
        this.activePath = e
      }
    },
    created(){
      this.activePath=window.sessionStorage.getItem('path')
    }
  }

</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  .el-aside {
    background-color: #333744;

    .el-menu {
      border-right: none;
    }
  }

  .el-main {
    background-color: #eaedf1;
  }

  .toogle-button {
    background-color: #4a5064;
    text-align: center;
    line-height: 24px;
    font-size: 10px;
    letter-spacing: 0.2em;
    color: #fff;
    cursor: pointer;
  }

</style>
