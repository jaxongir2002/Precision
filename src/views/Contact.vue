<script setup>
import ContactUs from "@/components/ContactUs/ContactUs.vue";
import ContactLogo from "@/components/ContactUs/ContactLogo.vue";
import Form from "@/components/ui/Form.vue";
import Footer from "@/components/ui/Footer.vue";

</script>

<template>
  <div class="relative">
    <ContactUs/>
    <ContactLogo/>
    <Form class="relative top-[210px]"/>
    <Footer class="relative top-[210px]"/>
  </div>
</template>

<style lang="scss">
body{
  background: #fff;
}

</style>