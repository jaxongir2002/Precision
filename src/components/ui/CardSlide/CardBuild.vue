<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination} from 'swiper/modules';
import {ref} from "vue";
import 'swiper/css';
import 'swiper/css/pagination';

const modules = ref([Pagination])
</script>

<template>
  <div class="card swiperSlide">
    <div class="absolute text-header text-[30px]
     max-lg:text-[16px] max-lg:right-[30px] max-lg:top-[60px] top-[100px] w-[65%] text-center right-[80px] z-10">
      Built on Core Values That Matter
    </div>
    <div class="hidden max-lg:block">
      <svg xmlns="http://www.w3.org/2000/svg" width="190" height="278" viewBox="0 0 190 278" fill="none">
        <path d="M0 33.7252C0 15.3754 14.8754 0.5 33.2252 0.5H53.4544C57.9242 0.5 61.9339 3.24885 63.5456 7.41805C65.1572 11.5873 69.1669 14.3361 73.6368 14.3361H95H115.344C119.814 14.3361 123.824 11.5873 125.436 7.41805C127.047 3.24885 131.057 0.5 135.527 0.5H156.775C175.125 0.5 190 15.3754 190 33.7252V278H0V33.7252Z" fill="#CCBFA8"/>
      </svg>
    </div>
    <div class="max-lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="381" class="relative top-[25px]" height="556" viewBox="0 0 381 556"
           fill="none">
        <path
            d="M0.394531 66.5636C0.394531 29.8641 30.1454 0.113281 66.8449 0.113281H107.303C116.243 0.113281 124.262 5.61097 127.486 13.9494C130.709 22.2878 138.728 27.7855 147.668 27.7855H190.395H231.083C240.023 27.7855 248.042 22.2878 251.266 13.9494C254.489 5.61097 262.509 0.113281 271.448 0.113281H313.944C350.644 0.113281 380.395 29.8641 380.395 66.5636V555.113H0.394531V66.5636Z"
            fill="#CCBFA8"/>
      </svg>
    </div>

    <swiper
        :slidesPerView="2"
        :spaceBetween="20"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper relative bottom-[300px] max-lg:bottom-[180px]"
    >
      <swiper-slide v-for="item in 4" :key="item">
        <img class="w-[256px]" src="@/assets/img/card.svg" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.swiperSlide {
  .swiper-pagination-bullet {
    border-radius: 4.43px !important;
    background: rgba(48, 10, 10, 0.30) !important;
    width: 35px !important;
    height: 3px !important;
    flex-shrink: 0 !important;
  }

  .swiper-pagination-bullet-active {
    border-radius: 4.43px !important;
    background: var(--Bordeaux-brown, #300A0A) !important;
  }

  .swiper-pagination {
    position: absolute !important;
    top: -5px !important;
    z-index: 33333 !important;
  }

  .swiper-wrapper {
    position: relative !important;
    top: 35px !important;
  }

  .swiper {
    height: 100% !important;
    left: 22px !important;
  }
}
</style>
<style scoped lang="scss">
.card {
  width: 440px;
  height: 610px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--White, #FFF);
  padding: 30px;
  position: relative;
}

.text-header {
  color:  #300A0A;
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  text-transform: capitalize;
}

@media (max-width: 767px) {
  .card {
    width: 220px;
    height: 305px;
    flex-shrink: 1;
    border-radius: 20px;
    background: var(--White, #FFF);
    padding: 20px;
    position: relative;
  }
}
</style>