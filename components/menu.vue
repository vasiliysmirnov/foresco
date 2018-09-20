<template>
    <transition name="fadeMenu">
        <div class="menu" v-show='showNav'>
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
    background #000
    top 0
    left 0
    width 100%
    height 100%
    display flex
    align-items center
    justify-content flex-start
    @media(max-width 500px)
        justify-content center
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
                    color: #e19d45
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