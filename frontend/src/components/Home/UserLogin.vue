<template>
    <div>
        <modals-container />
        <button class="add-user-button" @click="doc_del_rendar()">
          <span class="add-user-icon">
            <font-awesome-icon :icon="icon" size="3x" />
          </span>
        </button>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "../LoginModal/index";

export default {
  name: "UsearLogin",
  methods: {
    doc_del_rendar() {
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
    }
  },
  computed: {
    icon() {
      return faUserPlus;
    }
  },
  components: {
    FontAwesomeIcon,
    LoginModal
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