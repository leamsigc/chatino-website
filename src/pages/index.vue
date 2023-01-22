<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();
const { t } = useI18n();

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
</script>

<template>
  <main class="h-screen main">
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
    <header class="mt-11 md:mt-30 text-center max-w-5xl mx-auto">
      <h1 class="text-3xl font-black my-10 leading-loose">{{ t("home.hero.title") }}</h1>
      <h1 class="text-xl leading-snug">{{ t("home.hero.description") }}</h1>
    </header>
  </main>
</template>
<style lang="scss">
.main {
  //   background-image: url(https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop);
  background-size: cover;
  background: linear-gradient(45deg, rgba(27, 45, 85, 0.933), rgb(26, 17, 110));
}
</style>
<route lang="yaml">
name: home
meta:
  layout: home
</route>
