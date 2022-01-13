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
            <router-link class="nav-item" to="/About" tag="li">
              <a class="nav-link"> About </a>
            </router-link>
            <router-link class="nav-item" to="/Products" tag="li">
              <a class="nav-link"> Products </a>
            </router-link>
          </ul>
          <router-link class="nav-item" to="/Contact" tag="li">
            <a class="nav-link"> Signin </a>
          </router-link>
        </div>
      </div>
    </nav>
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact/Contact.vue";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {},
  created() {},
  watch: {},
  components: { Contact },
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
