<script setup>
</script>

<template>
    <div class="code">
        <h1>Site Notice</h1>
        <p>
            Hello, welcome to the xq-toolbox! This site is currently undergoing
            system maintenance.
        </p>
        <p>
            For more information, please visit
            <a href="https://tool.guanqi.xyz" target="_blank"
                >https://tool.guanqi.xyz</a
            >!
        </p>
    </div>
</template>


<style>
body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
}
p {
    margin: 0;
}
.code {
    box-sizing: border-box;
    margin-bottom: 26px;
    max-width: 420px;
    padding: 10px 25px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    background: #fff;
}
.code h1 {
    text-align: center;
    font-size: 24px;
}
.code p {
    margin-bottom: 15px;
}
@media all and (max-width: 768px) {
    .code {
        max-width: 90%;
    }
}
</style>