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
  <main class="main h-screen">
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
    <section class="dark:bg-gray-900 mt-10">
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
          <img src="img/hero_bg.png" alt="mockup" class="contrast-125 rounded-lg" />
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss">
.main {
  background-size: cover;
  //   background: linear-gradient(45deg, rgba(27, 45, 85, 0.933), rgb(26, 17, 110));
}
</style>
<route lang="yaml">
name: home
meta:
  layout: home
</route>
