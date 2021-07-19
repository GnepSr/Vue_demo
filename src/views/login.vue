<template>
  <div class="login-container">
    <div class="login-box">
      <!-- logo模块 -->
      <div class="logo">
        <img class="logo bounce-in-top" src="../assets/logo.png" alt="">
      </div>
      <h1>欢迎登录</h1>

      <!-- 表单模块 -->
      <el-form :model="form" ref="formRef" class="form" :rules="rules">
        <!-- 账号 -->
        <el-form-item class="userName" prop="userName">
          <el-input prefix-icon="el-icon-s-custom" v-model="form.userName"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="userPassWorld">
          <el-input prefix-icon="el-icon-key" v-model="form.userPassWorld" show-password></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn-box">
          <el-button round @click="open1">注册</el-button>
          <el-button round @click="login">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        form: {
          userName: '',
          userPassWorld: ''
        },

        // 验证规则
        rules: {
          // 验证是否输入账号
          userName: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }],
          // 验证是否输入密码
          userPassWorld: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },

      // 登陆前预验证表单项是否合法
      login() {
        this.$refs.formRef.validate(res => {
          if (!res) return;
          // 登录请求接口


          // 登录成功跳转到首页
          this.$router.push("/home")
        })
      }
    }
  }

</script>

<style lang="less" scoped>
  .login-container {
    height: 100%;
    background-image: url('../assets/login-bg.jpg');
    background-size: 100% 100%;
    position: relative;

    .login-box {
      width: 600px;
      height: 300px;
      background-image: linear-gradient(to left top, #4A47A3, #548CA8);
      border-radius: 15px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      padding: 0 20px;

      .logo {
        position: absolute;
        width: 200px;
        height: 200px;
        top: -24%;
      }

      h1 {
        text-align: center;
        color: #222831;
      }

      .btn-box {
        display: flex;
        justify-content: flex-end;
      }

      .form {
        width: 400px;
        margin: 0 auto;

        .userName {
          margin: 30px 0;
        }
      }
    }
  }

  // logo动画
  .bounce-in-top {
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 2.5s both;
  }

  // 关键帧
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }

    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }

    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }

    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }

    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  

</style>
