<template>
  <div id="app">
    <!--搜索框-->
    <header>
      <div class="search-box">
        <form action="">
          <input type="text" placeholder="搜索商品">
        </form>
        <i></i>
      </div>
    </header>
    <slider :slide="slide"></slider>
    <ul class="reserve">
      <li class="gold_price">
        <p class="real_time_price">实时金价<span>(参考国际金价)</span></p>
        <div class="gold_show">
          <p class="jin"><span id="gold" class="gold">272.210</span>元/克</p>
          <p class="market_price">市场价：<span class="con_in_span"><span id="goldPrice" class="gray_color">345.000</span></span>元/克</p>
          <router-link  to="/prodetail" class="reserve-img"><img src="/static/images/ljyd-index.png" alt=""></router-link>
        </div>
        <div class="gray_line"></div>
      </li>
      <li class="gold_price">
        <p class="real_time_price">实时银价<span>(参考国际银价)</span></p>
        <div class="gold_show">
          <p class="jin"><span id="silver" class="gold">3.3760</span>元/克</p>
          <p class="market_price">市场价：<span class="con_in_span"><span id="silverPrice" class="gray_color">4.3700</span></span>元/克</p>
          <router-link  to="/prodetail" class="reserve-img"><img src="/static/images/ljyd-index.png" alt=""></router-link>
        </div>
      </li>
    </ul>
    <nav>
      <ul>
        <li>
          <a href="">
            <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/30/d178b458-6dc3-4dcd-b176-9094a0030606.jpg" alt="">
            <p>新人福利</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/30/36960a37-07db-4c64-8981-6c8aa4428f96.jpg" alt="">
            <p>金银回购</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/30/0b55da64-11d9-43d3-a2ea-d3bf1405dba2.jpg" alt="">
            <p>了解商城</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/30/660dcf3e-728c-475b-ab5e-c55437c3e540.jpg" alt="">
            <p>品质保障</p>
          </a>
        </li>
      </ul>
    </nav>
    <article>
      <div class="product">
        <p>—— 金银首饰  ——</p>
        <div class="content">
          <a href="" class="product-img-left">
            <img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/9fc8da55-691d-494a-804c-ab61098a468b.jpg" alt="">
          </a>
          <ul>
            <li><a href=""><img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/41357197-de47-46b3-8ddd-da57b5d1582f.jpg" alt=""></a></li>
            <li class="product-img-bottom">
              <a href="">
                <img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/469b3274-f72b-4741-9909-31e71e607d96.jpg" alt="">
              </a>
              <a href="">
                <img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/e3a03c87-6c31-458c-abba-d0f216d922a6.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="product">
        <p>—— 金银投资  ——</p>
        <div class="content">
          <a href="" class="product-img-left">
            <img src="https://imgs.danpacmall.com/photoserver/photo/2017/08/25/4ec6d9ab-f569-434c-b094-bd81a38c77f3.png" alt="">
          </a>
          <ul>
            <li><a href=""><img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/6c834651-09a5-4ad1-a22f-e083ac8a756e.jpg" alt=""></a></li>
            <li class="product-img-bottom">
              <a href="">
                <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/21/ae2950ab-e0cb-4405-aeee-5759cc4d5d1a.jpg" alt="">
              </a>
              <a href="">
                <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/21/cffe6927-76a6-47eb-9270-64731bcae8b1.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="product">
        <p>—— 金银礼品  ——</p>
        <div class="content">
          <a href="" class="product-img-left">
            <img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/7a4cb81d-1e4e-4047-aec1-388bc7bbeadc.jpg" alt="">
          </a>
          <ul>
            <li><a href=""><img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/6c834651-09a5-4ad1-a22f-e083ac8a756e.jpg" alt=""></a></li>
            <li class="product-img-bottom">
              <a href="">
                <img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/c710585a-60ac-4d4f-9f76-948d7c445b8f.jpg" alt="">
              </a>
              <a href="">
                <img src="https://imgs.danpacmall.com/photoserver/photo/2017/12/01/844ea8c4-8789-4aea-bc91-fc2967fffbff.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-faddish">
        <p>—— 爆款推荐  ——</p>
        <ul>
          <li><a href=""><img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/13/7a88a8b0-ad63-4fa2-8547-11c820649d4e.jpg" alt=""></a></li>
          <li><a href=""><img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/13/2bb00053-3a37-4469-8e63-00720b91b644.jpg" alt=""></a></li>
          <li><a href=""><img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/13/2129e2dd-29ac-4247-9361-68b372afa039.jpg" alt=""></a></li>
        </ul>
      </div>
      <div class="product-show">
        <ul>
          <li>
            <a href="">
              <img src="https://imgs.danpacmall.com/photoserver/photo/2017/08/03/54070662-776f-4b92-8d7d-78b19241064d.jpg" alt="">
              <p>足金999  镂空小象吊坠</p>
              <p>¥1500.0</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://imgs.danpacmall.com/photoserver/photo/2017/09/04/761b2e39-ed24-4c1c-8b02-a3c7306d0e97.jpg" alt="">
              <p>足金999 小清新三叶草手链</p>
              <p>¥2904.0</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/01/32479078-da6b-4418-a9ce-b841fed4796e.jpg" alt="">
              <p>足金999 时尚梦幻南瓜车串珠</p>
              <p>¥347.25</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://imgs.danpacmall.com/photoserver/photo/2017/11/15/5332390e-9a0a-409d-919e-8d2275324b11.jpg" alt="">
              <p>足金9999 招财进宝 金元宝摆件 1000克</p>
              <p>¥281660.0</p>
            </a>
          </li>
        </ul>
      </div>
    </article>
    <footers></footers>
  </div>
