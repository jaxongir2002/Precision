<script setup>
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
import { onMounted, ref} from "vue";
import ButtonPr from "@/components/ui/ButtonPr.vue";

gsap.registerPlugin(ScrollTrigger, SplitText);
const scrollRegister = ref(null);
const title = ref(null);

function wordFade() {
  let mySplitText = new SplitText(".text-animation_our", {type: "chars"});
  let chars = mySplitText.chars;

  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
    opacity: 0
  });
}

onMounted(() => {
  wordFade();
});
</script>

<template>
  <div ref="scrollRegister" class="main-our pt-[80px]">

    <div class="text-philosophy _container flex gap-[16px]">
      <img class="animation-logo" src="@/assets/img/OurPhilosophy.svg" alt=""> About
    </div>
    <div class="grid grid-cols-12 _container">
      <div class="col-span-4 mt-[100px]">
        <img src="@/assets/img/LogoAbout.svg" alt="">
      </div>
      <div class="col-span-5 mt-[100px]">
        <div ref="title"
             class="text-[50px] text-[#300A0A] text-animation_our font-medium leading-[52px]">
          Precision <span class="text-[#F5733D]">Health Care</span> Group is dedicated to providing personalized and
          dignified care.
        </div>
        <div class="text-philosophy mt-10">
          Our commitment to integrity, safety, and forward-thinking solutions ensures continuous growth and excellence
          in
          healthcare.
        </div>
        <ButtonPr label="Our expertise" class="mt-[110px]"/>
      </div>

    </div>
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