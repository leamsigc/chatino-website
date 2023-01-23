<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();
const { t, locale } = useI18n();

useHead({
  title: t("home.header"),
});

const homePageLinks = [
  {
    label: t("home.navigation.podcast.label"),
    to: t("home.navigation.podcast.link"),
  },
  {
    label: t("home.navigation.videos.label"),
    to: t("home.navigation.videos.link"),
  },
  {
    label: t("home.navigation.books.label"),
    to: t("home.navigation.books.link"),
  },
  {
    label: t("home.navigation.resources.label"),
    to: t("home.navigation.resources.link"),
  },
];

const localeOptions = [
  {
    label: "EN",
    value: "en",
  },
  {
    label: "DE",
    value: "de",
  },
  {
    label: "ES",
    value: "es",
  },
];
</script>

<template>
  <div class="relative">
    <svg class="absolute inset-0" viewBox="0 0 1440 1142" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><g clip-path="url(#clip0_1273_23335)"><rect width="1440" height="1142" fill="#000211"></rect><g opacity="0.6" filter="url(#filter0_f_1273_23335)"><ellipse cx="720" cy="1009" rx="720" ry="131" fill="#7A5AF8"></ellipse></g><g opacity="0.16" filter="url(#filter1_f_1273_23335)"><ellipse cx="720" cy="2" rx="600" ry="170" fill="#C853FF"></ellipse></g><g filter="url(#filter2_b_1273_23335)"><rect width="1440" height="1142" fill="black" fill-opacity="0.01"></rect></g><g style="mix-blend-mode:lighten"><path d="M645.917 569.115L359.842 1141.02" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M424.055 569.115L0.00170898 781.326" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M350.099 569.115L0.00170898 709.289" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M276.15 569.115L0 661.258" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M498.013 569.115L0.000488281 901.362" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M202.194 569.115L0 626.944" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M54.2819 569.115L0 581.192" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M128.238 569.115L0 601.207" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1237.55 569.115L1440 627.049" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M719.873 569.115L719.378 1141.02" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1311.51 569.115L1440 601.283" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1385.46 569.115L1440 581.252" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1163.6 569.115L1440 661.398" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1089.64 569.115L1440 709.483" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M941.736 569.115L1440 901.915" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1015.69 569.115L1440 781.638" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M793.83 569.115L1078.92 1141.02" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M571.961 569.115L0.307373 1141.02" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M867.779 569.115L1438.45 1141.02" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1438.46 1141.02H0.308594" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 647.164H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 594.824H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 605.495H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 617.565H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 576.798H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 585.319H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 989.622H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 665.574H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 631.33H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 569.115H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 687.246H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 713.137H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 899.121H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 744.608H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 783.677H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path><path d="M1440 833.475H0.00170898" stroke="#7A5AF8" stroke-opacity="0.2" stroke-width="0.4" stroke-linecap="round" stroke-linejoin="round" style="mix-blend-mode:overlay"></path></g><rect y="568" width="1440" height="98" fill="url(#paint0_linear_1273_23335)"></rect><g style="mix-blend-mode:overlay"><circle cx="721" cy="360" r="2" fill="white"></circle><circle cx="600" cy="240" r="2" fill="white"></circle><circle cx="240" cy="240" r="2" fill="white"></circle><circle cx="600" cy="720" r="2" fill="white"></circle><circle cx="840" cy="840" r="2" fill="white"></circle><circle cx="720" cy="600" r="2" fill="white"></circle><circle cx="480" cy="840" r="2" fill="white"></circle><circle cx="360" cy="720" r="2" fill="white"></circle><circle cx="240" cy="840" r="2" fill="white"></circle><circle cx="120" cy="720" r="2" fill="white"></circle><circle cx="719" cy="840" r="2" fill="white"></circle><circle cx="600" cy="480" r="2" fill="white"></circle><circle cx="360" cy="120" r="2" fill="white"></circle><circle cx="1320" cy="720" r="2" fill="white"></circle><circle cx="1320" cy="240" r="2" fill="white"></circle><circle cx="360" cy="240" r="2" fill="white"></circle><circle cx="120" cy="120" r="2" fill="white"></circle><circle cx="600" cy="120" r="2" fill="white"></circle><circle cx="1080" cy="120" r="2" fill="white"></circle><circle cx="721" cy="240" r="2" fill="white"></circle></g></g><defs><filter id="filter0_f_1273_23335" x="-380" y="498" width="2200" height="1022" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="190" result="effect1_foregroundBlur_1273_23335"></feGaussianBlur></filter><filter id="filter1_f_1273_23335" x="-260" y="-548" width="1960" height="1100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="190" result="effect1_foregroundBlur_1273_23335"></feGaussianBlur></filter><filter id="filter2_b_1273_23335" x="-248" y="-248" width="1936" height="1638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="124"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1273_23335"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1273_23335" result="shape"></feBlend></filter><linearGradient id="paint0_linear_1273_23335" x1="720" y1="568" x2="720" y2="666" gradientUnits="userSpaceOnUse"><stop stop-color="#030416"></stop><stop offset="1" stop-color="#040518" stop-opacity="0"></stop></linearGradient><clipPath id="clip0_1273_23335"><rect width="1440" height="1142" fill="white"></rect></clipPath></defs></svg>
    <main class="main h-screen relative">
      <nav class="flex w-full h-8 pt-4 font-semibold text-sm uppercase text-gray-800">
        <div class="lg:w-32 pl-4 pt-1">
          <img src="/img/CHATINOLOGO.png" width="300" class="mx-auto rounded-full" />
        </div>
        <div class="invisible xl:visible text-center flex-auto text-slate-400">
          <div class="hidden xl:block space-x-5">
            <routerLink
              :to="link.to"
              class="hover:text-white"
              v-for="link in homePageLinks"
              :key="link.to"
            >
              {{ link.label }}
            </routerLink>
          </div>
        </div>
        <div class="pr-4 space-x-5 right-0 flex align-middle">
          <n-popselect v-model:value="locale" :options="localeOptions">
            <n-button>{{ locale }}</n-button>
          </n-popselect>
          <a href="https://anchor.fm/chatino" target="_blank" class="hidden md:inline">
            {{ t("home.actions.checkPodcast") }}
          </a>
          <a href="#">
            <img
              class="w-4 h-4 mt-0.25"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABaklEQVR4Xu2aTUoDQRCFv2yNP9cInsCtbkWCl9EraE4jwWXIVo8gXiIkxL0URNBON3Yyq6p6s00z9Hv1VVdPpUYkf0bJ9SMDREByB5QCyQHQIagUUAokd0Ap0ABgAjwBN8CZc0i+gCXwAHyUWmoEmPh34MK58HL7a+CqNKFmwAswDSb+R8681FYzYBMA+1b8tqW2mgG2aByUgC4DDJO7oAZYet//1pbpEFztDsHP/wyw360SPO/K4KlzGgz7BfAI/BFvunQRch7dwdsXAYMtdP4CEeA8gIO3LwIGW+j8BS0CLoEZcA2cONd4cD/AxL8B586FH90PeAVug4k/qB9gyHjHXv2AhgPqB6gfUHwSt8qg+gFBq8CeLF2Fs0S6pVMEiIDkDigFkgPQ/F9A/QD1A2LmRtd8gPoBmg/QfEDIISnNB2g+oFLZdBWOWe77VYmAfq9irhQBMePar0oE9HsVc6UIiBnXflXpCfgGC8dCQbbkoGgAAAAASUVORK5CYII="
              alt=""
            />
          </a>
        </div>
      </nav>
      <section class="bg-transparent mt-10">
        <div
          class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1
              class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white"
            >
              {{ t("home.hero.title") }}
            </h1>
            <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
              {{ t("home.hero.description") }}
            </p>
            <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
              {{ t("home.hero.smallDescription") }}
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Resources
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/img/hero_bg.png" alt="mockup" class="contrast-125 rounded-lg" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<style lang="scss">
.main {
  background-size: cover;
}
</style>
<route lang="yaml">
name: home
meta:
  layout: home
</route>
