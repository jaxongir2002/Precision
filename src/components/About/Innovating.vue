<template>
  <div ref="triggerItem" class="_container">
    <div ref="innovatingText" class="text-[#300A0A33] text-innovating w-[70%] text-left">
      Innovating Personalized
    </div>
    <div ref="patientCareText" class="text-[#300A0A] text-innovating text-right w-[70%]">
      Patient Care
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {gsap} from 'gsap';

const innovatingText = ref(null);
const patientCareText = ref(null);
const triggerItem = ref(null);
let ballTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: triggerItem.value,
  },
});
ballTimeline.add("start");

onMounted(() => {
  ballTimeline.from(innovatingText.value, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5
  });

  ballTimeline.from(patientCareText.value, {
    x: 100,
    opacity: 0,
    delay: 0.5
  });
});
</script>

<style scoped lang="scss">
@media (max-width: 767px) {
  .text-innovating {
    font-size: 30px !important;
    width: 100% !important;
  }

}

.text-innovating {
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 104px */
}
</style>