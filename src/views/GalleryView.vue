<template>
  <div class="gallery">
    <h1>This is an gallery page</h1>
  </div>
</template>

<script>
export default {
  name: "GalleryView",
  data(){
    return {
      albums: []
    }
  },
  mounted(){

  },
  methods:{
    async fetchAlmums(){
      let responce = await fetch('http://localhost:62351/api/albums/')
      if (responce.ok){
        this.albums = await responce.json()
      }
    }
  }
};
</script>
