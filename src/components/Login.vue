<template>
  <div class="login">
    <h1>{{$t("message.login")}}</h1>
    <button class='btn btn-primary login-btn' @click='login()'>登录</button>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  export default {
    name: 'Login',
    data () {
      return {
        loading: false,
      }
    },
    methods: {
      ...mapGetters('userModule', {
        get_user_info: 'get_user_info'
      }),
      ...mapActions('userModule', {
        load_user_info: 'load_user_info',
        clear_user_info: 'clear_user_info',
      }),
      login () {
        try {
          this.$router.push({path:'hello'});
        }
        catch (err) {
          this.$message.error(err);
        }
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
    width: 50%;
    height: 35px;
  }
</style>
