<template>
  <div class="container" v-if="isLoaded">
    <div class="ninjas-header">
      <h1>Meet our Ninjas</h1>
      <div class="search-filter-wrapper">
        <n-input
          id="searchInput"
          type="text"
          placeholder="Search ninja..."
          v-model="searchQuery"
          @input="searchNinja"
        ></n-input>
        <n-select @change="sortNinjas"></n-select>
      </div>
    </div>
    <div class="ninjas-body">
      <ninja-grid :onClick="openInfoModal" :ninjas="ninjasToRender" />
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
      allNinjas: [],
      ninjasToRender: [],
      filteredNinjas: [],
      selectedNinja: {},
      showInfoModal: false,
      limit: 20,
      offset: 0,
      isLoaded: false,
      searchQuery: "",
      scrollDistance: 350,
    };
  },
  created() {
    this.isLoaded = false;
    axios
      .get("https://api.tretton37.com/ninjas")
      .then((result) => {
        this.allNinjas = result.data.filter((ninja) => ninja.office);
        this.isLoaded = true;
        this.filteredNinjas = [...this.allNinjas];
        this.ninjasToRender = [
          ...this.allNinjas.slice(this.offset, this.limit),
        ];
        this.offset = 20;
        this.limit = 40;
        document.addEventListener("scroll", this.handleScroll);
      })
      .catch((e) => {
        console.error(e);
      });
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    openInfoModal(ninja) {
      this.selectedNinja = ninja;
      this.showInfoModal = true;
    },
    closeInfoModal() {
      this.showInfoModal = false;
    },
    searchNinja() {
      this.filteredNinjas = this.allNinjas.filter((ninja) => {
        for (let key in ninja) {
          if (!ninja[key]) continue;
          if (
            ninja[key]
              .toString()
              .toLowerCase()
              .indexOf(this.searchQuery.toLowerCase()) > -1
          ) {
            return ninja;
          }
        }
      });
      this.ninjasToRender = [];
      this.offset = 0;
      this.limit = 20;
      this.renderNinjas();
    },
    sortNinjas(sortValue) {
      this.ninjasToRender.sort((a, b) =>
        a[sortValue] > b[sortValue] ? 1 : b[sortValue] > a[sortValue] ? -1 : 0
      );
    },
    handleScroll() {
      if (
        window.pageYOffset + window.innerHeight >
        document.body.scrollHeight - this.scrollDistance
      ) {
        this.renderNinjas();
      }
    },
    renderNinjas() {
      if (this.offset > this.ninjasToRender.length) return;
      this.ninjasToRender = [
        ...this.ninjasToRender,
        ...this.filteredNinjas.slice(this.offset, this.limit),
      ];
      this.offset = this.offset + 20;
      this.limit = this.limit + 20;
    },
  },
};
</script>
<style lang="scss">
.ninjas-header {
  text-align: center;
  padding: rem-calc(60) 0;
  h1 {
    margin: 0 0 rem-calc(60) 0;
    font-size: rem-calc(40);
  }
  .search-filter-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: rem-calc(30);
    @media (min-width: 576px) {
      flex-wrap: nowrap;
    }
  }
}
.ninjas-body {
  width: 100%;
}
</style>
