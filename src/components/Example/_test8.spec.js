import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'

const App = {
  setup() {
    const count = ref(0)
    /* Tương đương
      data() {
        return {
          count: 0
        }
      }
    */
    const increment = () => {
      count.value += 1
    }

    return {
      count,
      increment
    }
  },
  template: `
    <button @click="increment"/>
    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
  `
}

function factory({ data } = { data: {} }) {
  return mount(App, {
    data() {
      return data
    }
  })
}

describe('App', () => {
  it('render count when even', async () => {
    // count: 0
    const wrapper = factory()
    // count: 1
    await wrapper.find('button').trigger('click')
    // count: 2
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Count: 2. Count is even.')
  })

  it('render count when odd', async () => {
    // count: 0
    const wrapper = factory()
    // count: 1
    await wrapper.find('button').trigger('click')

    // Cách 2
    // wrapper.find('button').trigger('click')
    // await nextTick() // wait the update

    expect(wrapper.html()).toContain('Count: 1. Count is odd.')
  })
})