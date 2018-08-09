<template>
   <div id="app">
    <h1>{{id}}</h1>
   </div>
</template>

<script>
    export default {
        name: "goods",
      data(){
        return {
          id:0
        }
      },
      created(){
        this.id = this.$route.params.id;
      }
    }
</script>

<style scoped>

</style>
