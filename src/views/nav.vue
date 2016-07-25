<template>
    <div class="nav">
        <nav class="nav__top">
            <a class="nav__item" href="#">
                <i class="fa fa-home fa-fw fa-lg"></i>
            </a>
            <a class="nav__item">
                <i class="fa fa-map-signs fa-fw fa-lg"></i>
            </a>
        </nav>
        <nav class="nav__bottom">
            <a class="nav__item">
                <i class="fa fa-user fa-lg"></i>
            </a>
            <a class="nav__item">
                <i class="fa fa-tag fa-lg"></i>
            </a>
            <a class="nav__item">
                <i class="fa fa-list fa-lg"></i>
            </a>
            <a class="nav__item">
                <i class="fa fa-comments fa-lg"></i>
            </a>
            <a class="nav__item">
                <i class="fa fa-sign-out fa-lg"></i>
            </a>
            <a class="nav__item">
                <i class="fa fa-sign-in fa-lg"></i>
            </a>
        </nav>
    </div>
</template>
<style lang="scss">
    $base-theme-color: #38b7ea;
    .nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;;
        align-items: center;
        height: 100%;
        width: 45px;

        position: fixed;
        left: 0;
        top: 0;
        /*导航上面结构*/
        .nav__top {
        }
        /*导航下面结构*/
        .nav__bottom {
        }

        a {
            cursor: pointer;
            width: 45px;
            height: 45px;
            display: inline-block;
            text-decoration: none;
        }
        .nav__item {
            text-align: center;
            display: inline-block;
            width: 100%;
            height: 45px;
            line-height: 45px;
            float: left;
            cursor: pointer;
            transition: all ease 300ms;
            .nav__item--active {
                color: $base-theme-color !important;
            }
            &:hover {
                color: $base-theme-color;
            }
        }

    }


</style>
<script>
    //    import HeaderComponent from './components/header.vue'
    //    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
//        components:{
//            'other-component':OtherComponent,
//            HeaderComponent,
//        }
    }
</script>
