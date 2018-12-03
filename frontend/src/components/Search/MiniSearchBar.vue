<template>
  <ais-index :search-store="searchStore">
    <ais-input :value="this.$route.params.id" @keyup.enter.native="send(searchStore.query)"></ais-input>
    <button type="submit" @click="send(searchStore.query)">검색</button>
    <ais-results v-show="searchStore.query.length > 0" value="this.$route.params.id">
      <template slot-scope="{ result }">
        <div class="inner-result" @click="send(result.local)">
          <ais-highlight :result="result" attribute-name="local"></ais-highlight>
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

searchStore.indexName = "foodtruck_location";
searchStore.page = 3;
searchStore.resultsPerPage = 4;

export default {
  data() {
    return { searchStore };
  },
  methods: {
    send(value) {
      searchStore.query = "";
      this.$router.push({
        name: "search",
        params: { id: value }
      });
    }
  }
};
</script>

<style scoped>
.ais-index {
  width: 100%;
  position: relative;
}

.ais-input {
  all: unset;
  float: left;
  width: 100%;
  border: 3px solid #00b4cc;
  padding: 5px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  color: white;
}

button[type="submit"] {
  all: unset;
  position: absolute;
  right: -50px;
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

.ais-results {
  position: absolute;
  top: 40px;
  width: 190px;
  cursor: pointer;
}

.inner-result {
  background-color: white;
  color: black;
  font-weight: 600;
}
</style>
