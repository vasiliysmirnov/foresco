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
                            <div class="project__item" >
                                <div class="project__img">
                                    <div class="project__platform">{{project.platform}}</div>
                                    <img :src="`http://u2859.green.elastictech.org/${project.image.data.url}`" :alt="project.name">
                                </div>
                                <div class="project__text">
                                    <div class="project__title">{{project.name}}</div>
                                    <div class="project__desc">{{project.description}}</div>
                                    <!-- <a @click="goToSohobook(project.link)" class="btn btn__more">Смотреть кейс</a> -->
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
.projects
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
        max-width: 1200px
        margin: 0 auto
        position relative
    &__item
        display flex
        align-items center
        justify-content center
        margin: 0 0 20px 0
        @media(max-width 768px)
            text-align: center
            flex-wrap wrap
        @media(max-width 425px)
            min-height: 330px;
    &__img
        position relative
        margin-right 100px
        // opacity 0
        @media(max-width 768px)
            max-width: 260px
            margin: 0
        img
            max-width 300px
            @media(max-width 768px)
                max-width 100%
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
        @media(max-width 768px)
            left 0
    &__text
        max-width 340px
        // opacity 0
    &__title
        font-size: 50px
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: 2.5px
        color: #eeeeee
        font-family: 'montserratsemibold'
        margin-bottom 15px
        @media(max-width 768px)
            font-size 42px
            margin-bottom 8px
        // @media(max-width 425px)
        //     font-size: 30px
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
        @media(max-width 768px)
            margin-bottom 24px
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
    
    // import slick from '~/plugins/slick-carousel'
    if (process.browser) {
        require('~/plugins/slick-carousel')
    }

    import $ from 'jquery'

    import {mapActions} from 'vuex'

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
        beforeRouteEnter (to, from, next) {
            switch (from.path) {
                // from main page
                case '/':
                    next(vm => {
                        TweenMax.to(vm.$el, 0.1, {
                            opacity: 0,
                            onComplete: function() {
                                TweenMax.to(vm.$el, 1, {
                                    opacity: 1,
                                    ease: Power2.easeInOut,
                                })
                            }
                        })
                    })
                    break;
                // from sohobook page
                case '/projects/sohobook':
                    next(vm => {
                        vm.$el.style.transform = "scale(0.9) translateY(-100%)"
                        TweenMax.to(vm.$el, 0.8, {
                            y: 0,
                            ease: Power2.easeInOut,
                            onComplete: function() {
                                TweenMax.to(vm.$el, 1, {
                                    scale: 1,
                                    ease: Power2.easeInOut,
                                    onComplete: function() {

                                    }, clearProps: 'all'
                                })
                            }
                        })
                    })
                    break;
                default:
                    next()
                }
        },
        // animation LEAVE from this page
        beforeRouteLeave (to, from, next) {
            switch (to.path) {
                case "/projects/sohobook":
                    TweenMax.to($('.projects'), 0.5, {
                        scale: 0.9,
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            TweenMax.to($('.projects'), 1, {
                                y: '-100%',
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    next()
                                }
                            })
                        }
                    })
                    break;
                case "/team":
                    TweenMax.to($('.projects'), 0.1, {
                        opacity: 0, ease: Power2.easeInOut,
                        onComplete: function() {
                            next()
                        }
                    })
                    break;
                case "/contacts":
                    TweenMax.to($('.projects'), 0.1, {
                        opacity: 0, ease: Power2.easeInOut,
                        onComplete: function() {
                            next()
                        }
                    })
                    break;
                default:
                    next()
            }
        },
        transition: {
            name: 'projects',
            // appear: true, // if we wanna to show animation on page load and reload
            css: false,
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
            $('.project').on('afterChange', function(event, slick, currentSlide){
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
            
            $('.project').on('beforeChange', function(event, slick, currentSlide, nextSlide){
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
                // TweenMax.to($('.slick-slide .project__img'), 0.8, {
                //     x: '100px',
                //     opacity: 1
                // })
                // TweenMax.to($('.slick-slide .project__text'), 0.9, {
                //     x: '100px',
                //     opacity: 1,
                //     ease: Power2.easeInOut
                // })
            });
        },
        computed: {
            projects() {
                return this.$store.state.projects
            },
        },
        data () {
            return {
            }
        }
    }
</script>
