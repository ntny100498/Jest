<template>
  <p>{{ msg }}</p>
  <p>{{ text }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello everyone",
      text: ""
    }
  },
  props: {
    description: ""
  },
  computed: {
    getAbc() {
      return 'abc';
    }
  },
  methods: {
    get123() {
      return '123';
    }
  }
}
</script>