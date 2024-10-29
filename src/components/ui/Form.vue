<script setup>
import Input from "@/components/ui/Input.vue";
import gsap from "gsap";
import {ref, onMounted} from "vue";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ButtonPr from "@/components/ui/ButtonPr.vue";

gsap.registerPlugin(ScrollTrigger, SplitText);

const triggerItemHealth = ref(null);
const modalFinish = ref(true);
const finishModal = ref(null);

function wordFade() {
  let mySplitText = new SplitText(".text-health-animate", {type: "chars"});
  let chars = mySplitText.chars;
  let ballTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: triggerItemHealth.value,
    },
  });
  ballTimeline.add("start")
      .from(chars, {
        duration: 0.3,
        yPercent: 130,
        stagger: 0.01,
        opacity: 0,
        ease: 'power2.inOut',
      })
      .from('.btn-animation-links', {
        scale: 0.8
      })
}

onMounted(() => {
  wordFade();
  gsap.from(finishModal.value, {
    duration: 0.5,
    opacity: 0,
    scale:0.8,
    y: -50,
    ease: "power3.out",
  });
})
</script>

<template>
  <div ref="triggerItemHealth" class="_container">
    <div class="text-mission flex gap-[16px] items-center col-span-4 relative bottom-[13%] mt-[100px]">
      <img src="@/assets/img/OurPhilosophy.svg" alt=""> Contact Us
    </div>
    <div class="grid grid-cols-12 mt-[70px] max-lg:mt-[25px]">
      <div class="col-span-6 max-lg:col-span-12 w-[40%] max-lg:w-[80%]">
        <div class="flex flex-col justify-between gap-[70px] max-lg:gap-[30px]">
          <div class="header-text text-[40px] max-lg:text-[30px] text-[#300A0A] text-health-animate">
            Empowering <span class="text-[#F5733D]">Health</span>.
            Elevating <span class="text-[#F5733D]">Care</span>.
          </div>
          <div>
            <label class="label-btn">
              <span class="btn-link-text">Partner with us:</span>
              <button class="mt-[15px] flex gap-2 btn-animation-links">
                <img src="@/assets/img/copyIcon.svg" alt=""> lorem@ipsum
              </button>
            </label>
          </div>
          <div>
            <img src="@/assets/img/IconHelath.svg" alt="">
            <div class="text-description w-[70%] mt-4">
              Get in touch with us to share your project idea or propose a partnership. We're also here to offer advice
              and
              have a chat if that's what you're seeking.
              <div class="mt-5 flex gap-[15px] items-center">
                <img class="w-[60px] h-[60px]" src="@/assets/img/EffectIcon.svg " alt="">
                <div class="text-icon text-[16px]">
                  Robert Meisner
                  <div class="text-[#300A0A] text-[14px]">
                    Chief Executive Officer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-6 card-left max-lg:col-span-12 max-lg:mt-[20px]">
        <div v-if="modalFinish" class="contacts-text">
          Contact Us
        </div>
        <div v-if="modalFinish" class="mt-[45px] max-lg:mt-[40px]">
          <Input placeholder="Name">
          </Input>
          <Input placeholder="Email">
          </Input>
          <Input placeholder="Phone">
          </Input>
          <Input placeholder="Company">
          </Input>
          <Input placeholder="How can we help you?">
          </Input>
          <button-pr @click="modalFinish =false" label="Send message"/>
        </div>
        <div v-else class="flex justify-center items-center h-full">
          <div ref="finishModal" class="finish-modal text-[36px] font-medium leading-[46px] text-center">
            <div class="text-[#300A0A33] ">
              <span class="text-[#300A0A]">Thank You,</span> Robert!
            </div>
            <div class=" text-[18px] font-medium leading-[23px] mt-4">
              Your submission has been received.
            </div>
            <div class="flex justify-center">
              <button-pr class="mt-[24px]" @click="modalFinish = true" label="Back to the Top"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 767px){
  .card-left {
    border-left:none !important;
    padding-left:0 !important;
  }
}
.card-left {
  border-left: 1px solid #CCBFA8;
  padding-left: 100px;
}

.header-text {
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 52px */
}

.btn-link-text {
  color: var(--Bordeaux-brown, #300A0A);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */
}

.btn-animation-links {
  display: flex;
  width: 230px;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 500px;
  border: 1px solid var(--Beige, #CCBFA8);
  background: var(--Beige, #CCBFA8);
  color: var(--White, #FFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
}

.text-description {
  color: var(--Bordeaux-brown, #300A0A);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
}

.text-icon {
  color: var(--Bordeaux-brown, #300A0A);
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 26px */
}

.contacts-text {
  color: #300A0A;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
</style>