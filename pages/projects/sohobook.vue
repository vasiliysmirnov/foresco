<template>
    <div class="sohobook">
        <transition name="slide-fade">
            <router-link class="goBack" v-if="show" tag="div" to="/projects">
                Назад
                <span><img src="~static/img/arrow-up.svg" alt="up"></span>
            </router-link>
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
                            <img src="~static/img/sohobook/01/soho_first@2x.png" alt="" >

                            <div class="img-03" v-in-viewport><img src="~static/img/sohobook/01/love-you.png" alt=""></div>
                        </div>
                    </div>
                    <div class="footprint-mobile" v-in-viewport>
                        <img src="~static/img/sohobook/01/footprint.png" alt="">
                    </div>
                    <div class="next-step-1">
                        <img src="~static/img/sohobook/01/line-01.svg" alt="" class="desktop">
                        <img src="~static/img/sohobook/05/line.svg" alt="" class="mobile">
                    </div>
                    
                </section>
                
                <section class="sohobook-02">
                    <div class="inner">
                        <div class="leafs" v-parallax="-0.08">
                            <img src="~static/img/sohobook/01/leafs.png" alt="">
                        </div>
                        <div class="img">
                            <img src="~static/img/sohobook/02/soho_second@2x.png" alt="" >

                        </div>
                        <div class="title">
                            <span v-in-viewport>Выбирайте любимые фотографии</span>
                            <div class="number" v-parallax="0.1">02</div>
                            <div class="footprint-1" v-in-viewport>
                                <img src="~static/img/sohobook/01/footprint.png" alt="">
                            </div>
                        </div>
                        <div class="next-step-2">
                            <img src="~static/img/sohobook/02/line.svg" alt="" class="desktop">
                            <img src="~static/img/sohobook/05/line.svg" alt="" class="mobile">
                        </div>
                        <div class="footprint-mobile" v-in-viewport>
                            <img src="~static/img/sohobook/01/footprint.png" alt="">
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
                                <div class="img-main">
                                    <img src="~static/img/sohobook/03/soho_third@2x.png" alt="">
                                </div>
                                <div class="text-1" v-in-viewport>
                                    Добавляйте <br> фотографии
                                    <div class="arrow"></div>
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

import {client} from '~/store'

