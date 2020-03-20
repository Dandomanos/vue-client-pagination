<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <VueClientPagination :key="'news-1'" :items="items" :page-size="pageSize">
        <Post slot-scope="page" :post="page.item" />
      </VueClientPagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueClientPagination from './components/VueClientPagination.vue'
import Post from './components/Post.vue'

@Component({
  components: {
    VueClientPagination,
    Post,
  },
})
export default class App extends Vue {
  pageSize = 5
  itemsSize = 100
  sampleItem: object = {
    image: {
      url: 'https://avatars0.githubusercontent.com/u/14803945?s=460&v=4',
      alt: 'Dandomanos',
    },
  }
  get items(): Array<Record<string, any>> {
    return Array.from(Array(this.itemsSize).keys()).map((item, index) => this.getSampleItem(index))
  }
  getSampleItem(index: number): Record<string, any> {
    return {
      image: {
        url: 'https://avatars0.githubusercontent.com/u/14803945?s=460&v=4',
        alt: 'Dandomanos',
      },
      index: index + 1,
      title: 'Vue Client Pagination by',
      author: {
        name: 'Dandomanos',
        url: 'https://github.com/Dandomanos',
      },
      repo: {
        url: 'https://github.com/Dandomanos/vue-client-pagination',
      },
      description: 'Easy documents pagination for Vue.',
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 50rem;
  max-width: 100%;
  margin: 0 auto;
}
</style>
