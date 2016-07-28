<template>
    <div class="nodata  animated fadeIn" ng-if="!tagLists.length && isLoaded">
        <div class="logo-left-box">
            <h2 class="logo"><span class="blue">X</span><span class="white">-SONGTAO</span></h2>
            <h3 class="blue notice">提示!</h3>
            <p class="white">没有找到数据,~~~~(>_<)~~~~</p>
        </div>
        <img src="./web/img/employee.svg" alt="当前没有数据诶">
    </div>
</template>