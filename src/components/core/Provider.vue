<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

import {
  darkTheme,
  enUS,
  deDE,
  NConfigProvider,
  NDialogProvider,
  dateDeDE,
  dateEnUS,
} from "naive-ui";
import "vfonts/Roboto.css";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const breakpoints: Record<string, number> = {
  xs: 0,
  s: 640,
  m: 1024,
  l: 1280,
  xl: 1536,
  xxl: 1920,
};
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainProvider",
});
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <n-loading-bar-provider>
      <n-message-provider>
        <n-dialog-provider>
          <slot />
        </n-dialog-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<style></style>
