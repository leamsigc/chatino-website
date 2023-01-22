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

import { NIcon } from 'naive-ui';



import {
  Edit,
  Email as EmailIcon,
  Cyclist as ReportsIcon,
  Folders as AllIcon,
  Network2 as UnMerge,
  UserProfileAlt as MyReportsIcon,
  Filter as FilterIcon,
  Download,
  User as UserIcon,
  StatusPartialFail as ErrorIcon,
  SettingsAdjust,
  Settings as GearIcon,
} from '@vicons/carbon';

const icons = {
  EmailIcon,
  ReportsIcon,
  AllIcon,
  MyReportsIcon,
  UnMerge,
  FilterIcon,
  Download,
  UserIcon,
  Image,
  ErrorIcon,
  SettingsAdjust,
  GearIcon,
};

type IconTypes = keyof typeof icons;

const props = defineProps({
  ...NIcon.props,
  type: {
    type: String,
    default: 'fallback',
  },
});

const icon = icons[props.type as IconTypes];
</script>

<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'IconLocal',
});
</script>
<template>
  <n-icon v-bind="props"><icon /></n-icon>
</template>
<style scoped></style>
