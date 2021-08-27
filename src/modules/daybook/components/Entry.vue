<template>
  <div 
    class="mb-3 pointer p-2 entry-container" 
    @click="$router.push({ name:'entry', params:{idEntry:10} })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">asd</span>
      <span class="mx-2 fw-light">2021</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, doloremque sapiente consequatur veritatis voluptates non itaque. Dolores illo ratione illum ipsa, tempora incidunt nisi, alias optio tenetur et a corrupti.

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .entry-container{
    border-bottom:1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }
    .entry-title{
      
    }
    .entry-description{
      font-size: 12px;
    }
  }
</style>