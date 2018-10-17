<template>
  <div class="Results container-fluid">
    <h1>Results: {{search.length}}</h1>
    <hr />
    <div v-for="(song, index) in search" :key="index">
      <div class="card border-dark my-2">
        <div class="row align-items-center">
            <div class="col-4">
                <img class="card-img-top px-2" :src="song.artworkUrl100" alt="album art">
            </div>
                <div class="col-8">
                    <h5>
                        <b>{{song.trackName}}</b>
                    </h5>
                    <h6 class="artist-text">{{song.artistName}}</h6>
                    <p class="card-text">
                        <i>{{song.albumName}}</i>
                    </p>
                    <p class="card-text">${{song.trackPrice}}</p>
                </div>
                    </div>
                <div class="card body card-body">
                  <div class="row justify-content-center">
                    <audio controls>
                        <source :src="song.previewUrl" type="audio/mpeg">
                    </audio>
                    </div>
                    <div class="row justify-content-center">
                    <button @click="removeSong(song)">Remove</button>
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
.card-img-top {
  max-width: 100px;
  max-height: 100px;
}
</style>
