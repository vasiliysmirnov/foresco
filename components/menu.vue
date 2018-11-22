<template>
    <transition :duration="500">
        <div class="menu" v-show='showNav'>
            <transition name="menuBgAn">
                <div class="menuBg" v-show='showNav' id="particles-js"></div>
            </transition>

            <transition name="fadeMenu">
                <div class="nav-wrapper" v-show='showNav'>
                    <ul>
                        <li data-color="#4597e1" @click="changeNavStateProjects" data-link="projects" @mouseenter="onLinkHover" @mouseleave="onLinkLeave">
                            <a><span>Проекты</span></a>
                        </li>
                        <li data-color="#bade38" @click="changeNavStateTeam" data-link="team" @mouseenter="onLinkHover" @mouseleave="onLinkLeave">
                            <a><span>Команда</span></a>
                        </li>
                        <li data-color="#e19d45" data-link="contacts" data-last="true" @click="changeNavStateContacts" @mouseenter="onLinkHover" @mouseleave="onLinkLeave">
                            <a><span>Контакты</span></a>
                        </li>
                    </ul>
                    <div class="line">
                        <span id="menuLineItem"></span>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import $ from 'jquery'
import TweenMax from "gsap"

export default {
    data: function() {
        return {
            
        }
    },
    computed: {
        showNav () {
            return this.$store.state.showNav
        }
    },
    watch: {
        showNav: function(val) {
            if (val) {
                setTimeout(() => {
                    this.checkTheActiveLink()
                }, 500);
            }
            
        }
    },
    methods: {
        checkTheActiveLink: function(){
            var navLinks = $('.nav-wrapper ul li');
            var line = document.getElementById('menuLineItem');
            var posY = 0;
            for (let index = 0; index < navLinks.length; index++) {
                var element = navLinks[index];
                if($nuxt.$route.name == $(element).data('link')){
                    // set position of the line
                    posY = $(element).position().top + $(element).outerHeight();
                    // set the color to the link
                    $(element).css({'color': $(element).data("color")})
                    // move line to active item
                    if($(element).data('last')){
                        TweenMax.to(line, 0.1, {transform: 'translateY(100%)', background: $(element).data("color")});
                    } else{
                        TweenMax.to(line, 0.1, {transform: 'translateY('+posY+'px)', background: $(element).data("color")});
                    }
                }
            }
        },
        hexToRgb: function( hex ){
            hex = parseInt( hex[0] != '#' ? hex : hex.substring( 1 ), 16 );
            var rgb = [
                hex >> 16 & 255,
                hex >> 8 & 255,
                hex & 255
            ];
            return rgb;
        },
        onLinkHover: function(item) {
            
            var line = document.getElementById('menuLineItem');
            var color = $(item.target).data("color");
            var posY = 0;
            var navLinks = $('.nav-wrapper ul li');
            // set color to all elements
            $(navLinks).css({'color': '#FFF'});
            // set position of the line
            posY = $(item.target).position().top + $(item.target).outerHeight();
            // change color of the hover menu item 
            $(item.target).css({'color': $(item.target).data("color")})
            // animate line
            if($(item.target).data('last')){
                TweenMax.to(line, 0.1, {transform: 'translateY(100%)', background: color});
            } else {
                TweenMax.to(line, 0.1, {transform: 'translateY('+posY+'px)', background: color});
            }
        },
        onLinkLeave: function(item) {
            var line = document.getElementById('menuLineItem');
            var posY = 0;
            TweenMax.to(line, 0.1, {transform: 'translateY(0px)', background: 'transparent'});
            // set the color to white
            $(item.target).css({'color': '#FFF'});
            // check the active link and add color
            this.checkTheActiveLink()
        },

        animationClickToLinkMenu: function(event, link){
            var line = document.getElementById('menuLineItem');
            var target = event.currentTarget
            TweenMax.to(line, 0.1, {
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
        },

        changeNavStateContacts: function(event){
            if ($nuxt.$route.name == 'contacts') {
                this.$store.commit('toggleNav')
            } else {
                this.animationClickToLinkMenu(event, '/contacts')
                setTimeout(() => {this.$store.commit('toggleNav')}, 500)    
            }
            
        },
        changeNavStateTeam: function(event){
            if ($nuxt.$route.name == 'team') {
                this.$store.commit('toggleNav')
            } else {
                this.animationClickToLinkMenu(event, '/team')
                setTimeout(() => {this.$store.commit('toggleNav')}, 500)
            }
            
            
        },
        changeNavStateProjects: function(event){
            if ($nuxt.$route.name == 'projects') {
                this.$store.commit('toggleNav')
            } else {
                this.animationClickToLinkMenu(event, '/projects')
                setTimeout(() => {this.$store.commit('toggleNav')}, 500)
            }
        },
    },
    mounted() {
        
    },
}
</script>

<style lang="stylus" scoped>
@import '~assets/rem.styl'

.fadeMenu-enter-active
    transition: all .5s ease .3s
.fadeMenu-leave-active
    transition: all .1s ease
.fadeMenu-enter, .fadeMenu-leave-to
    transform: translateX(rem(50px))
    opacity: 0
.menuBgAn-enter-active, .menuBgAn-leave-active
    transition: all .3s ease
.menuBgAn-enter
    transform: translateX(100%)
.menuBgAn-leave-to
    transform: translateX(100%)
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
    padding rem(50px 0)
    @media(max-width 500px)
        justify-content center
    @media (max-width 425px)
        padding rem(30px 0)
    .menuBg
        width: 100%
        height: 100%
        position: absolute
        background-color: #000
        z-index: 1
        top: 0
        right: 0
    .nav-wrapper
        position relative
        z-index 2
        height 100%
        display flex
        align-items center
        justify-content flex-start
        padding-right rem(60px)
        overflow hidden
        @media(max-width 455px)
            padding rem(0 20px 0 0)
        .line
            position absolute
            top 0
            right 0
            width rem(1px)
            height 100%
            background rgba(255, 255, 255, 0.2)
            span
                position absolute
                bottom: 100%
                left: 0
                height: 100%
                width: 100%
                transition: all 0.4s linear
    ul
        list-style none
        padding rem(0 0 0 160px)
        @media(max-width 500px)
            padding 0
        li
            color #ffffff
            text-align right
            a
                font-family: 'montserratmedium'
                font-size: rem(45px)
                font-style: normal
                font-stretch: normal
                line-height: 2.13
                letter-spacing: rem(10px)
                color: inherit
                text-decoration none
                cursor pointer
                text-transform uppercase
                display: block
                transition color .2s ease
                @media(max-width 500px)
                    font-size: rem(35px)
                @media(max-width 410px)
                    font-size: rem(30px)
                @media(max-width 320px)
                    font-size: rem(20px)

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
