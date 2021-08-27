<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entrada">
    </div>
    <div class="entry-scrollarea">
      <Entry v-for="(item, index) in 100" :key="index"/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
  components:{
    Entry: defineAsyncComponent(()=> import("./Entry.vue")),
  }
}
</script>

<style scoped lang="scss">
  .entry-list-container{
    border-right: 1px solid #123e50;
    height: calc(100vh - 65px);
  }
  .entry-scrollarea{
    height: calc(100vh - 105px);
    overflow: scroll;
  }
</style>