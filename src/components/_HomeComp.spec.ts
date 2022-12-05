import { render } from '@testing-library/vue'
import Component from './HomeComp.vue'
// import { flushPromises } from '@vue/test-utils'

describe('Test Home page', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.restoreAllMocks()
    jest.runAllTimers()
  })

  async function setup() {
    const r = render(Component, {
      global: {
        stubs: {
          transition: false,
          'transition-group': false,
        },
      },
    })
    return r
  }

  it('should first test', async () => {
    const { getByText } = await setup()
    getByText('Home page...')
  })
})
