<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola mundo</h1>
    <button class="btn btn-primary" @click="goToDayBook">Primary</button>
    <button class="btn btn-secondary">Secundary</button>
    <button class="btn btn-success">Succes</button>
  </div>
</template>

<script>
export default {

  methods:{
    goToDayBook(){
      this.$router.push({name:"no-entry"})
    }
  }
}
</script>