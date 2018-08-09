<template>
  <div id="app">
    <footer>
      <ul>
        <li>
          <router-link  to="/home"><i class="idex-icon"></i><span>首页</span></router-link>
        </li>
        <li>
          <router-link  to="/classify"><i class="category-icon"></i><span>分类</span></router-link>
        </li>
        <li>
          <router-link  to="/car"><i class="cart-icon"></i><span>购物车</span></router-link>
        </li>
        <li>
          <router-link  to="/center"><i class="my-icon"></i><span>我的</span></router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  footer {
    width: 100%;
    max-width: 750px;
    height: 50px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ededed;
    padding: 6px 0 4px;
    box-sizing: border-box;
    background: #fff;
    ul {
      display: flex;
      width: 100%;
      li {
        flex: 1;
        float: left;
        a {
          display: block;
          i {
            display: block;
            height: 22px;
            width: 22px;
            margin: auto;
          }
          .idex-icon {
            background: url("../../../static/images/index-icon.png");
            background-size: 100%;
          }
          .category-icon {
            background: url("../../../static/images/category-icon.png");
            background-size: 100%;
          }
          .cart-icon {
            background: url("../../../static/images/cart-icon.png");
            background-size: 100%;
          }
          .my-icon {
            background: url("../../../static/images/my-icon.png");
            background-size: 100%;
          }
          span {
            display: block;
            height: 18px;
            line-height: 20px;
            color: #999;
            font-size: 12px;
            text-align: center;
          }
        }
      }
    }
  }

</style>
