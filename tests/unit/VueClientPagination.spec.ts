import { shallowMount } from '@vue/test-utils'
import VueClientPagination from '@/components/VueClientPagination.vue'
const createPages = (length: number): Array<any> => Array.from(Array(length).keys())
const mountView = (
  items: Array<any> | undefined,
  pageSize: number | undefined,
  startIndex: number | undefined
) =>
  shallowMount(VueClientPagination, {
    propsData: {
      items,
      pageSize,
      startIndex,
    },
  })

describe('Vue Client Pagination', () => {
  it('should apply default values', () => {
    const defaultWrapper = mountView(undefined, undefined, undefined)
    expect((defaultWrapper.vm as any).items).toEqual([])
    expect((defaultWrapper.vm as any).pageSize).toBe(5)
    expect((defaultWrapper.vm as any).startIndex).toBe(0)
    expect((defaultWrapper.vm as any).currentPage).toBe(0)
  })
  it('should show a Vue Client Pagination component', () => {
    let pagination = mountView(createPages(11), 5, 1)
    let paginatedItems = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10]]
    expect((pagination.vm as any).paginatedItems).toEqual(paginatedItems)
    expect((pagination.vm.$refs.paginator as any).currentPage).toBe(1)
    expect((pagination.vm.$refs.paginator as any).pages).toEqual(paginatedItems)
    expect((pagination.vm as any).items).toEqual(createPages(11))
    expect((pagination.vm as any).pageSize).toBe(5)
    expect((pagination.vm as any).startIndex).toBe(1)
    expect((pagination.vm as any).currentPage).toBe(1)

    pagination = mountView(createPages(20), 3, 4)
    paginatedItems = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
      [12, 13, 14],
      [15, 16, 17],
      [18, 19],
    ]
    expect((pagination.vm as any).paginatedItems).toEqual(paginatedItems)
    expect((pagination.vm.$refs.paginator as any).currentPage).toBe(4)
    expect((pagination.vm.$refs.paginator as any).pages).toEqual(paginatedItems)
    expect((pagination.vm as any).items).toEqual(createPages(20))
    expect((pagination.vm as any).pageSize).toBe(3)
    expect((pagination.vm as any).startIndex).toBe(4)
    expect((pagination.vm as any).currentPage).toBe(4)
  })

  it('should update current page', async () => {
    const pagination = mountView(createPages(100), 5, 1)
    const paginator = pagination.vm.$refs.paginator as any

    paginator.$emit('goPage', 2)
    await pagination.vm.$nextTick()
    expect((pagination.vm.$refs.paginator as any).currentPage).toBe(2)

    paginator.$emit('goPage', 12)
    await pagination.vm.$nextTick()
    expect((pagination.vm.$refs.paginator as any).currentPage).toBe(12)
  })
})
