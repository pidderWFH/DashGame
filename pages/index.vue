<script setup>
    const newsStore = useNewsStore();
</script>

<template>
index
<h2>{{ newsStore.double }}</h2>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <a href="https://element-plus.org/en-US/component/button.html" target="_blank">element+</a>
</template>