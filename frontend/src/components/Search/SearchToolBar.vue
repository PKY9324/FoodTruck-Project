<template>
  <div>
    <toolbar :value="true" :height="50" :color="'#3498DB'">
      <span>
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
  components: {
    "mini-search-bar": MiniSearchBar,
    "user-login": UserLogin
  }
};
</script>
