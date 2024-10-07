<script setup>
import LineWrapper from "@/components/ui/LineWrapper.vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import {onBeforeUnmount, onMounted, ref} from "vue";

let tl;
gsap.registerPlugin(ScrollTrigger,SplitText);
const scrollRegister = ref(null);
const imgRotate = ref(null);
const title = ref(null);

function wordFade() {
  let mySplitText = new SplitText(".text-animation_our", {type: "chars"});
  let chars = mySplitText.chars;

  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
    opacity:0
  });
}

function initRegisterAnimation() {
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollRegister.value,
      start: 'top 3%',
      pin: true,
      end: '150%',
      scrub: true,
    },
  });

  tl.from(imgRotate.value, {
    scale: '0.3',
    rotate: '180deg'
  })
  tl.to(imgRotate.value, {
    duration: 0.5,
    scale: '1.1',
    rotate: '-160deg',
  })
  return tl;
}

onMounted(() => {
  wordFade();

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
  <div ref="scrollRegister" class="main-our">
    <LineWrapper/>
    <div class="grid grid-cols-12 _container">
      <div class="text-philosophy flex gap-[16px] items-center col-span-4">
        <img class="animation-logo" src="@/assets/img/OurPhilosophy.svg" alt=""> Our philosophy
      </div>
      <div ref="title" class="text-[40px] text-[#300A0A] text-animation_our font-medium leading-[52px] col-span-5 mt-[100px]">
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
  height: 100vh;
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