<script setup>
import {ref} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: 'label'
  }
})
const inputText = ref('')
</script>

<template>
  <div class="group">
    <input v-model="inputText" type="text" required>
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{ props.placeholder }}</label>
  </div>
</template>

<style scoped lang="scss">
.group {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #310B0A1A;
}

input:focus {
  outline: none;
}

label {
  color: var(--Bordeaux-brown, #300A0A);
  font-family: "Neue Haas Grotesk Display Pro", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
}

input:focus ~ label,
input:valid ~ label,
input:hover ~ label {
  top: -20px;
  font-size: 14px;
  color: #300A0A;
}

/* BOTTOM BARS ================================= */
.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar:before, .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #F5733D;
  transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active and hover state */
input:focus ~ .bar:before,
input:focus ~ .bar:after,
input:hover ~ .bar:before,
input:hover ~ .bar:after {
  width: 50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */
input:focus ~ .highlight,
input:hover ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@keyframes inputHighlighter {
  from {
    background: #F5733D;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>