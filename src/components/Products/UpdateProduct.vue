//
<template>
  //
  <div class="updateProduct">
    //
    <div class="container">
      //
      <h2 class="py-5 my-5 text-center">Update Product</h2>

      //
      <div class="row">
        //
        <div class="col-md-4 my-3">
          //
          <!-- <div class="card">
//             <img v-bind:src="product.image" class="card-img-top" alt="..." />
//             <div class="card-body">
//               <h5 class="card-title">{{ product.title }}</h5>
//               <p class="card-text">
//                 {{ product.disc }}
//               </p>
//               <ul class="my-3">
//                 <li v-for="(cat, index) in product.category" :key="index">
//                   <span>{{ cat }}</span>
//                 </li>
//               </ul>
//             </div>
//           </div> -->
          //
          <p>
            // Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            // culpa, praesentium accusantium iusto quaerat vero autem vitae
            animi // nobis inventore quam aliquam veniam doloremque quas,
            voluptates, // ducimus est qui libero? //
          </p>
          //
        </div>
        //
        <!-- view -->
        //
        <div class="offset-4 col-md-4 my-3">
          //
          <!-- <div class="card">
//             <img v-bind:src="product.image" class="card-img-top" alt="..." />
//             <div class="card-body">
//               <h5 class="card-title">{{ product.title }}</h5>
//               <p class="card-text">
//                 {{ product.disc }}
//               </p>
//               <ul class="my-3">
//                 <li v-for="(cat, index) in product.category" :key="index">
//                   <span>{{ cat }}</span>
//                 </li>
//               </ul>
//             </div>
//           </div> -->
          //
          <p>
            // Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Numquam, // reprehenderit accusantium qui soluta voluptas voluptate
            distinctio // harum nisi esse hic eaque ea, at quibusdam,
            necessitatibus inventore // officia maxime. Provident, dolores. //
          </p>
          //
        </div>
        //
        <!-- view -->
        //
      </div>
      //
    </div>
    //
  </div>
  //
</template>

//
<script>
// import { getFirestore } from "firebase/firestore";
// import { collection } from "firebase/firestore";
// import { doc } from "firebase/firestore";
// import { onSnapshot } from "firebase/firestore";
// // import { getDoc } from "firebase/firestore";
// import { updateDoc } from "firebase/firestore";

// export default {
//   name: "UpdateProduct",
//   data() {
//     return {
//       id: this.$route.params.id,
//       product: {},
//       updateProduct: {
//         image: "",
//         title: "",
//         disc: "",
//         category: [],
//       },
//     };
//   },
//   components: {},
//   methods: {},
//   created() {
//     const db = getFirestore();
//     const coll = collection(db, "products");
//     const docRef = doc(coll, this.id);
//     //
//     // getDoc(docRef).then((doc) => {
//     //   console.log(doc.data(), doc.id);
//     //   this.product = doc.data();
//     // });

//     onSnapshot(docRef, (doc) => {
//       console.log(
//         `%c###########################################################################:`,
//         "color: #55efc4; font-weight: bold; font-size: 18px"
//       );
//       console.log(doc.data(), doc.id);
//       console.log("Yas");
//       console.log(doc.data());
//       console.log(doc.id);
//       this.product = doc.data();
//     });
//     // update
//     // const docRefUp = doc(coll, this.id);

//     updateDoc(docRef, {
//       image: this.updateProduct.image,
//       title: this.updateProduct.title,
//       disc: this.updateProduct.disc,
//       category: this.updateProduct.category,
//     }).then(() => {
//       // formUpdateProudect.reset();
//       console.log("Yas");
//     });
//   },
// };
//
</script>

//
<style lang="scss" scoped></style>
