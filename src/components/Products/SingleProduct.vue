<template>
  <div class="SingleProduct">
    <h2>SingleProduct</h2>

    <div class="row">
      <!-- <div class="col-md-4 my-3" v-for="product in products" :key="product.id"> -->
      <div class="col-md-4 my-3">
        <div class="card">
          <img v-bind:src="product.image" class="card-img-top" alt="..." />
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
// import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { doc } from "firebase/firestore";

export default {
  name: "SingleProduct",
  data() {
    return {
      id: this.$route.params.id,
      products: [],
    };
  },
  created() {
    const db = getFirestore();
    // const colRef = collection(db, "products", this.id);
    const docRef = doc(db, "books", this.id);
    // Get Collection Data
    getDocs(docRef)
      .then((snapshot) => {
        let products = [];
        snapshot.docs.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });

        this.products = products;
        // console.log(
        //   `%cOutput: %c=> %cArray And How Many Index`,
        //   "color: #55efc4; font-weight: bold; font-size: 18px",
        //   "color: #ff7675; font-weight: bold; font-size: 18px",
        //   "color: #3498db; font-weight: bold; font-size: 18px"
        // );
        // console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async mounted() {
    this.products = this.id.filter((product) => {
      return product.id === this.products;
    });
    console.log(this.products);
  },
};
</script>

<style lang="scss" scoped></style>
