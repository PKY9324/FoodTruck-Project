<template>
  <div>
    <!-- 로그인이 안되있는 상태 -->
    <div v-if="!user">
      <modals-container/>
      <button class="add-user-button" @click="modal_rendar()">
        <span class="add-user-icon">
          <font-awesome-icon :icon="icon" size="2x"/>
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

const _this = this;

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
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
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
          width: this.size.width,
          height: this.size.height
        }
      );
    },
    handleResize() {
      this.window.width = window.innerWidth;

      if (this.window.width <= 414) {
        this.size.width = "350px";
        this.size.height = "420px";
      }
      if (this.window.width >= 768) {
        this.size.width = "400px";
        this.size.height = "450px";
      }
      // if (this.window.width >= 414 && this.window.width <= 767) {
      //   this.size = "350px";
      // }
      // if (this.window >= 768) {
      //   this.size = "450px";
      // }
    }
  },

  components: {
    FontAwesomeIcon,
    LoginModal,
    "logout-button": LogoutButton
  }
};
</script>

<style>
@media screen and (max-width: 375px) {
  .add-user-button {
    all: unset;
    position: absolute;
    margin-top: 10px;
    margin-right: 10px;
    right: 0px;
    top: 0px;
    z-index: 1;
    cursor: pointer;
  }

  .add-user-icon {
    color: white;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  .add-user-button {
    all: unset;
    position: absolute;
    margin-top: 10px;
    margin-right: 10px;
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
    margin-top: 10px;
    margin-right: 20px;
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
    margin-top: 10px;
    margin-right: 20px;
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
    margin-top: 10px;
    margin-right: 20px;
    right: 0px;
    top: 0px;
    z-index: 1;
    cursor: pointer;
  }

  .add-user-icon {
    color: white;
  }
}

/* .add-user-button {
  all: unset;
  position: absolute;
  margin-top: 10px;
  margin-right: 20px;
  right: 0px;
  top: 0px;
  z-index: 1;
  cursor: pointer;
}

.add-user-icon {
  color: white ! important;
} */
</style>