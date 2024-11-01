<script setup>
import CardBuild from "@/components/ui/CardSlide/CardBuild.vue";

const props = defineProps({
  info: Object,
})
</script>

<template>
  <div :style="{background:props.info.background}" class="card_slide  p-[50px] max-lg:p-[25px]
  flex justify-between max-lg:flex-col">
    <div class="flex flex-col justify-between w-full">
      <div>
        <div class="hidden max-lg:flex justify-between items-center">
          <button class="btn_prince w-[100%] h-[28px]" :style="{color: props.info.color,border:`1px solid ${props.info.borderColor}`}">
            {{ props.info.buttonText }}
          </button>
          <div class="flex flex-col w-full justify-between items-end  ">
            <div class="number flex justify-end" :style="{color: props.info.color}" style="font-size: 60px">
              {{ props.info.id }}
            </div>
          </div>
        </div>
        <button class="btn_prince flex max-lg:hidden" :style="{color: props.info.color,border:`1px solid ${props.info.borderColor}`}">
          {{ props.info.buttonText }}
        </button>
        <div class="text-core-value mt-[30px]" :style="{color: props.info.color}">
          {{ props.info.header }}
        </div>
      </div>
      <div class="text-description w-[70%] max-lg:w-full max-lg:hidden" :style="{color: props.info.color}">
        {{ props.info.description }}
      </div>
    </div>
    <div class="w-full max-lg:mt-5">
      <CardBuild v-if="props.info.id === 1"/>
      <div v-else-if="props.info.id === 2" class="relative ">
        <div class="bg-[#F2EDE8] rounded-[30px] max-lg:right-[120px] max-lg:bottom-[160px] max-lg:p-[20px] absolute p-[30px] bottom-[250px] right-[250px]">
          <img class="animation-logo" src="@/assets/img/LogoElement.svg" alt="">
        </div>
        <img src="@/assets/img/CardSecond.svg" alt="">
      </div>
      <div class="relative" v-else-if="props.info.id ===3">
        <img src="@/assets/img/IconLOGO.svg" class="absolute top-[267px] max-lg:top-[196px] max-lg:left-[28px] animation-logo
        left-[37.8px] max-2xl:top-[259px] max-2xl:left-[36px] w-[35px] max-lg:w-[25px]" alt="">
        <img src="@/assets/img/CardThird.svg" alt="">
      </div>

    </div>
    <div class="text-description w-[70%] max-lg:w-full max-lg:block hidden mt-5" :style="{color: props.info.color}">
      {{ props.info.description }}
    </div>
    <div class="flex flex-col w-full justify-between items-end max-lg:hidden ">
      <div class="number flex justify-end" :style="{color: props.info.color}">
        {{ props.info.id }}
      </div>
      <img class="w-[227px] flex justify-end max-lg:hidden" src="@/assets/img/SlideFon.svg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.card_slide {
  border-radius: 30px;

  .btn_prince {
    color: #300A0A;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 500px;
  }

  .text-core-value {
    color: #300A0A;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 39px */
  }

  .text-description {
    color: #300A0A;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 25.6px */
  }

  .number {
    color: #300A0A;
    font-size: 120px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}

</style>