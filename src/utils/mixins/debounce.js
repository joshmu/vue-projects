export default {
  data() {
    return {
      timeout: '',
    }
  },
  methods: {
    debounce(task, delay = 500) {
      clearTimeout(this.timeout)
      setTimeout(task, delay)
    },
  },
}
