<template>
  <div id="app">
    <header>
      <img src="/static/images/userHeadbg.png" alt="">
      <div class="clearfix">
        <div class="head-portrait fl">
          <div class="head-img">
            <input type="file">
            <img :src="src">
          </div>
        </div>
        <div class="name fl">
          <p>奔跑的企鹅</p>
          <div>3级会员</div>
        </div>
        <div class="function fl">
          <input type="button" value="充值">
          <input type="button" value="提现">
          <div class="setting">
            <i></i>
            设置
          </div>
        </div>
      </div>
    </header>
    <ul class="property">
      <li class="li_border">
        <p class="all">
          <span class="zcong">
            <i class="all_img">
              <!--<img src="../../../static/images/YE@3x.png" alt="">-->
            </i>资产总额:</span>
          <span id="amMarginRemain">9987756.75</span>
        </p>
        <p class="balance">(可提现金额:0)</p>
      </li>
      <li>
        <p class="all">
          <span class="zcong">
            <i class="all_img">
              <!--<img src="../../../static/images/JD@3x.png" alt="">-->
            </i>
            金豆:</span>
          <span id="jindou">598.00</span>
        </p>
        <p id="clean_jd" class="balance">(<span class="balance" id="losejindou">293.00</span>金豆即将过期)</p>
      </li>
    </ul>
    <a class="indent">
      <p>我的订单</p>
      <p class="look">查看全部</p>
    </a>
    <ul class="advance">
      <li>
        <a href="javascript:void(0)">
          <i></i>
          <p>预付款</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>待付款</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
        <span class="goods_number">18</span>
        <p>待发货</p>
      </a>
      </li>
      <li>
        <a>
          <i></i>
        <p>待收货</p>
      </a>
      </li>
      <li>
        <a>
          <i></i>
        <span class="goods_number ">5</span>
        <p>已完成</p>
      </a>
      </li>
    </ul>
    <ul class="ticket clearfix">
      <li>
        <a href="javascript:void(0)">
          <i></i>
          <p>预付款</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>待付款</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
        <p>待发货</p>
      </a>
      </li>
      <li>
        <a>
          <i></i>
        <p>待收货</p>
      </a>
      </li>
      <li>
        <a>
          <i></i>
        <p>已完成</p>
      </a>
      </li>
      <li>
        <a>
          <i></i>
        <p>已完成</p>
      </a>
      </li>
      <li>
        <a>
          <i></i>
        <p>已完成</p>
      </a>
      </li>
      <li>
        <a>
          <i></i>
        <p>已完成</p>
      </a>
      </li>
    </ul>
    <a class="indent tool">
      <p>我的工具</p>
    </a>
    <ul class="ticket clearfix moreTool">
      <li>
        <a href="javascript:void(0)">
          <i></i>
          <p>预付款</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>待付款</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>待发货</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>待收货</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>已完成</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>已完成</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>已完成</p>
        </a>
      </li>
      <li>
        <a>
          <i></i>
          <p>已完成</p>
        </a>
      </li>
    </ul>
    <footers></footers>
  </div>
</template>

<script>
  import footers from '../pubCom/footer.vue'
  export default {
    name: "user-center",
    components:{
      footers
    },
    data() {
      return {
        src: '/static/images/portrait.png'
      }
    }
  }
</script>

