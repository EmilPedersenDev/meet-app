<template>
  <div class="observer"></div>
</template>

<script>
export default {
  name: "n-observer",
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    });

    this.observer.observe(this.$el);
  },
};
</script>

<style lang="scss" scoped>
.observer {
  height: rem-calc(100);
}
</style>