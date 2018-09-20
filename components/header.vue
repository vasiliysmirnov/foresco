<template>
    <div class="header">
        <div class="logo">
            <router-link to="/"><img src="~/static/ic-foresco-white.svg" alt="logo"></router-link>
        </div>    
        <div v-for="contact in contacts" :key="contact.id" class="phone">{{ contact.phone }}</div>
        <app-nav/>
    </div>
</template>
<style lang="stylus" scoped>
.header
    display flex
    align-items center
    justify-content space-between
    padding 50px
    width 100%
    @media (max-width 500px)
        flex-wrap wrap
    .phone
        font-size: 16px
        font-family: 'montserratmedium'
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: 2px
        color: #eeeeee
        margin 0 30px 0 0
        flex: 1 0 auto
        text-align: right
        @media (max-width 500px)
            display none
    .logo
        img
            max-width 100%
</style>
<script>
import AppNav from '~/components/nav.vue'

export default {
    components: {
        AppNav
    },
    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    }
}
</script>