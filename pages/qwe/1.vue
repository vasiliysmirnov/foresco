<template>
    <div class="child">
        <h1>child</h1>
        <router-link to="/qwe">back</router-link>
    </div>
</template>
<style lang="stylus" scoped>
    .child
        position absolute
        top 0
        left 0
        text-align: center;
        background: #947575;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

</style>
<script>
export default {
    transition: {
        name: 'child-page',
        mode: 'in-out',
        css: false,
        beforeEnter(el){
            TweenMax.to(el, 0, {
                yPercent: 100, scale: 0.9, ease: Power2.easeInOut
            })
        },
        enter(el, done){
            done()
            TweenMax.to(el, 1, {
                yPercent: 50, scale: 0.9, ease: Power2.easeInOut,
                onComplete: function() {
                    TweenMax.to(el, 1, {
                        yPercent: 0, scale: 1, ease: Power2.easeInOut
                    })
                }
            })
        },
        leave(el, done){
            TweenMax.to(el, 1, {
                yPercent: 50, scale: 0.9, ease: Power2.easeInOut,
                onComplete: function() {
                    TweenMax.to(el, 1, {
                        yPercent: 100, scale: 1, ease: Power2.easeInOut,
                        onComplete: function() { done() }
                    })
                }
            })
        }
    },
}
</script>
