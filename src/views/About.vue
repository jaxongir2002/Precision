<script setup>
import Content from "@/components/ui/Content.vue";
import Footer from "@/components/ui/Footer.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import OurExpertise from "@/components/About/OurExpertise.vue";
import Innovating from "@/components/About/Innovating.vue";
import Collaboration from "@/components/About/Collaboration.vue";
import {gsap} from "gsap";

const logoImg = ref([
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutP.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutR.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutE.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutC.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutI.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutS.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutI.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutO.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutN.svg', import.meta.url),
  },
  {
    img: new URL('@/assets/img/LogoNameAbout/AboutLogo.svg', import.meta.url),
  },
]);
const arrowDown = ref(new URL('@/assets/img/About/ArrowAbout.svg', import.meta.url));
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
  <div class="scrollContainer _2 bg-[#F2EDE8] relative">
    <section ref="heroSection" class="hero div-block-27" id="hero">
      <Content :logo-img="logoImg" color="#300A0A" :arrow-down="arrowDown"/>
    </section>
    <section ref="pictureGallerySection" id="picture-gallery" class="picture-gallery div-block-27 z-10">
      <OurExpertise/>
    </section>
  </div>
  <Innovating/>
  <Collaboration/>
  <Footer/>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
}

.picture-gallery {
  width: 100%;
  transition: .2s;
}

.scrollContainer {
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