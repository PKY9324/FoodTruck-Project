<template>
  <div class="kakao">
    <KakaoLogin
      api-key="595a013a9ed47dab0594c7906b239fdc"
      image="kakao_login_btn_large"
      :on-success="onSuccess"
      :on-failure="onFailure"
    />
  </div>
</template>

<script>
import KakaoLogin from "vue-kakao-login";
import { store } from "../../store/index.js";

export default {
  name: "KakaoButton",
  components: {
    KakaoLogin
  },
  methods: {
    onSuccess: data => {
      Kakao.API.request({
        url: "/v2/user/me",
        success: function(res) {
          const newUser = {
            id: res.id,
            name: res.properties.nickname,
            email: res.kakao_account.email,
            photoUrl: res.properties.profile_image
          };
          store.commit("setUser", newUser);
          store.commit("LOGIN_SUCCESS");
        },
        fail: function(error) {
          alert(JSON.stringify(error));
        }
      });
    },
    onFailure: data => {
      // console.log(data);
      console.log("failure");
    }
  }
};
</script>

<style>
.kakao {
  all: unset;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.kakao > div > img {
  all: unset;
}
</style>

