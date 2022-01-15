<template>
  <div class="Signin">
    <div class="modal-header">
      <div class="modal-title-top">
        <h5 class="modal-title" id="exampleModalLabel">Signin</h5>
      </div>
      <div class="ms-signout">
        <h2>Welcome</h2>
        <p class="lead">Subscribe yor our Social Profile</p>
      </div>
      <div class="social-area">
        <i class="fab fa-google"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-youtube-square"></i>
      </div>
    </div>
    <div class="modal-body">
      <div class="alert alert-danger" v-show="messageError">
        {{ messageError }}
      </div>

      <form class="form" @submit.prevent="loginUser" novalidate>
        <div class="form-floating">
          <input
            type="email"
            placeholder="Your Email"
            class="form-control my-2"
            v-model="user.email"
          />
          <i class="fas fa-envelope"></i>
          <label for="floatingInput">Your Email </label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            class="form-control my-2"
            v-model="user.password"
          />
          <i class="fas fa-key"></i>
          <label for="floatingInput">Password</label>
        </div>
        <div class="">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../../router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "ContactSignin",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      messageError: "",
    };
  },
  methods: {
    loginUser: function () {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then(() => {
          router.push({ name: "Home" });
        })
        .catch(() => {
          this.messageError = "Error Input Email Or Password";
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
