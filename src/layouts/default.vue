<script setup lang="ts">
import IconLocal from "@/components/core/IconLocal.vue";
import { RouterLink } from "@vue-router";

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/resources/podcast",
          },
        },
        { default: () => "Podcast" }
      ),
    key: "podcast",
    icon: () => h(IconLocal, { type: "Microphone" }),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/resources/video",
          },
        },
        { default: () => "Video" }
      ),
    key: "video",
    icon: () => h(IconLocal, { type: "Video" }),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/resources/books",
          },
        },
        { default: () => "Books" }
      ),
    key: "books",
    icon: () => h(IconLocal, { type: "Book" }),
  },
];
</script>
<template>
  <main class="min-h-screen">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 10px" bordered>
        <div class="flex items-center">
          <routerLink to="/" class="flex items-center">
            <n-avatar round :size="48" src="/img/logo-sm.png" class="inline-block" />
            <span class="inline-block ml-3"> chatino Podcast </span>
          </routerLink>
        </div>
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="150"
          show-trigger
        >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>

        <n-layout content-style="padding: 24px;">
          <router-view />
        </n-layout>
      </n-layout>
      <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">
        Chatino Podcast
      </n-layout-footer>
    </n-layout>
  </main>
</template>
