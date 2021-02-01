<template>
  <n-modal :onClose="closeModal">
    <div slot="modal-header" class="modal-custom-header">
      <div class="img-wrapper">
        <img :src="ninja.imagePortraitUrl + '-medium'" alt="" />
      </div>
      <div class="name-and-social">
        <h1>{{ ninja.name }}</h1>
        <div class="social-links">
          <a
            v-if="ninja.github"
            :href="'https://github.com/' + ninja.github"
            target="_blank"
          >
            <i class="fab fa-github-square no-margin"></i>
          </a>
          <a
            v-if="ninja.twitter"
            :href="'https://twitter.com/' + ninja.twitter"
            target="_blank"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
          <a
            v-if="ninja.linkedIn"
            :href="'https://www.linkedin.com' + ninja.linkedIn"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
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
  align-items: center;
  color: $dark-blue;
  @media (max-width: 700px) {
    display: block;
    text-align: center;
  }
  .img-wrapper {
    flex-basis: 50%;
    text-align: center;
  }
  .name-and-social {
    display: inline-block;
    .social-links {
      text-align: center;
      i {
        font-size: rem-calc(24);
        margin-left: rem-calc(6);
        color: $dark-blue;
        &.no-margin {
          margin: 0;
        }
      }
    }
  }
}
.modal-custom-body {
  text-align: left;
  padding: 0 rem-calc(20);
}
</style>