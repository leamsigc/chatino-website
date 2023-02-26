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
</script>

<template>
  <div
    class="h-screen grid place-content-center bg-transparent"
    v-for="(item, index) in data"
    :key="index"
  >
    <div class="artboard phone-1 rounded-lg shadow-lg indicator custom-bg">
      <span class="indicator-item badge badge-info"></span>
      {{ item }}
    </div>
  </div>
</template>
<style scoped>
.custom-bg {
  background-image: radial-gradient(
    rgba(31, 41, 55, 0.2) 0.5px,
    rgb(242, 242, 242) 0.5px
  );
  background-position-x: 50%;
  background-position-y: 0%;
  background-size: 5px 5px;
}
</style>
