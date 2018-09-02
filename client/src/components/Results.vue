<template>
  <div class="Results">
    <h1>Results for Search</h1>
    <div v-for="song in search" :key="song.id">
            <div class="card border-dark mb-3" style="width: 10rem;">
                <img class="card-img-top" src="song.albumArt" alt="album art">
                <div class="card body card-body">
                    <audio controls>
                        <source src="song.preview" type="audio/mpeg">
                    </audio>
                    <h5>
                        <b>{{song.title}}</b>
                    </h5>
                    <h6 class="artist-text">{{song.artist}}</h6>
                    <p class="card-text">
                        <i>{{song.albumName}}</i>
                    </p>
                    <p class="card-text">${{song.price}}</p>
                    <button @click="addSong">Add to Playlist</button>
                </div>
            </div>
        </div>
  </div>
  </template>

  <script>
export default {
  name: "Results",
  props: {
    msg: String
  },
  computed: {},
  methods: {
    search() {
      return this.$store.state.newSearch.results;
    },
    addSong(song) {
      this.$store.dispatch("addSong", song);
    }
  }
};
</script>

<style scoped>
</style>
