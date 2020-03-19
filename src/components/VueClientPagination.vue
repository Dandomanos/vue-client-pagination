<template>
  <div :id="$vnode.key">
    <slot v-for="item in paginatedItems[currentPage]" :item="item" />
    <Paginator
      ref="paginator"
      :current-page="currentPage"
      :pages="paginatedItems"
      @goPage="goPage"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NewItem from '@/components/NewItem.vue'
import Paginator from '@/components/Paginator.vue'

@Component({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    startIndex: {
      type: Number,
      default: 0,
    },
  },
  components: { NewItem, Paginator },
})
class VueClientPagination extends Vue {
  currentPage = 0
  created() {
    const self: any = this
    self.currentPage = self.startIndex
  }
  get paginatedItems(): Array<Array<Record<string, any>>> {
    const self: any = this
    return Array.from({ length: Math.ceil(self.items.length / self.pageSize) }, (v, i) =>
      self.items.slice(i * self.pageSize, i * self.pageSize + self.pageSize)
    )
  }
  goPage(pageIndex: number): void {
    const self: any = this
    self.currentPage = pageIndex
    const elem = document.getElementById(self.$vnode.key)
    elem &&
      elem.scrollIntoView({
        behavior: 'smooth',
      })
  }
}
export default VueClientPagination
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
.mobile-only {
  @media #{$min-tablet} {
    display: none;
  }
}
.desktop-only {
  display: none;
  @media #{$min-tablet} {
    display: inherit;
  }
}
button {
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}
</style>
