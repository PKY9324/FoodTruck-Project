<template>
  <ais-index :search-store="searchStore" :query="this.$route.params.id">
    <ais-input v-bind:value="this.$route.params.id"></ais-input>
    <button type="submit" @click="send(searchStore.query)" v-show="searchStore.query.length > 0">검색</button>
    <ais-clear v-show="searchStore.query.length > 0"></ais-clear>
    <ais-results v-show="searchStore.query.length > 0" value="this.$route.params.id">
      <template slot-scope="{ result }">
        <div>
          <ais-highlight :result="result" attribute-name="name"></ais-highlight>
          <br>
          <ais-highlight :result="result" attribute-name="old_address"></ais-highlight>
          <br>
          <ais-highlight :result="result" attribute-name="new_address"></ais-highlight>
          <hr>
        </div>
      </template>
    </ais-results>
  </ais-index>
</template>

<script>
import {
  createFromAlgoliaCredentials,
  createFromSerialized
} from "vue-instantsearch";

const searchStore = createFromAlgoliaCredentials(
  "GN5E22XFPN",
  "2dd47b9aa13c9ebf4bb356688c7d91b8"
);

searchStore.indexName = "foodtruck";
searchStore.page = 3;
searchStore.resultsPerPage = 5;

export default {
  data() {
    return { searchStore };
  },
  methods: {
    send(value) {
      this.$router.push({
        name: "search",
        params: { id: value }
      });
    }
  },
  created() {
    if (this.$route.params.id === null) {
      console.log("123");
    }
  }
};
</script>

<style lang="scss">
</style>
