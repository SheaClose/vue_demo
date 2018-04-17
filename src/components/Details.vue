<template>
  <div>
    <h1>Details Vue: {{ $route.params.id }}</h1>
    <div>
      <img :src="product.url" :alt="product.title">
      <div>{{product.title}}</div>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      this.products = res.data.slice(0, 10);
    });
  },
  computed: {
    product() {
      return this.products.find(c => c.id == this.$route.params.id) || {};
    }
  }
};
</script>
