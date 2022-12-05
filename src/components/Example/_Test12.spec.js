import { mount } from "@vue/test-utils"
import Test12 from "./Test12.vue"

// v-if -> exists
// v-show -> isVisible
describe('Test12', () => {
  it('renders a profile link', () => {
    const wrapper = mount(Test12)
    // console.log(wrapper.html())
    expect(wrapper.find('#profile').text()).toBe('My Profile')
    // Test fails
    // expect(wrapper.find('#profile').text()).toBe('My Profileeee')
  })

  test('renders an admin link', () => {
    const wrapper = mount(Test12, {
      data() {
        return {
          admin: true
          // Test fails
          // admin: false
        }
      }
    })
    // console.log(wrapper.html())
    expect(wrapper.find('#admin').isVisible()).toBe(true)
    
  })

  test('does not render an admin link', () => {
    const wrapper = mount(Test12)
    // console.log(wrapper.html())
    expect(wrapper.find('#admin').isVisible()).toBe(false)
    // OR
    // expect(wrapper.find('#admin').isVisible()).not.toBe(true)
    
  })
})