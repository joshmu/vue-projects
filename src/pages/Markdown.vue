<template>
  <h1>Markdown</h1>
  <div class="markdown-container">
    <div class="markdown">
      <textarea :value="text" @input="update"></textarea>
    </div>
    <div class="preview" v-html="markedText"></div>
  </div>
</template>

<script>
import marked from 'marked'
import debounce from '../utils/mixins/debounce'

export default {
  name: 'Markdown',
  mixins: [debounce],
  data() {
    return {
      text: '# title\n\n__bold__\n\n*italic*',
      timeout: '',
    }
  },
  methods: {
    update(e) {
      const task = () => {
        this.text = e.target.value
      }
      this.debounce(task, 1000)
    },
  },
  computed: {
    markedText() {
      return marked(this.text)
    },
  },
}
</script>

<style lang="scss" scoped>
.markdown-container {
  $font-size: 1.25rem;
  height: 80%;
  width: 100%;
  margin-top: 1rem;
  background: lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0.5rem;
  overflow: hidden;
  filter: drop-shadow(0 0 0.25rem black);

  @mixin container-title($title) {
    content: $title;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0.5rem;
    font-size: 0.75rem;
    font-style: italic;
  }

  .markdown {
    position: relative;
    textarea {
      font-size: $font-size;
      padding: 0.5rem;
      width: 100%;
      height: 100%;
      border: none;
      border-right: 1px solid black;
      &:focus {
        outline: none;
      }
    }
    &:before {
      @include container-title('markdown');
    }
  }
  .preview {
    position: relative;
    font-size: $font-size;
    padding: 0.5rem;
    background-color: rgb(245, 245, 245);
    &:before {
      @include container-title('preview');
    }
  }
}
</style>
