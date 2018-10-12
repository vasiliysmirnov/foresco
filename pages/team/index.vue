<template>
    <div class="team">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <div class="team__inner">
                    <div class="team__item" v-for="item in team" :key="item.id">
                        <div class="img"><img :src="`http://u2859.green.elastictech.org/${item.image.data.url}`" alt="item.name"></div>
                        <div class="text">
                            <div class="name">{{item.name}}</div>
                            <div class="position">{{item.position}}</div>
                            <div class="description">{{item.description}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <app-footer/>
        </div>
    </div>
</template>

<script>
    import AppHeader from '~/components/header.vue'
    import AppMenu from '~/components/menu.vue'
    import AppFooter from '~/components/footer.vue'

    import {mapActions} from 'vuex'

    export default {
        components: {
            AppHeader,
            AppMenu,
            AppFooter
        },
        head: {
            title: 'Команда'
        },
        methods: {
            ...mapActions({
                getTeam: 'getTeam'
            }),
        },
        mounted() {
            this.getTeam()
        },
        computed: {
            team() {
                return this.$store.state.team
            }
        },
    }
</script>

<style lang="stylus" scoped>
.team
    // fix for content, to display elements by center
    .content
        display: flex
        flex-direction: column
        flex-grow: initial
    &__inner
        display flex
        overflow-x scroll
        flex-direction row
        width: 100%
        max-width: 1200px
        margin: 0 auto
        .team__item
            display flex
            align-items center
            justify-content space-between
            flex: 1 0 auto
            width 100%
            position relative
            margin-right 50px
            @media(max-width 620px)
                min-height calc(100vh - 270px)
                overflow hidden
            .img
                width 50%
                @media(max-width 620px)
                    width 100%
                    position absolute
                    top 0
                    left 0
                    height 100%
                    opacity: 0.6
                img
                    max-width 620px
                    @media(max-width 620px)
                        max-width initial
                        min-width: 100%
                        height: auto
                        min-height: 100%
                        width: auto
                        position: absolute
                        top: 50%
                        left: 50%
                        transform: translate(-50%,-50%) scale(0.5)
            .text
                text-align right
                width 50%
                @media(max-width 620px)
                    width 100%
                    position relative
                    z-index 1
                    text-shadow 1px 1px 3px #333
                .name
                    font-family: 'montserratbold'
                    font-size: 36px
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee
                    margin-bottom 10px
                .position
                    font-size: 12px
                    font-family: 'montserratlight'
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee
                    margin-bottom 20px
                    padding-bottom 20px
                    position relative
                    &:before
                        content ''
                        position absolute
                        bottom 0
                        right 0
                        width 100%
                        height 1px
                        background #FFF
                .description
                    font-size: 10px
                    font-weight: normal
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee
</style>
