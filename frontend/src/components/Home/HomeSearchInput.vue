<template>
  <div class="search-input">
    <div class="container-1">
      <span class="icon">
        <font-awesome-icon :icon="icon" size="2x" />
        </span>
      <span>
        <button class="search-button">검색</button>
      </span>
      <input type="search" id="search" placeholder=". . .지역, 이름" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "SearchInput",
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

<style>
.search-input {
  all: unset;
  position: absolute;
  left: 2vw;
  bottom: 25vh;
  align-content: center;
  margin: 100px auto;
  width: 900px;
  height: 60px;
}

.container-1 {
  width: 900px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
}

.container-1 input#search {
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
}

input#search {
  all: unset;
  border: none;
  font-weight: 600;
}

input::placeholder {
  font-size: 18px;
}

.search-button {
  all: unset;
  text-align: center;
  position: absolute;
  background-color: rgb(52, 152, 219);
  border: none;
  right: 0;
  width: 170px;
  height: 60px;
  font-weight: 600;
  font-size: 25px;
  color: white;
  border: none;
  border-radius: 80px;
  z-index: 1;
}

.container-1 .icon {
  position: absolute;
  color: rgb(52, 152, 219);
  z-index: 1;
}

.container-1 > .icon {
  position: absolute;
  left: 10px;
  top: 25%;
}
</style>
