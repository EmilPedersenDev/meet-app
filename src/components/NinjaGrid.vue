<template>
  <div class="ninja-grid">
    <div
      class="ninja-card-wrapper"
      v-for="(ninja, id) in ninjas"
      :key="id"
      @click="onOpenInfoModal(ninja)"
    >
      <ninja-card :ninja="ninja" />
    </div>
  </div>
</template>

<script>
import NinjaCard from "./NinjaCard";
export default {
  name: "ninja-grid",
  components: {
    NinjaCard,
  },
  props: {
    ninjas: {
      type: Array,
    },
    onClick: {
      type: Function,
    },
  },
  methods: {
    onOpenInfoModal(ninja) {
      if (!this.onClick) return;
      this.onClick(ninja);
    },
  },
};
</script>

<style lang="scss" scoped>
.ninja-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .ninja-card-wrapper {
    width: rem-calc(230);
    height: rem-calc(300);
    margin: rem-calc(20);
  }
}
</style>