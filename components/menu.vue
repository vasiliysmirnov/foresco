<template>
    <transition :duration="1000">
        <div class="menu" v-show='showNav'>
            <transition name="menuBgAn">
                <div class="menuBg" v-show='showNav'></div>
            </transition>

            <transition name="fadeMenu">
                <div class="nav-wrapper" v-show='showNav'>
                <ul>
                    <li data-color="#e19d45">
                        <a v-on:click="changeNavStateContacts($event)"><span>Контакты</span></a>
                    </li>
                    <!-- <li data-color="#bade38">
                        <a @click="changeNavStateTeam"><span>Команда</span></a>
                    </li> -->
                    <li data-color="#4597e1" data-last="true">
                        <a @click="changeNavStateProjects"><span>Проекты</span></a>
                    </li>
                </ul>
                <div class="line">
                    <span id="lineItem"></span>
                </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<style lang="stylus" scoped>
.fadeMenu-enter-active
    transition: all .5s ease .3s
.fadeMenu-leave-active
    transition: all .2s
.fadeMenu-enter, .fadeMenu-leave-to
    transform: translateX(50px)
    opacity: 0
.menuBgAn-enter-active, .menuBgAn-leave-active
    transition: all .6s ease
.menuBgAn-enter
    transform: translateX(100%)
.menuBgAn-leave-to
    // transform: translateX(-100%)
    opacity: 0

.menu
    position: absolute
    z-index 99
    top 0
    left 0
    width 100%
    height 100vh
    display flex
    align-items center
    justify-content flex-start
    overflow hidden
    @media(max-width 500px)
        justify-content center
    .menuBg
        width: 100%
        height: 100%
        position: absolute;
        background: #000;
        z-index: 1;
        top: 0;
        right: 0
    .nav-wrapper
        position relative
        z-index 2
        height 100%
        display flex
        align-items center
        justify-content flex-start
        padding-right 60px
        @media(max-width 455px)
            padding 0 20px 0 0
        .line
            position absolute
            top 0
            right 0
            width 1px
            height 100%
            background rgba(255, 255, 255, 0.2)
            span
                position absolute
                bottom: 100%
                left: 0px
                height: 100%
                width: 100%
                transition: all 0.4s linear
    ul
        list-style none
        padding 0 0 0 160px
        @media(max-width 500px)
            padding 0
        li
            color #ffffff
            a
                font-family: 'montserratmedium'
                font-size: 45px
                font-style: normal
                font-stretch: normal
                line-height: 2.13
                letter-spacing: 10px
                color: inherit
                text-decoration none
                cursor pointer
                text-transform uppercase
                display: block
                transition color .2s ease
                @media(max-width 500px)
                    font-size: 35px
                @media(max-width 410px)
                    font-size: 30px
                @media(max-width 320px)
                    font-size: 20px
            // &:hover
            //     &:nth-child(1)
            //         a
            //             color: #e19d45
            //     &:nth-child(2)
            //         a
            //             color #bade38
            //     &:nth-child(3)
            //         a
            //             color: #4597e1


@keyframes menuOpen {
    0%{
        opacity 0
        transform translate(100%,0)
    }
    100%{
        transform translate(0,0)
        opacity 1
    }
}
@keyframes menuClose {
    0%{
        opacity 1
        transform translate(0,0)
    }
    100%{
        transform translate(100%,0)
        opacity 0
    }
}
</style>

<script>
import $ from 'jquery'
import TweenMax from "gsap"

export default {
    computed: {
        showNav () {
            return this.$store.state.showNav
        }
    },
    mounted () {
        var navLinks = $('.nav-wrapper ul li');
        var line = document.getElementById('lineItem');
        navLinks.on("mouseenter", function() {
            onLinkHover($(this))
            $(this).css({'color': $(this).data("color")})
        });
        navLinks.on("mouseleave", function() {
            onLinkLeave($(this))
            $(this).css({'color': '#fff'})
        });
        var onLinkHover = function(item) {
            var color = item.data("color");
            // item.addClass('active');
            var posY = 0;
            posY = item.position().top + item.outerHeight();
            if(item.data('last'))
                var tween = TweenLite.to(line, 0.1, {transform: 'translateY(100%)', background: color});
            else
                var tween = TweenLite.to(line, 0.1, {transform: 'translateY('+posY+'px)', background: color});
        };
        var onLinkLeave = function(item) {
            var posY = 0;
            var tween = TweenLite.to(line, 0.1, {transform: 'translateY(0px)', background: 'transparent'});
        };
        
    },
    methods: {
        animationClickToLinkMenu: function(event, link){
            var line = document.getElementById('lineItem');
            var target = event.currentTarget
            var tween = TweenLite.to(line, 0.1, {
                height: 0,
                onComplete: function() {
                    TweenMax.to(target, 0.3, {
                        transform: 'translateX(-50px)',
                        onComplete: function() {
                            $nuxt.$router.push(link)
                        }
                    })
                }
            })
            // this.$store.commit('toggleNav')
        },
        changeNavStateContacts: function(event){
            this.animationClickToLinkMenu(event, '/contacts')
            setTimeout(() => {this.$store.commit('toggleNav')}, 500)
        },
        changeNavStateTeam: function(event){
            this.animationClickToLinkMenu(event, '/team')
            setTimeout(() => {this.$store.commit('toggleNav')}, 500)
            
        },
        changeNavStateProjects: function(event){
            this.animationClickToLinkMenu(event, '/projects')
            setTimeout(() => {this.$store.commit('toggleNav')}, 500)
        },
    }
}
</script>