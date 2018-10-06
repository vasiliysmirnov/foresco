<template>
    <transition :duration="1000">
        <div class="menu" v-show='showNav'>
            <transition name="menuBgAn">
                <div class="menuBg" v-show='showNav'></div>
            </transition>

            <transition name="fadeMenu">
                <div class="nav-wrapper" v-show='showNav'>
                <ul>
                    <li data-color="#e19d45">
                        <router-link to="/contacts"><span @click="changeNavState">Контакты</span></router-link>
                    </li>
                    <li data-color="#4597e1">
                        <router-link to="/projects"><span @click="changeNavState">Проекты</span></router-link>
                    </li>
                </ul>
                <div class="line">
                    <span id="lineItem"></span>
                </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<style lang="stylus" scoped>
.fadeMenu-enter-active
    transition: all .5s ease .3s
.fadeMenu-leave-active
    transition: all .2s
.fadeMenu-enter, .fadeMenu-leave-to
    transform: translateX(50px)
    opacity: 0
.menuBgAn-enter-active, .menuBgAn-leave-active
    transition: all .6s ease
.menuBgAn-enter
    transform: translateX(100%)
.menuBgAn-leave-to
    transform: translateX(-100%)

.menu
    position: absolute
    z-index 99
    top 0
    left 0
    width 100%
    height 100vh
    display flex
    align-items center
    justify-content flex-start
    @media(max-width 500px)
        justify-content center
    .menuBg
        width: 100%
        height: 100%
        position: absolute;
        background: #000;
        z-index: 1;
        top: 0;
        right: 0
    .nav-wrapper
        position relative
        z-index 2
        overflow hidden
        height 100%
        display flex
        align-items center
        justify-content flex-start
        .line
            position absolute
            top 0
            right 0
            width 1px
            height 100%
            background rgba(255, 255, 255, 0.2)
            span
                position absolute
                bottom: 100%
                left: 0px
                height: 100%
                width: 100%
                transition: all 0.4s linear
    ul
        list-style none
        padding 0 0 0 160px
        @media(max-width 500px)
            padding 0
        li
            a
                font-family: 'montserratmedium'
                font-size: 45px
                font-style: normal
                font-stretch: normal
                line-height: 2.13
                letter-spacing: 10px
                color: #ffffff
                text-decoration none
                text-transform uppercase
                transition color .2s ease
                @media(max-width 500px)
                    font-size: 35px
            &:hover
                &:nth-child(1)
                    a
                        color: #e19d45
                &:nth-child(2)
                    a
                        color: #4597e1


@keyframes menuOpen {
    0%{
        opacity 0
        transform translate(100%,0)
    }
    100%{
        transform translate(0,0)
        opacity 1
    }
}
@keyframes menuClose {
    0%{
        opacity 1
        transform translate(0,0)
    }
    100%{
        transform translate(100%,0)
        opacity 0
    }
}
</style>

<script>
import $ from 'jquery'
import TweenMax from "gsap"
export default {
    computed: {
        showNav () {
            return this.$store.state.showNav
        }
    },
    mounted () {
        var navLinks = $('.nav-wrapper li');
        var line = document.getElementById('lineItem');
        navLinks.on("mouseenter", function() {
            onLinkHover($(this))
        });
        var onLinkHover = function(item) {
            var color = item.data("color");
            item.addClass('active');
            var posY = 0;
            posY = item.position().top + item.outerHeight();

            var tween = TweenLite.to(line, 0.1, {transform: 'translateY('+posY+'px)', background: color});
        }
    },
    methods: {
        changeNavState () {
            this.$store.commit('toggleNav')
        },
    }
}
</script>