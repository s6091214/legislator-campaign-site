<template>
  <div class="marquee-container bg-[#DA7D4A] text-white text-[64px]">
    <div class="marquee-content">
      從喵的眼中，看見台灣 從喵的眼中，看見台灣 從喵的眼中，看見台灣
    </div>
    <div class="marquee-content2">
      從喵的眼中，看見台灣 從喵的眼中，看見台灣 從喵的眼中，看見台灣
    </div>
    <div class="marquee-content3">
      從喵的眼中，看見台灣 從喵的眼中，看見台灣 從喵的眼中，看見台灣
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const words = ref(['從喵的眼中，看見台灣', '從喵的眼中，看見台灣', '從喵的眼中，看見台灣'])
let currentIndex = 0

const rotateWords = () => {
  currentIndex = (currentIndex + 1) % words.value.length
}

onMounted(() => {
  setInterval(rotateWords, 1000) // 每秒切换一次单词
})
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  font-family: MantouSans-Regular;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}

.marquee-content2 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee2 10s linear infinite;
}
.marquee-content3 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee2 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee3 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
