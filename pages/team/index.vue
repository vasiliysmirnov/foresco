<template>
    <div class="team">
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                team
            </div>
            <app-footer/>
        </div>
    </div>
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
            title: 'Команда'
        },
    }
</script>

<style lang="stylus" scoped>

</style>
