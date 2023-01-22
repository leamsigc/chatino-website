<script setup lang="ts"></script>
<template>
  <main class="min-h-screen">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        <n-image />
        chatino Podcast
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider bordered content-style="padding: 24px;">
          Handian Bridge
        </n-layout-sider>
        <n-layout content-style="padding: 24px;">
          <router-view />
        </n-layout>
      </n-layout>
      <n-layout-footer bordered position="absolute" style="height: 64px; padding: 24px">
        城府路
      </n-layout-footer>
    </n-layout>
  </main>
</template>
