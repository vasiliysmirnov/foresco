<template>
    <transition name="bounce">
    <div class="sohobook">
        <div class="goBack">
            <router-link to="/projects">Назад<span><img src="~static/img/arrow-up.svg" alt="up"></span></router-link>
        </div>
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
                        <div class="title">
                            <span>Coздайте <br>книгу своей мечты</span>
                            <div class="number">01</div>
                            <div class="footprint-1">
                                <img src="~static/img/sohobook/01/footprint.png" alt="">
                            </div>
                        </div>
                        <div class="img">
                            <img src="~static/img/sohobook/01/01.png" alt="">

                            <div class="img-01"><img src="~static/img/sohobook/01/01-01.png" alt=""></div>
                            <div class="img-02"><img src="~static/img/sohobook/01/01-02.png" alt=""></div>
                            <div class="img-03"><img src="~static/img/sohobook/01/love-you.png" alt=""></div>
                        </div>
                    </div>
                    <div class="next-step-1">
                        <img src="~static/img/sohobook/01/line-01.svg" alt="">
                    </div>
                    
                </section>
                
                <section class="sohobook-02">
                    <div class="inner">
                        <div class="img">
                            <img src="~static/img/sohobook/02/02.png" alt="">

                            <div class="img-01"><img src="~static/img/sohobook/02/02-01.png" alt=""></div>
                            <div class="img-02"><img src="~static/img/sohobook/02/02-02.png" alt=""></div>
                        </div>
                        <div class="title">
                            <span>Выбирайте любимые фотографии</span>
                            <div class="number">02</div>
                            <div class="footprint-1">
                                <img src="~static/img/sohobook/01/footprint.png" alt="">
                            </div>
                        </div>
                    </div>
                </section>

                <section class="sohobook-03">
                    <div class="inner">
                        <div class="title">
                            <span>Редактируйте их и создавайте коллажи</span>
                            <div class="number">03</div>
                            <div class="footprint-1">
                                <img src="~static/img/sohobook/01/footprint.png" alt="">
                            </div>
                            <div class="one-month-1">
                                <img src="~static/img/sohobook/03/one-month.png" alt="">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    </div>
    </transition>
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
    // get sohobook from api
    methods:{
        ...mapActions({
            getSohobook: 'getSohobook'
        })
    },
    mounted() {
        this.getSohobook()
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
.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% { transform: scale(0) }
  50% { transform: scale(1.5) }
  100% { transform: scale(1) }
}
@keyframes bounce-out {
  0% { transform: scale(1) }
  50% { transform: scale(1.5) }
  100% { transform: scale(0) }
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
            max-width: 1200px
            margin: 0 auto
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
                position relative
                z-index 2
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
                max-width 100%
                position relative
                z-index 2
            .img-01
                position: absolute
                bottom: 0
                z-index: 1
                width: 450px
                right: -180px
                transform rotate(-12deg)
            .img-02
                position: absolute
                bottom: 0
                z-index: 1
                width: 360px
                left: -130px
            .img-03
                position: absolute
                bottom: -230px
                z-index: 1
                width: 315px
                right: -120px
        .next-step-1
            position absolute
            width 615px
            left calc(50% - 307px)
            bottom: -600px
        .footprint-1
            position: absolute
            height: 190px
            bottom: -400px
            left: 40px
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
                position relative
                z-index 2
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
                left: 80px
                z-index: 1
                opacity: .1
        .img
            max-width 50%
            position relative
            img
                max-width 100%
                position relative
                z-index 2
            .img-01
                position: absolute
                top: 410px
                z-index: 1
                width: 390px
                left: -130px
            .img-02
                position: absolute
                bottom: -180px
                z-index: 1
                width: 670px
                right: -220px
        .footprint-1
            position: absolute
            height: 190px
            top: -520px
            right: 130px
            img
                max-height 100%
    
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
            margin: 0 auto
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
                img
                    max-height 100%
            .one-month-1
                position: absolute
                top: -370px
                right: -90px
                width: 250px
                img
                    max-width 100%
</style>
