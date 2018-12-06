import * as firebase from "firebase";

export default {
  state: {
    user: null,
    isAuth: false,
    review: "",
    star: ""
  },
  mutations: {
    STATE_INIT(state) {
      state.review = "";
      state.star = "";
    },
    setUser(state, payload) {
      state.user = payload;
    },
    LOGIN_SUCCESS(state) {
      state.isAuth = true;
    },
    LOGOUT_SUCCESS(state) {
      state.isAuth = false;
    },
    UPDATE_FORM(state, form) {
      state.review = form;
    },
    UPDATE_STAR(state, star) {
      state.star = star;
    }
  },
  actions: {
    signUserInGoogle({ commit }) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          };
          commit("setUser", newUser);
          commit("LOGIN_SUCCESS");
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          // console.log(error);
        });
    },
    signUserInFacebook({ commit }) {
      commit("setLoading", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(user => {
          commit("setLoading", false);
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          };
          commit("setUser", newUser);
          commit("LOGIN_SUCCESS");
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          // console.log(error);
        });
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      });
      commit("LOGIN_SUCCESS");
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit("setUser", null);
      commit("LOGOUT_SUCCESS");
    },
    SubmitSaveButton({ commit }, { star, review, user, objectID }) {
      // console.log(star, review, user, objectID)
      if (user.photoUrl === "undefined" && (star !== "" && review !== "")) {
        firebase
          .database()
          .ref("foodtrucks/" + objectID)
          .child("description")
          .push()
          .set({
            user_id: user.id,
            photoUrl:
              "https://openclipart.org/download/247324/abstract-user-flat-1.svg",
            name: user.name,
            star: star,
            desp: review
          });
        commit("STATE_INIT");
      } else if (star !== "" && review !== "") {
        firebase
          .database()
          .ref("foodtrucks/" + objectID)
          .child("description")
          .push()
          .set({
            user_id: user.id,
            photoUrl: user.photoUrl,
            name: user.name,
            star: star,
            desp: review
          });
        commit("STATE_INIT");
      } else if (star === "" || review === "") {
        alert("리뷰와 별점을 매겨주세요");
        commit("STATE_INIT");
      }
    },
    CancleButton({ commit }) {
      commit("STATE_INIT");
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    review(state) {
      return state.review;
    },
    star(state) {
      return state.star;
    }
  }
};
