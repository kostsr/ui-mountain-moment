<template>
  <div class="gallery">
    <h1>This is an gallery page</h1>
    <h2>Albums</h2>
    <div class="gallery_container">
      <div class="album_container">
        <div class="album" 
          v-for="album in getAlbums" :key="album.id"
          @click="fetchAlbum(album.id)">
          <router-link to="/album">
            <div class="album_thumb" :style="`background-image: url(${publicPath + album.photo.path});`">
              <div class="album_text">
                <div class="album_title_wrap">
                  <div class="album_counter">45</div>
                  <div class="album_title">{{ album.name }}</div>
                </div>
                <div class="album_description">

                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="album" @click="showNewAlbum = true">
          +
        </div>
        <NewAlbum v-if="showNewAlbum" @close="showNewAlbum = false" />
      </div>
    </div> 
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NewAlbum from './../components/NewAlbum.vue'

export default {
  name: "GalleryView",
  components:{
    NewAlbum,
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      showNewAlbum: false,
    }
  },
  mounted(){
    this.fetchAlbums()
  },
  methods:{
    ...mapActions(['fetchAlbums', 'fetchAlbum'])
  },
  computed:{
    ...mapGetters(['getAlbums'])
  }
};
</script>

<style scoped>
.gallery_container{
}
.album_container{
  display: flex;
  justify-content: center;

  font-size: 13px;
  opacity: .9;
  line-height: 14px;
}
.album{
  position: relative;
  height: 35vh;
  width: 28vw;
  margin: .3vh;
  background: rgb(186, 218, 255);
}
.album_thumb{
  height: 100%;
  widows: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
}
.album_title_wrap{
  padding: 35px 12px 9px;
  font-weight: 700;
  color: #fff;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: url('./../assets/album_top_shadow.png');
}
.album_title{

}
.album_counter{
  padding: 0 0 0 5px;
  float: right;
}
</style>