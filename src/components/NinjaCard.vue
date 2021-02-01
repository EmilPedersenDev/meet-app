<template>
  <div class="ninja-card">
    <img :src="ninja.imagePortraitUrl" alt="profile image Ninja" />
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
  height: 100%;
  background: $white;
  border-radius: rem-calc(6);
  text-align: center;
  padding: rem-calc(10) 0;
  position: relative;
  box-shadow: $box-shadow-card;
  transition: $fade-animation;
  img {
    transition: $fade-animation;
  }
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

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: $box-shadow-hover;
  }
}
</style>