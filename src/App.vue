<script setup>
import Marquee from './components/MarqueeContent.vue'
import { ref, onMounted, reactive, computed } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import loadingJSON from '@/assets/loading.json'

const isLoading = ref(true)
const value = ref(100)

const getImageUrl = (pathName) => {
  return new URL(`./assets/img/${pathName}.png`, import.meta.url).href
}

const news = reactive([
  {
    src: 'news1',
    date: '2023/12/24',
    title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
    content: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！'
  },
  {
    src: 'news2',
    date: '2023/12/20',
    title: '收容所模特兒大比拼！',
    content:
      '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'
  },
  {
    src: 'news3',
    date: '2023/12/26',
    title: '參與台北寵物論壇，爭取貓咪友善環境',
    content:
      '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！'
  }
])

const policy = reactive([
  {
    src: 'policy1',
    content: '為毛孩子謀福利! 推動寵物醫療保障方案'
  },
  {
    src: 'policy2',
    content: '打造休閒天堂! 推廣寵物休閒與娛樂場所'
  },
  {
    src: 'policy3',
    content: '推廣寵物飼養教育，讓愛更加專業'
  }
])

const policyImageComputed = (index) => {
  return index === 1 ? true : false
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    value.value = 0
  }, 3000)
})
</script>

<template>
  <Transition>
    <div
      v-if="isLoading"
      class="w-full h-full absolute left-0 top-0 flex justify-center items-center duration-700 bg-black"
      :class="'opacity-' + value"
    >
      <Vue3Lottie :animationData="loadingJSON" :height="246" :width="220" />
    </div>
    <div v-else>
      <header class="flex w-full px-12 py-7 items-center justify-between">
        <div class="flex items-center">
          <img class="mr-2" src="./assets/img/logo.svg" alt="logo" />
          <span class="text-[#DA7D4A] font-bold text-2xl">喵立翰 Miao Li-Han</span>
        </div>
        <div>
          <a href="#candidates">候選人主張</a>
          <a class="mx-4" href="#events">最新活動</a>
          <a href="#policies">政策議題</a>
          <a class="mx-4" href="#donations">小額捐款</a>
          <a href="#services">民眾服務信箱</a>
        </div>
        <div class="flex">
          <img src="./assets/img/fb.svg" alt="fb" />
          <img class="mx-4" src="./assets/img/ig.svg" alt="ig" />
          <img src="./assets/img/youtue.svg" alt="youtue" />
        </div>
      </header>

      <main>
        <section id="candidates" class="flex justify-center flex-col">
          <div class="text-center mb-4">
            <h1 class="text-8xl mb-4">台灣的明天 喵先鋪路</h1>
            <div class="flex items-center justify-center">
              <div class="bg-[#334155] text-white px-4 py-3 rounded-2xl mr-4 text-[28px]">
                2024 立委參選人
              </div>
              <div class="flex bg-white rounded-2xl border-[1px] px-4 py-4 drop-shadow-lg h-[84px]">
                <div
                  class="bg-gradient-to-r from-[#E5793B] to-[#FF4185] rounded-full w-[50px] h-[50px] flex items-center justify-center text-white text-[32px] mr-4"
                >
                  3
                </div>
                <span class="text-[#DA7D4A] text-[40px] font-bold">喵立翰 Miao Li-Han</span>
              </div>
            </div>
          </div>
          <img class="h-[537.18px]" src="./assets/img/banner.svg" alt="banner" />
          <Marquee />
        </section>

        <section class="bg-[#F7ECE1] flex items-center justify-center">
          <div class="bg-white h-full flex justify-between rounded-t-3xl max-w-[1320px]">
            <div
              class="w-[calc(50%-12px)] h-full flex justify-center items-center flex-col px-10 py-16"
            >
              <span class="section_title"> ADVOCATE </span>
              <h1 class="text-[64px] mb-8">候選人主張</h1>
              <p class="font-bold text-[28px] text-[#334155] mb-8">
                我堅信 ! 藉由推動更完善的<span class="text-[#DA7D4A]">貓咪福利</span
                >和相關政策，更是間接地投資於<span class="text-[#DA7D4A]">台灣的未來</span>。
              </p>
              <p class="text-[18px] text-[#334155]">
                畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
                GDP 經濟帶來巨大效益。
                因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
              </p>
            </div>
            <div
              class="w-[calc(50%-12px)] bg-no-repeat bg-[url('./assets/img/image_8.svg')] bg-center bg-cover"
            ></div>
          </div>
        </section>

        <section class="flex justify-center items-center flex-col">
          <span class="section_title">LATEST EVENTS</span>
          <h1 class="text-[64px] mb-16">最新活動</h1>

          <div class="flex justify-between w-[1320px]">
            <div class="w-[calc(50%-12px)]">
              <img class="w-full" src="@/assets/img/news3.png" alt="news3" />
              <span>2023/12/26</span>
              <div>參與台北寵物論壇，爭取貓咪友善環境</div>
              <p>
                炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                VIP 休憩空間。
              </p>
            </div>
            <div class="w-[calc(50%-12px)]">
              <div class="flex mb-6" v-for="(item, index) in news" :key="index">
                <img class="h-full mr-4" :src="getImageUrl(item.src)" alt="logo" />
                <div class="flex flex-col">
                  <span class="text-[14px] text-[#64748B]">{{ item.date }}</span>
                  <h2 class="font-bold text-[#334155]">{{ item.title }}</h2>
                  <p class="text-[#334155]">{{ item.content }}</p>
                </div>
              </div>
              <button
                class="bg-[#F1F5F9] rounded-[500px] font-semibold px-6 py-4 flex items-center justify-center"
              >
                查看更多
                <span class="arrow ml-2"></span>
              </button>
            </div>
          </div>
        </section>

        <section class="flex justify-center items-center flex-col">
          <span class="section_title">POLICY ISSUES</span>
          <h1 class="text-[64px] mb-16">政策議題</h1>

          <div class="flex w-[1320px] justify-between">
            <div v-for="(item, index) in policy" :key="index">
              <div class="h-[25%] mb-4">
                <div
                  v-for="(sentence, idx) in item.content.split('!')"
                  :key="idx"
                  class="text-[#334155] text-2xl font-bold"
                >
                  {{ sentence }}
                </div>
              </div>
              <img :src="getImageUrl(item.src)" :alt="'policy' + index" />
            </div>
          </div>
        </section>

        <section class="flex justify-center items-center flex-col">
          <div class="flex w-[1320px] h-[596px] justify-between">
            <div class="section_card bg-[#DA7D4A]">
              <div>
                <p>{{ '小額支持喵喵' }}</p>
                <span>{{ '您的小筆捐款，是每隻毛孩未來的大大動力！' }}</span>
              </div>

              <div>
                <button
                  class="bg-[#F1F5F9] rounded-[500px] font-semibold px-6 py-4 flex items-center justify-center"
                >
                  {{ '小額捐款' }}
                  <span class="arrow ml-2"></span>
                </button>
                <img src="" alt="" />
              </div>
            </div>
            <div class="section_card bg-[#334155]"></div>
          </div>
        </section>
      </main>
    </div>
  </Transition>
</template>

<style scoped>
a {
  @apply text-lg text-[#334155];
}
h1 {
  font-family: MantouSans-Regular;
  @apply bg-clip-text text-transparent bg-gradient-to-r from-[#E5793B] to-[#FF4185];
}

section {
  @apply py-[104px];
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.arrow {
  border: solid black;
  border-width: 0px 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
}

.section_title {
  @apply bg-[#334155] text-white rounded-lg text-[16px] px-3 py-2 font-bold;
}

.section_card {
  @apply w-[calc(50%-12px)] h-full rounded-[32px] p-24;
}
</style>