<style scoped lang="less">
  #app {
    padding-bottom: 50px;
    header {
      width: 100%;
      box-sizing: border-box;
      position: relative;
      > img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      > div {
        padding: 3rem 0.5rem;
        .head-portrait {
          .head-img {
            border-radius: 50%;
            width: 3rem;
            margin-left: 0.5rem;
            position: relative;
          }
          input {
            width: 3rem;
            height: 3rem;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
          }

        }
        .name {
          position: relative;
          margin: 0 1rem;

          p {
            font-size: 0.7rem;
            margin-left: 0.5rem;
            color: #fff;
          }

          div {
            width: 3.5rem;
            background: #fff;
            height: 0.7rem;
            border-radius: 25px;
            margin-top: 0.3rem;
            margin-left: 0.5rem;
            font-size: 0.5rem;
            text-align: center;
            line-height: 0.7rem;
            color: #000;
          }

        }
        .function {
          input {
            width: 2.45rem;
            height: 1.18rem;
            border-radius: 27px;
            background: #fff;
            color: #000;
            font-size: 0.53rem;
            margin-left: 0.1rem;
            border: 0;
          }

          div {
            position: absolute;
            top: 1.2rem;
            right: 0.7rem;
            font-size: 0.53rem;
            color: #fff;
            background: url(/static/images/setting.png) 0 0.09rem no-repeat;
            padding-left: 0.75rem;
            background-size: 33%;
            .sz_img {
              width: 0.6rem;
              float: left;
              vertical-align: middle;
              margin-right: 0.2rem;
              margin-top: 0.05rem;
            }

          }
        }
      }
    }
    .property {
      background: #fff;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: -2.2rem 0.5rem;
      border-radius: 25px;
      li {
        display: inline-block;
        box-sizing: border-box;
        margin-top: 0.5rem;
        margin-bottom: 0.42rem;
        flex: 1;
        p {
          font-size: 0.5rem;
          line-height: 1rem;
          color: #404040;
          text-align: center;
          position: relative;
          span {
            color: #ff3824;
          }
          .zcong {
            display: inline-block;
            position: relative;
            color: #404040;
            padding-left: 0.5rem;
            .all_img {
              display: block;
              width: 0.6rem;
              position: absolute;
              left: -0.35rem;
              top: 0.15rem;
              img {
                width: 100%;
              }
            }
          }
        }
        .balance {
          font-size: 0.43rem;
          color: #8a8a8a;
        }
      }
      .li_border {
        border-right: 1px solid #bfbfc3;
      }
    }
    .indent {
      display: block;
      height: 1.70rem;
      padding-left: 0.53rem;
      padding-right: 0.53rem;
      background: #fff;
      margin: 3rem 0.5rem 0;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      p {
        display: inline-block;
        font-size: 0.6rem;
        color: #404040;
        line-height: 1.7rem;
      }
      .look {
        text-align: right;
        font-size: 0.49rem;
        color: #737373;
        float: right;
      }
    }
    .advance {
      border-top: 1px solid #bfbfc3;
      display: flex;
      margin: 0 0.5rem 0.75rem;
      background: #fff;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      i{
        display: block;
        width: 1.4rem;
        height: 1.2rem;
        background: url(/static/images/userSprite.png) no-repeat 0 0;
        margin: 0.72rem auto 0;
        background-size: 8rem;
        &:nth-of-type(2){
          background-position: 0.1rem 0;
        }
      }
      li {
        display: inline-block;
        flex: 1;
        a {
          display: block;
          text-align: center;
          position: relative;
          p {
            font-size: 0.5rem;
            color: #404040;
            line-height: 1rem;
            margin-bottom: 0.7rem;
          }
          .goods_number {
            width: 0.85rem;
            height: 0.85rem;
            font-size: 0.5rem;
            color: #fff;
            background: #ff3824;
            border-radius: 100%;
            position: absolute;
            right: 0.18rem;
            top: -0.3rem;
            text-align: center;
            line-height: 0.85rem;
          }
        }
      }
    }
    .ticket {
      background: #fff;
      box-sizing: border-box;
      margin: 0 0.5rem;
      border-radius: 25px;
      text-align: center;
      li {
        float: left;
        width: 25%;
        a {
          i {
            display: block;
            width: 1.4rem;
            height: 1.2rem;
            background: url(/static/images/userSprite.png) no-repeat 0 0;
            margin: 0.72rem auto 0;
            background-size: 8rem;
          }
          p {
            font-size: 0.5rem;
            color: #404040;
            line-height: 1rem;
            margin-bottom: 0.7rem;
          }
        }
      }
    }
    .tool {
      margin: 0.75rem 0.5rem 0;
      border-bottom: 1px solid #dcdcdc;
    }
    .moreTool {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
</style>
