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
      <div
        class="ninja-card"
        v-for="(ninja, id) in test"
        :key="id"
        @click="openInfoModal(ninja)"
      >
        <img :src="ninja.imagePortraitUrl + '-medium'" alt="" />
        <div class="ninja-card-description">
          <h4>{{ ninja.name }}</h4>
          <p>{{ ninja.office }}</p>
        </div>
        <!-- <div class="socials">
          <a href="">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fab fa-github-square"></i>
          </a>
        </div> -->
      </div>
    </div>
    <transition name="modal-fade">
      <info-modal
        v-if="showInfoModal"
        :ninja="selectedNinja"
        :close="closeInfoModal"
      ></info-modal>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import InfoModal from "../components/InfoModal";
export default {
  name: "Ninjas",

  components: {
    InfoModal,
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  gap: 40px;
  justify-items: center;
  .ninja-card {
    background: $white;
    border-radius: 6px;
    text-align: center;
    padding: rem-calc(10) 0;
    width: 100%;
    max-width: 230px;
    position: relative;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
    p,
    h4,
    i {
      margin: 0;
    }
    .ninja-card-description {
      width: 100%;
      position: absolute;
      bottom: 0;
      top: 70%;
      padding: 0 rem-calc(10);
      p {
        font-size: rem-calc(14);
        letter-spacing: rem-calc(2);
        color: $green;
        font-weight: 500;
      }
    }
  }
}
</style>
