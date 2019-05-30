<template>
    <div class="nav">
        <div class="nav__btn" @click='changeNavState' v-bind:class='{ active: showNav }'>
            <div class="nav__inner">
                <span></span>
                <span></span>
            </div>
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
    &__inner
        position absolute
        top 50%
        left calc(50% - 12px)
        width: rem(24px)
        height: rem(14px)
        margin-top: -7px
    &__btn
        width: rem(50px)
        height: rem(50px)
        background: rgba(216, 216, 216, .05)
        cursor pointer
        position relative
        z-index 100
        &.active
            span
                top: calc(50% - 1px)
                transform: rotate(45deg)
                transition top .2s ease, transform .2s ease .2s
                &:last-child
                    transition bottom .2s ease, transform .2s ease .2s
                    bottom: calc(50% - 1px);
                    transform: rotate(-45deg);
        span
            width: rem(23px)
            height: rem(2px)
            border-radius: rem(1px)
            background: #eeeeee
            display: block
            position absolute
            top 0
            left 0
            transition top .2s ease .2s, bottom .2s ease .2s, transform .2s ease
            &:last-child
                margin-bottom 0
                bottom 0
                top: initial


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