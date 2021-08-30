<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <CustomButton
    @on:click="createEntry"
  />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components:{
    CustomButton:defineAsyncComponent(()=>import("../components/Fab.vue"))
  },
  methods:{
    createEntry(){
      this.$router.push({name:"entry",params:{idEntry:"new"}})
    }
  }
}
</script>

<style lang="scss" scoped>
  div{
    height: 100%;
  }
</style>