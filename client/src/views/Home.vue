<template>
  <div class="home">
    <Search />
    <h1>J A M T O W N </h1>
    <form @submit.prevent="search">
      <input type="text" placeholder="Search for Jams">
      <button type="submit">Get Jams</button>
    </form>
    <Results />
  </div>
</template>

<script>
// @ is an alias to /src
import Results from "@/components/Results.vue";
import Search from "@/components/Search.vue";

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
      return this.$store.state.Results;
    }
  },
  methods: {
    search() {
      this.$store.dispatch("getResults", this.newSearch);
    }
  },
  components: {
    Results,
    Search
  }
};
</script>
