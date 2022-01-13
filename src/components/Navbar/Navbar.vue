<template>
  <div class="Navbar">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light fixed-top jq-navbar-change-color"
      id="fixed-top"
    >
      <div class="container">
        <router-link class="nav-item list-unstyled" to="/" tag="li">
          <a class="navbar-brand">
            <img
              src="../../assets/logo.png"
              alt=""
              style="width: 50px; height: 50px"
            />
          </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-sm-between"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <router-link class="nav-item" to="/" tag="li">
              <a class="nav-link"> Home </a>
            </router-link>
            <router-link class="nav-item" to="/About" tag="li" v-if="user">
              <a class="nav-link"> About </a>
            </router-link>
            <router-link class="nav-item" to="/Products" tag="li">
              <a class="nav-link"> Products </a>
            </router-link>
          </ul>
          <ul class="nav nav-tabs">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                v-if="user"
                >Profile</a
              >
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                v-if="user == null"
                >Contact</a
              >
              <ul class="dropdown-menu">
                <router-link
                  class="nav-item"
                  to="/Contact"
                  tag="li"
                  replace
                  v-if="user == null"
                >
                  <a class="nav-link" href=""> Signin </a>
                </router-link>
                <router-link
                  class="nav-item"
                  to="/Contact"
                  tag="li"
                  replace
                  v-if="user == null"
                >
                  <a class="nav-link" href=""> Signup </a>
                </router-link>
                <router-link class="btn" v-if="user" to="">
                  <a href="">Profile</a>
                </router-link>
                <li><hr class="dropdown-divider" /></li>
                <router-link class="btn" v-if="user" to="">
                  <a v-on:click="logout">Logout</a>
                </router-link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact/Contact.vue";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import router from "../../router";

export default {
  name: "Navbar",
  data() {
    return {
      user: null,
      uid: "",
    };
  },

  components: { Contact },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        this.user = userAuth;
        // ...
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    // <a v-on:click="logout">Logout</a>
    logout: function () {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          router.push({ name: "Home" });
        })
        .catch(() => {
          this.messageError = "Error Input Name Email Or Password";
          // ..
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.Navbar {
  nav {
    .container {
      .collapse {
        .navbar-nav {
          .nav-item {
            text-decoration: none;
            .nav-link {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
