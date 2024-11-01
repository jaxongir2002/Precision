<script setup>
import USEmap from "@/components/ui/USEmap.vue";
</script>

<template>
  <div class="bg-[#F2EDE8] rounded-[30px]  _container relative max-lg:hidden" style="margin-top: 80px">
    <div class="absolute z-10 right-0 left-0 flex justify-center top-[32px]">
      <button class="flex gap-2.5 btn_location ">
        <img src="@/assets/img/IcconMap.svg" alt=""> USA
      </button>
    </div>
    <USEmap/>
    <div class="flex justify-between pb-[40px]">
      <div class="text-map text-[#300A0A] w-[30%]">
        Mapping the
        <span class="text-[#F5733D]">Future</span> of Healthcare.
      </div>
      <div class="flex items-end">
        <img src="@/assets/img/LOGOCOlor.svg" class="" alt="precision logo">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.btn_location {
  display: inline-flex;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: var(--Bordeaux-brown, #300A0A);
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.text-map{
  leading-trim: both;
  text-edge: cap;
  font-size: 40px;
  font-style: normal;
  letter-spacing: 0.3px;
  font-weight: 500;
  line-height: 130%; /* 52px */
}
</style>