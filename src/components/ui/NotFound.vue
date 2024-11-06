<script setup>
import {gsap} from 'gsap';
import {onMounted, ref} from "vue";
import ButtonPr from "@/components/ui/ButtonPr.vue";
import {useRouter} from "vue-router";
import Footer from "@/components/ui/Footer.vue";

const router = useRouter()
const btnHome = ref(null);
onMounted(() => {
  let Ops = new SplitText(".oops", {type: "chars"});
  let oopsChars = Ops.chars;
  gsap.from(oopsChars, {
    yPercent: 130,
    stagger: 0.02,
    opacity: 0
  });
  gsap.from(btnHome.value, {
    duration: 0.5,
    y: "0",
    scale: 0.3,
    transition: 0.3,
    ease: "power1.inOut",
  });
})

</script>

<template>
  <section id="container" class="bg-[#F2EDE8]">
    <div class="title-container" style=" max-width: 1440px; margin: auto;">
      <div class="title-logo flex gap-3 not-found items-center">4
        <img class="w-[200px] h-[200px] animation-logo" src="@/assets/img/BigLogo.svg" alt="">
        4
      </div>
      <div class="mt-[32px] relative z-[33]">
        <div ref="oops" class="text-[#080808] text-[24px] font-medium oops">
          Something went wrong
        </div>
        <div class="flex justify-center">
          <button-pr label="Back to home" ref="btnHome" class=" mt-[38px] " @click="router.push('/')"/>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
body{
  background: #F2EDE8;
}
</style>
<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .title-logo {
    font-size: 137.09px !important;
    line-height: 55px !important;
  }

  .glass-effect {
    display: none;
  }
  .oops-sorry {
    font-size: 14px !important;
    margin-top: 16px !important;
  }
  .btn-go-home {
    width: 160px !important;
    height: 40px !important;
    font-size: 14px !important;
    line-height: 140% !important;
    padding: 12px 34px !important;
  }
  .title-container {
    top: 40% !important;
    height: 90% !important;
  }
  #container {
    height: 100vh !important;
  }
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  height: 100vh;
}

.rotate-number {
  transform: rotate(-14.268deg);
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -35%);
  z-index: 22;
}

.btn-go-home {
  display: inline-flex;
  padding: 12px 64px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 500px;
  background: #F9F9F9;
  color: #0E0E0E;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}

.title-logo {
  color: #300A0A;
  text-align: center;
  font-size: 267px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  transition: 1s;
}

@keyframes glass-effect {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>