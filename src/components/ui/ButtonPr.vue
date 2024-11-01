<script setup>
const props = defineProps({
  label: {
    type:String,
    default: '',
  },
})
</script>

<template>
  <Button class="button-precision">
    {{ props.label }}
    <img src="@/assets/img/Arrow_Left.svg" alt="">
  </Button>
</template>

<style scoped lang="scss">
.button-precision {
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 500px;
  background:  #300A0A ;
  color:#FFF;
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  transition: 1s;
}

.button-precision:hover {
  transform: scale(1.02);
  background:  #F5733D ;
}

.button-precision:hover img {
  animation: arrow-left .3s alternate infinite;
}

@keyframes arrow-left {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(10px);
    opacity: 0.8;
  }
}
</style>