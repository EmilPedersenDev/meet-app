<template>
  <div class="ninja-grid">
    <div
      class="ninja-card"
      v-for="(ninja, id) in ninjas"
      :key="id"
      @click="onOpenInfoModal(ninja)"
    >
      <img :src="ninja.imagePortraitUrl + '-medium'" alt="" />
      <div class="ninja-card-description">
        <h4>{{ ninja.name }}</h4>
        <p>{{ ninja.office }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ninja-grid",
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  gap: 40px;
  justify-items: center;
  .ninja-card {
    background: $white;
    border-radius: rem-calc(6);
    text-align: center;
    padding: rem-calc(10) 0;
    width: 100%;
    max-width: rem-calc(230);
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