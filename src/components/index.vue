<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const tool = 'https://tool.guanqi.xyz/';
const host = 'https://api.guanqi.xyz/short/show/';

getId();

// 获取短链id
function getId () {  
  let sid = route.params.sid;
  let url = `${host}${sid}`;
  if (sid == 'index') {
    url = tool;
  }
  location.href = url;
}

</script>

<template>
  <div>
    <p>正在跳转中...</p>
  </div>
</template>
