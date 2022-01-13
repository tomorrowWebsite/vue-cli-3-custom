import Vue from "vue";
// Register a global custom directive called `v-focus`
Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus();
  },
});

// v-bold
Vue.directive("bold", {
  bind: function (el) {
    el.style.fontWeight = "bold";
  },
});

// v-fontSize="60"
Vue.directive("fontSize", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";
  },
});

// v-manyColor
Vue.directive("manyColor", {
  bind: function (el) {
    el.style.color = `#${Math.random().toString().slice(2, 8)}`;
  },
});