</template>

<script>
  import footers from './pubCom/footer'
  import slider from './pubCom/swiper'
  export default {
    components: {
      footers,
      slider
    },
    name:'home',
    data () {
      return {
        slide: [  // 图片的src,图片的超链接
          {
            src: 'https://imgs.danpacmall.com/photoserver/photo/2017/11/29/a63a9746-ffb2-4d7e-a48c-3a8ce5760fd7.jpg',
            href: 'http://www.baidu.com'
          },
          {
            src: 'https://imgs.danpacmall.com/photoserver/photo/2017/11/28/48d22d33-f877-4118-bd36-88751c3369cd.jpg',
            href: 'http://www.baidu.com'
          },
          {
            src: 'https://imgs.danpacmall.com/photoserver/photo/2017/11/07/9af9c101-3656-4e4a-8a37-379c228bb6e2.jpg',
            href: 'http://www.baidu.com'
          },
          {
            src: 'https://imgs.danpacmall.com/photoserver/photo/2017/11/28/85e6e276-34b9-46e8-9193-1aa259199a19.jpg',
            href: 'http://www.baidu.com'
          }
        ]
      }
    },
    created(){
      // 搜索框颜色渐变
      $(window).scroll(function () {
        if ($(this).scrollTop() < 200) {
          $('header').css('background', 'rgba(0,0,0,0)')
        } else {
          $('header').css('background', 'rgba(0,0,0,0.3)')
        }
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  #app {
    max-width: 750px;
    margin: 0 auto;
    header {
      width: 100%;
      height: 44px;
      max-width: 750px;
      position: fixed;
      z-index: 999;
      padding: 8px;
      box-sizing: border-box;
      div {
        position: relative;
        width: 100%;
        height: 30px;
        input {
          width: 100%;
          height: 30px;
          border-radius: 50px;
          border: 0;
          outline: none;
          text-align: center;
          display: block;
          opacity: 0.85;
        }
        i {
          position: absolute;
          left: 35%;
          top: 7px;
          display: block;
          width: 16px;
          height: 16px;
          background: url(../../static/images/search.png) no-repeat;
          background-size: 16px 16px;
        }
      }
    }
  }
  .reserve {
    display: flex;
    background: #fff;
    margin: 15px 0.5rem;
    border-radius: 15px;
    li {
      flex: 1;
    }
    .gold_price {
      text-align: center;
      font-size: 12px;
      box-sizing: border-box;
      position: relative;
      .real_time_price {
        color: #ff3824;
        font-size: 14px;
        margin-top: 0.25rem;
        span {
          color: black;
        }
      }
      .gold_show {
        .jin {
          .gold {
            font-size: 0.7rem;
            color: #ff3824;
            font-weight: bold;
          }
        }
        .market_price {
          color: #989292;
          .gray_color {
            text-decoration: line-through;
            color: #ff3824;
          }
        }
        .reserve-img {
          display: block;
          width: 4rem;
          margin: 0.3rem auto 0.8rem;
        }
      }
      .gray_line {
        width: 1px;
        position: absolute;
        height: 1.5rem;
        background: rgba(115,115,115,.37);
        top: 1.6rem;
        right: 0;
      }
    }
  }
  nav {
    background: #fff;
    margin: 0 0.5rem;
    border-radius: 15px;
    ul {
      display: flex;
      li {
        flex: 1;
        padding: 0px 15px 10px;
        a {
          display: block;
          float: left;
          padding: 3px;
          text-align: center;
          padding: 3px;
          p {
            font-size: 0.5rem;
          }
        }
      }
      .product-img-bottom {
        display: flex;
        a {
          display: block;
          flex: 1;
          background: pink;
        }
      }
    }
  }
  article {
    .product {
      p {
        text-align: center;
        padding: 10px 0;
        line-height: 1.5;
        font-size: 16px;
      }
      .content {
        display: flex;
        .product-img-left {
          display: block;
          flex: 1;
          padding: 6px;
        }
        ul {
          flex: 1;
          padding: 6px;
          li {
            &:nth-of-type(2){
              display: flex;
              padding: 6px;
              a {
                flex: 1;
              }
            }
          }
        }
      }

    }
    .product-faddish {
      p {
        text-align: center;
        padding: 10px 0;
        line-height: 1.5;
        font-size: 16px;
        background: #eee;
      }
      ul {
        display: flex;
        padding: 3px;
        li {
          flex: 1;
          a {
            display: block;
            padding: 3px;
          }
        }
      }
    }
    .product-show {
      padding-top: 6px;
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
          width: 50%;
          box-sizing: border-box;
          float: left;
          &:nth-of-type(1){
            border-right: 3px solid #eee;
          }
          &:nth-of-type(2){
            border-left: 3px solid #eee;
          }
          &:nth-of-type(3){
            border-right: 3px solid #eee;
          }
          &:nth-of-type(4){
            border-left: 3px solid #eee;
          }
          a {
            display: block;
            p{
              padding: 6px;
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              &:nth-of-type(2){
                color: #de0233;
                margin: -3px 0 3px;
              }
            }
          }
        }

      }
    }
  }
</style>
