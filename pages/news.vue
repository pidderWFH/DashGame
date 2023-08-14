<script setup>
    const newsStore = useNewsStore();
</script>
<template>
 <div>
   <h1>最新消息</h1>
   <h2>{{ newsStore.double }}</h2>
   <button @click="newsStore.addCount()">add count</button>
 </div>
</template>