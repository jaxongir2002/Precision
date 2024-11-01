<script setup>
import CardSlide from "@/components/ui/CardSlide/CardSlide.vue";
import {onMounted, ref} from "vue";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import CardBuild from "@/components/ui/CardSlide/CardBuild.vue";

const items = ref([
  {
    id: 1,
    background: '#CCBFA8',
    color:'#300A0A',
    header: 'Our Core Values',
    description: 'At Precision, our philosophy is ' +
        ' guided by eight essential values that shape every aspect of the care we provide:',
    buttonText: 'Guided by Principles',
    borderColor:'#300A0A'
  },
  {
    id: 2,
    background: '#300A0A',
    color:'#F2EDE8',
    header: 'Precision’s Approach to Care',
    description: 'Redefining Health Care with Innovation & Compassion.' +
        ' We believe that every individual deserves compassionate care, and that is why we put people first. ',
    buttonText: 'Innovative Compassion',
    borderColor:'#F2EDE8'
  },
  {
    id: 3,
    background: '#BFCCCF',
    color:'#300A0A',
    header: 'The Precision Difference ',
    description: 'Whether it’s through personalized attention, cutting-edge treatments, or our commitment to patient safety, Precision Health' +
        ' Care Group stands apart for its dedication to enhancing the lives of those we care for. ',
    buttonText: 'Dedicated Excellence',
    borderColor:'#300A0A'
  }
]);

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  console.clear();

  gsap.registerPlugin(ScrollTrigger);

  const cardWrappers = gsap.utils.toArray(".card-wrapper");

  const scaleMax = gsap.utils.mapRange(
      1,
      document.querySelectorAll(".card").length - 1,
      0.95,
      1
  ); // Convert values we know to values we want https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()

  const blockHeight = 300;
  const time = 3;

  gsap.set(cardWrappers, {
    // Set up the cards styling
    y: (index) => 420 * index, // set offset
    transformOrigin: "center top"
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "none"
    },
    scrollTrigger: {
      trigger: ".trigger",
      start: "top 5%",
      end: `${blockHeight * 3} top`,
      scrub: true,
    }
  });
  tl.from(".card-container", {
    y: () => blockHeight / 2,
    duration: 1
  });
  tl.to(".card-wrapper:not(:first-child)", {
    yPercent: (i) => -210 * (i + 1),
    duration: time ,
    stagger: time
  });

//
  tl.to(
      ".card-wrapper:not(:last-child)",
      {
        rotationX: -20,
        scale: (index) => scaleMax(index),
        stagger: {
          each: time
        }
      },
      "<"
  );

  ScrollTrigger.refresh();
  const end = tl.scrollTrigger.end;
  ScrollTrigger.create({
    trigger: ".extra-trigger",
    start: "top 5%",
    end: () => end,
    pin: true,
  });
});
</script>

<template>
  <div class="transition-all max-lg:hidden _container">
    <div class="text-excellence flex gap-[16px] items-center col-span-4 relative bottom-[13%] mt-[80px]">
      <img src="@/assets/img/OurPhilosophy.svg" alt="Excellence in care"> Excellence in care
    </div>
    <div class="trigger">
      <div class="hero"></div>
      <div class="extra-trigger">
        <div class="card-container">
          <div class="card-wrapper">
            <div class="card">
              <CardSlide
                  ref="cardY"
                  :info="items[0]"
                  class="mt-[48px]"
              >
                <template #image>
                  <card-build/>
                </template>
              </CardSlide>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="card">
              <CardSlide
                  ref="cardY"
                  :info="items[1]"
                  class="mt-[48px]  "
              />
            </div>
          </div>
          <div class="card-wrapper">
            <div class="card">
              <CardSlide
                  ref="cardY"
                  :info="items[2]"
                  class="mt-[48px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  mobile version-->
  <div class="max-lg:block hidden _container">
    <CardSlide
        :info="items[0]"
        class="mt-[48px]"
    >
      <template #image>
        <card-build/>
      </template>
    </CardSlide>
    <CardSlide
        :info="items[1]"
        class="mt-[48px]  "
    />
    <CardSlide
        :info="items[2]"
        class="mt-[48px] "
    />
  </div>
</template>

<style scoped lang="scss">
.hero {
  height: 5svh;
  width: 100%;
}

.card-wrapper {
  width: 100%;
  margin: auto;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.5s ease;
}

.card {
  width: 100%;
  height: 100%;
}

.extra-trigger {
  margin-top: -10svh;
}

.text-excellence {
  color: var(--Black, #080808);
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 32.5px */
}

.cards {
  margin-left: 100px;
}

.scrollContainer {
  position: relative;
  overflow: hidden;
}

.card-wrapper {
  position: relative;
}

.card {
  position: relative;
  transition: transform 1s ease, all 1s ease;
}

.card-active {
  z-index: 10; /* Bring the active card to the front */
}
</style>