<template>
    <div class="nav">
        <div class="nav__btn" @click='changeNavState' v-bind:class='{ active: showNav }'>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import '~assets/rem.styl'
// for sohobook page
.sohobook
    .nav
        span
            background: #272625
.nav
    &__btn
        width: rem(50px)
        height: rem(50px)
        background: rgba(216, 216, 216, .05)
        cursor pointer
        position relative
        padding: rem(19px 0 0 0)
        z-index 100
        &.active
            span
                background: #eeeeee
                transform: rotate(45deg)
                left: 0
                top: rem(6px)
                &:last-child
                    transform: rotate(-45deg)
                    top: rem(-6px)
                    left: 0
        span
            width: rem(23px)
            height: rem(2px)
            border-radius: rem(1px)
            background: #eeeeee
            display: block
            margin: 0 auto rem(10px)
            position relative
            transition all .2s ease


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
    },
    head () {
        return {
            bodyAttrs: {
                class: this.$store.state.showNav ? 'noScroll' : ''
            }
        }
    },
}
</script>