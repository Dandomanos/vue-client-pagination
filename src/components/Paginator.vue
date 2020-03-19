<template>
  <div class="dandomanos-vue-client-pagination">
    <!--- Mobile FIRST PAGE => '<<' -->
    <button
      class="dandomanos-vue-client-pagination__button dandomanos-vue-client-pagination__button--start mobile-only"
      :disabled="!canPrev"
      @click="goPage(0)"
    >
      <SvgArrow />
      <SvgArrow />
    </button>
    <!--- PREV => '<' -->
    <button
      class="dandomanos-vue-client-pagination__button dandomanos-vue-client-pagination__button--prev"
      :disabled="!canPrev"
      @click="goPage(currentPage - 1)"
    >
      <SvgArrow />
    </button>
    <!-- Desktop PAGES -->
    <div class="dandomanos-vue-client-pagination__pages desktop-only">
      <PageButton
        v-if="currentPage > 0 && desktopPages[0] > 0"
        :disabled="currentPage === 0"
        :value="0"
      />
      <div
        v-if="desktopPages[0] > 1"
        class="dandomanos-vue-client-pagination__dots dandomanos-vue-client-pagination__dots--initial"
      >
        ...
      </div>
      <PageButton
        v-for="page in desktopPages"
        :key="`page-desktop-button-${page}`"
        :disabled="page === currentPage"
        :value="page"
      />
      <div
        v-if="desktopPages[desktopPages.length - 1] < lastPage - 1"
        class="dandomanos-vue-client-pagination__dots dandomanos-vue-client-pagination__dots--end"
      >
        ...
      </div>
      <PageButton
        v-if="desktopPages[desktopPages.length - 1] < lastPage"
        :disabled="currentPage === lastPage"
        :value="lastPage"
      />
    </div>
    <!-- Mobile PAGES -->
    <div class="dandomanos-vue-client-pagination__pages mobile-only">
      <PageButton
        v-for="page in mobilePages"
        :key="`page-mobile-button-${page}`"
        :disabled="page === currentPage"
        :value="page"
      />
    </div>
    <!--- NEXT => '>' -->
    <button
      class="dandomanos-vue-client-pagination__button dandomanos-vue-client-pagination__button--next"
      :disabled="!canNext"
      @click="goPage(currentPage + 1)"
    >
      <SvgArrow flip />
    </button>
    <!--- Mobile LAST PAGE => '>>' -->
    <button
      class="dandomanos-vue-client-pagination__button dandomanos-vue-client-pagination__button--end mobile-only"
      :disabled="!canNext"
      @click="goPage(lastPage)"
    >
      <SvgArrow flip />
      <SvgArrow flip />
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageButton from '@/components/PageButton.vue'
import SvgArrow from '@/components/SvgArrow.vue'
@Component({
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    pages: {
      type: Array,
      default: () => [],
    },
  },
  components: { PageButton, SvgArrow },
})
class Paginator extends Vue {
  goPage(page: number): void {
    this.$emit('goPage', page)
  }
  getPages(init: number, length: number): Array<number> {
    return Array.from(Array(length).keys())
      .map(index => init + index)
      .filter(page => page >= 0 && page <= this.lastPage)
  }
  get canPrev(): boolean {
    const self: any = this
    return self.currentPage > 0
  }
  get canNext(): boolean {
    const self: any = this
    return self.currentPage < self.pages.length - 1
  }
  get lastPage(): number {
    const self: any = this
    return self.pages.length - 1
  }
  get mobilePages(): Array<number> {
    const self: any = this
    let startIndex: number = self.currentPage === 0 ? 0 : self.currentPage - 1
    if (startIndex >= self.lastPage - 2) startIndex = self.lastPage - 2
    return self.getPages(startIndex, 3)
  }
  get desktopPages(): Array<number> {
    const self: any = this
    const maxVisible: number =
      self.currentPage === 0 || self.currentPage + 2 >= self.lastPage ? 4 : 3
    const startIndex: number =
      self.currentPage + maxVisible < self.pages.length
        ? self.currentPage
        : self.pages.length - maxVisible
    return self.getPages(startIndex, maxVisible)
  }
}
export default Paginator
</script>
<style lang="scss">
.dandomanos-vue-client-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}
.dandomanos-vue-client-pagination__button {
  width: $arrow-button-size;
  height: $arrow-button-size;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  @media #{$min-tablet} {
    border: 1px solid $border-color;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::after,
  &::before {
    color: $brand;
    font-size: 1.4rem;
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
.dandomanos-vue-client-pagination__pages {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  @media #{$min-md-mobile} {
    justify-content: center;
    margin: 0 1.5rem;
  }
}
.dandomanos-vue-client-pagination__dots {
  font-size: 1.5rem;
  color: $font-color;
  font-weight: bold;
  margin: 0 0.5rem;
  margin-top: -0.5rem;
  letter-spacing: 2px;
}
</style>
