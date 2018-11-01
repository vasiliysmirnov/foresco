<template>
    <div class="team">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <!-- <div class="gallery gallery_main">
                    <div class="team__inner gallery__container">
                        <div class="gallery__draggable gallery__draggable_active" data-gallery>
                            <div class="team__item gallery__item" v-for="item in team" :key="item.id">
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
                    </div>
                    
                </div> -->
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
                            <div class="cursor__text">drag me</div>
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

            $('.teamSlide .team__inner').slick({
                infinite: false,
                slidesToShow: 1,
                dots: false,
                arrows: false,
                variableWidth: true
            });
            $('.teamSlide .team__inner').on("mousedown", function(e){
                // $(this).addClass('active')
                TweenMax.to($('.team__item'), 0.6, {
                    scale: 0.7
                })
            })
            $('.teamSlide .team__inner').on("mouseup", function(e){
                TweenMax.to($('.team__item'), 0.6, {
                    scale: 1
                })
            })

            var tools = {
                init: function(params) {

                    this.client();

                    if (params == undefined) return;

                    var i = 0;
                    var paramsLen = params.length;

                    for (i; i < paramsLen; i++) {
                        tools[params[i]]();
                    }

                },
                client: function() {

                    window.client = {
                        get: function() {
                            this.$document = $(document);
                            this.$window = $(window);
                            this.windowW = this.$window.width();
                            this.windowH = this.$window.height();
                            this.isMobile = this.windowW <= 1200;
                            this.scrollW = this.getScrollWidth();
                            this.isRetina = this.checkRetina();
                        },
                        getScrollWidth: function() {
                            var outer = document.createElement("div");
                            outer.style.visibility = "hidden";
                            outer.style.width = "100px";
                            outer.style.msOverflowStyle = "scrollbar";
                            document.body.appendChild(outer);
                            var widthNoScroll = outer.offsetWidth;
                            outer.style.overflow = "scroll";
                            var inner = document.createElement("div");
                            inner.style.width = "100%";
                            outer.appendChild(inner);
                            var widthWithScroll = inner.offsetWidth;
                            outer.parentNode.removeChild(outer);
                            return widthNoScroll - widthWithScroll;
                        },
                        checkRetina: function() {
                            if (window.matchMedia) {
                                var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
                                return (mq && mq.matches || (window.devicePixelRatio > 1));
                            }
                        },
                    };

                    client.get();

                    client.$window.on('resize', function() {
                        client.get();
                    });
                },
            };

            var gallery = {
                init: function(){
                    var th = gallery;
                    
                    th.elements = {
                        $galleryContainer: $('.gallery__container'),
                        $gallery: $('[data-gallery]'),
                        $cursor: $('[data-cursor]'),
                        $cursorText: $('[data-cursor-text]'),
                        $cursorBox: $('[data-cursor-box]'),
                    };

                    th.mods = {
                        galleryActive: 'gallery__container_active',
                        cursorHover: 'cursor_hover',
                        cursorActive: 'cursor_active'

                    };
                    
                    if(th.elements.$gallery.length > 0){
                
                        th.property = {
                            x: 0,
                            xTemp: 0,
                            width: th.elements.$gallery.width(),
                            halfSize: th.elements.$gallery.width() / 2,
                            scale: 0.7
                        };
                
                        th.data = {
                            drag: false,
                            mouse: {
                                x: 0,
                                y: 0,
                                multiple: 1.2
                            }
                        };

                        th.services = {
                            multiple: function(x){
                                x += th.data.mouse.multiple * x;
                                return x;
                            },
                            setMaxPosition: function(x){
                                var maxLeft = th.property.halfSize,
                                    // maxRight = -(th.property.halfSize - tools.client.windowW);
                                    maxRight = 0;
                                if(x > maxLeft) x = maxLeft;
                                if(x < maxRight) x = maxRight;
                                return x;
                            }
                        };


                        th.elements.$gallery.css({
                            'left': -th.property.halfSize + 'px',
                            'transform': 'translate3d(' + th.property.halfSize + 'px, 0px, 0px)'
                        });
                        th.events();

                        th.elements.$gallery.addClass("gallery__draggable_active");
                    }
                },
                events: function(){
                    var th = gallery;
                
                    $(document)
                    .on("mousedown", function(e){
                        th.dragStart(e);
                    })
                    .on("mouseup", function(e){
                        th.dragStop(e); 
                    })
                    .on("mousemove", function(e){
                        th.drag(e);
                        th.cursorMove(e);
                    });

                    th.elements.$gallery
                    .on("mouseenter", function(){
                        th.elements.$cursor.addClass(th.mods.cursorHover);
                    })
                    .on("mouseleave", function(){
                        if(!th.elements.$cursor.hasClass(th.mods.cursorActive)) th.elements.$cursor.removeClass(th.mods.cursorHover);           
                    });
                },
                dragStart: function(e){
                    var th = gallery;
                    if(!th.elements.$cursor.hasClass(th.mods.cursorHover)) return;

                    th.data.drag = true;
                    th.data.mouse.x = th.services.multiple(e.pageX);
                    th.elements.$galleryContainer.addClass(th.mods.galleryActive);
                    th.elements.$cursor.addClass(th.mods.cursorActive);
                },
                dragStop: function(e){
                    var th = gallery;

                    th.data.drag = false;
                    th.property.x = th.property.xTemp;
                    th.data.mouse.x = th.services.multiple(e.pageX);
                    th.elements.$galleryContainer.removeClass(th.mods.galleryActive);
                    th.elements.$cursor.removeClass(th.mods.cursorActive);
                },
                drag: function(e){
                    var th = gallery;
                    th.property.xTemp = th.services.setMaxPosition(th.property.x - (th.data.mouse.x - th.services.multiple(e.pageX)));
                    if(th.data.drag) th.elements.$gallery[0].style.transform = "translate3D(" + th.property.xTemp + "px, 0, 0)";
                },
                cursorMove: function(e) {
                    var th = gallery;
                    th.elements.$cursor[0].style.transform = "translate3D("+(e.pageX-46)+"px, "+(e.pageY-$(document).scrollTop()-46)+"px, 0)";
                }
            };

            gallery.init()
            
        },
        computed: {
            team() {
                return this.$store.state.team
            },
            
        },
    }
