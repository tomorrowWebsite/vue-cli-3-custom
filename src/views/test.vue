<template>
  <div class="">
    <!-- Html -->
    <form class="formAdd" id="formAdd">
      <input type="text" class="form-control" v-model="addItem.inputValue" />
      <button class="btn btn-primary" v-on:click.prevent="btnAddItem">
        Add
      </button>
    </form>
  </div>
</template>

<script>
// Import
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
export default {
  name: "",
  data() {
    return {
      // Data
      addItem: {
        inputValue: "",
      },
    };
  },
  // Methods Add Item
  methods: {
    // Add Item To Firebase
    btnAddItem: function () {
      const db = getFirestore();
      const colRef = collection(db, "collectionName");
      addDoc(colRef, {
        inputValue: this.addItem.inputValue,
        createdAt: serverTimestamp(),
      }).then(() => {
        this.addItem.inputValue = "";
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
