<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <form class="modal-container" onsubmit="return false;"
        @submit="createAlbum">
        
        <div class="modal-header">
          <slot name="header">
            <h1>Содзать альбом</h1>  
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <h2>Название</h2>
            <input type="text" required
              v-model="album.name">
            <h2>Описание</h2>
            <textarea cols="30" rows="10"
              v-model="album.description">
            </textarea>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <input type="submit" value="Содзать альбом" class="modal-default-button">
          </slot>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "NewAlbum",
  data () {
    return {
      album: {
        name: '',
        description: '',
      },
    }
  },
  mounted(){
  },
  methods:{
    ...mapActions(['fetchCreateAlbum']),
    
    createAlbum(){
      this.fetchCreateAlbum(this.album)
      this.$emit('close')
    },
  },
  computed:{
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
