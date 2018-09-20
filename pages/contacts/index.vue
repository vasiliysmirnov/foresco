<template>
    <section class="contacts">
        <div class="container">
            <app-menu/>
            <app-header/>
            <div class="content">
                <div class="contacts__inner">
                    <div class="map">
                        <img src="~/static/img/map.png" alt="">
                        <div class="address" v-for="contact in contacts" :key="contact.id">{{contact.address}}</div>
                    </div>
                    <div class="form">
                        <form action="">
                            <input type="text" name="name" placeholder="Ваше имя">
                            <input type="phone" name="phone" placeholder="Ваш телефон">
                            <div class="radio">
                                <div class="title">Тип проекта</div>
                                <div class="radio__item">
                                    <input type="radio" name="typeProject" id="ios" value="ios">
                                    <label for="ios">IOS</label>
                                </div>
                                <div class="radio__item">
                                    <input type="radio" name="typeProject" id="android" value="android">
                                    <label for="android">Android</label>
                                </div>
                                <div class="radio__item">
                                    <input type="radio" name="typeProject" id="web" value="web">
                                    <label for="web">WEB</label>
                                </div>
                            </div>
                            <textarea name="comment" rows="3" placeholder="Ваш комментарий"></textarea>
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
    }
}
</script>

<style lang="stylus" scoped>
.contacts
    &__inner
        display flex
        align-items flex-start
        .map
            width 50%
            margin 0 60px 0 0
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
                margin 0 0 30px 0
                outline none
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
            input[type='submit']
                width: 321px
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
</style>

