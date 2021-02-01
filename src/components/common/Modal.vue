<template>
  <div class="modal-custom" @click.prevent="onExitClose">
    <div class="modal-card" @click.stop>
      <div class="modal-content-custom">
        <i class="fas fa-times" @click="onExitClose"></i>
        <slot name="modal-header"></slot>
        <slot name="modal-body"></slot>
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "n-modal",
  props: {
    onClose: {
      type: Function,
    },
  },
  methods: {
    onExitClose() {
      if (this.isLoading) return;
      if (this.onClose) {
        this.onClose();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-custom {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(246, 246, 246, 0.9);
  color: $dark-blue;
  .modal-card {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $background-main;
    box-shadow: $box-shadow-card;
    border-radius: rem-calc(6);
    max-width: rem-calc(768);
    padding: rem-calc(24);
    max-height: calc(100% - 20px);
    overflow-y: auto;

    .modal-content-custom {
      position: relative;
      width: 100%;
      .fa-times {
        display: block;
        text-align: right;
        opacity: 0.7;
        font-size: rem-calc(24);
        &:hover {
          cursor: pointer;
        }
      }
      .modal-custom-header,
      .modal-custom-body,
      .modal-custom-footer {
        margin-bottom: rem-calc(40);
      }
      .modal-custom-footer {
        display: flex;
        justify-content: center;
        margin-bottom: rem-calc(20);
      }
    }
  }
}
</style>