<template>
  <div>
    <toolbar :value="true" :height="50" :color="'#3498DB'">
      <span>
        <button class="toolbar___title" @click="redirectHome">Foodtrucks</button>
        <mini-search-bar/>
        <user-login/>
      </span>
    </toolbar>
  </div>
</template>

<script>
import MiniSearchBar from "./MiniSearchBar";
import UserLogin from "./UserLogin";

export default {
  methods: {
    redirectHome() {
      this.$router.replace({ path: "/" });
    }
  },
  components: {
    "mini-search-bar": MiniSearchBar,
    "user-login": UserLogin
  }
};
</script>

<style>
@media screen and (max-width: 375px) {
  .toolbar___title {
    all: unset;
    position: absolute;
    left: 10px;
    top: 11px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .toolbar___title {
    all: unset;
    position: absolute;
    left: 10px;
    top: 11px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
}

@media screen and (min-width: 415px) and (max-width: 768px) {
  .toolbar___title {
    all: unset;
    position: absolute;
    left: 10px;
    top: 11px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .toolbar___title {
    all: unset;
    position: absolute;
    left: 10px;
    top: 11px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
}

@media screen and (min-width: 1025px) {
  .toolbar___title {
    all: unset;
    position: absolute;
    left: 10px;
    top: 11px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
}
/* .toolbar___title {
  all: unset;
  position: absolute;
  left: 16px;
  top: 11px;
  font-size: 20px;
  font-weight: 600;
  color: white ! important;
  cursor: pointer;
} */
</style>
