<template>
  <div class="hello">
    <h1>VUE</h1>
    <el-button type="primary" @click='showUserInfo'>查看用户信息</el-button>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';

  export default {
    name: 'HelloWorld',
    methods: {
      ...mapGetters('userModule', {
        get_user_info: 'get_user_info'
      }),
      ...mapActions('userModule', {
        load_user_info: 'load_user_info',
        clear_user_info: 'clear_user_info',
      }),
      async showUserInfo () {
        try {
          await this.load_user_info();
          const user_info = this.get_user_info();

          this.$alert(JSON.stringify(user_info), 'user_info', {
            confirmButtonText: '确定'
          });
        }
        catch (err) {
          this.$message.error(err);
        }
      }
    }
  }
</script>

<style scoped>
</style>
