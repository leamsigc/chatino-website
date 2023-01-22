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

import { useLoadingBar } from "naive-ui";
import { useRouter } from "vue-router";
const loadingBar = useLoadingBar();

const router = useRouter();

router.beforeEach(() => loadingBar?.start());

router.afterEach(() => loadingBar?.finish());
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheViewer",
});
</script>

<template>
  <router-view />
</template>
<style scoped></style>
