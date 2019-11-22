<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button @click="btn">跳转详情</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    btn() {
      this.$router.push('/home/details');
    }
  },
}
</script>
