<template>
  <div id="app">
    <div v-show="empty">
      <div class="shopCar">
        <img src="../../../static/images/shopCar.png" alt="">
      </div>
      <p class="reminder-txt">购物车空空如也~</p>
      <router-link to="/home" class="back">返回购物</router-link>
    </div>
    <div v-show="!empty">
      <div class="order" v-for="(item,index) in list">
        <h1><i class="fl circle" :class="{'circle-active':item.isSelect}" @click="selectChoose(index)"></i><span>商城</span>
          <span class="pubColor" >(商城自营)</span><span class="fr" @click="deleteItem(index)"><s class="fl delete"></s>删除订单</span></h1>
        <div>
          <div class="fl order-img">
            <img :src="item.src" alt="">
          </div>
          <div class="order-txt">
            <p>{{item.goodsName}}</p>
            <p class="gray73">克重：{{item.weight}}</p>
            <p class="pubColor">￥{{item.price}}</p>
          </div>
          <div class="amount">
            <span class="fl bor-left-radius" @click="subtract(index)">-</span>
            <input type="text" class="fl" v-model="item.quantity">
            <span class="fr bor-right-radius" @click="add(index)">+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <i class="fl circle" :class="{'circle-active': isSelectAll}" @click="isSelectAllChoose"></i>
      <span class="selectAll">全选</span>
      <div class="summation">
        <p>合计：<span class="pubColor">￥{{totalPrice}}</span></p>
        <!--<p>(已节省：-￥)</p>-->
      </div>
      <a class="fr settle">去结算 </a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'shopCar',
    data() {
      return {
        empty: false,
        isSelectAll:false,
        totalPrice:0,
        list: [
          {
            src: '/static/images/sz.png',
            goodsName: '足金9999 发发金投资金条 10克足金 50克足 9999 发发金投资金条 10克',
            weight: '300g',
            price: '8965.05',
            quantity: 1
          },
          {
            src: '/static/images/sz.png',
            goodsName: '足金999 繁花似锦套链',
            weight: '10g',
            price: '1965.60',
            quantity: 1
          }
        ]
      }
    },
    methods: {
      add(index) {
        this.list[index].quantity++;
      },
      subtract(index) {
        var buy_nums=this.list[index].quantity
        if (buy_nums <= 1) return
        this.list[index].quantity--;
      },
      total(){
        var totalMoney = 0;
        for (var i=0;i<this.list.length;i++){
          totalMoney += Number(this.list[i].price*this.list[i].quantity)
        }
        return totalMoney.toFixed(2)
      },
      selectChoose(index){
        this.list[index].isSelect = !this.list[index].isSelect
      },
      isSelectAllChoose(){
        this.isSelectAll = !this.isSelectAll
        this.list.map(v => {v.isSelect = this.isSelectAll? true : false})
      },
      deleteItem(index){
        this.list.splice(index,1);
      }
    },
    watch:{
      list:{
        handler:function (newValue){
          this.totalPrice = 0;
          var flag = true
          newValue.forEach((v,i)=>{
            if(v.isSelect ){
              this.totalPrice += Number(v.price* v.quantity)
            }
            if(flag != v.isSelect){
              this.isSelectAll = false
              flag = false
            }
            if(i = newValue.length && flag == true){
              this.isSelectAll = true
            }
          })
          this.totalPrice = this.totalPrice.toFixed(2)
        },
        deep:true
      }
    },
    created(){
      this.list.map(v => Vue.set(v,'isSelect',false))
    },
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background:#f5f5f5')
    },
    beforeDestroy() {
      document.querySelector('body').setAttribute('style', '')
    }
  }
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
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
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
            cursor: pointer;
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
      >span {
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
