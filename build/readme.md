# vue-client-pagination

Easy documents pagination for Vue.

## Install

```sh
$ yarn add @dandomanos/vue-client-pagination
```

## Usage

```javascript
// main.js
import VueClientPagination from '@dandomanos/vue-client-pagination'
Vue.use(VueClientPagination)
```

```html
<!-- Vue template -->
<VueClientPagination key="vue-client-pagination" :items="items" :page-size="pageSize">
  <div slot-scope="item">
    {{ item }}
  </div>
</VueClientPagination>
```

## Props

|    Prop    |   Type   | Default |       Description       |
| :--------: | :------: | :-----: | :---------------------: |
|   items    | `Array`  |   []    |  Items to be rendered   |
|  pageSize  | `Number` |    5    | Number of items by page |
| startIndex | `Number` |    0    | Page loaded on created  |

#### Key:

Add any key to scroll to first item on page loaded
