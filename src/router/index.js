import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import SingleProduct from "../components/Products/SingleProduct.vue";
import UpdateProduct from "../views/UpdateProduct.vue";
import EnglishWord from "../views/EnglishWord.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
  {
    path: "/Products/:id",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/Products/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
  },
  {
    path: "/EnglishWord",
    name: "EnglishWord",
    component: EnglishWord,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
