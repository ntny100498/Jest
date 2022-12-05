import { mount } from "@vue/test-utils"
import Test11 from "./Test11.vue"

describe('Test11', () => {
  it('renders a profile link', () => {
    const wrapper = mount(Test11)
    // console.log(wrapper.html())
    expect(wrapper.find('#profile').text()).toBe('My Profile')
    // Test fails
    // expect(wrapper.find('#profile').text()).toBe('My Profileeee')
  })

  test('renders an admin link', () => {
    const wrapper = mount(Test11, {
      data() {
        return {
          admin: true
          // Test fails
          // admin: false
        }
      }
    })
    // console.log(wrapper.html())
    expect(wrapper.find('#admin').exists()).toBe(true)
    
  })

  test('does not render an admin link', () => {
    const wrapper = mount(Test11)
    // console.log(wrapper.html())
    expect(wrapper.find('#admin').exists()).toBe(false)
    // OR
    // expect(wrapper.find('#admin').exists()).not.toBe(true)
    
  })
})