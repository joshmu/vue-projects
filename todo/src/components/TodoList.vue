<template>
  <div class="todo-list">
    <ul>
      <li class="item" v-for="(item, idx) in items" :key="idx">
        <p>
          {{ item }}
        </p>
        <button @click="removeItem(idx)">x</button>
      </li>
    </ul>
    <hr />
    <p>{{ itemCount }}</p>
    <form @submit.prevent="addItem()">
      <label for="todoItem" style="display: none;">Add Todo Item</label>
      <input
        id="todoItem"
        type="text"
        v-model="newItem"
        placeholder="add item..."
      />
      <button type="submit">Add Todo</button>
    </form>
    <p>{{ newItem }}</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'TodoList',
  setup() {
    const items = ref(['one', 'two', 'three'])
    const newItem = ref('')

    const itemCount = computed(() => {
      return `There are ${items.value.length} items`
    })

    const removeItem = idx =>
      (items.value = items.value.filter((item, itemIdx) => itemIdx !== idx))

    const addItem = () => {
      if (!newItem.value.length) return

      // add new item
      items.value.push(newItem.value)
      // reset state
      newItem.value = ''
    }

    return {
      items,
      newItem,
      removeItem,
      addItem,
      itemCount,
    }
  },
}
</script>

<style lang="scss" scoped>
.todo-list {
  margin: 0 2rem;
  ul {
    margin: 1rem 0;
    list-style: none;
    .item {
      padding: 0.25rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:hover {
        background-color: darkgrey;
        color: white;
      }

      button {
        padding: 0.5rem;
        font-weight: bold;
        background-color: rgb(61, 60, 60);
        color: white;
        border: none;
        border-radius: 10%;
        cursor: pointer;
      }
    }
  }
  form {
    margin-top: 2rem;
    display: flex;
    justify-content: start;
    align-content: stretch;

    input {
      font-size: 1.5rem;
    }
    [type='submit'] {
      background-color: black;
      color: white;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
</style>
