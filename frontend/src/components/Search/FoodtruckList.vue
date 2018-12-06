<template>
  <div>
    <div class="list__title">{{ this.$route.params.id }}</div>
    <div>
      <ais-index class="container" :search-store="searchStore">
        <ais-results>
          <template slot-scope="{ result }">
            <div class="images__list">
              <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                :style="{ width: size.width, height: size.height }"
                @click="send(result.name, result['objectID'])"
              >
                <!-- <div class="not__found__image" v-if="image === '' ">이미지가 없습니다</div> -->
                <img :src="require(`../../../img/${result['objectID']}/000001.jpg`)">
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
import { foodtruckRef, firestorage } from "../../../config/firebaseInit.js";
import VLazyImage from "v-lazy-image";
import _ from "lodash";

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
      window: {
        width: 0
      },
      searchStore,
      images: [""],
      index: null,
      temp: null,
      size: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    searchStore.query = this.$route.params.id;

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
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
    },
    getImage(objectID) {
      try {
        require("../../../img/" + objectID + "/000001.jpg");
      } catch (err) {
        // console.log(asdf);
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;

      if (this.window.width <= 767) {
        this.size.width = this.window.width - 65;
        this.size.height = this.window.width - 100;
        this.size.width = this.size.width + "px";
        this.size.height = this.size.height + "px";
      } else if (this.window.width >= 767 && this.window.width <= 899) {
        this.size.width = "600px";
        this.size.height = "550px";
      } else if (this.window.width >= 900 && this.window.width <= 1024) {
        this.size.width = "800px";
        this.size.height = "700px";
      } else if (this.window.width >= 1025) {
        this.size.width = "350px";
        this.size.height = "300px";
      }
    }
  },

  components: {
    gallery: VueGallery,
    "v-lazy-image": VLazyImage
  }
};
</script> 

<style scoped>
a {
  all: unset;
}

@media screen and (max-width: 420px) {
  .container {
    margin-top: 130px;
    /* margin-left: 20vw; */
  }

  .not__found__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: gray;
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
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
  }

  .image > img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ftname {
    position: absolute;
    top: 20px;
    padding-left: 2rem;
    font-size: 24px;
    font-weight: 600;
    background-color: white;
    opacity: 0.8;
    color: #3498db;
  }

  .ftrank {
    position: absolute;
    bottom: 20px;
    right: 0;
    margin-right: 3rem;
    font-size: 18px;
    font-weight: 600;
  }
}

@media screen and (min-width: 421px) and (max-width: 786px) {
  .container {
    margin-top: 130px;
    /* margin-left: 20vw; */
  }

  .not__found__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: gray;
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
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 25px;
    cursor: pointer;
  }

  .ais-results {
    width: 85%;
    height: 100%;
    margin-left: 25px;
  }

  .image > img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ftname {
    position: absolute;
    top: 20px;
    padding-left: 2rem;
    font-size: 24px;
    font-weight: 600;
    background-color: white;
    opacity: 0.8;
    color: #3498db;
  }

  .ftrank {
    position: absolute;
    bottom: 20px;
    right: 0;
    margin-right: 3rem;
    font-size: 18px;
    font-weight: 600;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .container {
    margin-top: 130px;
    /* margin-left: 20vw; */
  }

  .not__found__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: gray;
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
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 25px;
    cursor: pointer;
  }

  .ais-results {
    width: 85%;
    height: 100%;
    margin-left: 25px;
  }

  .image > img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ftname {
    position: absolute;
    top: 20px;
    padding-left: 2rem;
    font-size: 24px;
    font-weight: 600;
    background-color: white;
    opacity: 0.8;
    color: #3498db;
  }

  .ftrank {
    position: absolute;
    bottom: 20px;
    right: 0;
    margin-right: 3rem;
    font-size: 18px;
    font-weight: 600;
  }
}

@media screen and (min-width: 1025px) {
  .container {
    margin-top: 130px;
    margin-left: 16vw;
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
    background-color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 25px;
    cursor: pointer;
  }

  .ais-results {
    width: 85%;
    height: 100%;
  }

  .image > img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ftname {
    position: absolute;
    top: 20px;
    padding-left: 2rem;
    font-size: 24px;
    font-weight: 600;
    background-color: white;
    opacity: 0.8;
    color: #3498db;
  }

  .ftrank {
    position: absolute;
    bottom: 20px;
    right: 0;
    margin-right: 3rem;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>