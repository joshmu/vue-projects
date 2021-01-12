<template>
  <h1>Calculator</h1>
  <div class="calculator-container">
    <div v-if="total === 0" class="display">{{ curr }} {{ operator }}</div>
    <div v-else class="display">{{ total }}</div>
    <div class="controls" @click="keypress">
      <div class="key">7</div>
      <div class="key">8</div>
      <div class="key">9</div>
      <div class="key">/</div>
      <div class="key">4</div>
      <div class="key">5</div>
      <div class="key">6</div>
      <div class="key">*</div>
      <div class="key">1</div>
      <div class="key">2</div>
      <div class="key">3</div>
      <div class="key">-</div>
      <div class="key double">0</div>
      <div class="key">=</div>
      <div class="key">+</div>
    </div>
  </div>
</template>

<script>
// todo: does not support multi operations
// todo: display isn't correct
// todo: support C clear function

import { ref } from 'vue'
export default {
  setup() {
    const symbols = ['/', '*', '-', '+', '=']
    const prev = ref(0)
    const curr = ref(0)
    const total = ref(0)
    const operator = ref(null)

    const keypress = e => {
      const val = e.target.innerText
      if (symbols.includes(val)) {
        operation(val)
      } else {
        num(val)
      }
    }

    const operation = selectedOperation => {
      if (operator.value !== null) {
        calc()
      }
      // store values
      prev.value = curr.value
      curr.value = 0
      operator.value = selectedOperation
    }

    const calc = () => {
      switch (operator.value) {
        case '*':
          total.value = prev.value * curr.value
          break
        case '/':
          total.value = prev.value / curr.value
          break
        case '-':
          total.value = prev.value - curr.value
          break
        case '+':
          total.value = prev.value + curr.value
          break
        case '=':
          operation(operator.value)
          break
        default:
          return
      }
      prev.value = total.value
      curr.value = 0
    }

    const num = selectedNum => {
      if (curr.value === 0) {
        curr.value = Number(selectedNum)
      } else {
        curr.value = Number(curr.value.toString() + selectedNum)
      }
    }

    return { keypress, prev, curr, total, operator }
  },
}
</script>

<style lang="scss" scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 300px;
  margin: auto;

  border: 2px solid black;
  filter: drop-shadow(0 0 2px black);

  .display {
    padding: 0 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2.5rem;
    font-weight: bold;
    height: 20%;
    background-color: lightgreen;
    color: darkgreen;
    border: 1px solid black;
  }
  .controls {
    background-color: rgb(238, 238, 238);
    display: flex;
    flex: 1;
    flex-wrap: wrap;

    .key {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25%;
      height: 25%;
      font-size: 1.5rem;
      cursor: pointer;
      border: 1px solid black;

      &.double {
        width: 50%;
      }

      &:hover {
        background-color: lightgray;
        font-weight: bold;
      }
    }
  }
}
</style>
