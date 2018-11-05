<template>
    <footer>
        <div class="social">
            <a href="#"><img src="~/static/img/vk-font-awesome.png" alt=""></a>
            <a href="#"><img src="~/static/img/ic-instalogo.svg" alt=""></a>
            <a href="#"><img src="~/static/img/ic-fblogo.svg" alt=""></a>
        </div>
        <div class="email"><a :href="`mailto:${contact.mail}`" v-for="contact in contacts" :key="contact.id">{{contact.mail}}</a></div>
    </footer>
</template>
<style lang="stylus" scoped>
footer
    padding 50px
    width 100%
    display flex
    align-items center
    justify-content space-between
    @media(max-width 425px)
        padding 30px 20px
    .social
        a
            margin 0 16px 0 0
    .email
        a
            font-size: 13px
            font-family: 'montserratmedium';
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: 1.6px
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