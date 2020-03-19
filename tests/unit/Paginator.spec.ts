import { mount } from '@vue/test-utils'
import Paginator from '@/components/Paginator.vue'

const createPages = (length: number): Array<any> => Array.from(Array(length).keys())
const clickPage = (wrapper: any, display: string, index: number) =>
  wrapper
    .findAll(`.${display}-only .dandomanos-vue-client-pagination__page`)
    .at(index)
    .trigger('click')

const mountView = (currentPage: number | undefined, pages: Array<any> | undefined) =>
  mount(Paginator, {
    propsData: {
      currentPage,
      pages,
    },
  })

describe('Paginator', () => {
  it.only('should apply default values', () => {
    const defaultWrapper = mountView(undefined, undefined)
    expect((defaultWrapper.vm as any).currentPage).toBe(0)
    expect((defaultWrapper.vm as any).pages).toEqual([])
  })
  it('should allow go prev', () => {
    let wrapper: any = mountView(1, createPages(5))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--start').attributes('disabled')
    ).toBe(undefined)
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--prev').attributes('disabled')
    ).toBe(undefined)

    wrapper = mountView(3, createPages(15))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--start').attributes('disabled')
    ).toBe(undefined)
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--prev').attributes('disabled')
    ).toBe(undefined)
  })
  it('should dont allow go prev', () => {
    let wrapper: any = mountView(0, createPages(5))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--start').attributes('disabled')
    ).toBe('disabled')
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--prev').attributes('disabled')
    ).toBe('disabled')
    wrapper = mountView(0, createPages(15))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--start').attributes('disabled')
    ).toBe('disabled')
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--prev').attributes('disabled')
    ).toBe('disabled')
  })

  it('should allow go next', () => {
    let wrapper: any = mountView(0, createPages(5))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--end').attributes('disabled')
    ).toBe(undefined)
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--next').attributes('disabled')
    ).toBe(undefined)

    wrapper = mountView(10, createPages(15))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--end').attributes('disabled')
    ).toBe(undefined)
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--next').attributes('disabled')
    ).toBe(undefined)
  })

  it('should dont allow go next', () => {
    let wrapper: any = mountView(4, createPages(5))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--end').attributes('disabled')
    ).toBe('disabled')
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--next').attributes('disabled')
    ).toBe('disabled')

    wrapper = mountView(14, createPages(15))
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--end').attributes('disabled')
    ).toBe('disabled')
    expect(
      wrapper.find('.dandomanos-vue-client-pagination__button--next').attributes('disabled')
    ).toBe('disabled')
  })

  it('should show desktop initial dots', () => {
    let desktop: any = mountView(2, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--initial').text()).toBe('...')

    desktop = mountView(14, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--initial').text()).toBe('...')
  })

  it('should dont show desktop initial dots', () => {
    let desktop: any = mountView(0, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--initial').exists()).toBe(false)

    desktop = mountView(1, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--initial').exists()).toBe(false)

    desktop = mountView(2, createPages(5))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--initial').exists()).toBe(false)
  })

  it('should show desktop end dots', () => {
    let desktop: any = mountView(2, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--end').text()).toBe('...')

    desktop = mountView(10, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--end').text()).toBe('...')

    desktop = mountView(1, createPages(6))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--end').text()).toBe('...')
  })

  it('should dont show desktop end dots', () => {
    let desktop: any = mountView(11, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--end').exists()).toBe(false)

    desktop = mountView(14, createPages(15))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--end').exists()).toBe(false)

    desktop = mountView(0, createPages(5))
    expect(desktop.find('.dandomanos-vue-client-pagination__dots--end').exists()).toBe(false)
  })
  it('should paginate desktop', () => {
    let desktop: any = mountView(0, createPages(15))
    expect((desktop.vm as any).desktopPages).toEqual([0, 1, 2, 3])

    desktop = mountView(3, createPages(10))
    expect((desktop.vm as any).desktopPages).toEqual([3, 4, 5])

    desktop = mountView(9, createPages(10))
    expect((desktop.vm as any).desktopPages).toEqual([6, 7, 8, 9])

    desktop = mountView(8, createPages(10))
    expect((desktop.vm as any).desktopPages).toEqual([6, 7, 8, 9])

    desktop = mountView(7, createPages(10))
    expect((desktop.vm as any).desktopPages).toEqual([6, 7, 8, 9])

    desktop = mountView(6, createPages(10))
    expect((desktop.vm as any).desktopPages).toEqual([6, 7, 8])
  })

  it('should pagiante mobile', () => {
    let mobile: any = mountView(0, createPages(15))
    expect((mobile.vm as any).mobilePages).toEqual([0, 1, 2])

    mobile = mountView(3, createPages(10))
    expect((mobile.vm as any).mobilePages).toEqual([2, 3, 4])

    mobile = mountView(9, createPages(10))
    expect((mobile.vm as any).mobilePages).toEqual([7, 8, 9])

    mobile = mountView(8, createPages(10))
    expect((mobile.vm as any).mobilePages).toEqual([7, 8, 9])

    mobile = mountView(7, createPages(10))
    expect((mobile.vm as any).mobilePages).toEqual([6, 7, 8])

    mobile = mountView(6, createPages(10))
    expect((mobile.vm as any).mobilePages).toEqual([5, 6, 7])
  })

  it('should emit goPage events from arrows', async () => {
    let wrapper: any = mountView(0, createPages(10))
    // click next
    wrapper.find('.dandomanos-vue-client-pagination__button--next').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goPage).toBeTruthy()
    expect(wrapper.emitted().goPage[0]).toEqual([1])

    // click last
    wrapper.find('.dandomanos-vue-client-pagination__button--end').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goPage).toBeTruthy()
    expect(wrapper.emitted().goPage[1]).toEqual([9])

    // click prev
    wrapper = mountView(9, createPages(10))
    wrapper.find('.dandomanos-vue-client-pagination__button--prev').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goPage).toBeTruthy()
    expect(wrapper.emitted().goPage[0]).toEqual([8])

    // click start
    wrapper.find('.dandomanos-vue-client-pagination__button--start').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().goPage).toBeTruthy()
    expect(wrapper.emitted().goPage[1]).toEqual([0])
  })

  it('should emit goPage events from PageButtons', async () => {
    let desktop: any = mountView(0, createPages(10))
    clickPage(desktop, 'desktop', 2)
    await desktop.vm.$nextTick()
    expect(desktop.emitted().goPage).toBeTruthy()
    expect(desktop.emitted().goPage[0]).toEqual([2])

    desktop = mountView(5, createPages(10))
    clickPage(desktop, 'desktop', 2)
    await desktop.vm.$nextTick()
    expect(desktop.emitted().goPage).toBeTruthy()
    expect(desktop.emitted().goPage[0]).toEqual([6])

    let mobile: any = mountView(0, createPages(10))
    clickPage(mobile, 'mobile', 2)
    await mobile.vm.$nextTick()
    expect(mobile.emitted().goPage).toBeTruthy()
    expect(mobile.emitted().goPage[0]).toEqual([2])

    mobile = mountView(1, createPages(10))
    clickPage(mobile, 'mobile', 2)
    await mobile.vm.$nextTick()
    expect(mobile.emitted().goPage).toBeTruthy()
    expect(mobile.emitted().goPage[0]).toEqual([2])

    mobile = mountView(2, createPages(10))
    clickPage(mobile, 'mobile', 2)
    await mobile.vm.$nextTick()
    expect(mobile.emitted().goPage).toBeTruthy()
    expect(mobile.emitted().goPage[0]).toEqual([3])
  })
})
