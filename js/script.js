console.log('vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'VueCarousel',
    data: () => ({ destinations })})
app.mount('#root');