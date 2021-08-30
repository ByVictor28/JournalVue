<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{day}}</span>
        <span class="mx-1 fs-3 ">{{month}}</span>
        <span class="mx-2 fs-4 fw-light">{{ year}}</span>
      </div>
      <div >
        <input type="file" @change="onSelectedImage" ref="imageSelector" v-show="false">
        <button v-if="entry.id" class="btn btn-danger mx-2" @click="deleteActualEntry">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary" @click="onSelectimage">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
    </div>
  </template>
  <CustomButton icono="fa-upload" v-on:click="saveEntry"/>

  <img v-if="entry.image"
  class="img-thumbnail" 
  :src="entry.image" alt="Entry picture">
  
  <img
  v-if="localImage" 
  class="img-thumbnail" 
  :src="localImage" alt="Entry picture">



</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapActions, mapGetters } from 'vuex'
import getDayMonthYear from '../helpers/getDayMonthYear'
import Swal from 'sweetalert2'
import Toast from '../../Share/GerneralAlert'
import uploadImage from '../helpers/uploadImage'

export default {
  props:{
    idEntry:{
      type:String,
      requird:true
    }
  },
  data(){
    return{
      entry:null,
      localImage:null,
      file:null
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
    
    ...mapActions("daybook",["updateEntry","createEntry","deleteEntry"]),
    loadEntry(){
      let entrySelected

      if (this.idEntry==="new") {
        entrySelected = {
          date:new Date().toDateString(),
          text:""
        }
      }else{
        entrySelected = this.getEntryById(this.idEntry) 
        if (!entrySelected){
          this.$router.push({name:"no-entry"})
        }
      }
      this.entry = entrySelected
    },
    async saveEntry(){

      new Swal({
        title: 'Espere por favor!',
        allowOutsideClick:false
      })
      Swal.showLoading()

      const image = await uploadImage(this.file)
      
      this.entry.image = image

      if (this.entry.id) {
        // Actualizar
        await this.updateEntry(this.entry)
      }else{
        // guardar una nueva entrada
        console.log("Nueva entrada") 
        const name = await this.createEntry(this.entry)

        if (name) {
          this.$router.push({name:"entry",params:{idEntry:name}})
        }

      }
      this.file = null
      Swal.fire("Guardado", "entrada guardada",'success')
    },
    deleteActualEntry(){
      Swal.fire({
        title: 'Estás seguro?',
        text: "No podras revertir esto!!",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: `Eliminar`,
        denyButtonText: `Cancelar`,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then(async (result) => {
        if (result.isConfirmed) {
          new Swal({
            title: 'Espere por favor!',
            allowOutsideClick:false
          })
          Swal.showLoading()
          await this.deleteEntry(this.idEntry)
          Toast.fire({
            icon:"success",
            title:"Entry deleted"
          })
          this.$router.push({name:"no-entry"})
        } 
      })
    },
    onSelectedImage(event){
      const image = event.target.files[0]
      if (!image) {
        this.localImage = null
        this.file = null
        return
      }
      this.file = image
      const fr =  new FileReader()
      fr.onload = ()=> this.localImage = fr.result
      fr.readAsDataURL(image) 

      console.log(image)
    },
    onSelectimage(){
      this.$refs.imageSelector.click()
    }
  },
  
  created(){
    // console.log(this.getEntryById(this.$route.params.idEntry))
    this.loadEntry()
  },
  watch:{
    idEntry(){
        this.loadEntry()
        this.file = null
        this.localImage=null
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