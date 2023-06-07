const { createApp } = Vue

createApp({
  data(){
    return{
      html : '<h1>h1</h1>',
      image : 'https://assets.stickpng.com/images/62a74f85223343fbc2207d05.png'
    }
  }
}).mount('#app');