<template>
    <div class="nav">
        <div class="nav__btn" @click='changeNavState' v-bind:class='{ active: showNav }'>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
// for sohobook page
.sohobook
    .nav
        span
            background: #272625
.nav
    &__btn
        width: 50px
        height: 50px
        background: rgba(216, 216, 216, .05)
        cursor pointer
        position relative
        padding: 19px 0 0 0
        z-index 100
        &.active
            span
                background: #eeeeee
                transform: rotate(45deg)
                left: 0px
                top: 6px
                &:last-child
                    transform: rotate(-45deg)
                    top: -6px
                    left: 0
        span
            width: 23px
            height: 2px
            border-radius: 1px
            background: #eeeeee
            display: block
            margin: 0 auto 10px
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