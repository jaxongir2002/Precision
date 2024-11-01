<script setup>
import {gsap} from "gsap";
import {onMounted, ref} from "vue";

const props = defineProps({
  logoImg:Array,
  backgroundColor:String,
  color: String,
  arrowDown:String,
  mobileVersion:String,
  iconMobile:String
});

const logoContainer = ref(null);

function topScroll() {
  window.scrollTo({
    top: 1500,
    behavior: "smooth",
  });
}

onMounted(() => {
  const images = logoContainer.value.querySelectorAll('.logo-image');
  gsap.fromTo(images,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.inOut',
      });
});
</script>

<template>
  <div class="content" :style="{backgroundColor:props.backgroundColor}">
    <div ref="logoContainer" class="logo_name">
      <div class="flex gap-3 items-start">
        <img :src="props.mobileVersion" class="hidden max-lg:block " alt="logo Precision">
        <img :src="props.iconMobile" class="hidden w-[30px] h-[30px] max-lg:block animation-logo" alt="">
      </div>

      <img v-for="(img,index) in props.logoImg" :key="index" class="logo-image max-lg:hidden" :src="img.img"
           :class="{'ml-[10px] logo-image animation-logo':index===9}" alt="Logo Name PRECISION">
    </div>
  </div>
  <div :style="{backgroundColor:props.backgroundColor}">
    <div class="flex _container justify-between items-center ">
      <div class="footer-text  w-[20%] max-lg:w-[80%]" :class="`text-[${props.color}]`">
        Precision-Focused
        <span class="text-[#F6733C]">Healthcare</span> Future
      </div>
      <div @click="topScroll" class="flex gap-[7px] max-lg:hidden items-center text-scroll-down" :style="{color:props.color}">
        Scroll to explore <img class="animation-arrow" :src="props.arrowDown" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.animation-arrow {
  animation: top-bottom 0.4s infinite alternate;
  transition: 0.1s all;
}

@keyframes top-bottom {
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-2px);
  }
}

.content {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo_name {
    display: flex;
    gap: 11px;
    align-items: start;
  }
}

.footer-text {
  font-size: 30px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}

.text-scroll-down {
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
}
</style>