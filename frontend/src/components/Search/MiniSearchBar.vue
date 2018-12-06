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
      if (value === "") {
        alert("검색어를 다시 입력해 주세요");
      } else {
        searchStore.query = "";
        this.$router.push({
          name: "search",
          params: { id: value }
        });
      }
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 360px) {
  .ais-index {
    width: 100%;
    position: relative;
  }

  .ais-input {
    all: unset;
    float: left;
    width: 25%;
    border: 3px solid white;
    margin-left: 130px;
    padding: 5px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    color: white;
  }

  button[type="submit"] {
    all: unset;
    position: absolute;
    right: 50px;
    width: 60px;
    height: 35px;
    border: 1px solid white;
    background: white;
    text-align: center;
    font-weight: 600;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
  }

  .ais-results {
    position: absolute;
    top: 35px;
    left: 130px;
    width: 85px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  .ais-index {
    width: 100%;
    position: relative;
  }

  .ais-input {
    all: unset;
    float: left;
    width: 30%;
    border: 3px solid white;
    margin-left: 130px;
    padding: 5px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    color: white;
  }

  button[type="submit"] {
    all: unset;
    position: absolute;
    right: 30px;
    width: 60px;
    height: 35px;
    border: 1px solid white;
    background: white;
    text-align: center;
    font-weight: 600;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
  }

  .ais-results {
    position: absolute;
    top: 35px;
    left: 130px;
    width: 95px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
  }
}

@media screen and (min-width: 376px) and (max-width: 420px) {
  .ais-index {
    width: 100%;
    position: relative;
  }

  .ais-input {
    all: unset;
    float: left;
    width: 40%;
    border: 3px solid white;
    margin-left: 130px;
    padding: 5px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    color: white;
  }

  button[type="submit"] {
    all: unset;
    position: absolute;
    right: 0px;
    width: 60px;
    height: 35px;
    border: 1px solid white;
    background: white;
    text-align: center;
    font-weight: 600;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
  }

  .ais-results {
    position: absolute;
    top: 35px;
    left: 150px;
    width: 220px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .ais-index {
    width: 100%;
    position: relative;
  }

  .ais-input {
    all: unset;
    float: left;
    width: 80%;
    border: 3px solid white;
    margin-left: 130px;
    padding: 5px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    color: white;
  }

  button[type="submit"] {
    all: unset;
    position: absolute;
    right: -85px;
    width: 60px;
    height: 35px;
    border: 1px solid white;
    background: white;
    text-align: center;
    font-weight: 600;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
  }

  .ais-results {
    position: absolute;
    top: 35px;
    left: 150px;
    width: 220px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .ais-index {
    width: 100%;
    position: relative;
  }

  .ais-input {
    all: unset;
    float: left;
    width: 80%;
    border: 3px solid white;
    margin-left: 130px;
    padding: 5px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    color: white;
  }

  button[type="submit"] {
    all: unset;
    position: absolute;
    right: -85px;
    width: 60px;
    height: 35px;
    border: 1px solid white;
    background: white;
    text-align: center;
    font-weight: 600;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
  }

  .ais-results {
    position: absolute;
    top: 35px;
    left: 130px;
    width: 210px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
  }
}

@media screen and (min-width: 1025px) {
  .ais-index {
    width: 100%;
    position: relative;
  }

  .ais-input {
    all: unset;
    float: left;
    width: 80%;
    border: 3px solid white;
    margin-left: 130px;
    padding: 5px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    color: white;
  }

  button[type="submit"] {
    all: unset;
    position: absolute;
    right: -85px;
    width: 60px;
    height: 35px;
    border: 1px solid white;
    background: white;
    text-align: center;
    font-weight: 600;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
  }

  .ais-results {
    position: absolute;
    top: 35px;
    left: 130px;
    width: 210px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
  }
}

/* .ais-index {
  width: 100%;
  position: relative;
}

.ais-input {
  all: unset;
  float: left;
  width: 70%;
  border: 3px solid white;
  margin-left: 150px;
  padding: 5px;
  height: 20px;
  border-radius: 5px;
  outline: none;
  color: white;
}

button[type="submit"] {
  all: unset;
  position: absolute;
  right: -100px;
  width: 60px;
  height: 35px;
  border: 1px solid white;
  background: white;
  text-align: center;
  font-weight: 600;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

.ais-results {
  position: absolute;
  top: 35px;
  left: 150px;
  width: 220px;
  cursor: pointer;
}

.inner-result {
  background-color: white;
  color: black;
  font-weight: 600;
} */
</style>
