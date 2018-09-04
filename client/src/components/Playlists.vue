<template>
    <div class="playlists">
        <h2>Your Songs</h2>
        <div v-for="(song, index) in myPlaylist" :key="index">
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
                        <i>{{song.albumName}}</i>
                    </p>
                    <p class="card-text">${{song.trackPrice}}</p>
                    <button @click="removeSong(song)">Remove</button>
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
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>