</script>

<style lang="stylus" scoped>
.team
    // fix for content, to display elements by center
    .content
        display: flex
        flex-direction: column
        flex-grow: initial
        padding 0
    &__inner
        // display flex
        // overflow-x scroll
        // flex-direction row
        width: 100%
        max-width: 1200px
        margin: 0 auto
        // transition: all .6s ease
        // transform: scale(1)
        // user-select: none
        // cursor: none
        // &.active
        //     transform: scale(.7)
        //     cursor: none
        .team__item
            transform-origin left
            .team__item-inner
                display flex
                align-items center
                justify-content space-between
                flex: 1 0 auto
            width 100%
            max-width 900px
            position relative
            margin-right 50px
            @media(max-width 620px)
                min-height calc(100vh - 270px)
                overflow hidden
            .img
                width 50%
                @media(max-width 620px)
                    width 100%
                    position absolute
                    top 0
                    left 0
                    height 100%
                    opacity: 0.6
                img
                    max-width 620px
                    @media(max-width 620px)
                        max-width initial
                        min-width: 100%
                        height: auto
                        min-height: 100%
                        width: auto
                        position: absolute
                        top: 50%
                        left: 50%
                        transform: translate(-50%,-50%) scale(0.5)
            .description
                text-align right
                width 50%
                @media(max-width 620px)
                    width 100%
                    position relative
                    z-index 1
                    text-shadow 1px 1px 3px #333
                .name
                    font-family: 'montserratbold'
                    font-size: 36px
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee
                    margin-bottom 10px
                .position
                    font-size: 12px
                    font-family: 'montserratlight'
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee
                    margin-bottom 20px
                    padding-bottom 20px
                    position relative
                    &:before
                        content ''
                        position absolute
                        bottom 0
                        right 0
                        width 100%
                        height 1px
                        background #FFF
                .txt
                    font-size: 10px
                    font-weight: normal
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #eeeeee

