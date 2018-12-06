<template>
  <div>
    <!-- 로그인이 안되있는 상태 -->
    <div v-if="!user">
      <modals-container/>
      <button class="add-user-button" @click="modal_rendar()">
        <span class="add-user-icon">
          <font-awesome-icon :icon="icon" :size="iconSize"/>
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
  data() {
    return {
      window: {
        width: 0
      },
      size: {
        width: 0,
        height: 0
      },
      iconSize: 0
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.isAuth
    }),
    icon() {
      return faUserPlus;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    modal_rendar() {
      this.$modal.show(
        LoginModal,
        {
          modal: this.$modal
        },
        {
          width: this.size.width,
          height: this.size.height
        }
      );
    },
    ...mapMutations(["LOGIN_SUCCESS"]),
    handleResize() {
      this.window.width = window.innerWidth;

      if (this.window.width <= 414) {
        this.size.width = "350px";
        this.size.height = "420px";
        this.iconSize = "2x";
      }
      if (this.window.width >= 768) {
        this.size.width = "400px";
        this.size.height = "450px";
        this.iconSize = "3x";
      }
    }
  },
  components: {
    FontAwesomeIcon,
    LoginModal,
    "logout-button": LogoutButton
  }
};
</script>

<style scoped>
@media screen and (max-width: 360px) {
  .add-user-button {
    all: unset;
    position: absolute;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    right: 0px;
    top: 0px;
    z-index: 1;
    cursor: pointer;
  }

  .add-user-icon {
    color: white;
  }
}
@media screen and (min-width: 361px) and (max-width: 420px) {
  .add-user-button {
    all: unset;
    position: absolute;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    right: 0px;
    top: 0px;
    z-index: 1;
    cursor: pointer;
  }

  .add-user-icon {
    color: white;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  .add-user-button {
    all: unset;
    position: absolute;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    right: 0px;
    top: 0px;
    z-index: 1;
    cursor: pointer;
  }

  .add-user-icon {
    color: white;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  .add-user-button {
    all: unset;
    position: absolute;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    right: 0px;
    top: 0px;
    z-index: 1;
    cursor: pointer;
  }

  .add-user-icon {
    color: white;
  }
}

@media screen and (min-width: 1025px) {
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
}
</style>