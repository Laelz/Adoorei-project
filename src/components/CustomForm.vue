<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'CustomForm',
  data() {
    return {
      
    }
  },
  methods: {
    submit(event){
      this.$emit('submit', event)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  max-width: 617px;
  padding: 1%;
  border: 1px solid #E6EAF2;
  border-radius: 5px;
  background-color: #FFFFFF !important;
}

</style>
