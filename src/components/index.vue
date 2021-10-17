<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const host = 'https://api.guanqi.xyz/short/show/';

// 挂载后
onMounted(() => {
    // 获取id
    getId();
});

// 获取短链id
function getId () {  
  let sid = route.params.sid;
  let url = `${host}${sid}`;
  location.href = url;
}

</script>

<template>
  <div>
    <h3>KDShort</h3>
    <p>Welcome to KDShort!</p>
  </div>
</template>
