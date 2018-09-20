<template>
    <section class="projects">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <div class="projects__inner">
                    <div class="project">
                        <div class="project__item" v-for="project in projects" :key="project.id">
                            <div class="project__img">
                                <div class="project__platform">{{project.platform}}</div>
                                <img :src="`http://u2859.green.elastictech.org/${project.image.data.url}`" :alt="project.name">
                            </div>
                            <div class="project__text">
                                <div class="project__title">{{project.name}}</div>
                                <div class="project__desc">{{project.description}}</div>
                                <a href="#" class="btn btn__more">Смотреть кейс</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <app-footer/>
        </div>
    </section>
</template>
<style lang="stylus" scoped>
.project
    &__item
        display flex
        align-items center
        justify-content center
    &__img
        position relative
        margin-right 100px
    &__platform
        position absolute
        top 5px
        left -20px
        opacity: 0.5
        font-size: 16px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: 0.2px
        color: #ffffff
        writing-mode: tb-rl
        transform: rotate(-180deg)
        text-transform: uppercase
    &__text
        max-width 340px
    &__title
        font-size: 50px
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: 2.5px
        color: #eeeeee
        font-family: 'montserratsemibold'
        margin-bottom 15px
    &__desc
        opacity: 0.5
        font-size: 16px
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: 0.2px
        color: #eeeeee
        margin-bottom 50px

</style>
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
            title: 'Проекты'
        },
        // get projects from api
        methods:{
            ...mapActions({
                getProjects: 'getProjects'
            })
        },
        mounted() {
            this.getProjects()
        },
        computed: {
            projects() {
                return this.$store.state.projects
            }
        }
    }
</script>