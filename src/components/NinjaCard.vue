<template>
  <div class="ninja-card">
    <img :src="ninja.imagePortraitUrl + '-medium'" alt="" />
    <div class="ninja-card-description">
      <h4>{{ ninja.name }}</h4>
      <p>{{ ninja.office }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ninja-card",
  props: {
    ninja: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.ninja-card {
  width: 100%;
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
</style>