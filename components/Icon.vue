<template>
  <div class="icon-svg" :style="styleObject">
    <span class="icon-svg-content" v-html="src"> </span>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data() {
    return {
      src: '',
    }
  },
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    colorIcon: {
      type: String,
      default: '',
    },
    colorBackground: {
      type: String,
      default: '',
    },
  },
  computed: {
    styleObject() {
      return {
        '--color-icon': this.colorIcon,
        '--color-background': this.colorBackground,
      }
    },
  },
  methods: {
    async getSVG() {
      this.src = await this.$axios.$get(
        this.name ? this.name : '/assets/icons/undefined.svg'
      )
    },
  },
  mounted() {
    this.getSVG()
  },
}
</script>

<style lang="scss">
.icon-svg {
  transition: 0.3s all;
  &-content {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 85px;
    height: 85px;
    margin: 0 auto 1rem;
    width: 85px;
    background: white;
    border-radius: 20px;
    background: var(--color-background);
  }
}
svg {
  min-width: 93px;
  height: 48px;
  path {
    fill: var(--color-icon);
  }
}
</style>
