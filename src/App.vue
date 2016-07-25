<!--内容区-->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Hello from './components/Hello'

    export default {
        components: {
            Hello
        }
    }










</script>

<style lang="scss">
    //base
    @import "./theme/theme.scss";

    html {
        height: 100%;
        padding: 0;

    }

    body {
        padding: 0;
        margin: 0;

        height: 100%;
        background-color: #c7ffd6;
    }



    @include media(">desktop_large") {
        body {
            margin-left: 100px;
        }
    }

    @include media(">desktop_small","<=desktop_large") {
        body {
            margin-left: 45px;
        }
    }
</style>
