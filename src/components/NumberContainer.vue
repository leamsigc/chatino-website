<script lang="ts" setup>
/**
 *
 * Component Description:Numbers container
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import data from "@/assets/numbers.json";
const formattedData = data.sort((a, b) => a.numero - b.numero);
</script>

<template>
  <div
    class="h-screen grid place-content-center bg-transparent mt-10"
    v-for="(item, index) in formattedData"
    :key="index"
  >
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div
          class="artboard artboard-demo phone-1 rounded-lg shadow-lg text-center indicator custom-bg text-white flex flex-col justify-center items-center"
        >
          <span class="indicator-item badge badge-info"></span>
          <div class="avatar mb-5">
            <div class="mask mask-squircle w-10">
              <img src="/img/logo-sm.png" alt="chatino podcasts" class="mask" />
            </div>
          </div>
          <div class="text-9xl text-blue-500 font-black font-mono">{{ item.numero }}</div>
          <div class="text-5xl font-semibold">{{ item.Chatino }}</div>
          <div class="text-sm font-thin text-gray-400 mt-4">{{ item.Espanol }}</div>
          <div class="text-sm font-light text-gray-400 mb-4">{{ item.English }}</div>
          <div class="text-xl text-gray-300">{{ item.example }}</div>
          <div class="text-blue-400 mt-10 text-xs">
            <a href="leamsigc.com" target="_blank"> Ismael G. </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-bg {
  background-image: radial-gradient(
    rgba(31, 41, 55, 0.2) 0.5px,
    rgba(242, 242, 242, 0.31) 0.5px
  );
  background-position-x: 50%;
  background-position-y: 0%;
  background-size: 5px 5px;
}
</style>
