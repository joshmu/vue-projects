<template>
  <h1>Carousel</h1>
  <div class="carousel-container">
    <div
      v-for="(slider, idx) in sliders"
      class="sliders-container"
      :key="slider"
    >
      <transition name="slide">
        <div
          v-if="idx === currentIdx"
          class="slider-item"
          :style="{ backgroundColor: slider }"
        ></div>
      </transition>
    </div>
    <div class="controls">
      <button
        v-for="(slider, idx) in sliders"
        @click="handleControl(idx)"
        :key="slider"
        class="control"
        :style="{
          backgroundColor: idx === currentIdx ? 'white' : 'rgb(200,200,200)',
        }"
      ></button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from 'vue'
export default {
  setup() {
    const currentIdx = ref(0)
    const sliders = ref(['red', 'blue', 'green'])
    const currentSlider = computed(() => {
      return sliders.value[currentIdx.value]
    })
    const interval = ref(null)

    const startInterval = () => {
      interval.value = setInterval(() => {
        currentIdx.value =
          currentIdx.value === sliders.value.length - 1
            ? 0
            : currentIdx.value + 1
      }, 2000)
    }

    onMounted(() => {
      startInterval()
    })
    onUnmounted(() => {
      clearInterval(interval.value)
    })

    const handleControl = idx => {
      // unmount timer
      clearInterval(interval.value)
      // update index
      currentIdx.value = idx
      // restart timer
      startInterval()
    }

    return { currentIdx, sliders, currentSlider, handleControl }
  },
}
</script>

<style lang="scss" scoped>
.carousel-container {
  height: 80%;
  width: 100%;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;

  .sliders-container {
    position: absolute;
    width: 100%;
    height: 100%;

    .slider-item {
      width: 100%;
      height: 100%;
    }

    .slide-enter-active,
    .slide-leave-active {
      transition: transform, opacity, 1s ease-in-out;
    }
    .slide-enter-from {
      transform: translateX(-100%);
    }
    .slide-leave-to {
      transform: translateX(100%);
      opacity: 0.5;
    }
  }
  .controls {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;

    .control {
      padding: 0.5rem;
      border-radius: 50%;
      border: none;
      margin: 0 0.5rem;
      cursor: pointer;
      filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.5));
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
