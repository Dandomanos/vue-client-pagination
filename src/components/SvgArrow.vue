<template>
  <svg
    class="dandomanos-vue-client-pagination-svg-arrow"
    :class="{ 'is-flipped': flip }"
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="21"
    viewBox="0 0 12 21"
  >
    <path
      fill="#496d91"
      d="M0 10.5c0-.034 0-.067.003-.1.013-.247.086-.482.226-.684.074-.125.159-.246.268-.355L9.357.5C9.97-.113 10.91-.17 11.454.374c.544.544.487 1.483-.128 2.098L3.299 10.5l8.028 8.028c.615.615.672 1.554.128 2.098-.545.545-1.484.488-2.099-.127l-8.86-8.86a1.738 1.738 0 01-.267-.355 1.308 1.308 0 01-.226-.683C0 10.567 0 10.534 0 10.5z"
    />
  </svg>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  props: {
    flip: {
      type: Boolean,
      default: false,
    },
  },
})
class SvgArrow extends Vue {}
export default SvgArrow
</script>
<style lang="scss">
.dandomanos-vue-client-pagination-svg-arrow {
  &.is-flipped {
    transform: scaleX(-1);
  }
}
</style>
