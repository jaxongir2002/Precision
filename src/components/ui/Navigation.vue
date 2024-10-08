<script setup>
import {ref, watch, computed, onMounted} from "vue";
import Menu from "@/components/ui/Menu.vue";
import {useLenisStore} from "@/store/leniStore.js";

const props = defineProps({
  logo: {
    type: String,
    default: ''
  },
  color: String,
  backgroundColor: String,
  close: String,
  infoMenu: Object,
})
const lenisStore = useLenisStore();

const openMenu = ref(false);
const isMenuVisible = ref(false);
const isNavFixed = ref(false);
const isNavSticky = ref(false);
let showScroll = null;

const closeMenu = () => {
  openMenu.value = false;
  setTimeout(() => {
    isMenuVisible.value = false;
  }, 500);
};

const menuClass = computed(() => {
  if (openMenu.value) {
    isMenuVisible.value = true;
    return 'menu_top';
  } else {
    return 'closed';
  }
});

function openBurger() {
  if (openMenu.value === true) {
    openMenu.value = true;
    if (showScroll) {
      clearTimeout(showScroll);
      showScroll = null;
    }
    lenisStore.stopLenis();
  }
}

function closeBurger() {
  if (openMenu.value === false) {
    openMenu.value = false;
    showScroll = setTimeout(() => {
      lenisStore.startLenis();
    }, 300);
  }
}

onMounted(() => {
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos && currentScrollPos > 1000) {
      isNavFixed.value = true;
      isNavSticky.value = false
    } else {
      isNavSticky.value = true
      isNavFixed.value = false
    }
    if (currentScrollPos < 100) isNavSticky.value = false
    prevScrollPos = currentScrollPos;
  });

});

watch(openMenu, (newValue) => {
  if (newValue) {
    openBurger()
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
    closeBurger()
  }
});
</script>

<template>
  <div :style="{background:props.backgroundColor  }" class="bg-[#300A0A] sticky-header" :class="{
      'sticky-header--fixed': isNavFixed,
      'sticky-header--fixed-back': isNavSticky
    }">
    <nav class="flex justify-between items-center _container" style="padding-top: 28px">
      <div class="logo">
        <img :src="props.logo" alt="Precision Logo">
      </div>
      <div>
        <button class="menu flex gap-2.5 items-center">
          <span @click="openMenu = true" :style="{color:props.color}">Menu</span>
          <img @click="closeMenu" class="animation_icon" v-if="openMenu" :src="props.close" alt="">
        </button>
      </div>
      <div>
        <button class="menu rounded-[500px] bg-[#F5733D] flex gap-3 items-center px-[20px] py-[10px]">
          Contact us<img src="@/assets/img/Arrow_Left.svg" alt="arrow left icon ">
        </button>
      </div>
    </nav>
    <Menu @close-menu="closeMenu" :background-color="props.infoMenu.backgroundColor" :img="props.infoMenu.img.toString()"
          :color="props.infoMenu.color.toString()"
          v-show="isMenuVisible" :class="menuClass" class="absolute w-full h-full z-[444444]"/>
  </div>

</template>

<style scoped lang="scss">

.sticky-header {
  transition: all .5s ease;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3333;
  height: 10%;
}

.sticky-header--fixed {
  animation-duration: .5s;
  animation-name: header-animation;
  top: 0;
}

.sticky-header--fixed-back {
  animation-duration: .5s;
  animation-name: header-animation-back;
  top: -100px;

}


@keyframes header-animation {
  0% {
    top: -100px;
  }
  100% {
    top: 0;
  }
}

@keyframes header-animation-back {
  0% {
    top: 0;
  }
  100% {
    top: -100px;
  }
}

.menu_top {
  animation: top-bottom 1s forwards;
  transition: 0.3s ease all;
}

.closed {
  animation: bottom-top 1s forwards; // Animation for closing
  transition: 0.3s ease all;
}

.animation_icon {
  animation: animation_close 1s forwards; // Animation for closing
  transition: 0.3s ease all;
  animation-duration: 1s;
}

@keyframes top-bottom {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes animation_close {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

@keyframes bottom-top {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

nav {
  .menu {
    color: var(--White, #F2EDE8);
    font-family: "Neue Haas Grotesk Display Pro", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>