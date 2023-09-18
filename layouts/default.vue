<template>
  <n-layout :native-scrollbar="false" position="absolute">
    <n-layout-header>header</n-layout-header>
    <n-layout-content content-style="padding: 24px;">
      <slot></slot>
    </n-layout-content>
    <n-layout-footer>foooter</n-layout-footer>
  </n-layout>
</template>
