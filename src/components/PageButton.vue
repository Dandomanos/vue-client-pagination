<template>
  <button class="dandomanos-vue-client-pagination__page" :disabled="disabled" @click="goPage">
    {{ value + 1 }}
  </button>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  props: {
    value: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
class PageButton extends Vue {
  goPage(): void {
    const self: any = this
    this.$parent.$emit('goPage', self.value)
  }
}
export default PageButton
</script>
<style lang="scss">
.dandomanos-vue-client-pagination__page {
  border-radius: $border-radius;
  border: 1px solid #979797;
  width: $mobile-page-button-size;
  height: $mobile-page-button-size;
  font-size: 1.25rem;
  @media #{$min-tablet} {
    width: $desktop-page-button-size;
    height: $desktop-page-button-size;
    font-size: 1.5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  color: $font-color;
  font-weight: bold;
  cursor: pointer;
  &[disabled] {
    border: none;
    background-color: $brand;
    color: white;
    cursor: not-allowed;
  }
}
</style>
