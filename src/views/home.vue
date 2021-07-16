<template>
  <div>
    <h1>首页</h1>
    <el-button round @click="logout">退出登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    methods: {
      logout() {
        // 清空token
        // window.sessionStorage.clear()
        // 重定向到login
        this.$router.push('/login')
      }
    }
  }

</script>

<style lang="less" scoped>

</style>
