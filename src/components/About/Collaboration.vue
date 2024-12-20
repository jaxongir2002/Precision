<script setup>
import {ref, onMounted} from "vue";
import {gsap} from "gsap";
const iconPosition = ref(0);

const info = ref([
  {
    title: "Collaboration & Teamwork",
    description: "A collaborative environment " +
        "where teamwork drives innovation, ensuring that every patient receives comprehensive and personalized care.",
  },
  {
    title: "Constant Growth & Success",
    description: "Commitment to continuous improvement, embracing" +
        " innovation to achieve success  and provide the highest standard of healthcare.",
  },
  {
    title: "Dignity & Comfort",
    description: "Care designed to maintain dignity " +
        "and provide comfort, ensuring a respectful and compassionate experience for every individual.",
  },
])
const icon = ref(null);

const initScrollAnimations = () => {
  gsap.fromTo(icon.value,
      {y: 7},
      {
        y: 775,
        scrollTrigger: {
          trigger: '.about_line',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          scrub: true,
        }
      }
  );
};

onMounted(() => {
  initScrollAnimations();
});
</script>

<template>
  <div
      class="w-[100%] about_line pl-[120px] max-lg:pl-[40px] max-lg:flex-col max-lg:mt-[52px] flex justify-between mt-[200px] m-auto">
    <div class="max-lg:hidden relative">
      <img ref="icon"
           src="@/assets/img/About/animationLine.svg" class="relative right-[11px]" alt="">
      <img class="logo" src="@/assets/img/About/Line.svg" alt="">
    </div>
    <div class="flex flex-col gap-[160px] max-lg:gap-[48px]">
      <div v-for="(items,index) in info" :key="index" class="title text-[25px] flex gap-3 max-lg:flex-col">
        <div
            class="rounded-full max-lg:w-[45px] max-lg:h-[45px] w-[52px] h-[52px] bg-[#F5733D] flex justify-center items-center">
          <img class="animation-logo" src="@/assets/img/About/logoRounded.svg" alt="">
        </div>
        <div class="mt-2 tracking-[0.3px]">
          {{ items.title }}
          <div class="title text-[20px] mt-3 w-[45%] max-lg:w-[85%] tracking-[0.3px]">
            {{ items.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #300A0A;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 32.5px */
}
</style>