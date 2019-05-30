<template>
    <section class="contacts">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <div class="contacts__inner">
                    <div class="map">
                        <yandex-map 
                            :coords="[59.829429, 30.378460]"
                            zoom="16"
                            style="width: 100%; height: 400px;"
                        >
                            <ymap-marker
                                marker-id="1"
                                marker-type="placemark"
                                :coords="[59.829429, 30.378460]"
                                hint-content="Foresco"
                                :balloon="{header: 'ТЦ «Балканский 3»', body: 'офис 18', footer: 'тел. +7 812 567-45-23'}"
                                :icon="{color: 'darkOrange', glyph: 'Dot'}"
                                cluster-name="1"
                                ></ymap-marker>
                        </yandex-map>
                        <div class="address" v-for="contact in contacts" :key="contact.id">{{contact.address}}, тел. {{ contact.phone }}</div>
                    </div>
                    <div class="form">
                        <form @submit="checkForm">
                            <div class="form__item">
                                <input type="text" name="name" id="form-name" v-model="name" :class="{active: name !== ''}">
                                <label for="form-name">Ваше имя</label>
                                <div class="error" v-if="nameErr">
                                    {{nameErr}}
                                </div>
                            </div>
                            <div class="form__item">
                                <input type="phone" name="phone" id="form-phone" v-model="phone" :class="{active: phone !== ''}">
                                <label for="form-phone">Ваш телефон</label>
                                <div class="error" v-if="phoneErr">
                                    {{phoneErr}}
                                </div>
                            </div>
                            
                            <div class="radio">
                                
                                <div class="title">
                                    Тип проекта
                                    <div class="error" v-if="typeProjectErr">
                                        {{typeProjectErr}}
                                    </div>
                                </div>
                                
                                <div class="radio__item">
                                    <input type="radio" name="typeProject" id="ios" value="ios" v-model="typeProject">
                                    <label for="ios">IOS</label>
                                </div>
                                <div class="radio__item">
                                    <input type="radio" name="typeProject" id="android" value="android" v-model="typeProject">
                                    <label for="android">Android</label>
                                </div>
                                <div class="radio__item">
                                    <input type="radio" name="typeProject" id="web" value="web" v-model="typeProject">
                                    <label for="web">WEB</label>
                                </div>
                                
                            </div>
                            
                            <div class="form__item">
                                <textarea name="comment" rows="1" id="form-comment" v-model="comment" :class="{active: comment !== ''}"></textarea>
                                <label for="form-comment">Ваш комментарий</label>
                            </div>
                            
                            <input type="submit" value="Заказать проект">
                        </form>
                    </div>
                </div>
            </div>
            <app-footer/>
        </div>
  </section>
</template>

<script>
import AppHeader from '~/components/header.vue'
import AppMenu from '~/components/menu.vue'
import AppFooter from '~/components/footer.vue'

import $ from 'jquery'

export default {
    components: {
        AppHeader,
        AppMenu,
        AppFooter,
    },
    head: {
        title: 'Контакты'
    },
    beforeRouteLeave (to, from, next) {
        TweenMax.to($('.contacts'), 0.1, {
            opacity: 0, ease: Power2.easeInOut,
            onComplete: function() {
                next()
            }
        })
    },
    computed: {
        contacts() {
            return this.$store.state.contacts
        }
    },
    data: function(){
        return {
            name: '',
            nameErr: '',
            phone: '',
            phoneErr: '',
            typeProject: '',
            typeProjectErr: '',
            comment: ''
        }
    },
    methods:{
        checkForm: function (e) {
            
            if (this.name && this.phone && this.typeProject) {
                return true;
            }

            this.nameErr = '';
            this.phoneErr = '';
            this.typeProjectErr = ''

            if (!this.name) {
                this.nameErr = 'Введите ваше имя.';
            }
            if (!this.phone) {
                this.phoneErr = 'Введите ваш телефон.';
            } else if (!this.validPhone(this.phone)) {
                this.phoneErr = 'Неверный формат телефона.';
            }
            if (!this.typeProject) {
                this.typeProjectErr = 'Выберете тип проекта.';
            }

            e.preventDefault();

        },
        validPhone: function(phone){
            var re = /^(\+{0,1})([0-9]{1})( |\-)?([0-9]{3})( |\-)?([0-9]{3})( |\-)?([0-9]{2})( |\-)?([0-9]{2})\b/;
            return re.test(phone);
        }
    },
    mounted () {

    }
}
</script>

