<script setup>
import LineWrapper from "@/components/ui/LineWrapper.vue";
import { ref, onMounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const triggerFooter = ref(null);

function wordFade() {
  let ballTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerFooter.value,
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
  });

  ballTimeline.from(triggerFooter.value, {
    y: 220,
    ease: 'power2.out',
  });
}
function topScroll() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
onMounted(() => {
  wordFade();
});
</script>

<template>
  <div ref="triggerFooter" class="footer mt-[100px]">
    <LineWrapper change-color="white"/>
    <div class="_container">
      <div class="flex justify-between mt-[50px]">
        <div class="w-full">
          <img class=" w-[179px]" src="@/assets/img/Logo.svg" alt="">
        </div>
        <div class="flex justify-between w-full">
          <div class="flex flex-col gap-3">
            <div class="footer-menu-text">
              Menu
            </div>
            <div class="footer-menu-text">
              Home
            </div>
            <div class="footer-menu-text">
              About
            </div>
            <div class="footer-menu-text">
              Contact Us
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="footer-menu-text">
              Socials
            </div>
            <div class="footer-menu-text">
              Instagram
            </div>
            <div class="footer-menu-text">
              LinkedIn
            </div>
            <div class="footer-menu-text">
              Facebook
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="footer-menu-text">
              Legal
            </div>
            <div class="footer-menu-text">
              Privacy Policy
            </div>
            <div class="footer-menu-text">
              Terms and Conditions
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="footer-menu-text">
              Contacts
            </div>
            <div class="footer-menu-text">
              lorem@ipsum
            </div>
            <div class="footer-menu-text">
              Howell, New Jersey
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-[100px] pb-[50px]">
        <div class="footer-text-specialize text-[#CCBFA8] w-[20%]">
          <span class="text-white">We specialize </span> in providing
          precision <span class="text-white">focused </span> healthcare.
        </div>
        <div class="since-year w-[20%] flex items-end">
          © 2024 Precision Health Care Group
        </div>
        <div @click="topScroll" class="since-year flex gap-2 items-end cursor-pointer">
          Back to Top <img class="w-[20px]" src="@/assets/img/ArrowDown.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  border-radius: 30px 30px 0 0;
  background: var(--Bordeaux-brown, #300A0A);

  &-menu-text {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
  }

  &-text-specialize {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }

  .since-year {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>