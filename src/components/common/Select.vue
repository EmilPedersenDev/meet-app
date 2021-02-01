<template>
  <select class="n-select" @click.stop.prevent @change="onChange">
    <option value="" selected disabled>Sort by:</option>
    <option value="name">Name</option>
    <option value="office">Office</option>
  </select>
</template>

<script>
export default {
  name: "n-select",

  methods: {
    onChange: function (evt) {
      this.$emit("change", evt.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.n-select {
  border: rem-calc(1) solid $dark-blue;
  border-radius: rem-calc(6);
  font-size: rem-calc(14);
  font-weight: normal;
  padding: rem-calc(10);
  color: $dark-blue;
  width: 100%;
  max-width: rem-calc(100);
  margin: rem-calc(20) 0 0 0;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  background: transparent;

  @media (min-width: 576px) {
    margin: 0 0 0 rem-calc(40);
  }

  &:focus {
    font-weight: normal;
    border-color: $green;
    outline: none;
  }

  &::placeholder {
    color: $dark-blue;
    font-weight: normal;
  }

  option {
    color: $dark-blue;
  }
}
</style>
