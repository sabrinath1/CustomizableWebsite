<script setup lang="ts">
import { darkTheme, lightTheme, NConfigProvider } from "naive-ui";

const activeTheme = ref(darkTheme);
</script>
<template>
  <n-config-provider :theme="activeTheme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>
