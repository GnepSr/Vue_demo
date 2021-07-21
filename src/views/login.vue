<template>
  <div class="login-container">
    <el-row>
      <!-- logo模块 -->
      <el-col :span="10">
        <img class="logo bounce-in-top" src="../assets/logo.png" alt="">
      </el-col>
      <!-- 登录模块 -->
      <el-col :span="11" :push="2">
        <div class="login-box">
          <h1 class="hi">欢迎登录</h1>
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
              <el-button round @click="open1" class="hvr-bob">注册</el-button>
              <el-button round @click="login" class="hvr-bob">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
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
    box-sizing: border-box;
    padding: 50px;

    .logo {
      width: 600px;
      height: 600px;
    }

    .login-box {
      height: 600px;
      background-color:rgba(15,71,109,0.5);
      box-sizing: border-box;
      padding: 20px 20%;
      border-radius: 16px;
      .hi{
        color: #eee;
        text-align: center;
      }
    }
  }

  // logo动画
  .bounce-in-top {
    -webkit-animation: bounce-in-top 10s both;
    animation: bounce-in-top 10s both;
  }

  // 关键帧
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-200px);
      transform: translateY(-200px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }

    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }

    55% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
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
      -webkit-transform: translateY(-55px);
      transform: translateY(-55px);
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
      -webkit-transform: translateY(-25px);
      transform: translateY(-25px);
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
      -webkit-transform: translateY(-200px);
      transform: translateY(-200px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }

    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }

    55% {
      -webkit-transform: translateY(-100px);
      transform: translateY(-100px);
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
      -webkit-transform: translateY(-55px);
      transform: translateY(-55px);
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
      -webkit-transform: translateY(-25px);
      transform: translateY(-25px);
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
