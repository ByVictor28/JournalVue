<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">{{day}}</span>
      <span class="mx-1 fs-3 ">{{month}}</span>
      <span class="mx-2 fs-4 fw-light">{{ year}}</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Borrar
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
  </div>
  <CustomButton icono="fa-upload" />

  <img
  class="img-thumbnail" 
  src="https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020-600x365.jpg" alt="Entry picture">


</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters } from 'vuex'
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
  props:{
    idEntry:{
      type:String,
      requird:true
    }
  },
  data(){
    return{
      entry:null
    }
  },
  components:{
    CustomButton:defineAsyncComponent(()=> import("../components/Fab.vue") )
  },
  computed:{
    ...mapGetters("daybook",["getEntryById"]),
     day(){
        const {day} = getDayMonthYear(this.entry.date)
        return day
      },
      month(){
        const {month} = getDayMonthYear(this.entry.date)
        return month
      },
      year(){
        const {year} = getDayMonthYear(this.entry.date)
        return year
      }
  },
  methods:{
    loadEntry(){
      const entrySelected = this.getEntryById(this.idEntry) 
      if (!entrySelected){
        this.$router.push({name:"no-entry"})
      }else{
        this.entry = entrySelected
      }
    }
  },
  created(){
    // console.log(this.getEntryById(this.$route.params.idEntry))
    console.log(this.idEntry)
    this.loadEntry()
  },
  watch:{
    idEntry(){
        this.loadEntry()
    }
  }
}
</script>

<style scoped lang="scss">

  textarea{
    font-size: 20px;
    border:none;
    height: 100%;
    &:focus{
      outline:none;
    }
  }

  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2); 
  }
</style>