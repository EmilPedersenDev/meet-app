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
.d-button {
  position: relative;
  border-radius: rem-calc(6);
  border: none;
  padding: rem-calc(5) rem-calc(10);
  outline: none;
  transition: all 0.15s ease;

  &.transition {
    &:hover {
      transform: translateY(-2px);
    }
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &.primary {
    background: #80c565;
    transition: all 0.15s ease;
    color: $white;
    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }
  }
  &.round {
    background: transparent;
    border: rem-calc(1) solid #e14eca;
    border-radius: 50%;
    color: $white;
    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }
  }
}
</style>