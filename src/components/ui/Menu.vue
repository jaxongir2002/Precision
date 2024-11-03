<script setup>
import {useRouter} from "vue-router";

const emit = defineEmits(['closeMenu'])
const props = defineProps({
  backgroundColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
})

const router = useRouter();

function pushPage(page) {
  router.push(page);
  emit('closeMenu')
}
</script>

<template>
  <div class="menu-nav z-50" :style="{backgroundColor: props.backgroundColor}">
    <div class="_container max-lg:hidden h-[90%]">
      <div class="flex flex-col justify-between  h-full">
        <div class="flex justify-between mt-[140px] ">
          <div class="flex flex-col gap-5">
            <div class="social-text text-[20px]" :style="{color: props.color}">
              Socials
            </div>
            <div class="social-text text-[16px]" :style="{color: props.color}">
              Instagram
            </div>
            <div class="social-text text-[16px]" :style="{color: props.color}">
              LinkedIn
            </div>
            <div class="social-text text-[16px]" :style="{color: props.color}">
              Facebook
            </div>
          </div>
          <div class="flex flex-col gap-2.5 menu_nav">
            <div class="social-text text-[20px]" :style="{color: props.color}">
              Menu
            </div>
            <div @click="pushPage('/')" class="social-text text-[60px] menu" :style="{color: props.color}">
              Home
            </div>
            <div @click="pushPage('/about')" class="social-text text-[60px] menu" :style="{color: props.color}">
              About
            </div>
            <div @click="pushPage('/contact-us')" class="social-text text-[60px] menu" :style="{color: props.color}">
              Contact us
            </div>
          </div>
          <img :src="props.img" alt="">
        </div>
        <div class="flex justify-between mt-[180px] pb-[50px]">
          <div class="footer-text-specialize text-[#CCBFA8] w-[20%]">
            <span class="" :class="`text-[${props.color}]`">We specialize </span> in providing
            precision <span :class="`text-[${props.color}]`">focused </span> healthcare.
          </div>
          <div :class="`text-[${props.color}]`" class="social-text text-[16px] w-[20%] flex items-end">
            Get in touch:<span style="margin-left: 10px; color: #F5733D">lorem@ipsum</span>
          </div>
          <div :class="`text-[${props.color}]`" class="social-text text-[16px] flex gap-2 items-end">
            © 2024 Precision, Inc.
          </div>
        </div>
      </div>
    </div>

<!--mobile version-->
    <div class="_container h-[90%] hidden max-lg:block">
      <div class="flex flex-col justify-between  h-full">
        <div class="flex justify-between mt-[140px] ">
          <div class="flex flex-col gap-2.5 menu_nav">
            <div class="social-text text-[20px]" :style="{color: props.color}">
              Menu
            </div>
            <div @click="pushPage('/')" class="social-text text-[60px] menu" :style="{color: props.color}">
              Home
            </div>
            <div @click="pushPage('/about')" class="social-text text-[60px] menu" :style="{color: props.color}">
              About
            </div>
            <div @click="pushPage('/contact-us')" class="social-text text-[60px] menu" :style="{color: props.color}">
              Contact us
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu_nav .menu:before {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: 0;
  left: 0; /* Set to 0 for animation */
  background-color: #F6733C; /* Use fixed color */
  visibility: hidden;
  transition: visibility 0s 0.5s, width 0.5s ease; /* Delay visibility change */
}

.menu_nav .menu {
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
  transition: color 0.5s ease; /* Transition for color change */
}

.menu_nav .menu:hover {
  color: #F6733C !important;
}

.menu_nav .menu:hover:before,
.menu_nav .menu.active:before {
  visibility: visible;
  width: 100%;
  transition: width 0.5s ease; /* Only  width */
}

.menu-nav {
  height: 100vh;
  animation: top-bottom 1s infinite alternate;
  transition: 0.3s ease all;
}

@keyframes top-bottom {
  from {
    transform: translateY(-100);
  }
  to {
    transform: translateY(0);
  }
}

.social-text {
  font-style: normal;

  font-weight: 500;
  line-height: 130%; /* 26px */
}

.footer-text-specialize {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
</style>