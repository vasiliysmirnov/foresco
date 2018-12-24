<template>
    <div class="team">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <div class="teamSlide">
                    <div class="team__inner">
                        <div class="team__item" v-for="item in team" :key="item.id">
                            <div class="team__item-inner">
                                <div class="img" ><img :src="`http://u2859.green.elastictech.org/${item.image.data.url}`" alt="item.name" draggable="false"></div>
                                <div class="description">
                                    <div class="name">{{item.name}}</div>
                                    <div class="position">{{item.position}}</div>
                                    <div class="txt">{{item.description}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cursor" data-cursor>
                        <div class="cursor__fly" data-cursor-box>
                            <div class="cursor__body">
                                <svg width="70" height="44" viewBox="0 0 70 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="arrow-left" d="M4 0L7.4641 6H0.535898L4 0Z" fill="white"></path>
                                    <path class="arrow-right" d="M4 0L7.4641 6H0.535898L4 0Z" fill="white"></path>
                                </svg>
                                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74Z" transform="translate(1 1)" stroke="white"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cursor__fly cursor__fly_slow" data-cursor-text>
                            <div class="cursor__text">тяни</div>
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

    import $ from 'jquery'

    import {mapActions} from 'vuex'
    import {client} from '~/store'

    export default {
        components: {
            AppHeader,
            AppMenu,
            AppFooter
        },
        head: {
            title: 'Команда'
        },
        beforeRouteLeave (to, from, next) {
            TweenMax.to($('.team'), 0.1, {
                opacity: 0, ease: Power2.easeInOut,
                onComplete: function() {
                    next()
                }
            })
        },
        // get the data
        async fetch ({ store, params }) {
            let { data } = await client.getItems('team')
            store.commit('setTeam', data)
        },
        
        mounted() {
            // team carousel
            $('.teamSlide .team__inner').slick({
                infinite: false,
                slidesToShow: 1,
                dots: false,
                arrows: false,
                centerMode: true,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            variableWidth: false,
                        }
                    }
                ]
            });
            // animation for carousel
            $('.teamSlide').on("mousedown", function(e){
                TweenMax.to($('.team__item'), 0.6, {
                    scale: 0.8
                })
                cursor.addClass('cursor_active');
            })
            $('.teamSlide')
                .on("mouseup", function(e){
                    TweenMax.to($('.team__item'), 0.6, {
                        scale: 1
                    })
                    cursor.removeClass('cursor_active');
                })
                .on("mousemove", function(e){
                    cursorMove(e);
                });
            function cursorMove(e){
                cursor[0].style.transform = "translate3D("+(e.clientX-38)+"px, "+(e.clientY-38)+"px, 0)";
            }
            // animation for cursor
            var gallery = $('.teamSlide');
            var cursor = $('[data-cursor]'),
                cursorText = $('[data-cursor-text]'),
                cursorBox = $('[data-cursor-box]');
            gallery.on('mouseenter', function(e){
                cursor.addClass('cursor_hover');
                
            })
            gallery.on('mouseleave', function(e){
                if(!cursor.hasClass('cursor_active')) cursor.removeClass('cursor_hover');
            })
            
        },
        computed: {
            team() {
                return this.$store.state.team
            },
            
        },
    }
</script>

<style lang="stylus" scoped>
@import '~assets/rem.styl'

.teamSlide
    &:hover
        cursor none
.team
    // fix for content, to display elements by center
    .content
        display: flex
        flex-direction: column
        flex-grow: initial
        padding 0
    &__inner
        width: 100%
        // max-width: rem(1200px)
        // margin: 0 auto
        .team__item
            transform-origin left
            width 100%
            max-width rem(900px)
            position relative
            margin 0 rem(50px)
            @media(max-width 600px)
                margin 0
            .team__item-inner
                display flex
                align-items center
                justify-content space-between
                flex: 1 0 auto
                @media(max-width 910px)
                    flex-wrap wrap
                    justify-content: center
            .img
                width 50%
                @media(max-width 910px)
                    width 100%
                    padding rem(0 15px 0 20px)
                    margin-bottom rem(50px)
                img
                    max-width rem(620px)
                    @media(max-width 910px)
                        margin 0 auto
                    @media(max-width 768px)
                        margin 0
                    @media(max-width 650px)
                        width 100%
            .description
                text-align right
                width 50%
                @media(max-width 600px)
                    width 100%
                    padding-right rem(15px)
                .name
                    font-family: 'montserratbold'
                    font-size: rem(36px)
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee
                    margin-bottom rem(10px)
                .position
                    font-size: rem(12px)
                    font-family: 'montserratlight'
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee
                    margin-bottom rem(20px)
                    padding-bottom rem(20px)
                    position relative
                    &:before
                        content ''
                        position absolute
                        bottom 0
                        right 0
                        width 100%
                        height rem(1px)
                        background #FFF
                .txt
                    font-size: rem(10px)
                    font-weight: normal
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee

.cursor {
    width: rem(76px)
    height: rem(76px)
    transform: translate3d(-100%,0,0)
    pointer-events: none
    position: fixed
    top: 0
    left: 0
    z-index: 300
}

.cursor__fly {
    width: rem(76px)
    height: rem(76px)
    position: absolute
    top: 0
    left: 0
    z-index: 300
}

.cursor__fly_slow {
    transition: transform .1s ease
}

.cursor__text {
    font-size: rem(12px)
    padding-top: rem(28px)
    text-align: center
    opacity: 0
    transition: opacity .5s ease
}

.cursor__body {
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5),opacity .1s ease
    width: rem(76px)
    height: rem(76px)
    background: 0 0
    border-radius: 50%
    position: absolute
    top: 0
    left: 0
    text-align: center
    font-size: 0
    color: #fff
    transform-origin: center center
}

.cursor__body svg {
    position: absolute
    left: 0
    top: 0
    stroke-dasharray: rem(300px)
    stroke-dashoffset: rem(300px)
    transition: stroke-dashoffset 1.5s ease,transform .3s cubic-bezier(.5,-.5,.5,1.5)
    width 100%
    height 100%
    overflow visible
}

.cursor__body svg:first-child {
    left: 0
    top: 0
}

.cursor__body svg .arrow-left {
    transform: translate(rem(20px), rem(18px)) scale(1, -1) rotate(-90deg)
    opacity: 0
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5)
}

.cursor__body svg .arrow-right {
    transform: translate(rem(50px), rem(26px)) scale(1, -1) rotate(90deg)
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5)
    opacity: 0
}

.cursor_active .cursor__body {
    font-size: 0!important
}

.cursor_active .cursor__body svg:first-child {
    opacity: 1
    stroke-dashoffset: 0
}

.cursor_active .cursor__body svg:last-child {
    transform: scale(.5675)
}

.cursor_active .cursor__body svg .arrow-left {
    transform: translate(rem(0px), rem(18px)) scale(1, -1) rotate(-90deg)
    opacity: 1
}

.cursor_active .cursor__body svg .arrow-right {
    transform: translate(rem(70px), rem(26px)) scale(1, -1) rotate(90deg)
    opacity: 1
}

.cursor_active .cursor__text {
    opacity: 0!important
}

.cursor_hover .cursor__body {
    font-size: rem(12px)
    opacity: 1
}

.cursor_hover .cursor__body svg:last-child {
    opacity: 1
    stroke-dashoffset: 0
}

.cursor_hover .cursor__text {
    opacity: 1
}

</style>