.cursor {
    width: 76px;
    height: 76px;
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300
}

.cursor__fly {
    width: 76px;
    height: 76px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 300
}

.cursor__fly_slow {
    transition: -webkit-transform .1s ease;
    transition: transform .1s ease;
    transition: transform .1s ease,-webkit-transform .1s ease
}

.cursor__text {
    font-size: 12px;
    padding-top: 28px;
    text-align: center;
    opacity: 0;
    transition: opacity .5s ease
}

.cursor__body {
    transition: opacity .1s ease,-webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5);
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5),opacity .1s ease;
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5),opacity .1s ease,-webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5);
    width: 76px;
    height: 76px;
    background: 0 0;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 0;
    color: #fff;
    transform-origin: center center
}

.cursor__body svg {
    position: absolute;
    left: 0;
    top: 0;
    stroke-dasharray: 300px;
    stroke-dashoffset: 300px;
    transition: stroke-dashoffset 1.5s ease,-webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5);
    transition: stroke-dashoffset 1.5s ease,transform .3s cubic-bezier(.5,-.5,.5,1.5);
    transition: stroke-dashoffset 1.5s ease,transform .3s cubic-bezier(.5,-.5,.5,1.5),-webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5)
}

.cursor__body svg:first-child {
    left: 3px;
    top: 16px
}

.cursor__body svg .arrow-left {
    -webkit-transform: translate(50px,26px) scale(1,-1) rotate(90deg);
    transform: translate(50px,26px) scale(1,-1) rotate(90deg);
    opacity: 0;
    transition: -webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5);
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5);
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5),-webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5)
}

.cursor__body svg .arrow-right {
    -webkit-transform: translate(20px,18px) scale(1,-1) rotate(-90deg);
    transform: translate(20px,18px) scale(1,-1) rotate(-90deg);
    transition: -webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5);
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5);
    transition: transform .3s cubic-bezier(.5,-.5,.5,1.5),-webkit-transform .3s cubic-bezier(.5,-.5,.5,1.5);
    opacity: 0
}

.cursor_active .cursor__body {
    font-size: 0!important
}

.cursor_active .cursor__body svg:first-child {
    opacity: 1;
    stroke-dashoffset: 0
}

.cursor_active .cursor__body svg:last-child {
    -webkit-transform: scale(.5675);
    transform: scale(.5675)
}

.cursor_active .cursor__body svg .arrow-left {
    -webkit-transform: translate(70px,26px) scale(1,-1) rotate(90deg);
    transform: translate(70px,26px) scale(1,-1) rotate(90deg);
    opacity: 1
}

.cursor_active .cursor__body svg .arrow-right {
    -webkit-transform: translate(0,18px) scale(1,-1) rotate(-90deg);
    transform: translate(0,18px) scale(1,-1) rotate(-90deg);
    opacity: 1
}

.cursor_active .cursor__text {
    opacity: 0!important
}

.cursor_hover .cursor__body {
    font-size: 12px;
    opacity: 1
}

.cursor_hover .cursor__body svg:last-child {
    opacity: 1;
    stroke-dashoffset: 0
}

.cursor_hover .cursor__text {
    opacity: 1
}
.gallery {
    width: 100%;
    min-height: 500px;
    position: relative;
}
.gallery__container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 516px;
    transition: all .6s ease;
    transform: scale(1);
    user-select: none;
    cursor: none;
}

.gallery__container_active {
    -webkit-transform: scale(.7);
    transform: scale(.7);
    cursor: none
}
.gallery__draggable {
    position: absolute;
    left: 50%;
    width: auto;
    white-space: nowrap;
    height: 516px;
    transition: opacity .6s ease 1s;
    opacity: 0;
}
.gallery__draggable_active {
    opacity: 1;
}
.gallery__item {
    width: auto;
    height: 470px;
    margin-right: 64px;
    display: inline-block;
    text-align: right;
    vertical-align: top;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
