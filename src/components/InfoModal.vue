<template>
  <n-modal :onClose="closeModal">
    <div slot="modal-header" class="modal-custom-header">
      <img :src="ninja.imagePortraitUrl + '-medium'" alt="" />
      <h1>{{ ninja.name }}</h1>
    </div>
    <div slot="modal-body" class="modal-custom-body">
      <p v-html="ninja.mainText"></p>
    </div>
    <div slot="modal-footer" class="modal-custom-footer">
      <n-button @click="closeModal"> Ok! </n-button>
    </div>
  </n-modal>
</template>

<script>
export default {
  name: "info-modal",
  props: {
    close: {
      type: Function,
    },
    ninja: {
      type: Object,
    },
  },

  methods: {
    closeModal() {
      if (!this.close) return;
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-custom-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: $dark-blue;
}
.modal-custom-body {
  text-align: left;
}
</style>