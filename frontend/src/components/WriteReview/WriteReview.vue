<template>
  <div class="container__textarea">
    <textarea @input="updateMessage" @keyup.enter="updateEnter" minlength="10" wrap="hard"/>
    <!-- {{ review }} -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["review"])
  },
  methods: {
    updateMessage(e) {
      this.$store.commit("UPDATE_FORM", e.target.value);
    },
    updateEnter(e) {
      this.$store.commit("UPDATE_FORM", "\n");
    }
  }
  // watch: {
  //   review(val) {
  //     console.log(val);
  //   }
  // }
};
</script>

<style>
@media screen and (max-width: 360px) {
  textarea {
    all: unset;
    width: 300px;
    height: 150px;
    padding: 12px 15px 30px 15px;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    text-align: left;
    font-size: 16px;
    color: #000000;
    resize: none;
    overflow-wrap: break-word;
  }

  .container__textarea {
    display: inline-block;
  }
}

@media screen and (max-width: 361px) and (max-width: 375px) {
  textarea {
    all: unset;
    width: 300px;
    height: 150px;
    padding: 12px 15px 30px 15px;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    text-align: left;
    font-size: 16px;
    color: #000000;
    resize: none;
    overflow-wrap: break-word;
  }

  .container__textarea {
    display: inline-block;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  textarea {
    all: unset;
    width: 300px;
    height: 150px;
    padding: 12px 15px 30px 15px;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    text-align: left;
    font-size: 16px;
    color: #000000;
    resize: none;
    overflow-wrap: break-word;
  }

  .container__textarea {
    display: inline-block;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  textarea {
    all: unset;
    width: 600px;
    height: 150px;
    padding: 12px 15px 30px 15px;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    text-align: left;
    font-size: 16px;
    color: #000000;
    resize: none;
    overflow-wrap: break-word;
  }

  .container__textarea {
    display: inline-block;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  textarea {
    all: unset;
    width: 600px;
    height: 150px;
    padding: 12px 15px 30px 15px;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    text-align: left;
    font-size: 16px;
    color: #000000;
    resize: none;
    overflow-wrap: break-word;
  }

  .container__textarea {
    display: inline-block;
  }
}

@media screen and (min-width: 1025px) {
  textarea {
    all: unset;
    width: 600px;
    height: 150px;
    padding: 12px 15px 30px 15px;
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    text-align: left;
    font-size: 16px;
    color: #000000;
    resize: none;
    overflow-wrap: break-word;
  }

  .container__textarea {
    display: inline-block;
  }
}
/* textarea {
  all: unset;
  width: 678px;
  height: 150px;
  padding: 12px 15px 30px 15px;
  border: 1px solid #dbdbdb;
  background-color: #ffffff;
  border-radius: 3px;
  box-sizing: border-box;
  text-align: left;
  font-size: 16px;
  color: #000000;
  resize: none;
  overflow-wrap: break-word;
}

.container__textarea {
  display: inline-block;
  margin-left: 30px;
} */
</style>
