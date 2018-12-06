<template>
  <div class="search-input">
    <div class="container-1">
      <span class="icon">
        <font-awesome-icon :icon="icon" size="2x"/>
      </span>
      <ais-index :search-store="searchStore">
        <ais-input :query="query" @keyup.enter.native="send(searchStore.query)"/>
        <button type="submit" @click="send(searchStore.query)">검색</button>
        <ais-results v-show="searchStore.query.length > 0">
          <template slot-scope="{ result }">
            <div class="inner-result" @click="send(result.local)">
              <ais-highlight :result="result" attribute-name="local"></ais-highlight>
            </div>
          </template>
        </ais-results>
      </ais-index>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { createFromAlgoliaCredentials } from "vue-instantsearch";

const searchStore = createFromAlgoliaCredentials(
  "GN5E22XFPN",
  "2dd47b9aa13c9ebf4bb356688c7d91b8"
);

searchStore.indexName = "foodtruck_location";
searchStore.page = 3;
searchStore.resultsPerPage = 5;

export default {
  name: "SearchInput",
  props: {
    query: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      searchStore
    };
  },
  methods: {
    send(value) {
      this.$router.push({
        name: "search",
        params: { id: value }
      });
    }
  },
  computed: {
    icon() {
      return faSearch;
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 360px) {
  .search-input {
    all: unset;
    position: absolute;
    left: 2vw;
    bottom: 25px;
    align-content: left;
    margin: 100px auto;
    width: 98vw;
    height: 60px;
  }

  .container-1 {
    width: 350px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }

  .container-1 .icon {
    position: absolute;
    color: rgb(52, 152, 219);
    z-index: 1;
  }

  .container-1 > .icon {
    position: absolute;
    left: 10px;
    top: 15px;
  }

  .ais-results {
    position: absolute;
    left: 30px;
    width: 224px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
    height: 25px;
  }

  button[type="reset"] {
    visibility: hidden;
  }

  input[type="search"] {
    all: unset;
    font-weight: 600;
    width: 290px;
    height: 60px;
    background: rgb(230, 230, 230);
    border: none;
    font-size: 10pt;
    color: #63717f;
    padding-left: 50px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 80px;
    &::placeholder {
      font-size: 18px;
    }
  }

  button[type="submit"] {
    all: unset;
    text-align: center;
    position: absolute;
    background-color: rgb(52, 152, 219);
    border: none;
    top: 0;
    right: 0;
    bottom: 0;
    width: 110px;
    height: 60px;
    font-weight: 600;
    font-size: 25px;
    color: white;
    border: none;
    border-radius: 80px;
    z-index: 1;
    cursor: pointer;
  }

  button[type="submit"] > svg {
    visibility: hidden;
  }

  .ais-results {
    color: white;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  .search-input {
    all: unset;
    position: absolute;
    left: 2vw;
    bottom: 50px;
    align-content: left;
    margin: 100px auto;
    width: 98vw;
    height: 60px;
  }

  .container-1 {
    width: 350px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }

  .container-1 .icon {
    position: absolute;
    color: rgb(52, 152, 219);
    z-index: 1;
  }

  .container-1 > .icon {
    position: absolute;
    left: 10px;
    top: 15px;
  }

  .ais-results {
    position: absolute;
    left: 30px;
    width: 224px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
    height: 25px;
  }

  button[type="reset"] {
    visibility: hidden;
  }

  input[type="search"] {
    all: unset;
    font-weight: 600;
    width: 310px;
    height: 60px;
    background: rgb(230, 230, 230);
    border: none;
    font-size: 10pt;
    color: #63717f;
    padding-left: 50px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 80px;
    &::placeholder {
      font-size: 18px;
    }
  }

  button[type="submit"] {
    all: unset;
    text-align: center;
    position: absolute;
    background-color: rgb(52, 152, 219);
    border: none;
    top: 0;
    right: -10px;
    bottom: 0;
    width: 130px;
    height: 60px;
    font-weight: 600;
    font-size: 25px;
    color: white;
    border: none;
    border-radius: 80px;
    z-index: 1;
    cursor: pointer;
  }

  button[type="submit"] > svg {
    visibility: hidden;
  }

  .ais-results {
    color: white;
  }
}

@media screen and (min-width: 376px) and (max-width: 420px) {
  .search-input {
    all: unset;
    position: absolute;
    left: 5vw;
    bottom: 50px;
    align-content: left;
    margin: 100px auto;
    width: 100vw;
    height: 60px;
  }

  .container-1 {
    width: 380px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }

  .container-1 .icon {
    position: absolute;
    color: rgb(52, 152, 219);
    z-index: 1;
  }

  .container-1 > .icon {
    position: absolute;
    left: 10px;
    top: 15px;
  }

  .ais-results {
    position: absolute;
    left: 30px;
    width: 245px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
    height: 25px;
  }

  button[type="reset"] {
    visibility: hidden;
  }

  input[type="search"] {
    all: unset;
    font-weight: 600;
    width: 300px;
    height: 60px;
    background: rgb(230, 230, 230);
    border: none;
    font-size: 10pt;
    color: #63717f;
    padding-left: 45px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 80px;
    &::placeholder {
      font-size: 18px;
    }
  }

  button[type="submit"] {
    all: unset;
    text-align: center;
    position: absolute;
    background-color: rgb(52, 152, 219);
    border: none;
    top: 0;
    right: 0;
    bottom: 0;
    width: 130px;
    height: 60px;
    font-weight: 600;
    font-size: 25px;
    color: white;
    border: none;
    border-radius: 80px;
    z-index: 1;
    cursor: pointer;
  }

  button[type="submit"] > svg {
    visibility: hidden;
  }

  .ais-results {
    color: white;
  }
}

//ipad
@media screen and (min-width: 421px) and (max-width: 786px) {
  .search-input {
    all: unset;
    position: absolute;
    left: 5vw;
    bottom: 100px;
    align-content: left;
    margin: 100px auto;
    width: 400px;
    height: 60px;
  }
  .container-1 {
    width: 690px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }

  .container-1 .icon {
    position: absolute;
    color: rgb(52, 152, 219);
    z-index: 1;
  }

  .container-1 > .icon {
    position: absolute;
    left: 10px;
    top: 15px;
  }

  .ais-results {
    position: absolute;
    left: 30px;
    width: 510px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
    height: 25px;
  }

  button[type="reset"] {
    visibility: hidden;
  }

  input[type="search"] {
    all: unset;
    font-weight: 600;
    width: 600px;
    height: 60px;
    background: rgb(230, 230, 230);
    border: none;
    font-size: 10pt;
    color: #63717f;
    padding-left: 45px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 80px;
    &::placeholder {
      font-size: 18px;
    }
  }

  button[type="submit"] {
    all: unset;
    text-align: center;
    position: absolute;
    background-color: rgb(52, 152, 219);
    border: none;
    top: 0;
    right: 0;
    bottom: 0;
    width: 170px;
    height: 60px;
    font-weight: 600;
    font-size: 25px;
    color: white;
    border: none;
    border-radius: 80px;
    z-index: 1;
    cursor: pointer;
  }

  button[type="submit"] > svg {
    visibility: hidden;
  }

  .ais-results {
    color: white;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .search-input {
    all: unset;
    position: absolute;
    left: 5vw;
    bottom: 130px;
    align-content: left;
    margin: 100px auto;
    width: 400px;
    height: 60px;
  }
  .container-1 {
    width: 690px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }

  .container-1 .icon {
    position: absolute;
    color: rgb(52, 152, 219);
    z-index: 1;
  }

  .container-1 > .icon {
    position: absolute;
    left: 10px;
    top: 15px;
  }

  .ais-results {
    position: absolute;
    left: 30px;
    width: 675px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
    height: 25px;
  }

  button[type="reset"] {
    visibility: hidden;
  }

  input[type="search"] {
    all: unset;
    font-weight: 600;
    width: 800px;
    height: 60px;
    background: rgb(230, 230, 230);
    border: none;
    font-size: 10pt;
    color: #63717f;
    padding-left: 45px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 80px;
    &::placeholder {
      font-size: 18px;
    }
  }

  button[type="submit"] {
    all: unset;
    text-align: center;
    position: absolute;
    background-color: rgb(52, 152, 219);
    border: none;
    top: 0;
    right: -160px;
    bottom: 0;
    width: 170px;
    height: 60px;
    font-weight: 600;
    font-size: 25px;
    color: white;
    border: none;
    border-radius: 80px;
    z-index: 1;
    cursor: pointer;
  }

  button[type="submit"] > svg {
    visibility: hidden;
  }

  .ais-results {
    color: white;
  }
}

@media screen and (min-width: 1025px) {
  .search-input {
    all: unset;
    position: absolute;
    left: 20vw;
    bottom: 130px;
    align-content: left;
    margin: 100px auto;
    width: 400px;
    height: 60px;
  }
  .container-1 {
    width: 690px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
  }

  .container-1 .icon {
    position: absolute;
    color: rgb(52, 152, 219);
    z-index: 1;
  }

  .container-1 > .icon {
    position: absolute;
    left: 10px;
    top: 15px;
  }

  .ais-results {
    position: absolute;
    left: 30px;
    width: 948px;
    cursor: pointer;
  }

  .inner-result {
    background-color: white;
    color: black;
    font-weight: 600;
    height: 25px;
  }

  button[type="reset"] {
    visibility: hidden;
  }

  input[type="search"] {
    all: unset;
    font-weight: 600;
    width: 1100px;
    height: 60px;
    background: rgb(230, 230, 230);
    border: none;
    font-size: 10pt;
    color: #63717f;
    padding-left: 45px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 80px;
    &::placeholder {
      font-size: 18px;
    }
  }

  button[type="submit"] {
    all: unset;
    text-align: center;
    position: absolute;
    background-color: rgb(52, 152, 219);
    border: none;
    top: 0;
    right: -460px;
    bottom: 0;
    width: 200px;
    height: 60px;
    font-weight: 600;
    font-size: 25px;
    color: white;
    border: none;
    border-radius: 80px;
    z-index: 1;
    cursor: pointer;
  }

  button[type="submit"] > svg {
    visibility: hidden;
  }

  .ais-results {
    color: white;
  }
}

// .search-input {
//   all: unset;
//   position: absolute;
//   left: 500px;
//   bottom: 100px;
//   align-content: center;
//   margin: 100px auto;
//   width: 900px;
//   height: 60px;
// }
// .container-1 {
//   width: 900px;
//   vertical-align: middle;
//   white-space: nowrap;
//   position: relative;
// }

// .container-1 .icon {
//   position: absolute;
//   color: rgb(52, 152, 219);
//   z-index: 1;
// }

// .container-1 > .icon {
//   position: absolute;
//   left: 10px;
//   top: 15px;
// }

// .ais-results {
//   position: absolute;
//   left: 30px;
//   width: 728px;
//   cursor: pointer;
// }

// .inner-result {
//   background-color: white;
//   color: black;
//   font-weight: 600;
//   height: 25px;
// }

// button[type="reset"] {
//   visibility: hidden;
// }

// input[type="search"] {
//   all: unset;
//   font-weight: 600;
//   width: 750px;
//   height: 60px;
//   background: rgb(230, 230, 230);
//   border: none;
//   font-size: 10pt;
//   color: #63717f;
//   padding-left: 45px;
//   -webkit-border-radius: 10px;
//   -moz-border-radius: 10px;
//   border-radius: 80px;
//   &::placeholder {
//     font-size: 18px;
//   }
// }

// button[type="submit"] {
//   all: unset;
//   text-align: center;
//   position: absolute;
//   background-color: rgb(52, 152, 219);
//   border: none;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 170px;
//   height: 60px;
//   font-weight: 600;
//   font-size: 25px;
//   color: white;
//   border: none;
//   border-radius: 80px;
//   z-index: 1;
//   cursor: pointer;
// }

// button[type="submit"] > svg {
//   visibility: hidden;
// }

// .ais-results {
//   color: white;
// }
</style>
