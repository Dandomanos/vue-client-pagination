<template>
  <div class="dandomanos-vue-client-pagination-post">
    <div class="columns is-mobile">
      <div class="column is-4 is-3-tablet">
        <div class="dandomanos-vue-client-pagination-post__image">
          <figure>
            <img v-if="image.url || image.alt" :src="image.url || ''" :alt="image.alt || ''" />
          </figure>
          <div class="dandomanos-vue-client-pagination-post__order">
            <span>{{ index }}</span>
          </div>
        </div>
      </div>
      <div class="column is-8 is-9-tablet">
        <div class="dandomanos-vue-client-pagination-post__text-wrapper">
          <div class="dandomanos-vue-client-pagination-post__text-content">
            <h3 v-if="title" class="dandomanos-vue-client-pagination-post__title">
              {{ title }}
              <a
                class="dandomanos-vue-client-pagination-post__author"
                :href="author.url"
                target="_blank"
                >{{ author.name }}</a
              >
            </h3>
            <p v-if="description" class="dandomanos-vue-client-pagination-post__description">
              {{ description }}
            </p>
            <a
              class="dandomanos-vue-client-pagination-post__repo"
              :href="repo.url"
              target="_blank"
              >{{ repo.url }}</a
            >
            <div class="dandomanos-vue-client-pagination-post__border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
})
class Post extends Vue {
  get image(): object {
    const self: any = this
    return self.post.image || {}
  }
  get title(): string {
    const self: any = this
    return self.post.title || ''
  }
  get description(): string {
    const self: any = this
    return self.post.description || ''
  }
  get author(): string {
    const self: any = this
    return self.post.author || {}
  }
  get repo(): string {
    const self: any = this
    return self.post.repo || {}
  }
  get index(): number {
    const self: any = this
    return self.post.index || 1
  }
}
export default Post
</script>
<style lang="scss">
@import '~bulma/sass/utilities/_all.sass';
@import '~bulma/sass/grid/columns.sass';
.dandomanos-vue-client-pagination-post {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba($dark-blue, 0.5);
}
.dandomanos-vue-client-pagination-post__image {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  figure {
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    img {
      max-width: 100%;
      display: block;
    }
  }
}
.dandomanos-vue-client-pagination-post__order {
  position: absolute;
  right: -1rem;
  bottom: -1rem;
  border-radius: 50%;
  background-color: #fff;
  color: $dark-blue;
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  font-size: 1.25rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  span {
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    letter-spacing: -2px;
  }
}
.dandomanos-vue-client-pagination-post__text-wrapper {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
}
.dandomanos-vue-client-pagination-post a {
  color: $link-color;
}

.dandomanos-vue-client-pagination-post__author {
  text-decoration: none;
  font-weight: bold;
}
.dandomanos-vue-client-pagination-post__repo {
  font-size: 1rem;
}
</style>
