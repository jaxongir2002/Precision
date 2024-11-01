<script setup>
import LineWrapper from "@/components/ui/LineWrapper.vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import {onBeforeUnmount, onMounted, ref} from "vue";

let tl;
gsap.registerPlugin(ScrollTrigger, SplitText);
const scrollRegister = ref(null);
const imgRotate = ref(null);
const title = ref(null);

function isMobile() {
  return window.innerWidth <= 767; // Adjust the breakpoint as needed
}

// function wordFade() {
//   let mySplitText = new SplitText(".text-animation_our", {type: "chars"});
//   let chars = mySplitText.chars;
//
//   gsap.from(chars, {
//     yPercent: 130,
//     stagger: 0.02,
//     opacity:0
//   });
// }

function initRegisterAnimation() {
  const isMobileDevice = isMobile(); // Check if the device is mobile
  const endPosition = isMobileDevice ? '70%' : '130%'; // Set end position based on device

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollRegister.value,
      start: 'top 3%',
      pin: true,
      end: endPosition,
      scrub: true,
    },
  });

  tl.from(imgRotate.value, {
    scale: isMobileDevice ? 0.3 : 0.3, // Same scale for mobile
    rotate: isMobileDevice ? '160deg' : '180deg',
  })
      .to(imgRotate.value, {
        duration:isMobileDevice ?0.1: 0.3,
        scale: isMobileDevice ? 0.8 : 1.1, // Adjust scale for mobile
        rotate: isMobileDevice ? '0deg' : '-160deg',
      });

  return tl;
}

onMounted(() => {
  // wordFade();

  tl = initRegisterAnimation();
  window.addEventListener('popstate', () => {
    tl = initRegisterAnimation();
  });
});
onBeforeUnmount(() => {
  if (tl) {
    tl.kill();
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

</script>

<template>
  <div ref="scrollRegister" class="main-our h-[100vh]">
    <LineWrapper/>
    <div class="grid grid-cols-12 _container max-lg:mt-[60px]">
      <div class="text-philosophy flex gap-[16px] items-center col-span-4 max-lg:col-span-12 ">
        <img class="animation-logo" src="@/assets/img/OurPhilosophy.svg" alt=""> Our philosophy
      </div>
      <div ref="title" class="text-[40px] max-lg:text-[24px] max-lg:leading-[130%] max-lg:w-full max-lg:mt-[32px] text-[#300A0A] max-lg:col-span-12
      text-animation_our font-medium leading-[52px] col-span-5 mt-[100px]">
        Empowering <span class="text-[#F5733D]">Health</span>. Elevating <span class="text-[#F5733D]">Care</span>.
        Delivering personalized, people-first care with unwavering integrity and innovation.
      </div>
    </div>
    <img ref="imgRotate" class="m-auto mt-[76px] img_animation" src="@/assets/img/BigLogo.svg" alt="">
  </div>
</template>

<style scoped lang="scss">
.main-our {
  border-radius: 30px 30px 0 0;
  background: #FFF;
  margin-top: 40px;
}

.text-philosophy {
  color: #300A0A;
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
</style>