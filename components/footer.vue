<template>
    <footer>
        <div class="social">
            <a href="#" class="vk"><img src="~/static/img/vk-font-awesome.png" alt=""></a>
            <a href="#" class="insta"><img src="~/static/img/ic-instalogo.svg" alt=""></a>
            <a href="#" class="fb"><img src="~/static/img/ic-fblogo.svg" alt=""></a>
        </div>
        <div class="email"><a :href="`mailto:${contact.mail}`" v-for="contact in contacts" :key="contact.id">{{contact.mail}}</a></div>
    </footer>
</template>
<style lang="stylus" scoped>
@import '~assets/rem.styl'
footer
    padding rem(50px)
    width 100%
    display flex
    align-items center
    justify-content space-between
    @media(max-width 425px)
        padding rem(30px 20px)
    .social
        a
            margin rem(0 16px 0 0)
            display: inline-block
            &.vk
                width rem(22px)
            &.insta
                width rem(12px)
            &.fb
                width rem(8px)
            img
                width: 100%
                height 100%
    .email
        a
            font-size: rem(13px)
            font-family: 'montserratmedium';
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: rem(1.6px)
            color: #eeeeee
            text-decoration none
            transition color .2s ease
            &:hover
                color: #e19d45
</style>

<script>
import {mapActions} from 'vuex'

export default {
    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    }
}
</script>