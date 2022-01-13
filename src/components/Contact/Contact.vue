<!-- <template>
  <div class="Contact" id="Contact">
    <div
      class="modal fade dir-ltr"
      id="contact"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="d-flex justify-content-sm-evenly flex-row">
            <component :is="components"></component>
            <div class="d-flex flex-colum flex-fill justify-content-sm-evenly">
              <button
                type="button"
                class="btn btn-primary d-inline-block"
                data-bs-toggle="modal"
                @v-on:click="components = 'ContactSignin'"
              >
                Signin
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @v-on:click="components = 'ContactSignout'"
              >
                Signout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactSignin from "@/components/Contact/Signin.vue";
import ContactSignout from "@/components/Contact/Signout.vue";
export default {
  name: "Contact",
  data() {
    return {
      components: ContactSignout,
    };
  },
  components: { ContactSignin: ContactSignin, ContactSignout: ContactSignout },
};
</script>

<style lang="scss" scoped></style> -->
