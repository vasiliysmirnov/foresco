<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>

</style>

<script>
import {mapActions} from 'vuex'

export default {
    methods:{
        ...mapActions({
            getContacts: 'getContacts'
        })
    },
    // get contacts from api
    mounted() {
        this.getContacts()
    }
}
</script>