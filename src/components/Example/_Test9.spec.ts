import { mount } from '@vue/test-utils'
import Test9 from './Test9.vue'
// import Test9 from '@/src/components/Test9.vue'

function factory() {
  return mount(Test9)
}

describe('Test9', () => {
  it('render count when even', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })

  it('render count when odd', async () => {
    const wrapper = factory()
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})