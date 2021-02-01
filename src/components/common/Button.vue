<template>
  <button class="n-button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "n-button",
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.n-button {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border: none;
  border-radius: rem-calc(6);
  padding: rem-calc(12) rem-calc(10);
  outline: none;
  font-weight: 600;
  color: $dark-blue;
  transition: $fade-animation;
  min-width: 100px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: rem-calc(6);
    background-color: $green;
    z-index: -2;
  }
  &:before {
    content: "";
    bottom: 0;
    position: absolute;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: $dark-blue;
    border-radius: rem-calc(6);
    z-index: -1;
    transition: $fade-animation;
  }

  &:hover {
    cursor: pointer;
    color: $white;
    &:before {
      width: 100%;
    }
  }
}
</style>