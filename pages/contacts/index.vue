<template>
    <section class="contacts">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <div class="contacts__inner">
                    <div class="map">
                        <img src="~/static/img/map.png" alt="">
                        <div class="address" v-for="contact in contacts" :key="contact.id">{{contact.address}}</div>
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
                                <textarea name="comment" rows="3" id="form-comment" v-model="comment" :class="{active: comment !== ''}"></textarea>
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

export default {
    transition: {
        name: 'contacts',
        appear: true,
    },
    components: {
        AppHeader,
        AppMenu,
        AppFooter
    },
    head: {
        title: 'Контакты'
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
        max-width: 1200px
        margin: 0 auto
        @media(max-width 768px)
            flex-direction: column-reverse
        .map
            width 50%
            margin 0 60px 0 0
            @media(max-width 768px)
                width 100%
                margin 0
            img
                max-width 100%
            .address
                font-size: 16px
                font-family: 'montserratsemibold'
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: 1px
                color: #ffffff
                margin 15px 0 0 0
        .form
            width 50%
            text-align center
            @media(max-width 768px)
                width 100%
                margin-bottom 50px
            .form__item
                position relative
                margin 0 0 30px 0
                label
                    font-family: 'montserratregular'
                    color rgba(255, 255, 255, .5)
                    position absolute
                    top 0
                    left 0
                    font-size 14px
                    transform: translateY(7px);
                    pointer-events: none
                    transition: all .1s
                .error
                    color red
                    font-size: 12px
            input[type=text],
            input[type=phone]
                font-family: 'montserratregular'
                color rgba(255, 255, 255, .5)
                background transparent
                border 0
                border-bottom: solid 1px rgba(151, 151, 151, .4)
                width 100%
                display block
                padding 10px 0
                margin 0
                transition: all .1s
                outline none
                &:focus,
                &.active
                    border-color #e19d45
                &:-webkit-autofill + label
                    transform: translateY(-5px)
                    font-size: 10px
                    color #e19d45
                &:focus + label
                &.active + label
                    transform: translateY(-5px)
                    font-size: 10px
                    color #e19d45
            textarea
                font-family: 'montserratregular'
                color rgba(255, 255, 255, .5)
                background transparent
                border 0
                border-bottom: solid 1px rgba(151, 151, 151, .4)
                width 100%
                display block
                padding 10px 0
                margin 0 0 30px 0
                outline none
                &:focus,
                &.active
                    border-color #e19d45
                &:-webkit-autofill + label
                    transform: translateY(-5px)
                    font-size: 10px
                    color #e19d45
                &:focus + label
                &.active + label
                    transform: translateY(-5px)
                    font-size: 10px
                    color #e19d45
            input[type='submit']
                width: 100%
                max-width: 321px
                height: 48px
                border-radius: 24px
                background-color: #e19d45
                outline none
                border 0
                font-family: 'montserratregular'
                font-size: 16px
                font-weight: normal
                font-style: normal
                font-stretch: normal
                line-height: normal
                letter-spacing: normal
                color: #ffffff
                cursor pointer
            .radio
                margin-bottom 50px
                .title
                    opacity: 0.8
                    font-size: 14px
                    font-family: 'montserratmedium'
                    font-style: normal
                    font-stretch: normal
                    line-height: normal
                    letter-spacing: normal
                    color: #ffffff
                    margin-bottom 20px
                &__item
                    display inline-block
                    width calc(33% - 10px)
                    margin-right 15px
                    @media(max-width 425px)
                        width 100%
                        margin 0 0 15px 0
                    &:last-child
                        margin 0
                    input[type="radio"]
                        display none
                    label
                        font-family: 'montserratregular'
                        width: 100%
                        height: 48px
                        border-radius: 24px
                        border: solid 1px #ffffff
                        font-size: 16px
                        color: rgba(255, 255, 255, .5)
                        display block
                        line-height 48px
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
                .error
                    color red
                    font-size: 12px
</style>

