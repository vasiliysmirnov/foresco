<template>
    <section class="projects">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <div class="projects__inner">
                    <div class="project__wrapper">
                        <div class="project__prev" @click="slidePrevTo"></div>
                        <div class="project__next" @click="slideNextTo"></div>
                    </div>

                    <div class="project">
                        <div v-for="project in projects" :key="project.id">
                            <div class="project__item" :data-bg-image="project.backgroung_color">
                                <div class="project__img">
                                    <div class="project__platform">{{project.platform}}</div>
                                    <img :src="`http://u2859.green.elastictech.org/${project.image.data.url}`" :alt="project.name">
                                </div>
                                <div class="project__text">
                                    <div class="project__title">{{project.name}}</div>
                                    <div class="project__desc">{{project.description}}</div>
                                    <nuxt-link class="btn btn__more" :to="`/projects/${project.link}`">Смотреть кейс</nuxt-link>
                                </div>
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
@import '~assets/rem.styl'

.projects
    position absolute
    top 0
    left 0
    width 100%
    background-image: radial-gradient(circle at 68% 31%, #2d6271, #1e3c44)
    // background-image: radial-gradient(circle at 68% 31%, #823f89, #400945)
    // fix for content, to display elements by center
    .content
        display: flex
        flex-direction: column
        flex-grow: initial
        padding 0
    .projects__inner
        width 100%
        
.project
    overflow hidden // dirty hack for animation
    &__wrapper
        max-width: rem(1200px)
        margin: 0 auto
        position relative
    &__item
        display flex
        align-items center
        justify-content center
        margin: rem(0 0 20px 0)
        @media(max-width 768px)
            text-align: center
            flex-wrap wrap
        @media(max-width 425px)
            min-height: rem(330px)
    &__img
        position relative
        margin-right rem(100px)
        // opacity 0
        @media(max-width 768px)
            max-width: rem(260px)
            margin: 0
        img
            max-width rem(300px)
            @media(max-width 768px)
                max-width 100%
    &__platform
        position absolute
        top rem(5px)
        left rem(-20px)
        opacity: 0.5
        font-size: rem(16px)
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: rem(0.2px)
        color: #ffffff
        writing-mode: tb-rl
        transform: rotate(-180deg)
        text-transform: uppercase
        @media(max-width 768px)
            left 0
    &__text
        max-width rem(340px)
        // opacity 0
    &__title
        font-size: rem(50px)
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: rem(2.5px)
        color: #eeeeee
        font-family: 'montserratsemibold'
        margin-bottom rem(15px)
        @media(max-width 768px)
            font-size rem(42px)
            margin-bottom rem(8px)
        // @media(max-width 425px)
        //     font-size: 30px
    &__desc
        opacity: 0.5
        font-size: rem(16px)
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: rem(0.2px)
        color: #eeeeee
        margin-bottom rem(50px)
        @media(max-width 768px)
            margin-bottom rem(24px)
    .swiper-slide-active
        .project__img,
        .project__text
            opacity 1

</style>
<script>
import AppHeader from '~/components/header.vue'
import AppMenu from '~/components/menu.vue'
import AppFooter from '~/components/footer.vue'

import {client} from '~/store'

import $ from 'jquery'

if (process.browser) {
    require('~/plugins/slick-carousel')
}

import {mapActions} from 'vuex'

const transitionForProjects = {
    name: 'page-projects',
    mode: 'in-out',
    css: false,
    beforeEnter(el){
        TweenMax.to(el, 0, {
            yPercent: -100, scale: 0.9, ease: Power2.easeInOut
        })
    },
    enter(el, done){
        done()
        TweenMax.to(el, 1, {
            yPercent: -50, scale: 0.9, ease: Power2.easeInOut,
            onComplete: function() {
                TweenMax.to(el, 1, {
                    yPercent: 0, scale: 1, ease: Power2.easeInOut,
                    onComplete: function() {}, clearProps: 'all'
                })
            }
        })
    },
    leave(el, done){
        TweenMax.to(el, 1, {
            yPercent: -50, scale: 0.9, ease: Power2.easeInOut,
            onComplete: function() {
                TweenMax.to(el, 1, {
                    yPercent: -100, scale: 1, ease: Power2.easeInOut,
                    onComplete: function() { done() }
                })
            }
        })
    }
}

export default {
    components: {
        AppHeader,
        AppMenu,
        AppFooter,
    },
    head: {
        title: 'Проекты'
    },
    // get the data
    async fetch ({ store, params }) {
        let { data } = await client.getItems('projects')
        store.commit('setProjects', data)
    },
    scrollToTop: true,
    transition(to, from) {
        if ((from && from.name === 'projects-sohobook') || (to && to.name === 'projects-sohobook')) {
            return transitionForProjects
        }
    },
    methods:{
        // next animation for slider
        slideNextTo: function(event){
            this.nextSlide()
            setTimeout( () => {$('.project').slick('slickNext')}, 900)
        },
        nextSlide: (event) => {
            TweenMax.to($('.slick-current .project__img'), 0.8, {
                x: '-200px',
                opacity: 0
            })
            TweenMax.to($('.slick-current .project__text'), 0.9, {
                x: '-200px',
                opacity: 0,
                ease: Power2.easeInOut
            })
            
        },
        // change bg function to each project
        setProjectsBg: function(color) {
            TweenMax.to($('.projects'), 0.4, {
                backgroundImage: color
            })
        },
        // prev animation for slider
        slidePrevTo: function(event){
            this.prevSlide()
            setTimeout( () => {$('.project').slick('slickPrev')}, 900)
        },
        prevSlide: (event) => {
            TweenMax.to($('.slick-current .project__img'), 0.8, {
                x: '200px',
                opacity: 0
            })
            TweenMax.to($('.slick-current .project__text'), 0.9, {
                x: '200px',
                opacity: 0,
                ease: Power2.easeInOut
            })
        },
        
    },
    mounted() {
        // init slick carousel
        $('.project').slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            arrows: false,
            dotsClass: 'project__pagination',
        });
        $('.project').on('afterChange', (event, slick, currentSlide) => {
            // change projects background
            this.setProjectsBg($('.slick-current.slick-active .project__item').attr('data-bg-image'))
            // custom animation for slider
            TweenMax.to($('.slick-slide .project__img'), 0.8, {
                x: '0',
                opacity: 1
            })
            TweenMax.to($('.slick-slide .project__text'), 0.9, {
                x: '0',
                opacity: 1,
                ease: Power2.easeInOut
            })
        });
        
        $('.project').on('beforeChange', (event, slick, currentSlide, nextSlide) => {            
            $('.slick-slide').each(function(index, el){
                // if(currentSlide > nextSlide){
                //     TweenMax.to($(el).find('.project__img'), 0.8, {
                //         x: '-200px',
                //         opacity: 0
                //     })
                //     TweenMax.to($(el).find('.project__text'), 0.9, {
                //         x: '-200px',
                //         opacity: 0,
                //         ease: Power2.easeInOut
                //     })
                // } else {
                //     TweenMax.to($(el).find('.project__img'), 0.8, {
                //         x: '200px',
                //         opacity: 0
                //     })
                //     TweenMax.to($(el).find('.project__text'), 0.9, {
                //         x: '200px',
                //         opacity: 0,
                //         ease: Power2.easeInOut
                //     })
                // }
            })
        });
    },
    computed: {
        projects() {
            return this.$store.state.projects
        },
    }
}
</script>
