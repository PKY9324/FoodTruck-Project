<template>
  <div>
    <div class="list__title">{{ this.$route.params.id }}</div>
    <div>
      <ais-index class="container" :search-store="searchStore">
        <ais-results>
          <template slot-scope="{ result }">
            <div>
              <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', width: '350px', height: '300px' }"
                @click="send(result.name, result['objectID'])"
              >
                <div class="ftname">{{ result.name | truncate(11) }}</div>
              </div>
            </div>
          </template>
        </ais-results>
      </ais-index>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import { foodtruckRef } from "../../../config/firebaseInit.js";

import {
  createFromAlgoliaCredentials,
  createFromSerialized
} from "vue-instantsearch";

const searchStore = createFromAlgoliaCredentials(
  "GN5E22XFPN",
  "2dd47b9aa13c9ebf4bb356688c7d91b8"
);

searchStore.indexName = "foodtruck";
searchStore.resultsPerPage = 1000;

export default {
  firebase: {
    lists: foodtruckRef.orderByChild("name")
  },
  data: () => {
    return {
      searchStore,
      images: [""],
      index: null
    };
  },
  created() {
    searchStore.query = this.$route.params.id;
  },
  watch: {
    $route: function(to, from) {
      searchStore.query = this.$route.params.id;
    }
  },
  methods: {
    send(name, objectID) {
      this.$router.push({
        name: "searchFocus",
        params: {
          name: name,
          objectID: objectID
        }
      });
    }
  },
  components: {
    gallery: VueGallery
  }
};
</script> 

<style scoped>
a {
  all: unset;
}

.list__title {
  all: unset;
  position: absolute;
  top: 70px;
  left: 20px;
  font-size: 40px;
  font-weight: 600;
  color: black;
}

.image {
  position: relative;
  float: left;
  background-color: rgb(182, 182, 182);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 25px;
  cursor: pointer;
}

.container {
  margin-top: 130px;
  margin-left: 4rem;
}

.ftname {
  position: absolute;
  bottom: 20px;
  margin-left: 2rem;
  font-size: 18px;
  font-weight: 600;
}

.ftrank {
  position: absolute;
  bottom: 20px;
  right: 0;
  margin-right: 3rem;
  font-size: 18px;
  font-weight: 600;
}
</style>