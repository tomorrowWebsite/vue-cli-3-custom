<template>
  <div class="SearchProduct">
    <!-- Button trigger modal  -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#SearchProduct"
    >
      Search Product
    </button>
    <!--  Modal -->
    <div
      class="modal fade dir-ltr"
      id="SearchProduct"
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
                  <label for="url" class="form-label">Title Name :</label>
                  <input
                    type="text"
                    class="form-control"
                    id="author"
                    name="author"
                    aria-describedby="emailHelp"
                    placeholder="Url"
                    v-model="InputSearchTitle"
                  />
                </div>
                <button
                  class="btn btn-primary"
                  v-on:click.prevent="formSearchProudect"
                  id="click"
                >
                  Search Proudect
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <div class="row">
                <div
                  class="col-md-12 my-3"
                  v-for="product in products"
                  :key="product.id"
                >
                  <i class="fas fa-trash" v-bind:id="product.id"></i>
                  <div class="card">
                    <img
                      v-bind:src="product.image"
                      class="card-img-top"
                      alt="..."
                    />

                    <!-- v-on:click.prevent="deleteProduct()" -->
                    <!-- ممكن تنفع للايكونة انو انت تدوس على عنصر يمسح الاب بتاعو -->
                    <a
                      href="#"
                      class="lead py-5 elementProductId"
                      v-bind:textId="product.id"
                      >{{ product.id }}</a
                    >
                    <p>{{ textId }}</p>
                    <div class="card-body">
                      <h5 class="card-title">{{ product.title }}</h5>
                      <p class="card-text">
                        {{ product.disc }}
                      </p>
                      <ul class="my-3">
                        <li
                          v-for="(cat, index) in product.category"
                          :key="index"
                        >
                          <span>{{ cat }}</span>
                        </li>
                      </ul>
                      <!-- <a href="#" class="btn btn-primary">View More</a> -->
                      <!-- للسانجل بروداكت  -->
                      <router-link v-bind:to="'/Products/' + product.id"
                        >View More</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ***********************************************
// ***********************************************
// ***********************************************
// ***********************************************

import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { query } from "firebase/firestore";
import { where } from "firebase/firestore";

// ***********************************************
// ***********************************************
// ***********************************************
// ***********************************************

export default {
  name: "SearchProduct",
  data() {
    return {
      products: [],
      InputSearchTitle: [],
    };
  },
  methods: {
    formSearchProudect: function () {
      const db = getFirestore();
      const colRef = collection(db, "products");
      const q = query(colRef, where("title", "==", this.InputSearchTitle));
      // Get Collection Data And Search
      onSnapshot(q, (snapshot) => {
        let products = [];
        snapshot.docs.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        this.products = products;
        this.InputSearchTitle = "";
      });
    },
  },
  updated() {
    // = Window Event
    window.onload = function () {
      "use strict";
      console.log("Yes");
    };

    var ElementName = document.getElementById("click");

    ElementName.onclick = function () {
      "use strict";

      this.parentElement.style.display = "none";
      this.style.backgroundColor = "#3498da";
      this.style.zIndex = "-1";
    };

    window.onload = function () {
      "use strict";

      setTimeout(function () {
        "use strict";

        // Code

        ElementName.click();
      }, 1000);
    };
  },
};
</script>

<style lang="scss" scoped></style>
