<template>
  <div class="Results">
    <h1>Results:</h1>
    <div v-for="(song, index) in search" :key="index">
      <div class="col-md text-center justify-content-center">
            <div class="card border-dark mb-3" style="width: 12rem;">
                <img class="card-img-top" :src="song.artworkUrl100" alt="album art">
                <div class="card body card-body">
                    <audio controls>
                        <source :src="song.previewUrl" type="audio/mpeg">
                    </audio>
                    <h5>
                        <b>{{song.trackName}}</b>
                    </h5>
                    <h6 class="artist-text">{{song.artistName}}</h6>
                    <p class="card-text">
                        <i>{{song.collectionName}}</i>
                    </p>
                    <p class="card-text">${{song.trackPrice}}</p>
                    <button @click="addSong(song)">Add to Playlist</button>
                </div>
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
  computed: {
    search() {
      return this.$store.state.newSearch.searchResults;
    }
  },
  methods: {
    addSong(song) {
      this.$store.dispatch("addSong", song);
    }
  }
};
</script>

<style scoped>
</style>
