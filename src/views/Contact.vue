<template>
  <div class="contact">
    <div class="container">
      <div class="wrapper-contact">
        <div class="op">
          <div class="button-choose-component">
            <div class="">
              <button class="" v-on:click="component = 'ContactSignin'">
                Signin
              </button>
              <button class="" v-on:click="component = 'ContactSignout'">
                Signout
              </button>
            </div>
          </div>
          <div class="content-page">
            <keep-alive>
              <component v-bind:is="component"></component>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactSignin from "@/components/Contact/Signin.vue";
import ContactSignout from "@/components/Contact/Signup.vue";

export default {
  name: "",
  data() {
    return {
      component: ContactSignout,
    };
  },
  components: { ContactSignin, ContactSignout },

  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped></style>
