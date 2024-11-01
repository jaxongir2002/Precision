<script setup>
import Content from "@/components/ui/Content.vue";
import OurPhilosophy from "@/components/ui/OurPhilosophy.vue";
import OurMission from "@/components/ui/OurMission.vue";
import ExcellenceCare from "@/components/ui/ExcellenceCare.vue";
import Map from "@/components/ui/Map.vue";
import SliderSection from "@/components/ui/SliderSection.vue";
import Form from "@/components/ui/Form.vue";
import Footer from "@/components/ui/Footer.vue";
import {onMounted,onBeforeUnmount, ref} from "vue";
import {gsap} from "gsap";
const logoImg = ref([
  {
    img: new URL('@/assets/img/LogoName/LogoP.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoR.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoE.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoC.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoI.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoS.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoI.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoO.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoName/LogoN.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoElement.svg', import.meta.url),
  },
]);
const arrowDown = ref(new URL('@/assets/img/Arrow_Down.svg', import.meta.url));
const mobileVersion = ref(new URL('@/assets/img/mobile/logoMobile.svg',import.meta.url));
const iconMobile = ref(new URL('@/assets/img/mobile/mobileIcon.svg ', import.meta.url));
const heroSection = ref(null);
const pictureGallerySection = ref(null);

const handleScroll = () => {
  if (pictureGallerySection.value) {
    const rect = pictureGallerySection.value.getBoundingClientRect();
    const isInViewport = (rect.top < window.innerHeight && rect.bottom >= 0);
    const scrollDirection = window.scrollY > prevScrollY ? 'down' : 'up';

    gsap.to(heroSection.value, {
      scale: isInViewport ? (scrollDirection === 'down' ? 0.9 : 1) : 1,
      duration: 0.3,
      opacity: isInViewport ? (scrollDirection === 'down' ? 0.7 : 1) : 1,
      overwrite: true
    });

    prevScrollY = window.scrollY;
  }
};

let prevScrollY = 0;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="scrollContainer _2 bg-[#300A0A] relative">
    <section class="hero div-block-27" id="hero" ref="heroSection">
      <Content :icon-mobile="iconMobile" :mobile-version="mobileVersion" :logo-img="logoImg" :arrow-down="arrowDown" color="#fff" background-color="3300A0A"/>
    </section>
    <section ref="pictureGallerySection" id="picture-gallery" class="picture-gallery div-block-27 z-10">
      <OurPhilosophy/>
    </section>
  </div>
  <OurMission/>
  <ExcellenceCare class="_container"/>
  <Map/>
  <SliderSection class="mb-[200px]"/>
  <Form/>
  <Footer/>
</template>
<style>
body{
  background: #fff !important;
}
</style>
<style scoped lang="scss">

.hero {
  width: 100%;
}
.scaled {
  transform: scale(0.8); /* Scale down to 80% */
}
.picture-gallery {
  width: 100%;
  transition: .2s;
}
.scrollContainer{
  z-index: 3;
  flex-flow: column;
  position: relative;
}
.scrollContainer._2 {
  grid-column-gap: 20rem;
  grid-row-gap: 0;
  display: flex;
}
.div-block-27 {
  position: sticky;
  top: 0;
}
</style>