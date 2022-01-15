<template>
  <div class="Products">
    <div class="row">
      <div class="mb-3">
        <label for="search" class="form-label">Search</label>
        <input
          type="text"
          v-model="search"
          class="form-control"
          placeholder="Search"
        />
        <!-- <fa :icon="['fas', 'search']"></fa> -->
      </div>
      <div
        class="col-md-4 my-3"
        v-for="product in filterProducts"
        :key="product.id"
      >
        <router-link v-bind:to="'/Products/' + product.id">
          <i class="fas fa-trash"></i>
          <!-- <i class="fas fa-" v-bind:id="product.id"></i> -->
        </router-link>
        <router-link v-bind:to="'/Products/' + product.id">
          <i class="fas fa-edit"></i>
        </router-link>
        <div class="card">
          <img v-bind:src="product.image" class="card-img-top" alt="..." />

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
              <li v-for="(cat, index) in product.category" :key="index">
                <span>{{ cat }}</span>
              </li>
            </ul>
            <!-- <a href="#" class="btn btn-primary">View More</a> -->
            <!-- للسانجل بروداكت  -->
            <router-link v-bind:to="'/Products/' + product.id"
              >View More
              <!-- <i class="fas fa-chevron-right"></i> -->
              <fa :icon="['fas', 'chevron-right']"></fa>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
//
import { query } from "firebase/firestore";

// Get Document After Reload
// import { getDocs } from "firebase/firestore";
// Get Document On Time
import { onSnapshot } from "firebase/firestore";
//orderBy
import { orderBy } from "firebase/firestore";
// Delete Document
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
export default {
  name: "Product",
  data() {
    return {
      products: [],
      textId: [],
      // For Search Input
      search: "",
    };
  },
  created() {
    const db = getFirestore();
    const colRef = collection(db, "products");
    const q = query(colRef, orderBy("createdAt", "desc"));
    // Get Collection Data
    onSnapshot(q, (snapshot) => {
      // console.log(snapshot);
      let products = [];
      snapshot.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
        // console.log(products);
        // console.log(products[0]);
        // console.log(
        //   `%cOutput: %c=> %cData`,
        //   "color: #55efc4; font-weight: bold; font-size: 18px",
        //   "color: #ff7675; font-weight: bold; font-size: 18px",
        //   "color: #3498db; font-weight: bold; font-size: 18px"
        // );
        // console.log(products[0]);
        // console.log(products[0].id);
        // console.log(products[0].title);
      });
      this.products = products;
      console.log(
        `%c###################################################:`,
        "color: #55efc4; font-weight: bold; font-size: 18px"
      );
      //   Output Array
      console.log(
        `%cOutput: %c=> %cArray And How Many Index`,
        "color: #55efc4; font-weight: bold; font-size: 18px",
        "color: #ff7675; font-weight: bold; font-size: 18px",
        "color: #3498db; font-weight: bold; font-size: 18px"
      );
      console.log(products);
      // Output Id
      // console.log(
      //   `%cOutput: %c=> %cId`,
      //   "color: #55efc4; font-weight: bold; font-size: 18px",
      //   "color: #ff7675; font-weight: bold; font-size: 18px",
      //   "color: #3498db; font-weight: bold; font-size: 18px"
      // );
      // console.log(products.doc);
      // console.log(products.doc.id);
      // console.log(products.doc.data());
    });
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     // console.log(snapshot);
    //     let products = [];
    //     snapshot.docs.forEach((doc) => {
    //       products.push({ ...doc.data(), id: doc.id });
    //     });
    //     //   Output Array
    //     console.log(
    //       `%cOutput: %c=> %cArray And How Many Index`,
    //       "color: #55efc4; font-weight: bold; font-size: 18px",
    //       "color: #ff7675; font-weight: bold; font-size: 18px",
    //       "color: #3498db; font-weight: bold; font-size: 18px"
    //     );
    //     console.log(products);
    //     this.products = products;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  methods: {
    deleteProduct() {
      console.log("Yas");
      const db = getFirestore();
      const docRef = doc(db, "products", this.textId);

      deleteDoc(docRef).then(() => {
        console.log("Yas");
        this.textId = "";
      });
      console.log(this.textId);
      // const iconDelete = document.getElementById("056sQu7hgr6rZwGE2PpJ");
      // console.log(
      //   `%c###########################################################################:`,
      //   "color: #55efc4; font-weight: bold; font-size: 18px"
      // );
      // console.log("iconDelete " + iconDelete);
      // const docRef = doc(db, "products", iconDelete.id);

      // deleteDoc(docRef).then(() => {
      //   iconDelete.reset();
      // });
    },
  },
  computed: {
    filterProducts: function () {
      return this.products.filter((product) => {
        return product.title.match(`${this.search}`);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Products {
  .row {
    .col-md-4 {
      position: relative;
      display: block;
      .fas {
        position: absolute;
        top: 20px;
        right: 20px;
        color: #ffffff;
        background-color: #000;
        padding: 3px 8px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 2;
        transition: all 0.4s linear;
        // box-shadow: -1px 0px 10px #000;
        // @include boxShadow(-1px, 0px, 10px, #000);

        &:hover {
          // transform: scale(1.2);
          color: #333;
          background-color: #ffffff;
        }
      }
      .fas.fa-edit {
        // border: 2px solid #333;
        right: 70px;
        padding: 3px 8px;
      }
      .card {
        height: 100%;
        img {
          height: 300px;
        }
        .elementProductId {
          padding: 20px 0;
          background: #333;
          color: #ffffff;
        }
        .card-body {
          position: relative;
          .card-title {
            padding: 20px 0;
            font-weight: bold;
          }
          .card-text {
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            padding: 0;
            margin: 0;
            li {
              list-style: none;
              display: inline-block;
              border: 1px solid #333;
              padding: 5px 10px;
              margin: 10px 5px;
              border-radius: 10px;
            }
          }
          a {
            text-decoration: none;
            color: #333;
            // border: 1px solid #333;
            border-radius: 5px;
            padding: 5px 10px;
            position: absolute;
            bottom: 5px;
            // left: calc(50% - 50px);
            transition: all 0.5s ease-in-out;
            border: 2px solid transparent;
            svg {
              margin-left: 5px;
              transition: all 0.5s ease-in-out;
            }
            &:hover {
              border: 2px solid #333333b3;
              box-shadow: -1px 0px 10px #333333b3;

              svg {
                margin-left: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
