<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Buscar entrada"
        v-model="search"
      >
    </div>
    <div class="entry-scrollarea">
      <Entry 
        v-for="(entry, index) in getEntries" 
        :key="index"
        :entry="entry"
        />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      search:""
    }
  },
  components:{
    Entry: defineAsyncComponent(()=> import("./Entry.vue")),
  },
  computed:{
    ...mapGetters("daybook",["getEntriesByTerm"]),
    getEntries(){
      return this.getEntriesByTerm(this.search)
    }
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