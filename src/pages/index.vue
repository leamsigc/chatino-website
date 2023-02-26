<script setup lang="ts">
import bg from "@/assets/bg.svg";
import { useStore } from "@/store";
import NumberContainer from "@/components/NumberContainer.vue";

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
  <main class="relative bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${bg})` }">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <button class="btn btn-ghost btn-circle">
          <img src="/img/logo-lg.png" width="300" class="mx-auto rounded-full" />
        </button>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li v-for="link in homePageLinks" :key="link.to">
              <routerLink :to="link.to" class="hover:text-white">
                {{ link.label }}
              </routerLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a
          class="btn btn-ghost normal-case text-xl"
          href="https://anchor.fm/chatino"
          target="_blank"
        >
          {{ t("home.actions.checkPodcast") }}
        </a>
      </div>
      <div class="navbar-end">
        <n-popselect v-model:value="locale" :options="localeOptions">
          <n-button>{{ locale }}</n-button>
        </n-popselect>
      </div>
    </div>
    <main class="main min-h-screen">
      <section class="bg-transparent mt-10">
        <div
          class="grid grid-cols-1 max-w-screen-xl px-4 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12"
        >
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1
              class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white"
            >
              {{ t("home.hero.title") }}
            </h1>
            <p class="mb-6 font-light text-gray-500 lg:mb-8 dark:text-gray-400">
              {{ t("home.hero.description") }}
            </p>
            <p
              class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400"
            >
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
    <NumberContainer></NumberContainer>
  </main>
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
