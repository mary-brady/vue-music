<template>
    <div class="playlists container-fluid">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
        <h1>Your Songs</h1>
        <hr />
        </div>
        </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
        <div v-for="(song, index) in myPlaylist" :key="index">
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
      </div>
    </div>
</template>

<script>
export default {
  name: "Playlists",
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch("getPlaylist");
  },
  computed: {
    myPlaylist() {
      return this.$store.state.playlist;
    }
  },
  methods: {
    addToPlaylist(song) {
      this.$store.dispatch("addSong", song);
    },
    removeSong(song) {
      console.log(song);
      this.$store.dispatch("removeSong", song);
    }
  }
};
</script>


<style scoped>
a {
  color: #42b983;
}

.card-img-top {
  max-width: 100px;
  max-height: 100px;
}
</style>