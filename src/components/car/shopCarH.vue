<template>
  <div id="app">
    <div v-show="empty">
    <div class="shopCar">
        <img src="../../../static/images/shopCar.png" alt="">
      </div>
      <p class="reminder-txt">购物车空空如也~</p>
      <router-link  to="/home" class="back">返回购物</router-link>
    </div>
    <div v-show="!empty">
      <div class="order" v-for="(item,index) in list" :key="index">
           <h1>
             <i class="fl circle"
                :class="{'circle-active': item.isSelect}"
                @click="selectChoose(index)"></i>
            <span>商城</span><span class="pubColor">(商城自营)</span><span class="fr"><s class="fl delete"></s>删除订单</span></h1>
           <div>
               <div class="fl order-img">
                 <img :src="item.src" alt="">
               </div>
               <div class="order-txt">
                 <p>{{item.goodsName}}</p>
                 <p class="gray73">克重：{{item.weight}}</p>
                 <p class="pubColor">{{item.price}}</p>
               </div>
              <div class="amount">
                <span class="fr bor-left-radius" @click="subtract(index)">-</span>
                <input type="text" class="fl" v-model="item.quantity">
                <span class="fl bor-right-radius" @click="add(index)">+</span>
              </div>
           </div>
      </div>
    </div>
    <div class="bottom">
      <i class="fl circle" :class="{'circle-active': isSelectAll}" @click="selectAll"></i>
      <span class="selectAll">全选</span>
      <div class="summation">
        <p>合计: ¥{{totalPay}}</p>
        <!--<p>(已节省：-￥)</p>-->
      </div>
      <a class="fr settle">去结算 </a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "shopCar",
  data() {
    return {
      empty: false,
      isSelectAll: false, //是否全选
      totalPay: 0, //总计费用
      list: [
        {
          src: "/static/images/sz.png",
          goodsName:
            "足金9999 发发金投资金条 10克足金 50克足 9999 发发金投资金条 10克",
          weight: "300g",
          price: "￥8965.05",
          quantity: 1
        },
        {
          src: "/static/images/sz.png",
          goodsName: "足金999 繁花似锦套链",
          weight: "10g",
          price: "￥1965.00",
          quantity: 1
        }
      ]
    };
  },
  created() {
    // 动态获得数据后添加需要的属性 需要通过Vue.set添加才会动态监听
    // 添加是否选中的flag
    this.list.map(v =>  Vue.set(v, "isSelect", false));
    // 购物车是否为空
    this.empty = this.list.length === 0? true: false;
  },
  watch: {
    // 深度监听list数组，因为真正需要监听的是它里面每一项的属性变化，需要深度监听
    list: {
      handler: function(newValue) {
        // 每次有属性变化重新计算总费用
        this.totalPay = 0;

        let flag = true;

        newValue.forEach((v, i) => {
          // 计算所有选中的项的费用
          if (v.isSelect) {
            let price = v.price.slice(1) - 0; // 拿到价格
            let itemPay = price * v.quantity; // 单价乘以数量
            this.totalPay += itemPay;
          }

          // 如果有一项没有选中 全选就为false 设置标记为false表示有项没选中
          if (flag && !v.isSelect) {
            this.isSelectAll = false;
            flag = false;
          }

          // 如果到最后一项了flag还是true说明全都选中了 设置全选为true
          if (v = newValue.length - 1 && flag === true) this.isSelectAll = true;
        });

        this.totalPay = this.totalPay.toFixed(2) //保留两位小数
      },
      deep: true
    }
  },
  methods: {
    add(index) {
      this.list[index].quantity++;
    },
    subtract(index) {
      if (this.list[index].quantity <= 1) return;
      this.list[index].quantity--;
    },
    selectChoose(index) {
      this.list[index].isSelect = !this.list[index].isSelect;
    },
    selectAll() {
      this.list.map(v => (v.isSelect = this.isSelectAll ? false : true));
      this.isSelectAll = !this.isSelectAll;
    }
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#f5f5f5");
  },
  beforeDestroy() {
    document.querySelector("body").setAttribute("style", "");
  }
};
</script>

<style lang="less" scoped>
#app {
  overflow: hidden;
  max-width: 750px;
  .shopCar {
    width: 4rem;
    margin: 1rem auto;
  }
  .reminder-txt {
    font-size: 0.35rem;
    text-align: center;
    color: #a1a1a1;
    margin-bottom: 0.5rem;
  }
  .order {
    background: #fff;
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
    h1 {
      font-weight: normal;
      font-size: 14px;
      height: 41px;
      line-height: 41px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 0 0.5rem;
      overflow: hidden;
      .circle {
        margin-top: 10px;
      }
      .delete {
        width: 13px;
        height: 13px;
        background: url(/static/images/delete.png) no-repeat;
        background-size: cover;
        margin: 13px 2px;
      }
    }
    div {
      padding: 0 10px 10px 0;
      height: 110px;
      position: relative;
      .order-img {
        width: 120px;
      }
      .order-txt {
        padding: 10px 0;
        p {
          font-size: 14px;
          &:nth-of-type(1) {
            height: 38px;
          }
          &:nth-of-type(2) {
            line-height: 35px;
          }
          &:nth-of-type(3) {
            font-size: 18px;
          }
        }
      }
      .amount {
        position: absolute;
        bottom: 10px;
        right: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 24px;
        line-height: 24px;
        color: #c1c1c1;
        padding: 0;
        span {
          height: 100%;
          width: 30px;
          background: #f2f3f4;
          text-align: center;
          font-size: 14px;
        }
        input {
          width: 35px;
          height: 100%;
          text-align: center;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
      }
    }
  }
  .back {
    text-align: center;
    line-height: 1.1rem;
    border-radius: 15px;
    color: #ff9600;
    font-size: 0.4rem;
    margin: 0 auto;
    display: block;
    width: 3rem;
    height: 1rem;
    border: 1px solid #ff9600;
  }
  .bottom {
    height: 50px;
    z-index: 999;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    max-width: 750px;
    text-align: left;
    padding: 0 0 0 0.5rem;
    background: #fff;
    box-sizing: border-box;
    span {
      font-size: 14px;
      float: left;
      line-height: 50px;
      padding-left: 5px;
    }
    .summation {
      float: left;
      padding-left: 0.3rem;
      line-height: 50px;
      p {
        font-size: 14px;
        &:nth-of-type(2) {
          color: #5a5a5a;
        }
      }
    }
    .settle {
      font-size: 14px;
      font-weight: normal;
      line-height: 50px;
      text-align: center;
      vertical-align: middle;
      background-color: #ff9600;
      color: #fff;
      height: 100%;
      width: 100px;
    }
  }
  .circle {
    width: 18px;
    height: 18px;
    border: 1px solid #c1bcbc;
    border-radius: 50%;
    margin: 15px 5px;
  }
  .circle-active {
    background: url("/static/images/circle.png") no-repeat;
    background-size: cover;
    border-color: #ff9600;
  }
}
</style>
