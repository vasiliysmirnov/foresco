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
                                    <a @click="goToSohobook(project.link)" class="btn btn__more">Смотреть кейс</a>
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
    max-height 600px // dirty hack for animation
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
        // opacity 0
        @media(max-width 768px)
            text-align: center
            min-height: 470px
        @media(max-width 425px)
            min-height: 330px;
    &__img
        position relative
        margin-right 100px
        // opacity 0
        @media(max-width 768px)
            // width 100%
            position: absolute
            z-index: -1
            opacity: .3!important
            top: 0
            margin: 0
        img
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
        @media(max-width 425px)
            font-size: 30px
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
        @media(max-width 425px)
            font-size: 14px
    .swiper-slide-active
        .project__img,
        .project__text
            opacity 1

</style>
<script>
    import AppHeader from '~/components/header.vue'
    import AppMenu from '~/components/menu.vue'
    import AppFooter from '~/components/footer.vue'
    
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
        transition: {
            name: 'projects',
            // appear: true, // if we wanna to show animation on page load and reload
            css: false,
            beforeEnter(el){
                el.style.transform = "scale(0.9) translateY(-100%)"
            },
            enter(el, done){
                TweenMax.to($('.projects'), 0.8, {
                    y: 0,
                    ease: Power2.easeInOut,
                    onComplete: function() {
                        TweenMax.to($('.projects'), 1, {
                            scale: 1,
                            ease: Power2.easeInOut,
                            onComplete: function() {

                            }, clearProps: 'all'
                        })
                    }
                })
                done()
            }
        },
        // get projects from api
        methods:{
            ...mapActions({
                getProjects: 'getProjects'
            }),
            // animation to go to sohobook
            goToSohobook(link){
                TweenMax.to($('.projects'), 0.5, {
                    scale: 0.9,
                    ease: Power2.easeInOut,
                    onComplete: function() {
                        TweenMax.to($('.projects'), 1, {
                            y: '-100%',
                            ease: Power2.easeInOut,
                            onComplete: function() {
                                $nuxt.$router.push('/projects/'+ link)
                            }
                        })
                    }
                })
            },
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
            this.getProjects()

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
        updated: function () {
            this.$nextTick(function () {
                // carousel init when the page is render (can't find the way to do this right)
                $('.project').slick({
                    infinite: true,
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                    dotsClass: 'project__pagination',
                    responsive: [
                        {
                            breakpoint: 480,
                            settings: {

                            }
                        }
                    ]
                });
            })
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