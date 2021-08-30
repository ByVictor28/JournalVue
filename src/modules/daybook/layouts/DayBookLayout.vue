<template>
  <Navbar/>

  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Espere porfavor
      <h3 class="mt-2">
        <i class="fa fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <div v-else class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions,mapState } from 'vuex'

export default {
  name:"DaybookLayout",
  components:{
    Navbar:defineAsyncComponent(()=> import("../components/Navbar.vue")),
    EntryList:defineAsyncComponent(()=> import("../components/EntryList.vue"))
  },
  computed:{
    ...mapActions("daybook",["loadEntries"]),
    ...mapState("daybook",["isLoading"])
  },
  methods:{
      loadData(){
        this.loadEntries
      }
  },
  created(){
    this.loadData() 
  }
}
</script>

<style>

</style>