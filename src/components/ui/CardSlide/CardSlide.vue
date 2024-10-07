<script setup>
import CardBuild from "@/components/ui/CardSlide/CardBuild.vue";

const props = defineProps({
  info: Object,
})
</script>

<template>
  <div :style="{background:props.info.background}" class="card_slide p-[50px] flex justify-between it">
    <div class="flex flex-col justify-between w-full ">
      <div>
        <button class="btn_prince" :style="{color: props.info.color}">
          {{ props.info.buttonText }}
        </button>
        <div class="text-core-value mt-[30px]" :style="{color: props.info.color}">
          {{ props.info.header }}
        </div>
      </div>
      <div class="text-description w-[60%]" :style="{color: props.info.color}">
        {{ props.info.description }}
      </div>
    </div>
    <div class="w-full">
      <CardBuild v-if="props.info.id ===1"/>
      <div v-else-if="props.info.id ===2" class="relative">
        <div class="bg-[#F2EDE8] rounded-[30px] absolute p-[30px] bottom-[250px] right-[250px]">
          <img class="animation-logo" src="@/assets/img/IconLOGO.svg" alt="">
        </div>
        <img src="@/assets/img/CardSecond.svg" alt="">
      </div>
      <img src="@/assets/img/CardThird.svg" alt="" v-else-if="props.info.id ===3">

    </div>
    <div class="flex flex-col w-full justify-between items-end">
      <div class="number flex justify-end" :style="{color: props.info.color}">
        {{ props.info.id }}
      </div>
      <img class="w-[227px] flex justify-end" src="@/assets/img/SlideFon.svg" alt="">
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
    display: inline-flex;
    padding: 5px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 500px;
    border: 1px solid #300A0A;
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
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
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