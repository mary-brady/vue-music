<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-md-12">
    <h1><i class="fas fa-music"></i> &nbsp; J A M T O W N  &nbsp; <i class="fas fa-music"></i></h1>
    <form @submit.prevent="search">
      <input type="text" placeholder="Search for Jams" v-model="newSearch.searchQuery">
      <button type="submit">Get Jams</button>
    </form>
        </div>
  </div>
  <div class="row">
    <div class="col-6">
    <Results />
    </div>
    <div class="col-6">
    <Playlists />
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Results from "@/components/Results.vue";
import Search from "@/components/Search.vue";
import Playlists from "@/components/Playlists.vue";

export default {
  name: "home",
  data() {
    return {
      newSearch: {
        searchQuery: ""
      }
    };
  },
  computed: {
    results() {
      return this.$store.state.newSearch.searchResults;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("search", this.newSearch.searchQuery);
    }
  },
  components: {
    Results,
    Search,
    Playlists
  }
};
</script>
<style scoped>
i {
  color: black;
}
</style>

