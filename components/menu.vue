<template>
    <transition name="fadeMenu">
    <div class="menu" v-show='showNav'>
        <div class="menuBg"></div>
        
            <ul>
                <li><router-link to="/contacts"><span @click="changeNavState">Контакты</span></router-link></li>
                <li><router-link to="/projects"><span @click="changeNavState">Проекты</span></router-link></li>
            </ul>
        
    </div>
    </transition>
</template>
<style lang="stylus" scoped>
.fadeMenu-enter-active, .fadeMenu-leave-active
    transition: opacity .5s
.fadeMenu-enter, .fadeMenu-leave-to
  opacity: 0

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
        width: 50px;
        height: 50px;
        position: absolute;
        background: #000;
        z-index: 1;
        top: 50px;
        right: 50px;
        border-radius: 50%;
        opacity 0
        animation menuOpen .8s ease
        animation-fill-mode forwards
        will-change: transform
        -webkit-backface-visibility: hidden
        backface-visibility: hidden
        
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
        opacity 1
        transform: scale(1)
    }
    100%{
        transform: scale(50)
        opacity 1
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