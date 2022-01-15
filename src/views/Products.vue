<template>
  <div class="Products">
    <div class="container">
      <h2 class="h1 my-5 py-5">Products</h2>
      <div class="d-flex flex-row my-5 justify-content-evenly">
        <AddProduct />
        <DeleteProduct />
        <SearchProduct />
      </div>
      <Product />
    </div>
  </div>
</template>

<script>
import Product from "@/components/Products/Products.vue";
import AddProduct from "@/components/Products/AddProduct.vue";
import DeleteProduct from "@/components/Products/DeleteProduct.vue";
import SearchProduct from "@/components/Products/SearchProduct.vue";

export default {
  name: "Products",
  data() {
    return {};
  },
  components: {
    Product,
    AddProduct,
    DeleteProduct,
    SearchProduct,
  },
};
</script>

<style lang="scss" scoped></style>
