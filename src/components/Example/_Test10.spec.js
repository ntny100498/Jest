import {mount} from "@vue/test-utils"
import Emitted from "./EmittedComp.vue"

test('emits a count with correct payload', async () => {
  const wrapper = mount(Emitted)
  
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().count[0][0]).toBe(1)

  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().count[1][0]).toBe(2)

  console.log(wrapper.emitted());
})