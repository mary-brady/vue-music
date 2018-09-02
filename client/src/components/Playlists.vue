<template>
    <div class="playlists">
        <h2>Your Songs</h2>
        <div v-for="song in myPlaylist" :key="song.id">
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
  computed: {
    myPlaylist() {
      return this.$store.state.myPlaylist;
    }
  },
  methods: {
    addToPlaylist(song) {
      this.$store.dispatch("addSong", song);
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