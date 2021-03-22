//Vue.config.devtools = process.env.NODE_ENV === 'development'

const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: ''
        }
    }
})

//window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor

