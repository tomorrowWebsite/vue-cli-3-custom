<template>
  <div class="addProduct">
    <!-- Button trigger modal  -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#DeleteProduct"
    >
      Delete Product
    </button>
    <!--  Modal -->
    <div
      class="modal fade dir-ltr"
      id="DeleteProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-lg modal-sm">
        <!-- <div class="modal-dialog modal-dialog-centered"> -->
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <!-- <p class="lead py-5" v-bind:id="id">Id : {{ id }}</p> -->
              <form class="add" id="formAddProudect" ref="formAddProudect">
                <div class="mb-3">
                  <label for="url" class="form-label">Product Id:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="utl"
                    name="url"
                    aria-describedby="emailHelp"
                    placeholder="Type Id"
                    v-model="inputId"
                  />
                </div>

                <button
                  class="btn btn-primary"
                  v-on:click.prevent="formDeleteProudectById"
                >
                  Delete Proudect
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
export default {
  name: "AddProduct",
  // props: ["product", "product.id", "id"],
  data() {
    return {
      addProduct: {
        image: "",
        title: "",
        disc: "",
        category: [],
        inputId: "",
        textContent: "",
      },
      submitted: false,
    };
  },
  methods: {
    // Icon
    // deleteProduct() {
    //   console.log(`Id = ${this.id}`);
    //   const db = getFirestore();
    //   const docRef = doc(db, "books", this.textContent);

    //   deleteDoc(docRef).then(() => {
    //     console.log("Yas");
    //     this.deleteProduct();
    //   });
    //   console.log(this.addProduct.image);
    // },
    formDeleteProudectById: function () {
      const db = getFirestore();
      const docRef = doc(db, "products", this.inputId);

      deleteDoc(docRef).then(() => {
        // console.log("Yas");
        this.inputId = "";
      });
      // console.log(this.inputId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
