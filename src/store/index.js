import { createStore } from 'vuex'

export default createStore({
  state: {
    albums: [],
    album: false,
  },
  getters: {
    getAlbums(state){
      return state.albums
    },
    getAlbum(state){
      return state.album
    }
  },
  mutations: {
    setAlbums(state, albums){
      state.albums = albums
    },
    setAlbum(state, album){
      state.album = album
    }
  },
  actions: {
    async fetchAlbums(ctx){
      let responce = await fetch('http://localhost:62351/api/album/')
      if (responce.ok){
        ctx.commit('setAlbums', await responce.json())
      }
    },
    async fetchAlbum(ctx, id){
      let responce = await fetch(`http://localhost:62351/api/album/${id}`)
      if (responce.ok){
        ctx.commit('setAlbum', await responce.json())
      }
    },
    async fetchCreateAlbum(ctx, album){
      let responce = await fetch(`http://localhost:62351/api/album/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(album)
      })
      if (responce.ok){
        console.log(responce)
        alert('Содан новый альбом')
      }
    },
  },
  modules: {
  }
})
