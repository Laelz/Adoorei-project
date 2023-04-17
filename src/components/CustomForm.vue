<template>
  <form class="row g-3">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'CustomForm',
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
  margin: auto;
}

</style>
