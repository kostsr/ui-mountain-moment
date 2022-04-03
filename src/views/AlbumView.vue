<template>
  <div class="album">
    <h1>This is an abo</h1>
    <div class="photos_container">
      <div class="photo" v-for="photo in getAlbum.photos" :key="photo.id"
        :style="`background-image: url(${publicPath + photo.path});`">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "AlbumView",
  data () {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  mounted(){
  },
  methods:{
  },
  computed:{
    ...mapGetters(['getAlbum'])
  }
}
</script>

<style scoped>
.photos_container{
  display: flex;
  justify-content: center;
}
.photo{
  position: relative;
  height: 35vh;
  width: 28vw;
  margin: .3vh;
  background: rgb(186, 218, 255);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
}

</style>
