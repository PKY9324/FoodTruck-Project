<template>
  <div>
    <div id="content-focus">
      <div>
        <h1
          class="content__focus__share content__focus__line content__name"
        >{{ listObject[this.$route.params.objectID].name }}</h1>
        <write-review-button/>
      </div>
      <hr>
      <div
        class="content__focus__share content__focus__excp"
        v-if="listObject[this.$route.params.objectID].old_address !== 0"
      >
        <h3>지번 주소</h3>
        <p>{{ listObject[this.$route.params.objectID].old_address }}</p>
      </div>
      <div
        class="content__focus__share content__focus__excp"
        v-if="listObject[this.$route.params.objectID].new_address !== 0"
      >
        <h3>도로명 주소</h3>
        <p>{{ listObject[this.$route.params.objectID].new_address }}</p>
      </div>
      <div
        class="content__focus__share content__focus__excp"
        v-if="listObject[this.$route.params.objectID].phone"
      >
        <h3>전화번호</h3>
        <h3>{{ listObject[this.$route.params.objectID].phone }}</h3>
      </div>

      <hr>
    </div>
  </div>
</template>

<script>
import { foodtruckRef, firestorage } from "../../../config/firebaseInit.js";
import WriteReviewButton from "./WriteReviewButton";
export default {
  data() {
    return {
      listObject: {}
    };
  },
  created() {
    this.$bindAsObject(
      "listObject",
      foodtruckRef.orderByChild("name").equalTo(this.$route.params.name)
    );
  },
  components: {
    "write-review-button": WriteReviewButton
  }
};
</script>

<style>
@media screen and (max-width: 360px) {
  #content-focus {
    padding-top: 5px;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .content__name {
    color: #3498db;
    width: 220px;
    font-size: 24px;
  }

  .content__focus__line {
    display: inline-block;
  }

  .content__focus__share {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .content__focus__excp {
    margin-top: 20px;
  }
}

@media screen and (min-width: 360px) and (max-width: 375px) {
  #content-focus {
    padding-top: 5px;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .content__name {
    color: #3498db;
    width: 220px;
    font-size: 24px;
  }

  .content__focus__line {
    display: inline-block;
  }

  .content__focus__share {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .content__focus__excp {
    margin-top: 20px;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  #content-focus {
    padding-top: 10px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 30px;
  }

  .content__name {
    color: #3498db;
    width: 220px;
    font-size: 24px;
  }

  .content__focus__line {
    display: inline-block;
  }

  .content__focus__share {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .content__focus__excp {
    margin-top: 20px;
  }
}

@media screen and (min-width: 421px) and (max-width: 768px) {
  #content-focus {
    padding-top: 10px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 30px;
  }

  .content__name {
    color: #3498db;
    width: 450px;
    font-size: 36px;
  }

  .content__focus__line {
    display: inline-block;
  }

  .content__focus__share {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .content__focus__excp {
    margin-top: 20px;
  }
}

@media screen and (min-width: 787px) and (max-width: 1024px) {
  #content-focus {
    padding-top: 15px;
    margin-top: 40px;
    margin-left: 60px;
    margin-right: 60px;
  }

  .content__name {
    color: #3498db;
    width: 420px;
    font-size: 48px;
  }

  .content__focus__line {
    display: inline-block;
  }

  .content__focus__share {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .content__focus__excp {
    margin-top: 20px;
  }
}

@media screen and (min-width: 1025px) {
  #content-focus {
    padding-top: 15px;
    margin-top: 40px;
    margin-left: 60px;
    margin-right: 60px;
  }

  .content__name {
    color: #3498db;
    width: 420px;
    font-size: 48px;
  }

  .content__focus__line {
    display: inline-block;
  }

  .content__focus__share {
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .content__focus__excp {
    margin-top: 20px;
  }
}

/* #content-focus {
  padding-top: 15px;
  margin-top: 40px;
  margin-left: 60px;
  margin-right: 60px;
}

.content__name {
  color: #3498db;
  width: 420px;
  font-size: 48px;
}

.content__focus__line {
  display: inline-block;
}

.content__focus__share {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

.content__focus__excp {
  margin-top: 20px;
} */
</style>
