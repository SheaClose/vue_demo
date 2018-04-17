<template>
  <div>
      <img :src="url" :alt="title">
      <div>{{title}}</div>
      <hr>
    </div>
</template>

<script>
export default {
  props: ["url", "title"]
};
</script>