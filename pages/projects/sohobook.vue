<template>
    <div>
        <div class="container">
            <app-header/>
            <app-menu/>
            <div class="content">
                <section class="top">

                </section>
            </div>
            
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
    }
</script>

<style lang="stylus" scoped>

</style>
