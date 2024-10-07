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
    <div class="absolute text-header top-[100px] w-[65%] text-center right-[80px] z-10">
      Built on Core Values That Matter
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="381" class="relative top-[25px]" height="556" viewBox="0 0 381 556"
         fill="none">
      <path
          d="M0.394531 66.5636C0.394531 29.8641 30.1454 0.113281 66.8449 0.113281H107.303C116.243 0.113281 124.262 5.61097 127.486 13.9494C130.709 22.2878 138.728 27.7855 147.668 27.7855H190.395H231.083C240.023 27.7855 248.042 22.2878 251.266 13.9494C254.489 5.61097 262.509 0.113281 271.448 0.113281H313.944C350.644 0.113281 380.395 29.8641 380.395 66.5636V555.113H0.394531V66.5636Z"
          fill="#CCBFA8"/>
    </svg>
    <swiper
        :slidesPerView="2"
        :spaceBetween="20"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper relative bottom-[300px]"
    >
      <swiper-slide v-for="item in 4">
        <img class="w-[256px]" src="@/assets/img/card.svg" alt="">
      </swiper-slide>

    </swiper>
  </div>
</template>

<style lang="scss">
.swiperSlide{
  .swiper-pagination-bullet{
    border-radius: 4.43px !important;
    background: rgba(48, 10, 10, 0.30) !important;
    width: 35px  !important;
    height: 3px  !important;
    flex-shrink: 0  !important;
  }
  .swiper-pagination-bullet-active{
    border-radius: 4.43px !important;
    background: var(--Bordeaux-brown, #300A0A) !important;
  }
  .swiper-pagination{
    position: absolute !important;
    top: -5px !important;
    z-index: 33333 !important;
  }
  .swiper-wrapper{
    position: relative !important;
    top: 35px !important;
  }
  .swiper{
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
  color: var(--Bordeaux-brown, #300A0A);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 39px */
  text-transform: capitalize;
}
</style>