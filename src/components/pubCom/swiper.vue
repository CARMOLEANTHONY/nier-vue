<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
     <!-- <div class="swiper-slide"><img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/29/a63a9746-ffb2-4d7e-a48c-3a8ce5760fd7.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/28/48d22d33-f877-4118-bd36-88751c3369cd.jpg" alt=""></div>
      <div class="swiper-slide"><img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/07/9af9c101-3656-4e4a-8a37-379c228bb6e2.jpg" alt=""></div>-->
      <div class="swiper-slide" v-for="item in slide">
        <a :href="item.href"><img :src="item.src" alt=""></a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    name: "swiper",
    props:{
      slide: {
        type: Array,
        default: []
      }
    },
       mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          autoplay: {
            delay: 2500,//2.5秒切换一次
          },
          mousewheelControl:true
        })
      },
    created(){
    }
    }
</script>

<style scoped>

</style>
