<template>
  <Transition>
    <div
      v-show="isLoading"
      class="w-full h-full absolute left-0 top-0 flex justify-center items-center duration-700 bg-black"
      :class="'opacity-' + value"
    >
      <Vue3Lottie :animationData="loadingJSON" :height="246" :width="220" />
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import loadingJSON from '@/assets/loading.json'
const isLoading = ref(true)
const value = ref(100)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    value.value = 0
  }, 3000)
})
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
