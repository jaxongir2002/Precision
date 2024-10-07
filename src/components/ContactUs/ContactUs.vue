<script setup>

</script>

<template>
  <div class="_container">
    <div class="flex gap-[5px] relative top-[140px] items-center">
      <img class="animation-logo w-[24ppx] h-[24px]" src="@/assets/img/LogoElement.svg" alt="">
      <div class="text-route text-[18px] ml-[5px]">
        Home
      </div>
      <img src="@/assets/img/RouteIcon.svg" alt="">
      <div class="text-route text-[18px]">
        Contact us
      </div>
    </div>
    <div class="mt-[72px] relative top-[152px] flex justify-between">
      <div class="">
        <div class="flex gap-[20px] items-center justify-end">
          <div class="w-[65px] h-[65px] flex justify-center items-center bg-[#300A0A] rounded-full p-[15px]">
            <img class="animation-logo" src="@/assets/img/LogoElement.svg" alt="">
          </div>
          <div class="text-route text-[80px]">
            WE’D LOVE TO
          </div>
        </div>
        <div class="flex gap-[20px] items-center">
          <div class="text-route text-[80px]">
            HEAR FROM YOU
          </div>
          <div class="w-[65px] h-[65px] flex justify-center items-center bg-[#BFCCCF] rounded-full">
            <img src="@/assets/img/sendIcon.svg" alt="">
          </div>
        </div>
      </div>
      <div class="text-route text-right text-[20px] flex items-end">
      <span class="w-[80%]">
         We're excited to hear
        from you and explore the possibilities together.
      </span>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.text-route {
  color: var(--Bordeaux-brown, #300A0A);
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */
}
</style>