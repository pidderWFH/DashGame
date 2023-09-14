<script setup>


</script>

<template>

    <div class="sysRequired">
        <h2 class="sysRequired text-28">系統需求</h2>
        <div class="sysRequired-content">
            <div class="lowRequired">
                <h3>最低配備:</h3>
                <ul class="lowRequired-list list">
                    <li class="lowRequired-item">需要 64 位元的處理器及作業系統</li>
                    <li class="lowRequired-item">作業系統: 64-bit Windows 10</li>
                    <li class="lowRequired-item">處理器: Intel Core i5-4430 / AMD FX-6300</li>
                    <li class="lowRequired-item">記憶體: 8 GB 記憶體</li>
                    <li class="lowRequired-item">顯示卡: NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB</li>
                    <li class="lowRequired-item">DirectX: 版本：11</li>
                    <li class="lowRequired-item">網路: 寬頻網際網路連線</li>
                    <li class="lowRequired-item">儲存空間: 40 GB 可用空間</li>
                </ul>
            </div>
            <div class="recommendRequired">
                <h3>建議配備:</h3>
                <ul class="recommendRequired-list">
                    <li class="recommendRequired-item">需要 64 位元的處理器及作業系統</li>
                    <li class="recommendRequired-item">作業系統: 64-bit Windows 10</li>
                    <li class="recommendRequired-item">處理器: Intel Core i5-6600K / AMD Ryzen 5 1600</li>
                    <li class="recommendRequired-item">記憶體: 16 GB 記憶體</li>
                    <li class="recommendRequired-item">顯示卡: NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB</li>
                    <li class="recommendRequired-item">DirectX: 版本：11</li>
                    <li class="recommendRequired-item">網路: 寬頻網際網路連線</li>
                    <li class="recommendRequired-item">儲存空間: 50 GB 可用空間</li>
                </ul>
            </div>
        </div>
        <div class="sysRequired-copyright">
            <span>© 2017 KRAFTON, Inc.PUBG: BATTLEGROUNDS Korea and PUBG are registered trademarks or service marks of KRAFTON, Inc.</span>
        </div>

    </div>
</template>

<style>
    .sysRequired{
        background-color: #303141;
    }
    .sysRequired-content{
        background-image: url("../public/images/sysRequired-building-pc-icon.png"), url("../public/images/sysRequired-Can-you-run-it.png");
        background-repeat: no-repeat;
        background-position: left center, right bottom;
        background-size: 20% auto, 50% 50%;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        line-height: 1.5;

    }
    .lowRequired-list{
        margin-right: 56px;
    }
    .lowRequired-item, .recommendRequired-item{
        text-indent: 1.5em;
    }
    .sysRequired-copyright{
        text-align: center;
    }
</style>






