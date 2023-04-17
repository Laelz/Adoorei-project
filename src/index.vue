<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
    
  },
  created() {
    this.$router.push('login')    
  },
}
</script>
