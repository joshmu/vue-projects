<template>
  <h1>Calendar</h1>
  <div class="calendar-container">
    <div class="controls">
      <button class="prev" @click="prev()">←</button>
      <button class="next" @click="next()">→</button>
    </div>
    <div class="info">
      <span class="month">{{ currentMonthName }}</span>
      <span class="year">{{ currentYear }}</span>
    </div>
    <div class="weekdays">
      <div class="weekday" v-for="day in days" :key="day">{{ day }}</div>
    </div>
    <div class="dates" ref="datesContainerElem">
      <div
        class="date"
        v-for="(num, idx) in getStartDate()"
        :key="`placeholder-${idx}`"
      ></div>
      <div
        :class="{ isCurrentDate: isCurrentDate(num) }"
        class="date"
        v-for="num in numOfDaysInMonth"
        :key="`date-${num}`"
      >
        {{ num }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
export default {
  name: 'Calendar',
  setup() {
    const days = ref(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
    const date = new Date()
    const currentYear = ref(date.getFullYear())
    const currentMonth = ref(date.getMonth())
    const currentMonthName = ref(getMonthName(currentMonth.value))
    const currentDate = ref(date.getUTCDate())
    const datesContainerElem = ref(null)

    // watch for month change and assign name version
    watch(currentMonth, currMonth => {
      currentMonthName.value = getMonthName(currMonth)
    })

    function getMonthName(month) {
      return new Date(currentYear.value, month).toLocaleString('default', {
        month: 'long',
      })
    }

    const isCurrentDate = date => {
      const actualDate = new Date()
      const currentDate = new Date(currentYear.value, currentMonth.value, date)
      return actualDate.toDateString() === currentDate.toDateString()
    }

    const numOfDaysInMonth = computed(() =>
      new Date(currentYear.value, currentMonth.value).getUTCDate()
    )

    const getStartDate = () => {
      const startDay = new Date(currentYear.value, currentMonth.value)
        .toDateString()
        .split(' ')[0]
        .toLowerCase()

      return days.value.findIndex(day => day.toLowerCase() === startDay)
    }

    const prev = () => {
      if (currentMonth.value === 0) {
        // previous year
        currentYear.value -= 1
        // month to end
        currentMonth.value = 11
      } else {
        --currentMonth.value
      }
    }
    const next = () => {
      // another month
      if (currentMonth.value === 11) {
        // another year
        currentYear.value += 1
        // month to beginning
        currentMonth.value = 0
      } else {
        ++currentMonth.value
      }
    }

    // additional style to get exact grid layout dynamically
    onMounted(() => {
      const width = datesContainerElem.value.clientWidth
      const cellHeight = Math.round(width / 7)
      datesContainerElem.value.style.setProperty(
        '--cell-height',
        `${cellHeight}px`
      )
    })

    return {
      next,
      prev,
      days,
      currentMonth,
      currentMonthName,
      currentYear,
      currentDate,
      isCurrentDate,
      numOfDaysInMonth,
      getStartDate,
      datesContainerElem,
    }
  },
}
</script>

<style lang="scss" scoped>
$background-color: rgb(27, 27, 27);
$color: white;
$seventh-percentage: 14.286%;

.calendar-container {
  --cell-height: 4rem;
  display: flex;
  flex-direction: column;
  background-color: $background-color;
  color: $color;
  padding: 1rem;
  border-radius: 0.25rem;
  gap: 0.5rem;

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    button {
      background-color: $background-color;
      color: $color;
      border: none;
      text-transform: uppercase;
      font-size: 2rem;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .weekdays {
    display: flex;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;

    .weekday {
      width: $seventh-percentage;
    }
  }
  .dates {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    .date {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--cell-height);

      &.isCurrentDate {
        border: 1px solid $color;
        border-radius: 50%;
      }
    }
  }
}
</style>
