<template>
  <div class="container">
    <div class="ninjas-header">
      <h1>Meet our Ninjas</h1>
      <div class="search-filter-wrapper">
        <n-input></n-input>
        <n-select></n-select>
      </div>
    </div>
    <div class="ninjas-body">
      <div class="ninja-card" v-for="(ninja, id) in ninjas" :key="id"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Ninjas",

  data() {
    return {
      ninjas: [],
    };
  },
  mounted() {
    axios.get("https://api.tretton37.com/ninjas").then((result) => {
      this.ninjas = result.data;
    });
  },
};
</script>
<style lang="scss">
.ninjas-header {
  padding: rem-calc(60) 0;
  h1 {
    margin: 0 0 rem-calc(40) 0;
  }
  .search-filter-wrapper {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 576px) {
      flex-wrap: nowrap;
    }
  }
}
.ninjas-body {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
</style>
