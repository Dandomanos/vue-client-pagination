<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <VueClientPagination :key="'news-1'" :items="items" :page-size="pageSize">
        <!-- <div slot-scope="page">
          {{ page }}
        </div> -->
        <NewItem slot-scope="page" :new-item="page.item" />
      </VueClientPagination>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueClientPagination from './components/VueClientPagination.vue'
import NewItem from './components/NewItem.vue'

@Component({
  components: {
    VueClientPagination,
    NewItem,
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
      title: 'Vue Pager by Dandomanos',
      description: 'git-hub....',
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
