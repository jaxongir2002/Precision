<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {FreeMode} from "swiper/modules";
import {onMounted, ref} from "vue";
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const modules = ref([FreeMode, Navigation])
gsap.registerPlugin(ScrollTrigger, SplitText);

const triggerItem = ref(null);

function wordFade() {
  let mySplitText = new SplitText(".text-stories-animate", {type: "chars"});
  let chars = mySplitText.chars;
  let ballTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerItem.value,
    },
  });
  ballTimeline.add("start")
      .from(chars, {
        duration: 0.5,
        yPercent: 130,
        opacity: 0,
        ease: 'fade-in',
      });
}

onMounted(() => {
  wordFade()
})
</script>

<template>
  <div class="_container" ref="triggerItem">
    <div class="text-mission flex gap-[16px] items-center col-span-4 relative bottom-[13%] mt-[100px]">
      <img class="animation-logo" src="@/assets/img/OurPhilosophy.svg" alt=""> Precision Testimonials
    </div>
    <swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :pagination="{ clickable: true }"
        :modules="modules"
        :loop="true"
        class="mySwiper"
        :flip-effect="false"
        :navigation="true"
        :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10
      },
      '@0.75': {
        slidesPerView: 1,
        spaceBetween: 20
      },
      '@1.00': {
        slidesPerView: 1,
        spaceBetween: 40
      },
      '@1.50': {
        slidesPerView: 1,
        spaceBetween: 50
      }
    }"
    >
      <swiper-slide v-for="(item, index) in 5" :key="index">
        <div class="flex justify-between mt-[75px] max-lg:flex-col">
          <div class="w-[20%] max-lg:w-full">
            <div class="text-stories text-stories-animate text-[#300A0A] w-[70%] max-lg:w-[40%]">
              Real <span class="text-[#F5733D]">Stories</span>,
              Real <span class="text-[#F5733D]">Care</span>.
            </div>
            <div class="text-description text-stories-animate" style="font-size: 20px">
              Get authentic insights from our residents about their Precision experience.
            </div>
          </div>

          <div class="w-[33%] max-lg:w-full">
            <img class="relative bottom-[20px] max-lg:static max-lg:mb-3 max-lg:mt-[40px] right-[20px]"
                 src="@/assets/img/Mark.svg" alt="">
            <div class="text-description text-[28px] max-lg:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Diam netus sapien netus iaculis dignissim. Lorem ipsum dolor sit
              amet
              consectetur. Diam netus sapien netus iaculis dignissim.
              <div class="mt-10 flex gap-5 items-center">
                <img class="w-[60px] h-[60px]" src="@/assets/img/EffectIcon.svg " alt="">
                <div class="text-description text-5">
                  Lorem ipsum
                  <div class="text-[#00000040] text-[16px]">
                    Lorem ipsum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  width: 60px !important;
  height: 60px !important;
  border-radius: 500px !important;
  background: transparent;
  border: 1px solid #300A0A40;
  cursor: pointer;
  transform-origin: right bottom;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  position: absolute !important;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
border: #300A0A solid 1px;
}
.swiper-button-prev {
  position: absolute !important;
  top: 89%;
  left: 0;
}

.swiper-button-next {
  position: absolute !important;
  top: 89%;
  right: 92%;
  z-index: 333;
}

@media (max-width: 768px) {
  .swiper-slide{
  height: 64vh !important;
  }
  .swiper-button-prev {
    position: absolute !important;
    top: 93% !important;
    left: 30% !important;
    z-index: 333 !important;
  }
  .swiper-button-next {
    position: absolute !important;
    top: 93% !important;
    right: 32% !important;
    z-index: 333;
  }
}

@media (max-width: 1444px) {
  .swiper-button-prev {
    position: absolute !important;
    top: 84%;
    left: 0;
  }

  .swiper-button-next {
    position: absolute !important;
    top: 84%;
    right: 90%;
    z-index: 333;
  }
}

.swiper-button-next {
  &::after {
    content: '';
  }

  &::before {
    content: '';
    display: block;
    background-image: url('@/assets/img/Arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 18px;
    height: 18px;
  }
}

.swiper-button-prev {
  &::after {
    content: '';
  }

  &::before {
    content: '';
    display: block;
    background-image: url('@/assets/img/ArrowLeft.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 18px;
    height: 18px;
  }
}
</style>
<style scoped lang="scss">
.text-mission {
  color: var(--White, #300A0A);
  font-family: "Neue Haas Grotesk  Display Pro", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}

.text-stories {
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 52px */
}

.text-description {
  color: var(--Bordeaux-brown, #300A0A);
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 26px */
}

@media (max-width: 767px) {
  .text-stories {
    font-size: 30px;
  }
}
</style>