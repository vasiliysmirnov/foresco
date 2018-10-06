<template>
    <transition :duration="1000">
        <div class="menu" v-show='showNav'>
            <transition name="menuBgAn">
                <div class="menuBg" v-show='showNav'></div>
            </transition>

            <transition name="fadeMenu">
                <ul v-show='showNav'>
                    <li><router-link to="/contacts"><span @click="changeNavState">Контакты</span></router-link></li>
                    <li><router-link to="/projects"><span @click="changeNavState">Проекты</span></router-link></li>
                </ul>
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
        // opacity 0
        // transform translate(100%,0)
        // animation menuOpen .8s ease
        // animation-fill-mode forwards
        // will-change: transform
        // -webkit-backface-visibility: hidden
        // backface-visibility: hidden
        
    ul
        list-style none
        padding 0 0 0 160px
        position relative
        z-index 2
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
                    color: #e19d45

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
export default {
    computed: {
        showNav () {
            return this.$store.state.showNav
        }
    },
    methods: {
        changeNavState () {
            this.$store.commit('toggleNav')
        }
    }
}
</script>