<style lang="stylus" scoped>
@import '~assets/rem.styl'
.contacts
    // fix for content, to display elements by center
    .content
        display: flex
        flex-direction: column
        flex-grow: initial
    &__inner
        display flex
        align-items flex-start
        width 100%
        max-width: rem(1200px)
        margin: 0 auto
        @media(max-width 768px)
            flex-direction: column-reverse
        .map
            width 50%
            margin rem(0 60px 0 0)
            @media(max-width 768px)
                width 100%
                margin 0
            img
                width 100%
            .address
                font-size: rem(16px)
                font-family: 'montserratsemibold'
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: rem(1px)
                color: #ffffff
                margin rem(15px 0 0 0)
        .form
            width 50%
            text-align center
            @media(max-width 768px)
                width 100%
                margin-bottom rem(50px)
            .form__item
                position relative
                margin rem(0 0 30px 0)
                label
                    font-family: 'montserratregular'
                    color rgb(255, 255, 255)
                    position absolute
                    top 0
                    left 0
                    font-size rem(14px)
                    transform: translateY(rem(7px));
                    pointer-events: none
                    transition: all .15s
                .error
                    color red
                    font-size: rem(12px)
            input[type=text],
            input[type=phone]
                font-family: 'montserratregular'
                color rgb(255, 255, 255)
                background transparent
                border 0
                border-bottom: solid rem(1px) rgba(151, 151, 151, .4)
                width 100%
                display block
                padding rem(10px 0)
                margin 0
                transition: all .15s
                outline none
                &:focus,
                &.active
                    border-color #e19d45
                &:-webkit-autofill + label
                    transform: translateY(rem(-5px))
                    font-size: rem(10px)
                    color #e19d45
                &:focus + label
                &.active + label
                    transform: translateY(rem(-5px))
                    font-size: rem(10px)
                    color #e19d45
            textarea
                font-family: 'montserratregular'
                color rgb(255, 255, 255)
                background transparent
                border 0
                border-bottom: solid rem(1px) rgba(151, 151, 151, .4)
                width 100%
                display block
                padding rem(10px 0)
                margin rem(0 0 30px 0)
                outline none
                &:focus,
                &.active
                    border-color #e19d45
                &:-webkit-autofill + label
                    transform: translateY(rem(-5px))
                    font-size: rem(10px)
                    color #e19d45
                &:focus + label
                &.active + label
                    transform: translateY(rem(-5px))
                    font-size: rem(10px)
                    color #e19d45
            input[type='submit']
                width: 100%
                max-width: rem(321px)
                height: rem(48px)
                border-radius: rem(24px)
                background-color: #e19d45
                outline none
                border 0
                font-family: 'montserratregular'
                font-size: rem(16px)
                font-weight: normal
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #ffffff
                cursor pointer
            .radio
                margin-bottom rem(50px)
                .title
                    opacity: 0.8
                    font-size: rem(14px)
                    font-family: 'montserratmedium'
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #ffffff
                    margin-bottom rem(20px)
                &__item
                    display inline-block
                    width calc(33% - 0.625rem)
                    margin-right rem(15px)
                    @media(max-width 425px)
                        width 100%
                        margin rem(0 0 15px 0)
                    &:last-child
                        margin 0
                    input[type="radio"]
                        display none
                    label
                        font-family: 'montserratregular'
                        width: 100%
                        height: rem(48px)
                        border-radius: rem(24px)
                        border: solid rem(1px) #ffffff
                        font-size: rem(16px)
                        color: rgb(255, 255, 255)
                        display block
                        line-height rem(48px)
                        cursor pointer
                        transition all .3s ease
                        &:hover
                            background: rgba(255, 255, 255, 0.05)
                            border-color: #e19d45
                    input[type="radio"]
                        &:focus ~ label
                        &:checked ~ label
                            background: rgba(255, 255, 255, 0.05)
                            border-color: #e19d45
                            background #e19d45
                .error
                    color red
                    font-size: rem(12px)
</style>

