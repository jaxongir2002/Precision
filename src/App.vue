<script setup>
import {onMounted, ref, computed} from "vue";
import {useLenisStore} from "@/store/leniStore.js";
import {Vue3Lottie} from "vue3-lottie";
import Navigation from "@/components/ui/Navigation.vue";
import {useRoute} from "vue-router";

const store = useLenisStore();

const animation = ref(new URL('@/assets/animates/data.json', import.meta.url));
const showLoader = ref(true);
const classAnimate = ref(false);

const route = useRoute();

onMounted(() => {
  store.initLenis();

  const hasVisited = sessionStorage.getItem('hasVisited');
  if (hasVisited) {
    showLoader.value = false;
  }
});

const onAnimationComplete = () => {
  sessionStorage.setItem('hasVisited', 'true');
  showLoader.value = false;
};

setTimeout(() => {
  onAnimationComplete()
}, 5000)

setTimeout(() => {
  classAnimate.value = true
}, 5000)


const logoHome = new URL('@/assets/img/Logo.svg', import.meta.url);
const logoAbout = new URL('@/assets/img/LogoAbout.svg', import.meta.url);
const closeHome = new URL('@/assets/img/CloseIcon.svg', import.meta.url);
const closeAbout = new URL('@/assets/img/About/close.svg', import.meta.url);

const infoMenuHome = {
  backgroundColor: '#300A0A',
  color: '#F2EDE8',
  img: new URL('@/assets/img/animation.svg', import.meta.url),
};

const infoMenuAbout = {
  backgroundColor: '#F2EDE8',
  color: '#300A0A',
  img: new URL('@/assets/img/About/animationAbout.svg', import.meta.url),
};
const infoMenuContact = {
  backgroundColor: '#fff',
  color: '#300A0A',
  img: new URL('@/assets/img/About/animationAbout.svg', import.meta.url),
};
const imgBurger = new URL('@/assets/img/burger.svg', import.meta.url);
const imgContact = new URL('@/assets/img/About/mobileBurgerContact.svg', import.meta.url);
const logo = computed(() => {
  return route.path === '/' ? logoHome : route.path === '/contact-us' ? logoAbout : logoAbout;
});

const closeIcon = computed(() => {
  return route.path === '/' ? closeHome : route.path === '/contact-us' ? closeAbout : closeAbout;
});

const infoMenu = computed(() => {
  if (route.path === '/contact-us') {
    return infoMenuContact;
  } else if (route.path === '/') {
    return infoMenuHome; // Default for home or other routes
  } else {
    return infoMenuAbout;
  }
});
const mobileBurger = computed(() => {
  if (route.path === '/contact-us') {
    return imgContact;
  } else if (route.path === '/about') {
    return imgContact;
  } else if (route.path === '/') {
    return imgBurger;
  }
});

</script>

<template>
  <div v-if="showLoader">
    <Vue3Lottie
        ref="lottieContainer"
        :animationLink="animation"
        :width="'100vw'"
        :height="'100vh'"
        :loop="false"
    />
  </div>
  <Navigation
      :mobile-burger="mobileBurger"
      v-if="!showLoader"
      :info-menu="infoMenu"
      :close="closeIcon.toString()"
      :logo="logo.toString()"
      :background-color="infoMenu.backgroundColor"
      :color="infoMenu.color"
  />
  <router-view v-if="!showLoader"/>
</template>

<style scoped lang="scss">
.loader {
  transition: opacity 0.5s ease;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 9999;
}

.loader.hidden {
  opacity: 0;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
