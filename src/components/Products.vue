<template>
  <div>
    <h1>Products Vue</h1>
    <router-link :to="`/details/${prod.id}`" tag="div" :key="prod.id" v-for="prod in products">
      <img :src="prod.thumbnailUrl" :alt="prod.title">
      <div>{{prod.title}}</div>
      <hr>
    </router-link>
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
  }
};
</script>
