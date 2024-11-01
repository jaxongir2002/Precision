<script setup>
import {gsap} from "gsap";
import {onMounted, ref} from "vue";

const logoContainer = ref(null);
const logoImg = ref([
  {
    img: new URL('@/assets/img/LogoName/LogoP.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoR.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoE.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoC.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoI.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoS.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoI.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoO.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoN.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoElement.svg', import.meta.url),
  },
]);
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
  <div class=" _container rounded-[20px] relative z-10 top-[220px] max-lg:h-[100vh]" :style="{backgroundColor:'#300A0A'}">
    <img src="@/assets/img/IconContact.svg" class="relative top-[20px]" alt="">
    <div ref="logoContainer" class="logo_name content">
      <div class="flex gap-3 items-start">
        <img src="@/assets/img/mobile/logoMobile.svg" class="hidden max-lg:block" alt="logo Precision">
        <img src="@/assets/img/mobile/mobileIcon.svg" class="hidden max-lg:block animation-logo" alt="">
      </div>
      <img v-for="(img,index) in logoImg" :key="index" class="logo-image max-lg:hidden" :src="img.img"
           :class="{'ml-[10px] logo-image animation-logo ':index===9}" alt="Logo Name PRECISION">
    </div>
    <div>
      <div class="flex _container  justify-between items-center">
        <div class="footer-text w-[20%] max-lg:w-full text-[#fff] max-lg:relative top-[80px]">
          Precision-Focused
          <span class="text-[#F6733C]">Healthcare</span> Future
        </div>
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
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

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