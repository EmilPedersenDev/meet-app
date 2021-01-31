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
      if (this.type === "submit" || this.type === "reset") return;
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.n-button {
  position: relative;
  border-radius: rem-calc(6);
  border: none;
  padding: rem-calc(10) rem-calc(10);
  outline: none;
  transition: all 0.15s ease;
  background: $green;
  min-width: 100px;

  &.transition {
    &:hover {
      transform: translateY(-2px);
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
}
</style>