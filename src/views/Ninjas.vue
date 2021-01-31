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
      <ninja-grid :onClick="openInfoModal" :ninjas="test" />
    </div>
    <transition name="modal-fade">
      <info-modal
        v-if="showInfoModal"
        :ninja="selectedNinja"
        :close="closeInfoModal"
      />
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import InfoModal from "../components/InfoModal";
import NinjaGrid from "../components/NinjaGrid";
export default {
  name: "Ninjas",

  components: {
    InfoModal,
    NinjaGrid,
  },

  data() {
    return {
      ninjas: [],
      selectedNinja: {},
      showInfoModal: false,
    };
  },
  mounted() {
    axios.get("https://api.tretton37.com/ninjas").then((result) => {
      this.ninjas = result.data;
    });
  },
  computed: {
    test() {
      return this.ninjas.filter((ninja, id) => id < 10);
    },
  },
  methods: {
    openInfoModal(ninja) {
      this.selectedNinja = ninja;
      this.showInfoModal = true;
    },
    closeInfoModal() {
      this.showInfoModal = false;
    },
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
}
</style>
