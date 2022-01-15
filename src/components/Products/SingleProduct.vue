<template>
  <div class="SingleProduct">
    <div class="container">
      <h2 class="py-5 my-5 text-center">Single Product</h2>

      <div class="row">
        <div class="offset-4 col-md-4 my-3">
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
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
// import { getDoc } from "firebase/firestore";

export default {
  name: "SingleProduct",
  data() {
    return {
      id: this.$route.params.id,
      product: {},
    };
  },
  created() {
    const db = getFirestore();
    const coll = collection(db, "products");
    const docRef = doc(coll, this.id);
    //
    // getDoc(docRef).then((doc) => {
    //   console.log(doc.data(), doc.id);
    //   this.product = doc.data();
    // });

    onSnapshot(docRef, (doc) => {
      console.log(
        `%c###########################################################################:`,
        "color: #3498db; ; font-size: 18px"
      );
      console.log(doc.data(), doc.id);
      console.log("Yas");
      console.log(doc.data());
      console.log(doc.id);
      this.product = doc.data();
    });
  },
};
</script>

<style lang="scss" scoped></style>
