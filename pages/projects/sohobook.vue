<template>
    <div class="sohobook">
        <transition name="slide-fade">
            <div class="goBack" v-if="show">
                <!-- <router-link to="/projects">Назад<span><img src="~static/img/arrow-up.svg" alt="up"></span></router-link> -->
                <a @click="goToProjects">Назад<span><img src="~static/img/arrow-up.svg" alt="up"></span></a>
            </div>
        </transition>
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content" v-for="item in sohobook" :key="item.id">
                <section class="top">
                    <div class="sohobook-main-img"></div>
                    <div class="top__inner">
                        <div class="title">{{item.name}}</div>
                        <div class="desc">{{item.description}}</div>

                        <div class="img">
                            <div class="platform">{{item.platform}}</div>
                            <img :src="`http://u2859.green.elastictech.org/${item.top_image.data.url}`" alt="">
                            <div class="year">{{item.year}}</div>
                        </div>

                        <div class="descFull">
                            <div class="separator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {{item.description_full}}
                        </div>

                        <div id="top_bottom_mask"></div>

                    </div>
                    
                </section>

                <section class="sohobook-01">
                    <div class="inner">
                        <div class="leafs" v-parallax="-0.08">
                            <img src="~static/img/sohobook/01/leafs.png" alt="">
                        </div>
                        <div class="title">
                            <span v-in-viewport>Coздайте <br>книгу своей мечты</span>
                            <div class="number" v-parallax.absY="0.1">01</div>
                            <div class="footprint-1" v-in-viewport>
                                <img src="~static/img/sohobook/01/footprint.png" alt="">
                            </div>
                        </div>
                        <div class="img">
                            <img src="~static/img/sohobook/01/01.png" alt="" v-in-viewport>

                            <div class="img-01" v-in-viewport><img src="~static/img/sohobook/01/01-01.png" alt=""></div>
                            <div class="img-02" v-in-viewport><img src="~static/img/sohobook/01/01-02.png" alt=""></div>
                            <div class="img-03" v-in-viewport><img src="~static/img/sohobook/01/love-you.png" alt=""></div>
                        </div>
                    </div>
                    <div class="next-step-1">
                        <img src="~static/img/sohobook/01/line-01.svg" alt="">
                    </div>
                    
                </section>
                
                <section class="sohobook-02">
                    <div class="inner">
                        <div class="leafs" v-parallax="-0.08">
                            <img src="~static/img/sohobook/01/leafs.png" alt="">
                        </div>
                        <div class="img">
                            <img src="~static/img/sohobook/02/02.png" alt="" v-in-viewport>

                            <div class="img-01" v-in-viewport><img src="~static/img/sohobook/02/02-01.png" alt=""></div>
                            <div class="img-02" v-in-viewport><img src="~static/img/sohobook/02/02-02.png" alt=""></div>
                        </div>
                        <div class="title">
                            <span v-in-viewport>Выбирайте любимые фотографии</span>
                            <div class="number" v-parallax="0.1">02</div>
                            <div class="footprint-1" v-in-viewport>
                                <img src="~static/img/sohobook/01/footprint.png" alt="">
                            </div>
                        </div>
                        <div class="next-step-2">
                            <img src="~static/img/sohobook/02/line.svg" alt="">
                        </div>
                    </div>
                </section>

                <section class="sohobook-03">
                    <div class="inner">
                        <div class="title" id="trigger1">
                            <span id="animate1">Редактируйте их и создавайте коллажи</span>
                            <div class="number" v-parallax="0.1">03</div>
                            <div class="footprint-1" v-in-viewport>
                                <img src="~static/img/sohobook/01/footprint.png" alt="">
                            </div>
                            <div class="one-month-1" v-in-viewport>
                                <img src="~static/img/sohobook/03/one-month.png" alt="">
                            </div>
                        </div>
                        <div class="bg">
                            <div class="bg__inner">
                                <div class="leafs" v-parallax.absY="0.08">
                                    <img src="~static/img/sohobook/01/leafs.png" alt="" style="transform: scale(-1, 1);">
                                    <img src="~static/img/sohobook/01/leafs.png" alt="">
                                </div>
                                <div class="light-1" v-in-viewport><img src="~static/img/sohobook/03/light-1.svg" alt=""></div>
                                <div class="light-2" v-in-viewport><img src="~static/img/sohobook/03/light-2.svg" alt=""></div>
                                <div class="text-1" v-in-viewport>
                                    Добавляйте <br> фотографии
                                    <div class="arrow"></div>
                                </div>
                                <div class="img-main">
                                    <img src="~static/img/sohobook/03/screen-shot.png" alt="">
                                </div>
                                <div class="text-2" v-in-viewport>
                                    <div class="arrow"></div>
                                    Выбирайте <br> шаблон по вкусу
                                </div>
                                <div class="photo-cards" v-in-viewport><img src="~static/img/sohobook/03/photo-cards.svg" alt=""></div>
                                <div class="polaroid" v-in-viewport><img src="~static/img/sohobook/03/polaroid.svg" alt=""></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sohobook-04">
                    <div class="inner">
                        <div class="title">
                            <span>Цвета и шрифты</span>
                            <div class="number" v-parallax="0.1">04</div>
                        </div>
                        <div class="font">
                            <img src="~static/img/sohobook/04/sf-pro-text.svg" alt="">
                        </div>
                        <ul class="font-list">
                            <li><img src="~static/img/sohobook/04/regular.svg" alt=""></li>
                            <li><img src="~static/img/sohobook/04/medium.svg" alt=""></li>
                            <li><img src="~static/img/sohobook/04/semibold.svg" alt=""></li>
                            <li><img src="~static/img/sohobook/04/bold.svg" alt=""></li>
                        </ul>
                        <div class="color-pallette">
                            <div class="color-1"><div class="ball"></div><div class="txt">#008EB7</div></div>
                            <div class="color-2"><div class="ball"></div><div class="txt">#161515</div></div>
                            <div class="color-3"><div class="ball"></div><div class="txt">#008EB7</div></div>
                            <div class="color-4"><div class="ball"></div><div class="txt">#E75B4E</div></div>
                            <div class="color-5"><div class="ball"></div><div class="txt">#008EB7</div></div>
                            <div class="color-6"><div class="ball"></div><div class="txt">#29ACD2</div></div>
                            <div class="color-7"><div class="ball"></div><div class="txt">#32A6C8</div></div>
                        </div>
                    </div>
                </section>

                <section class="sohobook-05">
                    <div class="title">
                        <span>Экраны приложения</span>
                        <div class="number" v-parallax.absY="0.02">05</div>
                    </div>
                    <div class="bg">
                    </div>
                    <div class="thank-you"><img src="~static/img/sohobook/05/thank-you.png" alt=""></div>
                    <div class="sps">Спасибо за просмотр</div>
                    <div class="line"><img src="~static/img/sohobook/05/line.svg" alt=""></div>
                    <div class="app-store">
                        <a href="#"><img src="~static/img/sohobook/05/app-store.png" alt=""></a>
                    </div>
                </section>
            </div>
            
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
    data () {
        return{
            show: false
        }
    },
    // get the data
    async fetch ({ store, params }) {
        let { data } = await client.getItems('sohobook')
        store.commit('setSohobook', data)
    },
    transition: {
        name: 'sohobook',
        // appear: true, // if we wanna to show animation on page load and reload
        css: false,
        beforeEnter(el){
            el.style.transform = "scale(0.9) translateY(100%)"
        },
        enter(el, done){
            TweenMax.to($('.sohobook'), 1, {
                y: 0,
                ease: Power2.easeInOut,
                onComplete: function() {
                    TweenMax.to($('.sohobook'), 1, {
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
    // beforeRouteUpdate (to, from, next) {
    //     console.log('qwe');
        
    //     TweenMax.to($('.sohobook'), 1, {
    //         y: 0,
    //         ease: Power2.easeInOut,
    //         onComplete: function() {
    //             TweenMax.to($('.sohobook'), 1, {
    //                 scale: 1,
    //                 ease: Power2.easeInOut,
    //                 onComplete: function() {
    //                     next()
    //                 }
    //             })
    //         }
    //     })
        
    // },
    components: {
        AppHeader,
        AppMenu,
        AppFooter
    },
    methods:{
        goToProjects(){
            TweenMax.to($('.sohobook'), 1, {
                scale: 0.9,
                ease: Power2.easeInOut,
                onComplete: function() {
                    TweenMax.to($('.sohobook'), 1, {
                        y: '100%',
                        ease: Power2.easeInOut,
                        onComplete: function() {
                            $nuxt.$router.back()
                        }
                    })
                }
            })
        }
    },
    mounted() {
        // check when scroll is up to show the 'back' button
        window.addEventListener('wheel', (e) => {
            if (e.deltaY < 0) {
                this.show = true
            }
            if (e.deltaY > 0) {
                this.show = false
            }
        })
    },
    computed: {
        sohobook() {
            return this.$store.state.sohobook
        }
    },
    head: {
        title: 'sohobook'
    },
}
</script>

<style lang="stylus" scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(10px);
    opacity: 0;
}
.sohobook
    background #ffffff
    color #302a2c
    position relative
    .header
        position absolute
        top 0
        left 0
    .sohobook-main-img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background url('~static/img/sohobook/main-img.jpg') no-repeat center
        background-size: cover
        z-index 1
        &:before
            content ''
            width 100%
            height 100%
            top 0
            left 0
            position absolute
            background rgba(240, 240, 240, 0.7)
    .goBack
        position fixed
        top 50px
        left calc(50% - 30px)
        cursor pointer
        width 60px
        text-align center
        z-index 99
        a
            font-size: 13px
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: 1.6px
            color: #272625
            text-decoration none
            text-transform uppercase
            span
                display block
                margin 10px 0 0 0
                text-align center
    .content
        overflow hidden
        padding 0
    .top
        text-align center
        position relative
        padding-top 150px 
        &__inner
            padding 0 50px
            z-index 2
            position relative
        #top_bottom_mask
            position absolute
            bottom 0
            left 0
            z-index 1
            width 100%
            background-image url('~static/img/sohobook/top-mask.svg')
            background-size: cover
            height: 0
            padding: 0
            padding-bottom: calc(100% * 500 / 1440)
        .title
            font-size: 120px
            font-family: 'montserratbold'
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: 45px
            color: #524941
            margin-bottom 20px
        .desc
            font-size: 24px
            font-family: 'montserratmedium'
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: 4px
            color: #524941
            margin-bottom 45px
        .img
            position relative
            font-size: 18px
            font-family: 'montserratmedium'
            color: #524941
            .platform
                position absolute
                top 300px
                left 130px
                letter-spacing: 6.3px
                text-transform uppercase
            .year
                position absolute
                top 300px
                right 160px
                letter-spacing: 3px
        .descFull
            font-size: 22px
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            text-align: center
            color: #302a2c
            max-width 950px
            z-index 2
            position: absolute
            bottom: 85px
            left: calc(50% - 475px)
            width: 100%
            .separator
                position absolute
                top -40px
                left: calc(50% - 35px)
                text-align center
                width: 70px
                span
                    width: 8px
                    height: 8px
                    border-radius 50%
                    background-color: #313131
                    margin-right 20px
                    display: inline-block
                    &:last-child
                        margin 0
    .sohobook-01
        padding 100px 0 250px 0
        position relative
        .inner
            display flex
            flex-wrap wrap
            align-items center
            justify-content center
            max-width: 1440px
            margin: 0 auto
            position relative
        .leafs
            position absolute
            top 100px
            left calc(50% - 315px)
            z-index 3
            max-width 630px
            img
                max-width 100%
        .title
            font-size: 80px
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width 600px
            position relative
            span
                display: block
                position relative
                z-index 2
                opacity 0
                transform translateX(-50px)
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform: translateX(0px)
            .number
                font-size: 350px;
                font-family: 'montserratmedium'
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #e5bd98;
                position absolute
                top: -190px
                left: 180px
                z-index: 1
                opacity: .1
        .img
            max-width 50%
            position relative
            img
                position relative
                z-index 2
                max-width 432px
                opacity 0
                transition opacity .4s ease 0.5s
                &.in-viewport
                    opacity: 1
            .img-01
                position: absolute
                bottom: -70px
                z-index: 1
                width: 516px
                right: -220px
                opacity: 0
                transform rotate(0deg) translateX(-50px)
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform: rotate(-12deg) translateX(0px)
                img
                    max-width 100%
                    opacity 1
            .img-02
                position: absolute
                bottom: -50px
                z-index: 1
                width: 360px
                left: -140px
                opacity: 0
                transform translateX(-50px)
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform: translateX(0px)
                img
                    max-width 100%
                    opacity 1
            .img-03
                position: absolute
                bottom: -320px
                z-index: 1
                width: 384px
                right: -180px
                opacity: 0
                transition opacity .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                img
                    max-width 100%
                    opacity 1
        .next-step-1
            position: absolute
            width: 500px
            left: calc(50% - 307px)
            bottom: -540px
            img
                max-width 100%
        .footprint-1
            position: absolute
            height: 190px
            bottom: -400px
            left: 40px
            opacity: 0
            transition opacity .4s ease 0.5s
            &.in-viewport
                opacity: 1
            img
                max-height 100%


    .sohobook-02
        padding 400px 0 150px 0
        .inner
            display flex
            flex-wrap wrap
            align-items center
            justify-content center
            max-width: 1200px
            margin: 0 auto
            position relative
        .leafs
            position absolute
            top 100px
            left calc(50% - 315px)
            z-index 3
            max-width 630px
            img
                max-width 100%
        .title
            font-size: 80px
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width 600px
            position relative
            span
                display block
                position relative
                z-index 2
                opacity: 0
                transform translateX(50px)
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform: translateX(0px)
            .number
                font-size: 350px;
                font-family: 'montserratmedium'
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #e5bd98;
                position absolute
                top: -400px
                left: 80px
                z-index: 1
                opacity: .1
        .img
            max-width 50%
            position relative
            &>img
                position relative
                z-index 2
                max-width 432px
                opacity 0
                transform translateX(-50px)
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity 1
                    transform: translateX(0px)
            .img-01
                position: absolute
                top: 290px
                z-index: 1
                width: 262px
                left: -80px
                transform: rotate(-10deg);
                opacity 0
                transition all .4s ease 0.5s
                img
                    max-width 100%
                &.in-viewport
                    opacity 1
                    transform: rotate(0)
            .img-02
                position: absolute
                bottom: -160px
                z-index: 1
                width: 582px
                right: -220px
                transform: rotate(50deg);
                opacity 0
                transition all .4s ease 0.5s
                img
                    max-width 100%
                &.in-viewport
                    opacity 1
                    transform: rotate(0)
        .footprint-1
            position: absolute
            height: 190px
            top: -330px
            right: 130px
            opacity: 0
            transition opacity .4s ease 0.5s
            &.in-viewport
                opacity: 1
            img
                max-height 100%
        .next-step-2
            position absolute
            bottom -520px
            left 50%
    
    .sohobook-03
        padding 450px 0 150px 0
        .title
            font-size: 80px
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width: 880px
            position: relative
            text-align: center
            margin: 0 auto 100px
            span
                position relative
                z-index 2
            .number
                z-index 1
                opacity: 0.1
                font-family: 'montserratmedium'
                font-size: 350px
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: -240px
                left: calc(50% - 215px)
            .footprint-1
                height 190px
                position absolute
                top: -310px
                left: 300px
                opacity: 0
                transition opacity .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                img
                    max-height 100%
            .one-month-1
                position: absolute
                top: -370px
                right: -70px
                width: 250px
                opacity: 0
                transition opacity .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                img
                    max-width 100%
        .bg
            background url('~static/img/sohobook/03/doski.jpg')
            background-size cover
            position relative
            background-attachment fixed
            &:before
                position absolute
                content ''
                top 0
                left 0
                width 100%
                height 100%
                background rgba(0,0,0,0.4)
                z-index 1
            .bg__inner
                max-width: 1440px
                margin: 0 auto
                position relative
                z-index 2
            .leafs
                position absolute
                top -300px
                left calc(50% - 315px)
                z-index 3
                max-width 630px
                img
                    max-width 100%
            .light-1
                position absolute
                top 0
                right 280px
                opacity: 0
                transform translateY(-100px)
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform translateY(0)
            .light-2
                position: absolute
                top: 0
                right: 160px
                opacity: 0
                transform translateY(-100px)
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform translateY(0)
            .img-main
                text-align center
                padding 80px 0
                position: relative
                z-index: 2
                img
                    max-width 432px
            .text-1
                font-family: 'yeseva_oneregular'
                font-size: 40px
                font-weight: normal
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                text-align: center
                color: #ffffff
                position: absolute
                bottom: 290px
                left: 150px
                opacity: 0
                transition opacity .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                .arrow
                    width: 50px
                    height: 138px
                    position: absolute
                    background url('~static/img/sohobook/03/arrow.svg') no-repeat center
                    bottom: -120px
                    right: -80px
                    transform: rotate(160deg)
            .text-2
                font-family: 'yeseva_oneregular'
                font-size: 40px
                font-weight: normal
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                text-align: center
                color: #ffffff
                position: absolute
                bottom: 380px
                right: 80px
                opacity: 0
                transition opacity .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                .arrow
                    width: 50px
                    height: 138px
                    position: absolute
                    background url('~static/img/sohobook/03/arrow.svg') no-repeat center
                    top: -120px
                    left: -10px
                    transform: rotate(-30deg)
            .photo-cards
                top 255px
                left 220px
                position absolute
                opacity 0
                transform: translateX(320px)
                transition all .4s ease
                &.in-viewport
                    opacity 1
                    transform: translateX(0px)
            .polaroid
                bottom 50px
                right 300px
                position absolute
                opacity 0
                transform: translate(-320px, -100px);
                transition all .4s ease
                &.in-viewport
                    opacity 1
                    transform: translate(0px, 0px)

    .sohobook-04
        padding: 380px 0 232px 0
        .inner
            max-width 1440px
            margin 0 auto
        .title
            font-size: 80px
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width: 880px
            position: relative
            text-align: center
            margin: 0 auto 40px
            span
                position relative
                z-index 2
            .number
                z-index 1
                opacity: 0.1
                font-family: 'montserratmedium'
                font-size: 350px
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: -270px
                left: calc(50% - 215px)
        .font
            width: 417px
            height: 125px
            border: solid 5px #524941
            text-align center
            margin: 0 auto 80px
            padding: 38px 0 0 0
            img
                max-width 100%
        .font-list
            margin-bottom 110px
            display flex
            align-items center
            justify-content space-around
            list-style none
        .color-pallette
            display flex
            align-items center
            justify-content space-around
            .color-1
                text-align center
                .txt
                    margin-top 72px
                .ball
                    margin 0 auto
                    width: 50px
                    height: 50px
                    opacity: 0.2
                    background-color: #b2b2b2
                    border-radius 50%
            .color-2
                text-align center
                .txt
                    margin-top 68px
                .ball
                    margin 0 auto
                    width: 100px
                    height: 100px
                    opacity: 0.8
                    background-color: #161515
                    border-radius 50%
            .color-3
                text-align center
                .txt
                    margin-top 64px
                .ball
                    margin 0 auto
                    border-radius 50%
                    width: 150px
                    height: 150px
                    background-color: #f47539
            .color-4
                text-align center
                .txt
                    margin-top 62px
                .ball
                    margin 0 auto
                    width: 200px
                    height: 200px
                    background-color: #e75b4e
                    position relative
                    border-radius 50%
                    &:before
                        content ''
                        position absolute
                        background rgba(210, 210, 210, .2)
                        width 260px
                        height 260px
                        top -30px
                        left -30px
                        border-radius 50%
            .color-5
                text-align center
                .txt
                    margin-top 64px
                .ball
                    margin 0 auto
                    width: 150px
                    height: 150px
                    background-color: #008eb7
                    border-radius 50%
            .color-6
                text-align center
                .txt
                    margin-top 67px
                .ball
                    margin 0 auto
                    width: 100px
                    height: 100px
                    background-color: #29acd2
                    border-radius 50%
            .color-7
                text-align center
                .txt
                    margin-top 62px
                .ball
                    margin 0 auto
                    width: 50px
                    height: 50px
                    opacity: 0.7
                    background-color: #008eb7
                    border-radius 50%
    .sohobook-05
        padding 346px 0 287px 0
        background url('~static/img/sohobook/05/section-5-bg.svg') no-repeat top
        background-size cover
        position relative
        .title
            font-size: 80px
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width: 880px
            position: relative
            text-align: center
            margin: 0 auto 40px
            span
                position relative
                z-index 2
            .number
                z-index 1
                opacity: 0.1
                font-family: 'montserratmedium'
                font-size: 350px
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: -260px
                left: calc(50% - 215px)
        .bg
            background url('~static/img/sohobook/05/main-img.png') no-repeat center
            width 100%
            height 1634px
            background-size cover
        .thank-you
            text-align center
            margin-bottom 35px
            img
                max-width 256px
        .sps
            font-family: 'yeseva_oneregular'
            font-size: 50px
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            text-align: center
            color: #524941
            margin-bottom 75px
        .line
            text-align center
            margin-bottom 10px
        .app-store
            text-align center
            img
                max-width 140px
</style>
