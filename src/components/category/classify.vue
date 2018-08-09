<template>
  <div id="app">
    <header>
      <div class="search-box">
        <form action="">
          <input type="text" placeholder="请输入具体搜索商品">
        </form>
        <i></i>
      </div>
    </header>
    <article>
      <div class="sidebar">
        <ul>
          <li v-for="item in navItem">
            <a>{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="product-show">
        <p class="title"><i class="fl"></i>首饰金</p>
        <ul>
          <li v-for="item in goldGoods">
            <router-link  v-bind="{to:'/classify/'+item.id}">
              <img :src="item.src" alt="">
              <p>{{item.text}}</p>
            </router-link>
          </li>
        </ul>
        <p class="title"><i class="fl"></i>首饰银</p>
        <ul>
          <li v-for="item in silverGoogs">
            <router-link v-bind="{to:'/classify/'+item.id}">
              <img :src="item.src" alt="">
              <p>{{item.text}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </article>
    <footers></footers>
  </div>
</template>

<script>
  import footers from '../pubCom/footer.vue'
  export default {
    name:'classify',
    components: {
      footers
    },
    data(){
      return {
         navItem:['消费类','礼品类','投资类','包装','补差价','品牌分类'],
         goldGoods:[
           {text:'耳饰',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/8e6bc2f4-1176-4e08-aa27-b2bd142d0eea.jpg',id:1},
           {text:'耳钉',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/8e6bc2f4-1176-4e08-aa27-b2bd142d0eea.jpg',id:2},
           {text:'耳扣',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/8e6bc2f4-1176-4e08-aa27-b2bd142d0eea.jpg',id:3},
           {text:'耳饰',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/8e6bc2f4-1176-4e08-aa27-b2bd142d0eea.jpg',id:4},
           {text:'耳钉',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/8e6bc2f4-1176-4e08-aa27-b2bd142d0eea.jpg',id:5},
           ],
        silverGoogs:[
          {text:'戒指',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/713dd8d8-0293-4c16-8d77-196abe22ae41.jpg',id:6},
          {text:'戒指',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/713dd8d8-0293-4c16-8d77-196abe22ae41.jpg',id:7},
          {text:'戒指',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/713dd8d8-0293-4c16-8d77-196abe22ae41.jpg',id:8},
          {text:'戒指',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/713dd8d8-0293-4c16-8d77-196abe22ae41.jpg',id:9},
          {text:'戒指',src:'http://39.108.100.67:8082/photoserver/photo/2017/07/10/713dd8d8-0293-4c16-8d77-196abe22ae41.jpg',id:10},
        ],
      }

    },
    methods:{

    },
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background:#fff')
    },
    beforeDestroy () {
      document.querySelector('body').setAttribute('style', '')
    }
  }
</script>

<style lang="less" scoped>
  #app {
    header {
      width: 100%;
      height: 1.8rem;
      max-width: 750px;
      z-index: 999;
      padding: 8px;
      box-sizing: border-box;
      div {
        position: relative;
        width: 100%;
        height: 30px;
        input {
          width: 100%;
          height: 1.2rem;
          border-radius: 50px;
          border: 0;
          outline: none;
          display: block;
          opacity: 0.85;
          background: #efeff4;
          text-align: center;
        }
        i {
          position: absolute;
          left: 4.5rem;
          top: 0.3rem;
          display: block;
          width: 16px;
          height: 16px;
          background: url(../../../static/images/search.png) no-repeat;
          background-size: 16px 16px;
        }
      }
    }
    article {
      display: flex;
      border-top: 1px solid #eee;
      .sidebar {
        flex: 2.5;
        ul {
          border-right: 1px solid #eee;
            a {
              font-size: 0.5rem;
              display: block;
              text-align: center;
              padding: 0.5rem 0;
              box-sizing: border-box;
              border-bottom: 1px solid #eee;

            }
          }
        }
      }
      .product-show {
        flex: 7.5;
        padding: 0 0.3rem;
        box-sizing: border-box;
        text-align: left;
        .title {
          font-size: 0.55rem;
         line-height: 1.5rem;
          i {
            width: 2px;
            height: 0.6rem;
            background: #ff9600;
            margin-top: 0.45rem;
            margin-right: 0.1rem;
          }
        }
        ul {
          width: 100%;
          &:after{
            content: "";
            display: block;
            height: 0;
            line-height: 0px;
            clear: both;
            visibility: hidden;
          }
          li {
            float: left;
            width: 33%;
            a {
              display: block;
              box-sizing: border-box;
              padding: 0 0.8rem;
              p {
                font-size: 0.5rem;
                text-align: center;
              }
            }
          }
        }
      }
    }



</style>
