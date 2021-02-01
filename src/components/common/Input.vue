<template>
  <div class="input-group">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :id="id"
      @input="onInput"
      autocomplete="off"
      :value="value"
    />
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
export default {
  name: "n-input",
  props: {
    value: {
      default: null,
    },
    placeholder: {
      type: String,
      default: "text...",
    },
    id: {
      type: String,
      default: "",
    },
    input: {
      type: Function,
    },
    type: {
      type: String,
      default: "input",
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    localValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("input", newVal);
      }
    },
  },
  methods: {
    onInput(evt) {
      this.localValue = evt.target.value;
      if (this.input) this.input();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
.input-group {
  position: relative;
  width: 100%;
  @media (min-width: 576px) {
    max-width: rem-calc(450);
  }
  input {
    position: relative;
    width: inherit;
    background: transparent;
    text-decoration: none;
    border: rem-calc(1) solid $dark-blue;
    border-radius: rem-calc(6);
    font-size: rem-calc(14);
    font-weight: normal;
    padding: rem-calc(10) rem-calc(10) rem-calc(10) rem-calc(40);
    height: rem-calc(45);
    color: $dark-blue;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    &::placeholder {
      color: $dark-blue;
      font-weight: normal;
    }
    &:focus {
      font-weight: normal;
      border-color: $green;
      outline: none;
    }
  }
  .fas {
    position: absolute;
    top: 50%;
    left: rem-calc(15);
    transform: translateY(-50%);
  }
}
</style>