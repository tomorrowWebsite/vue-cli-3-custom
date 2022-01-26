<template>
  <div class="EnglishWord">
    <h2 class="my-5 py-5 text-center">English Word</h2>
    <div class="container">
      <form class="add" id="formAddProudect">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="ar" class="form-label">Arabic Word:</label>
              <input
                type="text"
                class="form-control"
                id="ar"
                name="ar"
                aria-describedby="emailHelp"
                placeholder="Arabic Word"
                v-model="addWord.ar"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="en" class="form-label">English Word :</label>
              <input
                type="text"
                class="form-control"
                id="en"
                placeholder="English Word"
                name="en"
                aria-describedby="emailHelp"
                v-model="addWord.en"
              />
            </div>
          </div>
          <div class="col">
            <label for="en" class="form-label d-block">Add Word :</label>

            <button class="btn btn-primary" v-on:click.prevent="formAddWord">
              Add New Word
            </button>
          </div>
        </div>
      </form>
      <!-- Input Search -->
      <div class="my-5">
        <div class="mb-3">
          <label for="search" class="form-label">Search</label>
          <input
            type="text"
            v-model="search"
            class="form-control"
            placeholder="Search"
          />
        </div>
      </div>
      <!-- Words -->
      <div class="row">
        <div
          class="col-md-4 my-3 py-1"
          v-for="word in filterProducts"
          :key="word.id"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title w-50 d-inline-block">{{ word.en }}</h5>
              <h5 class="card-title dir-rtl w-50 d-inline-block">
                {{ word.ar }}
              </h5>
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
import { serverTimestamp } from "firebase/firestore";
import { query } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { orderBy } from "firebase/firestore";

export default {
  name: "EnglishWord",
  data() {
    return {
      // Items
      words: [],
      addWord: {
        ar: "",
        en: "",
      },
      submitted: false,
      // For Search Input
      search: "",
      addItem: {
        inputValue: "",
      },
    };
  },
  methods: {
    // Add Item To Firebase
    formAddWord: function () {
      const db = getFirestore();
      const colRef = collection(db, "EnWord");
      addDoc(colRef, {
        ar: this.addWord.ar,
        en: this.addWord.en,
        createdAt: serverTimestamp(),
      }).then(() => {
        (this.addWord.ar = ""), (this.addWord.en = "");
      });
    },
  },
  created() {
    const db = getFirestore();
    const colRef = collection(db, "EnWord");
    const q = query(colRef, orderBy("createdAt", "desc"));
    // Get Collection Data
    onSnapshot(q, (snapshot) => {
      // console.log(snapshot);
      let words = [];
      snapshot.docs.forEach((doc) => {
        words.push({ ...doc.data(), id: doc.id });
      });
      this.words = words;
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
      console.log(words);
    });
  },
  computed: {
    filterProducts: function () {
      return this.words.filter((word) => {
        return word.ar.match(this.search);
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
