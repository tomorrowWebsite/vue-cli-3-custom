<template>
  <div class="Signout">
    <div class="modal-header">
      <div class="modal-title-top">
        <h5 class="modal-title" id="exampleModalLabel">Signout</h5>
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
      <div class="alert alert-danger">{{ messageError }}</div>

      <form
        class="form"
        action=""
        method=""
        novalidate
        @submit.prevent="registerUser"
      >
        <div class="form-floating">
          <input type="text" class="form-control" v-model="user.fName" />
          <i class="fas fa-signature"></i>
          <label for="floatingInput">First Name</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control my-2" v-model="user.lName" />
          <i class="fas fa-file-signature"></i>
          <label for="floatingInput">List Name</label>
        </div>
        <div class="form-floating">
          <input type="email" class="form-control my-2" v-model="user.email" />
          <i class="fas fa-envelope"></i>
          <label for="floatingInput">Your Email </label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control my-2"
            v-model="user.password"
          />
          <i class="fas fa-key"></i>
          <label for="floatingInput">Password</label>
        </div>
        <div class="form-floating">
          <input
            type="tel"
            name="tel"
            class="form-control my-2"
            v-model="user.tel"
          />
          <i class="fas fa-mobile"></i>
          <label for="floatingInput">Your Phone Number</label>
        </div>
        <div class="form-floating">
          <input
            type="date"
            name=""
            id=""
            class="form-control my-2"
            v-model="user.data"
          />
          <i class="fas fa-clock"></i>
        </div>
        <div class="form-textarea">
          <textarea
            class="form-control"
            placeholder="Please\nLeave a Comment Here"
            v-model="user.comment"
          >
          </textarea>
          <i class="fas fa-comment-alt"></i>
        </div>
        <div class="my-3">
          <button
            type="submit"
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
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "ContactSignout",
  data() {
    return {
      user: {
        fName: "",
        lName: "",
        email: "",
        password: "",
        tel: "",
        data: "",
        comment: "",
      },
      messageError: "",
    };
  },
  methods: {
    registerUser: function () {
      const auth = getAuth();
      const db = getFirestore();
      const colRef = collection(db, "users");

      createUserWithEmailAndPassword(
        auth,
        // this.user.fName,
        // this.user.lName,
        this.user.email,
        this.user.password,
        // this.user.tel,
        // this.user.data,
        // this.user.comment
        //
        addDoc(colRef, {
          // fName: this.user.fName,
          // lName: this.user.lName,
          // email: this.user.email,
          // password: this.user.password,
          // tel: this.user.tel,
          // data: this.user.data,
          // comment: this.user.comment,
          colRef: this.user,
        })
      )
        .then((dataUser) => {
          console.log(dataUser);
          console.log(this.user.uid);
          console.log(dataUser.docs);
          const user = dataUser.user;
          console.log(user);
          router.push({ name: "Home" });
        })
        .catch(() => {
          this.messageError = "Error Input Name Email Or Password";
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
