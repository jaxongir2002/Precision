<script setup>
import {onMounted, onBeforeUnmount, ref} from "vue";
import LineWrapper from "@/components/ui/LineWrapper.vue";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);
const triggerItem = ref(null)

function wordFade() {
  let ballTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerItem.value,
    },
  });
  ballTimeline.add("start")
      .from('.chars', {
        duration:1,
        yPercent: 130,
        stagger: 0.01,
        opacity: 0,
        ease: 'circ.in',
      });
}
function isMobile() {
  return window.innerWidth <= 767; // Adjust the breakpoint as needed
}
onMounted(() => {
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const markerFirst = document.querySelector('.marker_first');
    const markerSecond = document.querySelector('.marker_second');
    if (currentScrollPos >= 2900) {
      markerFirst.classList.add('animate');
      markerSecond.classList.add('animate');
      markerFirst.classList.add('marker-first');
      markerSecond.classList.add('marker-second');
    }
    if (isMobile()){
      if (currentScrollPos >= 2600) {
        markerFirst.classList.add('animate');
        markerSecond.classList.add('animate');
        markerFirst.classList.add('marker-first');
        markerSecond.classList.add('marker-second');
      }

    }
  };
  wordFade()
  window.addEventListener('scroll', handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <div ref="triggerItem"
       class="bg-[#300A0A] rounded-[30px] h-[850px] max-lg:h-[603px] overflow-auto mt-[100px] max-lg:mt-[20px]">
    <div class="pt-[100px] max-lg:pt-[25px]">
      <LineWrapper change-color="#FFF"/>
    </div>
    <div class="grid grid-cols-12 _container">
      <div
          class="text-mission flex gap-[16px] max-lg:mt-[80px] items-center col-span-4 relative bottom-[13%] max-lg:col-span-12">
        <img class="animation-logo" src="@/assets/img/OurPhilosophy.svg" alt=""> Our mission
      </div>
      <div class="text-[50px] max-lg:mt-[32px] max-lg:text-[30px]
           max-lg:w-full max-lg:leading-[130%] max-lg:col-span-12 text-[#fff]
           font-medium leading-[52px] col-span-6 w-[90%] mt-[100px] ">
        <span class="text-[#F5733D] text-animate-mission chars"> Precision Health Care Services</span>
        <span class="text-animate-mission chars"> is dedicated to providing personalized and dignified care.</span>
        <div class="mt-[33px] text-mission text-[35px] max-lg:leading-[200%] max-lg:text-[16px] leading-[130%]">
          Our commitment to <span class=" marker_first"> <span class="relative z-10">integrity safety,</span></span> and
          forward-thinking solutions ensures
          continuous growth and <span class="marker_second"><span class="relative z-10">
          excellence in healthcare.</span></span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.text-mission {
  color: var(--White, #FFF);
  font-family: "Neue Haas Grotesk  Display Pro", sans-serif;
  font-style: normal;
  font-weight: 500;

}

.marker-first, .marker-second {
  border-radius: 500px;
  padding-left: 3px;
  color: #fff !important;
  position: relative;
  transition: opacity 0.5s ease-in-out;

}

.marker-first {
  animation: drawEffectFirst 1s forwards;
}

.marker-first.animate::before, .marker-second.animate::before {
  animation: drawEffectFirst 1s forwards;
}

.marker-first::before, .marker-second::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 500px;
  transform: translateY(-50%);
}

.marker-first::before {
  background: #CCBFA8 !important;
}

.marker-second::before {
  background: #F5733D !important;
}

@keyframes drawEffectFirst {
  0% {
    width: 0;
    color: #fff;
  }
  100% {
    width: 100%;
    color: #300A0A;
  }
}
</style>