<template>
  <div class="login">
    <h1>{{$t("message.login")}}</h1>
    <el-button class='login-btn' type="success" @click='login'>登录</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        loading: false,
      }
    },
    methods: {
      login () {
        window.location.href = 'http://client.server.com:8003/oauth2/authorization/jerry_auth';
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  .login-btn {
    width: 100px;
    height: 100px;
  }
</style>
