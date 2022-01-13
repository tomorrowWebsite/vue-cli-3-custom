<template>
  <div class="addProduct">
    <!-- Button trigger modal  -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      App Product
    </button>
    <!--  Modal -->
    <div
      class="modal fade dir-ltr"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-lg modal-sm">
        <!-- <div class="modal-dialog modal-dialog-centered"> -->
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="add" id="formAddProudect" ref="formAddProudect">
                <div class="mb-3">
                  <label for="url" class="form-label">Image Url :</label>
                  <input
                    type="text"
                    class="form-control"
                    id="utl"
                    name="url"
                    aria-describedby="emailHelp"
                    placeholder="Url"
                    v-model="addProduct.image"
                  />
                </div>
                <div class="mb-3">
                  <label for="title" class="form-label">Title :</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    ref="'title"
                    v-model="addProduct.title"
                  />
                </div>
                <div class="mb-3">
                  <label for="disc" class="form-label">Description</label>
                  <div class="form-floating">
                    <textarea
                      name="disc"
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="disc"
                      style="height: 150px"
                      v-model="addProduct.disc"
                    ></textarea>
                    <label for="disc">Leave a comment here</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4 my-2">
                    <input
                      type="checkbox"
                      v-model="addProduct.category"
                      class="form-check-input mx-2"
                      value="Html"
                    />
                    <label for="">Html</label>
                  </div>
                  <div class="col-sm-4 my-2">
                    <input
                      type="checkbox"
                      v-model="addProduct.category"
                      class="form-check-input mx-2"
                      value="Css"
                    />
                    <label for="">Css</label>
                  </div>
                  <div class="col-sm-4 my-2">
                    <input
                      type="checkbox"
                      v-model="addProduct.category"
                      class="form-check-input mx-2"
                      value="Javascript"
                    />
                    <label for="">Javascript</label>
                  </div>
                  <div class="col-sm-4 my-2">
                    <input
                      type="checkbox"
                      v-model="addProduct.category"
                      class="form-check-input mx-2"
                      value="Jquery"
                    />
                    <label for="">Jquery</label>
                  </div>
                  <div class="col-sm-4 my-2">
                    <input
                      type="checkbox"
                      v-model="addProduct.category"
                      class="form-check-input mx-2"
                      value="Vue"
                    />
                    <label for="">Vue</label>
                  </div>
                  <div class="col-sm-4 my-2">
                    <input
                      type="checkbox"
                      v-model="addProduct.category"
                      class="form-check-input mx-2"
                      value="Github"
                    />
                    <label for="">Github</label>
                  </div>
                </div>
                <button
                  class="btn btn-primary"
                  v-on:click.prevent="formAddProudect"
                >
                  Add New Proudect
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
              <!-- <button type="button" class="btn btn-primary">Save</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";

export default {
  name: "AddProduct",
  data() {
    return {
      addProduct: {
        image: "",
        title: "",
        disc: "",
        category: [],
      },
      submitted: false,
    };
  },
  methods: {
    formAddProudect: function () {
      const db = getFirestore();
      const colRef = collection(db, "products");
      addDoc(colRef, {
        image: this.addProduct.image,
        title: this.addProduct.title,
        disc: this.addProduct.disc,
        category: this.addProduct.category,
      }).then(() => {
        (this.addProduct.image = ""),
          (this.addProduct.title = ""),
          (this.addProduct.disc = ""),
          (this.addProduct.category = []);
      });
      // console.log(this.addProduct.image);
    },
  },
};
</script>

<style lang="scss" scoped></style>
