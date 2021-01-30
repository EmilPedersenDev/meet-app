<template>
  <select
    class="n-select"
    :value="value"
    :tabindex="tabindex"
    @click.stop.prevent
    @input="onInput"
    @change="onChange"
  >
    <option v-for="item in items" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "n-select",

  data: function () {
    return {
      localValue: this.value,
    };
  },

  props: {
    value: {
      default: null,
    },
    items: {
      type: Array,
    },
  },

  watch: {
    value: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.localValue = newVal;
      }
    },
    localValue: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("input", newVal);
      }
    },
  },

  methods: {
    onInput: function (evt) {
      this.localValue = evt.target.value;
    },
    onChange: function (evt) {
      this.localValue = evt.target.value;
      this.$emit("change", this.localValue);
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
  margin: 20px 0 0 0;
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
