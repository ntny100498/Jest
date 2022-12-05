import { mount } from '@vue/test-utils'
import Test from './Test.vue'

describe('Test', () => {
  it('render count when even', () => {
    const wrapper = mount(Test, {
      data() {
        return {
          text: "This is a text"
        }
      },
      props: {
        description: "This is a description"
      }
    });

    // Theo dõi watch, methods trong component
    const spy = jest.spyOn(wrapper.vm, 'get123');

    // await wrapper.setData({ text : "This is a text"});
    // await wrapper.setProps({ description : "This is a description"});

    // await wrapper.vm.text = "This is a text";
    // await wrapper.vm.description = "This is a description";
    // await nextTick();

    console.log(wrapper.vm.msg);
    console.log(wrapper.vm.text);
    console.log(wrapper.vm.description);

    expect(wrapper.vm.getAbc).toBe('abc');
    expect(wrapper.vm.get123()).toBe('123');
    expect(wrapper.vm.get123).toBeCalled();
  });
});