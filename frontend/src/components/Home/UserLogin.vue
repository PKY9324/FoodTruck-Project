<template>
  <div>
    <!-- 로그인이 안되있는 상태 -->
    <div v-if="!user">
      <modals-container/>
      <button class="add-user-button" @click="modal_rendar()">
        <span class="add-user-icon">
          <font-awesome-icon :icon="icon" size="3x"/>
        </span>
      </button>
    </div>
    <div v-if="user">
      <logout-button/>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

import LoginModal from "../LoginModal/index";
import LogoutButton from "./LogoutButton";

import { mapState, mapMutations } from "vuex";

export default {
  name: "UsearLogin",
  computed: {
    ...mapState({
      user: state => state.user.isAuth
    }),
    icon() {
      return faUserPlus;
    }
  },
  methods: {
    modal_rendar() {
      this.$modal.show(
        LoginModal,
        {
          modal: this.$modal
        },
        {
          width: "400px",
          height: "450px"
        }
      );
    },
    ...mapMutations(["LOGIN_SUCCESS"])
  },
  components: {
    FontAwesomeIcon,
    LoginModal,
    "logout-button": LogoutButton
  }
};
</script>

<style scoped>
.add-user-button {
  all: unset;
  position: absolute;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
  right: 0px;
  top: 0px;
  z-index: 1;
  cursor: pointer;
}

.add-user-icon {
  color: white;
}
</style>