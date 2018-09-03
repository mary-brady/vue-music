<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-lg">
    <h1>J A M T O W N </h1>
    <form @submit.prevent="search">
      <input type="text" placeholder="Search for Jams" v-model="newSearch.searchQuery">
      <button type="submit">Get Jams</button>
    </form>
    </div>
    </div>
    <div class="row">
    <Results />
    <div class="row">
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
