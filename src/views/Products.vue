<template>
  <div class="Products">
    <div class="container">
      <h2 class="h1 my-5 py-5">Products</h2>
      <div class="d-flex flex-row">
        <AddProduct />
        <DeleteProduct />
      </div>
      <Product />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Products/Products.vue";
import AddProduct from "@/components/Products/AddProduct.vue";
import DeleteProduct from "@/components/Products/DeleteProduct.vue";
export default {
  name: "Products",
  data() {
    return {};
  },
  components: {
    Product,
    AddProduct,
    DeleteProduct,
  },
};
</script>

<style lang="scss" scoped></style>
