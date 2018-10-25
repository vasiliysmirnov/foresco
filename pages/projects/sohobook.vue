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
            show: false
        }
    },
    // get the data
    async fetch ({ store, params }) {
        let { data } = await client.getItems('sohobook')
        store.commit('setSohobook', data)
    },
    beforeRouteLeave (to, from, next) {
        TweenMax.to($('.sohobook'), 0.1, {
            opacity: 0, ease: Power2.easeInOut,
            onComplete: function() {
                next()
            }
        })
    },
    transition: {
        name: 'sohobook',
        // appear: true, // if we wanna to show animation on page load and reload
        // css: false,
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
            @media(max-width 768px)
                padding 0 40px
            @media(max-width 320px)
                padding 0 20px
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
            font-size: 120px
            font-family: 'montserratbold'
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: 45px
            color: #524941
            margin-bottom 20px
            text-align center
            @media(max-width 1200px)
                font-size: 100px
            @media(max-width 1024px)
                font-size: 80px
            @media(max-width 900px)
                font-size: 60px
            @media(max-width 768px)
                font-size: 50px
                letter-spacing: 15px
            @media(max-width 425px)
                font-size: 40px
                letter-spacing: 5px
            @media(max-width 320px)
                font-size: 35px
        .desc
            font-size: 24px
            font-family: 'montserratmedium'
            font-style: normal
            font-stretch: normal
            line-height: normal
            letter-spacing: 4px
            color: #524941
            margin-bottom 45px
            @media(max-width 425px)
                font-size: 16px
                letter-spacing: normal
                text-transform uppercase
                max-width: 270px
                margin: 0 auto 30px
        .img
            position relative
            font-size: 18px
            font-family: 'montserratmedium'
            color: #524941
            @media(max-width 600px)
                padding 0 30px
            img
                @media(max-width 600px)
                    max-width 100%
            .platform
                position absolute
                top 300px
                left 130px
                letter-spacing: 6.3px
                text-transform uppercase
                @media(max-width 970px)
                    display none
            .year
                position absolute
                top 300px
                right 160px
                letter-spacing: 3px
                @media(max-width 970px)
                    display none
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
            @media(max-width 1100px)
                bottom 0
            @media(max-width 970px)
                left 0
            @media(max-width 770px)
                font-size: 18px
                padding: 0 30px
            @media(max-width 600px)
                bottom -60px
            @media(max-width 425px)
                font-family: 'yeseva_oneregular'
                font-size: 15px
                bottom -90px
            @media(max-width 320px)
                bottom -140px
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
        @media(max-width 600px)
            padding 170px 0 250px 0
        .inner
            display flex
            flex-wrap wrap
            align-items center
            justify-content center
            max-width: 1440px
            margin: 0 auto
            position relative
            @media(max-width 768px)
                padding 0 20px
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
            @media(max-width 560px)
                font-size: 70px
            @media(max-width 425px)
                font-size: 50px
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
                @media(max-width 600px)
                    font-size 250px
        .img
            max-width 50%
            position relative
            @media(max-width 930px)
                max-width 100%
            img
                position relative
                z-index 2
                max-width 780px
                @media(max-width 650px)
                    transform: translateX(-50%)
                    left: 50%
                    max-width: 600px
                @media(max-width 425px)
                    transform: translateX(-50%)
                    left: 40%
                    max-width: 510px
            .img-03
                position: absolute
                bottom: -320px
                z-index: 1
                width: 384px
                right: -180px
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
            width: 500px
            left: calc(50% - 307px)
            bottom: -540px
            @media(max-width 930px)
                width: 20px
                left: calc(50% - 10px)
                bottom: -20px
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
            height: 190px
            bottom: -400px
            left: 40px
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
            height: 190px
            bottom: -10px
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
        padding 400px 0 150px 0
        @media(max-width 930px)
            padding 200px 0 150px 0
        @media(max-width 425px)
            padding 100px 0 150px 0
        .inner
            display flex
            flex-wrap wrap
            align-items center
            justify-content center
            max-width: 1200px
            margin: 0 auto
            position relative
            @media(max-width 768px)
                padding 0 20px
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
            @media(max-width 1200px)
                order 1
                margin-bottom 80px
            @media(max-width 560px)
                font-size: 70px
            @media(max-width 425px)
                font-size: 50px
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
                @media(max-width 600px)
                    font-size 250px
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
                max-width: 760px
                transform: rotate(-9deg)
                @media(max-width 650px)
                    transform: translateX(-50%) rotate(-9deg)
                    left: 50%
                    max-width: 600px
                @media(max-width 425px)
                    transform: translateX(-50%) rotate(-9deg)
                    left: 60%
                    max-width: 510px
        .footprint-1
            position: absolute
            height: 190px
            top: -330px
            right: 130px
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
            height: 190px
            bottom: -210px
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
            bottom -520px
            left 50%
            @media(max-width 930px)
                width: 20px
                left: calc(50% - 10px)
                bottom: -220px
            .desktop
                max-width 100%
                @media(max-width 930px)
                    display none
            .mobile
                display none
                @media(max-width 930px)
                    display block
    
    .sohobook-03
        padding 450px 0 150px 0
        @media(max-width 930px)
            padding 280px 0 150px 0
        @media(max-width 425px)
            padding 210px 0 150px 0
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
            @media(max-width 1200px)
                margin-bottom 80px
            @media(max-width 768px)
                padding 0 20px
            @media(max-width 560px)
                font-size: 70px
            @media(max-width 425px)
                font-size: 45px
            @media(max-width 320px)
                font-size: 35px
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
                @media(max-width 600px)
                    font-size 250px
            .footprint-1
                height 190px
                position absolute
                top: -310px
                left: 300px
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
                top: -370px
                right: -70px
                width: 250px
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
                @media(max-width 1024px)
                    right 110px
                @media(max-width 600px)
                    height 183px
                    right 90px
                    img
                        max-height 100%
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
                @media(max-width 1024px)
                    right 10px
                @media(max-width 600px)
                    height 256px
                    img
                        max-height 100%
                &.in-viewport
                    opacity: 1
                    transform translateY(0)
            .img-main
                text-align center
                padding 80px 0
                position: relative
                z-index: 2
                @media(max-width 980px)
                    padding 170px 70px 0 70px
                img
                    max-width 432px
                    @media(max-width 660px)
                        max-width 100%
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
                @media(max-width 1200px)
                    left 40px
                @media(max-width 980px)
                    position static
                    text-align center
                    padding-bottom: 20px
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
                @media(max-width 1200px)
                    right: 40px
                    text-align right
                    max-width: 240px
                @media(max-width 980px)
                    max-width initial
                    position static
                    text-align center
                    padding-bottom: 70px
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
                @media(max-width 1024px)
                    left 40px
                @media(max-width 768px)
                    left -40px
                @media(max-width 500px)
                    width 200px
                    img
                        max-width 100%
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
                @media(max-width 1024px)
                    right 40px
                @media(max-width 768px)
                    right: -40px
                    bottom: 200px
                @media(max-width 500px)
                    width 170px
                    bottom: 220px
                    img
                        max-width 100%
                &.in-viewport
                    opacity 1
                    transform: translate(0px, 0px)

    .sohobook-04
        padding: 380px 0 232px 0
        @media(max-width 425px)
            padding: 50px 0 100px 0
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
            @media(max-width 560px)
                font-size: 70px
            @media(max-width 425px)
                font-size: 45px
                padding: 0 20px
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
                @media(max-width 600px)
                    font-size 250px
                    left: calc(50% - 166px)
                    top -150px
        .font
            width: 417px
            height: 125px
            border: solid 5px #524941
            text-align center
            margin: 0 auto 80px
            padding: 38px 0 0 0
            @media(max-width 600px)
                max-width 260px
                height: 84px
                padding: 25px 40px 0
                margin: 0 auto 40px
            img
                max-width 100%
        .font-list
            margin-bottom 110px
            display flex
            align-items center
            justify-content space-around
            list-style none
            @media(max-width 600px)
                flex-wrap wrap
                padding 0 60px
                margin-bottom 65px
            li
                @media(max-width 600px)
                    width 50%
                    margin-bottom 27px
                    &:nth-child(2n)
                        text-align right
        .color-pallette
            display flex
            align-items center
            justify-content space-around
            .txt
                @media(max-width 860px)
                    font-size 12px
                @media(max-width 425px)
                    font-size 6px
            .color-1
                text-align center
                .txt
                    margin-top 72px
                    @media(max-width 425px)
                        margin-top 30px
                .ball
                    margin 0 auto
                    width: 50px
                    height: 50px
                    opacity: 0.2
                    background-color: #b2b2b2
                    border-radius 50%
                    @media(max-width 860px)
                        width: 25px
                        height: 25px
                    @media(max-width 425px)
                        width: 14px
                        height: 14px
            .color-2
                text-align center
                .txt
                    margin-top 68px
                    @media(max-width 425px)
                        margin-top 30px
                .ball
                    margin 0 auto
                    width: 100px
                    height: 100px
                    opacity: 0.8
                    background-color: #161515
                    border-radius 50%
                    @media(max-width 860px)
                        width: 50px
                        height: 50px
                    @media(max-width 425px)
                        width: 28px
                        height: 28px
            .color-3
                text-align center
                .txt
                    margin-top 64px
                    @media(max-width 425px)
                        margin-top 30px
                .ball
                    margin 0 auto
                    border-radius 50%
                    width: 150px
                    height: 150px
                    background-color: #f47539
                    @media(max-width 860px)
                        width: 75px
                        height: 75px
                    @media(max-width 425px)
                        width: 42px
                        height: 42px
            .color-4
                text-align center
                .txt
                    margin-top 62px
                    @media(max-width 425px)
                        margin-top 20px
                .ball
                    margin 0 auto
                    width: 200px
                    height: 200px
                    background-color: #e75b4e
                    position relative
                    border-radius 50%
                    @media(max-width 860px)
                        width: 100px
                        height: 100px
                    @media(max-width 425px)
                        width: 55px
                        height: 55px
                    &:before
                        content ''
                        position absolute
                        background rgba(210, 210, 210, .2)
                        width 260px
                        height 260px
                        top -30px
                        left -30px
                        border-radius 50%
                        @media(max-width 860px)
                            width: 130px
                            height: 130px
                            top -16px
                            left -16px
                        @media(max-width 425px)
                            width: 72px
                            height: 72px
                            top -8px
                            left -8px
            .color-5
                text-align center
                .txt
                    margin-top 64px
                    @media(max-width 425px)
                        margin-top 30px
                .ball
                    margin 0 auto
                    width: 150px
                    height: 150px
                    background-color: #008eb7
                    border-radius 50%
                    @media(max-width 860px)
                        width: 75px
                        height: 75px
                    @media(max-width 425px)
                        width: 42px
                        height: 42px
            .color-6
                text-align center
                .txt
                    margin-top 67px
                    @media(max-width 425px)
                        margin-top 30px
                .ball
                    margin 0 auto
                    width: 100px
                    height: 100px
                    background-color: #29acd2
                    border-radius 50%
                    @media(max-width 860px)
                        width: 50px
                        height: 50px
                    @media(max-width 425px)
                        width: 28px
                        height: 28px
            .color-7
                text-align center
                .txt
                    margin-top 62px
                    @media(max-width 425px)
                        margin-top 30px
                .ball
                    margin 0 auto
                    width: 50px
                    height: 50px
                    opacity: 0.7
                    background-color: #008eb7
                    border-radius 50%
                    @media(max-width 860px)
                        width: 25px
                        height: 25px
                    @media(max-width 425px)
                        width: 14px
                        height: 14px
    .sohobook-05
        padding 346px 0 287px 0
        background url('~static/img/sohobook/05/section-5-bg.svg') no-repeat top
        background-size cover
        position relative
        @media(max-width 425px)
            padding 195px 0 87px 0
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
            @media(max-width 560px)
                font-size: 70px
            @media(max-width 425px)
                font-size: 45px
                padding: 0 20px
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
                @media(max-width 600px)
                    font-size 250px
                    left: calc(50% - 155px)
        .bg
            background url('~static/img/sohobook/05/main-img.png') no-repeat center
            width 100%
            height 1634px
            background-size cover
            @media(max-width 768px)
                height: 624px
            @media(max-width 425px)
                height: 481px
            @media(max-width 375px)
                height: 424px
                background-size: contain
            @media(max-width 320px)
                height 364px
        .thank-you
            text-align center
            margin-bottom 35px
            img
                max-width 256px
                @media(max-width 425px)
                    max-width 168px
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
            @media(max-width 425px)
                font-size: 30px
                padding 0 20px
        .line
            text-align center
            margin-bottom 10px
        .app-store
            text-align center
            img
                max-width 140px
</style>
