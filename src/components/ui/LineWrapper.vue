<script setup>
import {ref} from 'vue';

const props = defineProps({
  changeColor: {
    type: String,
    default: '#300A0A'
  }
})
const items = ref([
  {
    text: 'People-first care',
    title: 'care'
  },
  {
    text: 'Personalized',
    title: 'care'
  },
  {
    text: 'Integrity',
    title: ''
  },
  {
    text: 'Safety',
    title: 'security'
  },
  {
    text: 'Integrity',
    title: ''
  },
  {
    text: 'Safety',
    title: 'security'
  },
  {
    text: 'Safety',
    title: 'security'
  },
  {
    text: 'Integrity',
    title: ''
  },
  {
    text: 'Safety',
    title: 'security'
  },
  {
    text: 'Safety',
    title: 'security'
  },
  {
    text: 'Integrity',
    title: ''
  },
  {
    text: 'Safety',
    title: 'security'
  },
])

</script>

<template>
  <div class="infinity-line-wrapper pt-[34px] overflow-hidden relative">
    <div class="flex animate-infinite">
      <div v-for="(item,index) in items"
           :key="index"
           :style="{color: props.changeColor}"
           class="infinity-line flex gap-3"> / {{ item.text }}
        <img src="@/assets/img/warperIcon.svg" alt=""/>
        {{ item.title }}
        <div class="flex justify-end relative left-[25px]">
          <img src="@/assets/img/Plus.svg" class="vectors-wrapper" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vectors-wrapper {
  object-fit: cover;
  width: 1.25rem !important;
  height: 1.25rem !important;
  display: flex;
}

.infinity-line {
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 39px */
  text-transform: uppercase;
  white-space: nowrap;
}

.infinity-line-wrapper {
  width: 100%;
  overflow: hidden;
}

.animate-infinite {
  display: flex;
  animation: scroll 15s linear infinite;
  gap: 60px;
}

@keyframes scroll {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(-50%); /* Adjust based on the number of items */
  }
}
</style>