export default {
    head: {
        title: 'sohobook'
    },
    data () {
        return{
            show: true
        }
    },
    // get the data
    async fetch ({ store, params }) {
        let { data } = await client.getItems('sohobook')
        store.commit('setSohobook', data)
    },
    components: {
        AppHeader,
        AppMenu,
        AppFooter
    },
    methods:{
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
    scrollToTop: true,
    transition: {
        name: 'page-sohobook',
        mode: 'in-out',
        css: false,
        beforeEnter(el){
            TweenMax.to(el, 0, {
                y: '100vh', scale: 0.9, ease: Power2.easeInOut
            })
        },
        enter(el, done){
            done()
            TweenMax.to(el, 1, {
                y: '25vh', ease: Power2.easeInOut,
                onComplete: function() {
                    TweenMax.to(el, 1, {
                        y: 0, scale: 1, ease: Power2.easeInOut,
                        onComplete: function() {}, clearProps: 'all'
                    })
                }
            })
        },
        leave(el, done){
            TweenMax.to(el, 1, {
                scale: 0.9, ease: Power2.easeInOut,
                onComplete: function() {
                    TweenMax.to(el, 1, {
                        y: '100vh', ease: Power2.easeInOut,
                        onComplete: function() { done() }
                    })
                }
            })
        }
    },
    
}
</script>

<style lang="stylus" scoped>
@import '~assets/rem.styl'

.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(rem(10px));
    opacity: 0;
}
.sohobook
    background #ffffff
    color #302a2c
    position absolute
    top 0
    left 0
    width 100%
    .header
        position fixed
        top 0
        left 0
        z-index 100
    .menu
        position fixed
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
        top rem(50px)
        left calc(50% - 1.875rem)
        cursor pointer
        width rem(60px)
        text-align center
        z-index 101
        font-size: rem(13px)
        font-weight: normal
        font-style: normal
        font-stretch: normal
        line-height: normal
        letter-spacing: rem(1.6px)
        color: #272625
        text-decoration none
        text-transform uppercase
        span
            display block
            margin rem(10px 0 0 0)
            text-align center
    .content
        overflow hidden
        padding 0
    .top
        text-align center
        position relative
        padding-top rem(150px) 
        &__inner
            padding rem(0 50px)
            z-index 2
            position relative
            @media(max-width 768px)
                padding rem(0 40px)
            @media(max-width 320px)
                padding rem(0 20px)
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
            // @media(max-width 1100px)

        .title
            font-size: rem(120px)
            font-family: 'montserratbold'
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: rem(45px)
            color: #524941
            margin-bottom rem(20px)
            text-align center
            @media(max-width 1200px)
                font-size: rem(100px)
            @media(max-width 1024px)
                font-size: rem(80px)
            @media(max-width 900px)
                font-size: rem(60px)
            @media(max-width 768px)
                font-size: rem(50px)
                letter-spacing: rem(15px)
            @media(max-width 425px)
                font-size: rem(40px)
                letter-spacing: rem(5px)
            @media(max-width 320px)
                font-size: rem(35px)
        .desc
            font-size: rem(24px)
            font-family: 'montserratmedium'
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: rem(4px)
            color: #524941
            margin-bottom rem(45px)
            @media(max-width 425px)
                font-size: rem(16px)
                letter-spacing: normal
                text-transform uppercase
                max-width: rem(270px)
                margin: 0 auto rem(30px)
        .img
            position relative
            font-size: rem(18px)
            font-family: 'montserratmedium'
            color: #524941
            @media(max-width 600px)
                padding rem(0 30px)
            img
                @media(max-width 600px)
                    max-width 100%
            .platform
                position absolute
                top rem(300px)
                left rem(130px)
                letter-spacing: rem(6.3px)
                text-transform uppercase
                @media(max-width 970px)
                    display none
            .year
                position absolute
                top rem(300px)
                right rem(160px)
                letter-spacing: rem(3px)
                @media(max-width 970px)
                    display none
        .descFull
            font-size: rem(22px)
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            text-align: center
            color: #302a2c
            max-width rem(950px)
            z-index 2
            position: absolute
            bottom: rem(85px)
            left: calc(50% - 29.6875rem)
            width: 100%
            @media(max-width 1100px)
                bottom 0
            @media(max-width 970px)
                left 0
            @media(max-width 770px)
                font-size: rem(18px)
                padding: rem(0 30px)
            @media(max-width 600px)
                bottom rem(-60px)
            @media(max-width 425px)
                font-family: 'yeseva_oneregular'
                font-size: rem(15px)
                bottom rem(-90px)
            @media(max-width 320px)
                bottom rem(-140px)
            .separator
                position absolute
                top rem(-40px)
                left: calc(50% - 2.1875rem)
                text-align center
                width: rem(70px)
                span
                    width: rem(8px)
                    height: rem(8px)
                    border-radius 50%
                    background-color: #313131
                    margin-right rem(20px)
                    display: inline-block
                    &:last-child
                        margin 0
    .sohobook-01
        padding rem(100px 0 250px 0)
        position relative
        @media(max-width 600px)
            padding rem(170px 0 250px 0)
        .inner
            display flex
            flex-wrap wrap
            align-items center
            justify-content center
            max-width: rem(1440px)
            margin: 0 auto
            position relative
            @media(max-width 768px)
                padding rem(0 20px)
        .leafs
            position absolute
            top rem(100px)
            left calc(50% - 19.6875rem)
            z-index 3
            max-width rem(630px)
            img
                max-width 100%
        .title
            font-size: rem(80px)
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width rem(600px)
            position relative
            @media(max-width 560px)
                font-size: rem(70px)
            @media(max-width 425px)
                font-size: rem(50px)
            span
                display: block
                position relative
                z-index 2
                opacity 0
                transform translateX(rem(-50px))
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform: translateX(0)
            .number
                font-size: rem(350px)
                font-family: 'montserratmedium'
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: rem(-190px)
                left: rem(180px)
                z-index: 1
                opacity: .1
                @media(max-width 600px)
                    font-size rem(250px)
        .img
            max-width 50%
            position relative
            @media(max-width 930px)
                max-width 100%
            img
                position relative
                z-index 2
                max-width rem(780px)
                @media(max-width 650px)
                    transform: translateX(-50%)
                    left: 50%
                    max-width: rem(600px)
                @media(max-width 425px)
                    transform: translateX(-50%)
                    left: 40%
                    max-width: rem(510px)
            .img-03
                position: absolute
                bottom: rem(-320px)
                z-index: 1
                width: rem(384px)
                right: rem(-180px)
                opacity 0
                transition opacity .4s ease 0.5s
                @media(max-width 930px)
                    display none
                &.in-viewport
                    opacity 1
                img
                    max-width 100%
        .next-step-1
            position: absolute
            width: rem(500px)
            left: calc(50% - 19.1875rem)
            bottom: rem(-540px)
            @media(max-width 930px)
                width: rem(20px)
                left: calc(50% - 0.625rem)
                bottom: rem(-20px)
            .desktop
                max-width 100%
                @media(max-width 930px)
                    display none
            .mobile
                display none
                @media(max-width 930px)
                    display block
        .footprint-1
            position: absolute
            height: rem(190px)
            bottom: rem(-400px)
            left: rem(40px)
            opacity: 0
            transition opacity .4s ease 0.5s
            @media(max-width 930px)
                display none
            &.in-viewport
                opacity: 1
            img
                max-height 100%
        .footprint-mobile
            position: absolute
            height: rem(190px)
            bottom: rem(-10px)
            left: 30%
            opacity: 0
            transition opacity .4s ease 0.5s
            display none
            @media(max-width 930px)
                display block
            @media(max-width 425px)
                left 20%
            &.in-viewport
                opacity: 1
            img
                max-height 100%


    .sohobook-02
        padding rem(400px 0 150px 0)
        @media(max-width 930px)
            padding rem(200px 0 150px 0)
        @media(max-width 425px)
            padding rem(100px 0 150px 0)
        .inner
            display flex
            flex-wrap wrap
            align-items center
            justify-content center
            max-width: rem(1200px)
            margin: 0 auto
            position relative
            @media(max-width 768px)
                padding rem(0 20px)
        .leafs
            position absolute
            top rem(100px)
            left calc(50% - 19.6875rem)
            z-index 3
            max-width rem(630px)
            img
                max-width 100%
        .title
            font-size: rem(80px)
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width rem(600px)
            position relative
            @media(max-width 1200px)
                order 1
                margin-bottom rem(80px)
            @media(max-width 560px)
                font-size: rem(70px)
            @media(max-width 425px)
                font-size: rem(50px)
            span
                display block
                position relative
                z-index 2
                opacity: 0
                transform translateX(rem(50px))
                transition all .4s ease 0.5s
                &.in-viewport
                    opacity: 1
                    transform: translateX(0)
            .number
                font-size: rem(350px)
                font-family: 'montserratmedium'
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: rem(-400px)
                left: rem(80px)
                z-index: 1
                opacity: .1
                @media(max-width 600px)
                    font-size rem(250px)
        .img
            max-width 50%
            position relative
            @media(max-width 1200px)
                order 2
            @media(max-width 930px)
                max-width 100%
            &>img
                position relative
                z-index 2
                max-width: rem(760px)
                transform: rotate(-9deg)
                @media(max-width 650px)
                    transform: translateX(-50%) rotate(-9deg)
                    left: 50%
                    max-width: rem(600px)
                @media(max-width 425px)
                    transform: translateX(-50%) rotate(-9deg)
                    left: 60%
                    max-width: rem(510px)
        .footprint-1
            position: absolute
            height: rem(190px)
            top: rem(-330px)
            right: rem(130px)
            opacity: 0
            transition opacity .4s ease 0.5s
            @media(max-width 1200px)
                display none
            &.in-viewport
                opacity: 1
            img
                max-height 100%
        .footprint-mobile
            position: absolute
            height: rem(190px)
            bottom: rem(-210px)
            right: 30%
            opacity: 0
            transition opacity .4s ease 0.5s
            display none
            @media(max-width 930px)
                display block
            @media(max-width 425px)
                right 20%
            &.in-viewport
                opacity: 1
            img
                max-height 100%
        .next-step-2
            position absolute
            bottom rem(-520px)
            left 50%
            @media(max-width 930px)
                width: rem(20px)
                left: calc(50% - 0.625rem)
                bottom: rem(-220px)
            .desktop
                max-width 100%
                @media(max-width 930px)
                    display none
            .mobile
                display none
                @media(max-width 930px)
                    display block
    
    .sohobook-03
        padding rem(450px 0 150px 0)
        @media(max-width 930px)
            padding rem(280px 0 150px 0)
        @media(max-width 425px)
            padding rem(210px 0 150px 0)
        .title
            font-size: rem(80px)
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width: rem(880px)
            position: relative
            text-align: center
            margin: 0 auto rem(100px)
            @media(max-width 1200px)
                margin-bottom rem(80px)
            @media(max-width 768px)
                padding rem(0 20px)
            @media(max-width 560px)
                font-size: rem(70px)
            @media(max-width 425px)
                font-size: rem(45px)
            @media(max-width 320px)
                font-size: rem(35px)
            span
                position relative
                z-index 2
            .number
                z-index 1
                opacity: 0.1
                font-family: 'montserratmedium'
                font-size: rem(350px)
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: rem(-240px)
                left: calc(50% - 13.4375rem)
                @media(max-width 600px)
                    font-size rem(250px)
            .footprint-1
                height rem(190px)
                position absolute
                top: rem(-310px)
                left: rem(300px)
                opacity: 0
                transition opacity .4s ease 0.5s
                @media(max-width 930px)
                    display none
                &.in-viewport
                    opacity: 1
                img
                    max-height 100%
            .one-month-1
                position: absolute
                top: rem(-370px)
                right: rem(-70px)
                width: rem(250px)
                opacity: 0
                transition opacity .4s ease 0.5s
                @media(max-width 930px)
                    display none
                &.in-viewport
                    opacity: 1
                img
                    max-width 100%
        .bg
            background url('~static/img/sohobook/03/doski.jpg')
            background-size cover
            position relative
            background-attachment fixed
            overflow hidden
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
                max-width: rem(1440px)
                margin: 0 auto
                position relative
                z-index 2
            .leafs
                position absolute
                top rem(-300px)
                left calc(50% - 19.6875rem)
                z-index 3
                max-width rem(630px)
                img
                    max-width 100%
            .light-1
                position absolute
                top 0
                right rem(280px)
                opacity: 0
                transform translateY(rem(-100px))
                transition all .4s ease 0.5s
                @media(max-width 1024px)
                    right rem(110px)
                @media(max-width 600px)
                    height rem(183px)
                    right rem(90px)
                    img
                        max-height 100%
                &.in-viewport
                    opacity: 1
                    transform translateY(0)
            .light-2
                position: absolute
                top: 0
                right: rem(160px)
                opacity: 0
                transform translateY(rem(-100px))
                transition all .4s ease 0.5s
                @media(max-width 1024px)
                    right rem(10px)
                @media(max-width 600px)
                    height rem(256px)
                    img
                        max-height 100%
                &.in-viewport
                    opacity: 1
                    transform translateY(0)
            .img-main
                text-align center
                padding rem(80px 0)
                position: relative
                z-index: 2
                @media(max-width 980px)
                    padding rem(170px 70px 0 70px)
                img
                    max-width rem(432px)
                    @media(max-width 660px)
                        max-width 100%
            .text-1
                font-family: 'yeseva_oneregular'
                font-size: rem(40px)
                font-weight: normal
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                text-align: center
                color: #ffffff
                position: absolute
                bottom: rem(290px)
                left: rem(150px)
                opacity: 0
                transition opacity .4s ease 0.5s
                @media(max-width 1200px)
                    left rem(40px)
                @media(max-width 980px)
                    position static
                    text-align center
                    padding-bottom: rem(20px)
                &.in-viewport
                    opacity: 1
                .arrow
                    width: rem(50px)
                    height: rem(138px)
                    position: absolute
                    background url('~static/img/sohobook/03/arrow.svg') no-repeat center
                    bottom: rem(-120px)
                    right: rem(-80px)
                    transform: rotate(160deg)
            .text-2
                font-family: 'yeseva_oneregular'
                font-size: rem(40px)
                font-weight: normal
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                text-align: center
                color: #ffffff
                position: absolute
                bottom: rem(380px)
                right: rem(80px)
                opacity: 0
                transition opacity .4s ease 0.5s
                @media(max-width 1200px)
                    right: rem(40px)
                    text-align right
                    max-width: rem(240px)
                @media(max-width 980px)
                    max-width initial
                    position static
                    text-align center
                    padding-bottom: rem(70px)
                &.in-viewport
                    opacity: 1
                .arrow
                    width: rem(50px)
                    height: rem(138px)
                    position: absolute
                    background url('~static/img/sohobook/03/arrow.svg') no-repeat center
                    top: rem(-120px)
                    left: rem(-10px)
                    transform: rotate(-30deg)
            .photo-cards
                top rem(255px)
                left rem(220px)
                position absolute
                opacity 0
                transform: translateX(rem(320px))
                transition all .4s ease
                @media(max-width 1024px)
                    left rem(40px)
                @media(max-width 768px)
                    left rem(-40px)
                @media(max-width 500px)
                    width rem(200px)
                    img
                        max-width 100%
                &.in-viewport
                    opacity 1
                    transform: translateX(0)
            .polaroid
                bottom rem(50px)
                right rem(300px)
                position absolute
                opacity 0
                transform: translate(rem(-320px), rem(-100px));
                transition all .4s ease
                @media(max-width 1024px)
                    right rem(40px)
                @media(max-width 768px)
                    right rem(-40px)
                    bottom rem(200px)
                @media(max-width 500px)
                    width rem(170px)
                    bottom rem(220px)
                    img
                        max-width 100%
                &.in-viewport
                    opacity 1
                    transform: translate(0, 0)

    .sohobook-04
        padding: rem(380px 0 232px 0)
        @media(max-width 425px)
            padding: rem(50px 0 100px 0)
        .inner
            max-width rem(1440px)
            margin 0 auto
        .title
            font-size: rem(80px)
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width: rem(880px)
            position: relative
            text-align: center
            margin: 0 auto rem(40px)
            @media(max-width 560px)
                font-size: rem(70px)
            @media(max-width 425px)
                font-size: rem(45px)
                padding: rem(0 20px)
            span
                position relative
                z-index 2
            .number
                z-index 1
                opacity: 0.1
                font-family: 'montserratmedium'
                font-size: rem(350px)
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: rem(-270px)
                left: calc(50% - 13.4375rem)
                @media(max-width 600px)
                    font-size rem(250px)
                    left: calc(50% - 10.375rem)
                    top rem(-150px)
        .font
            width: rem(417px)
            height: rem(125px)
            border: solid rem(5px) #524941
            text-align center
            margin: 0 auto rem(80px)
            padding: rem(38px 0 0 0)
            @media(max-width 600px)
                max-width rem(260px)
                height: rem(84px)
                padding: rem(25px 40px 0)
                margin: 0 auto rem(40px)
            img
                max-width 100%
        .font-list
            margin-bottom rem(110px)
            display flex
            align-items center
            justify-content space-around
            list-style none
            @media(max-width 600px)
                flex-wrap wrap
                padding rem(0 60px)
                margin-bottom rem(65px)
            li
                @media(max-width 600px)
                    width 50%
                    margin-bottom rem(27px)
                    &:nth-child(2n)
                        text-align right
        .color-pallette
            display flex
            align-items center
            justify-content space-around
            .txt
                @media(max-width 860px)
                    font-size rem(12px)
                @media(max-width 425px)
                    font-size rem(6px)
            .color-1
                text-align center
                .txt
                    margin-top rem(72px)
                    @media(max-width 425px)
                        margin-top rem(30px)
                .ball
                    margin 0 auto
                    width: rem(50px)
                    height: rem(50px)
                    opacity: 0.2
                    background-color: #b2b2b2
                    border-radius 50%
                    @media(max-width 860px)
                        width: rem(25px)
                        height: rem(25px)
                    @media(max-width 425px)
                        width: rem(14px)
                        height: rem(14px)
            .color-2
                text-align center
                .txt
                    margin-top rem(68px)
                    @media(max-width 425px)
                        margin-top rem(30px)
                .ball
                    margin 0 auto
                    width: rem(100px)
                    height: rem(100px)
                    opacity: 0.8
                    background-color: #161515
                    border-radius 50%
                    @media(max-width 860px)
                        width: rem(50px)
                        height: rem(50px)
                    @media(max-width 425px)
                        width: rem(28px)
                        height: rem(28px)
            .color-3
                text-align center
                .txt
                    margin-top rem(64px)
                    @media(max-width 425px)
                        margin-top rem(30px)
                .ball
                    margin 0 auto
                    border-radius 50%
                    width: rem(150px)
                    height: rem(150px)
                    background-color: #f47539
                    @media(max-width 860px)
                        width: rem(75px)
                        height: rem(75px)
                    @media(max-width 425px)
                        width: rem(42px)
                        height: rem(42px)
            .color-4
                text-align center
                .txt
                    margin-top rem(62px)
                    @media(max-width 425px)
                        margin-top rem(20px)
                .ball
                    margin 0 auto
                    width: rem(200px)
                    height: rem(200px)
                    background-color: #e75b4e
                    position relative
                    border-radius 50%
                    @media(max-width 860px)
                        width: rem(100px)
                        height: rem(100px)
                    @media(max-width 425px)
                        width: rem(55px)
                        height: rem(55px)
                    &:before
                        content ''
                        position absolute
                        background rgba(210, 210, 210, .2)
                        width rem(260px)
                        height rem(260px)
                        top rem(-30px)
                        left rem(-30px)
                        border-radius 50%
                        @media(max-width 860px)
                            width rem(130px)
                            height rem(130px)
                            top rem(-16px)
                            left rem(-16px)
                        @media(max-width 425px)
                            width rem(72px)
                            height rem(72px)
                            top rem(-8px)
                            left rem(-8px)
            .color-5
                text-align center
                .txt
                    margin-top rem(64px)
                    @media(max-width 425px)
                        margin-top rem(30px)
                .ball
                    margin 0 auto
                    width: rem(150px)
                    height: rem(150px)
                    background-color: #008eb7
                    border-radius 50%
                    @media(max-width 860px)
                        width: rem(75px)
                        height: rem(75px)
                    @media(max-width 425px)
                        width: rem(42px)
                        height: rem(42px)
            .color-6
                text-align center
                .txt
                    margin-top rem(67px)
                    @media(max-width 425px)
                        margin-top rem(30px)
                .ball
                    margin 0 auto
                    width: rem(100px)
                    height: rem(100px)
                    background-color: #29acd2
                    border-radius 50%
                    @media(max-width 860px)
                        width: rem(50px)
                        height: rem(50px)
                    @media(max-width 425px)
                        width: rem(28px)
                        height: rem(28px)
            .color-7
                text-align center
                .txt
                    margin-top rem(62px)
                    @media(max-width 425px)
                        margin-top rem(30px)
                .ball
                    margin 0 auto
                    width: rem(50px)
                    height: rem(50px)
                    opacity: 0.7
                    background-color: #008eb7
                    border-radius 50%
                    @media(max-width 860px)
                        width: rem(25px)
                        height: rem(25px)
                    @media(max-width 425px)
                        width: rem(14px)
                        height: rem(14px)
    .sohobook-05
        padding rem(346px 0 287px 0)
        background url('~static/img/sohobook/05/section-5-bg.svg') no-repeat top
        background-size cover
        position relative
        @media(max-width 425px)
            padding rem(195px 0 87px 0)
        .title
            font-size: rem(80px)
            font-family: 'yeseva_oneregular'
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            color: #524941
            max-width: rem(880px)
            position: relative
            text-align: center
            margin: 0 auto rem(40px)
            @media(max-width 560px)
                font-size: rem(70px)
            @media(max-width 425px)
                font-size: rem(45px)
                padding: rem(0 20px)
            span
                position relative
                z-index 2
            .number
                z-index 1
                opacity: 0.1
                font-family: 'montserratmedium'
                font-size: rem(350px)
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #e5bd98
                position absolute
                top: rem(-260px)
                left: calc(50% - 13.4375rem)
                @media(max-width 600px)
                    font-size 250px
                    left: calc(50% - 9.6875rem)
        .bg
            background url('~static/img/sohobook/05/main-img.png') no-repeat center
            width 100%
            height rem(1634px)
            background-size cover
            @media(max-width 768px)
                height: rem(624px)
            @media(max-width 425px)
                height: rem(481px)
            @media(max-width 375px)
                height: rem(424px)
                background-size: contain
            @media(max-width 320px)
                height rem(364px)
        .thank-you
            text-align center
            margin-bottom rem(35px)
            img
                max-width rem(256px)
                @media(max-width 425px)
                    max-width rem(168px)
        .sps
            font-family: 'yeseva_oneregular'
            font-size: rem(50px)
            font-weight: normal
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: normal
            text-align: center
            color: #524941
            margin-bottom rem(75px)
            @media(max-width 425px)
                font-size: rem(30px)
                padding rem(0 20px)
        .line
            text-align center
            margin-bottom rem(10px)
        .app-store
            text-align center
            img
                max-width rem(140px)
</style>
