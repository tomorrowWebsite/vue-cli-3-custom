<template>
  <div class="Products">
    <div class="row">
      <div class="col-md-4 my-3" v-for="product in products" :key="product.id">
        <i class="fas fa-trash" v-bind:id="product.id"></i>
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
              >View More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
// Get Document After Reload
// import { getDocs } from "firebase/firestore";
// Get Document On Time
import { onSnapshot } from "firebase/firestore";
// Delete Document
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
export default {
  name: "Product",
  data() {
    return {
      products: [],
      textId: [],
    };
  },
  created() {
    const db = getFirestore();
    const colRef = collection(db, "products");
    // Get Collection Data
    onSnapshot(colRef, (snapshot) => {
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
      // console.log(
      //   `%cOutput: %c=> %cArray And How Many Index`,
      //   "color: #55efc4; font-weight: bold; font-size: 18px",
      //   "color: #ff7675; font-weight: bold; font-size: 18px",
      //   "color: #3498db; font-weight: bold; font-size: 18px"
      // );
      // console.log(products);
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
        padding: 3px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s linear;
        z-index: 2;
        &:hover {
          transform: rotate(360deg);
        }
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
            border: 1px solid #333;
            border-radius: 5px;
            padding: 5px 10px;
            position: absolute;
            bottom: 5px;
            left: calc(50% - 50px);
          }
        }
      }
    }
  }
}
</style>
