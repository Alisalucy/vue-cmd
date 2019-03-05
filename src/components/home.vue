<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lists" :key="item.id">
        <img :src="item.imgs" alt>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../images/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu2.png" alt>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu3.png" alt>
          <div class="mui-media-body">售后反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu4.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu5.png" alt>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lists: []
    };
  },
  created() {
    this.getlists();
  },
  methods: {
    getlists() {
      this.$axios
        .get(
          "  https://www.easy-mock.com/mock/5c5173fe7bd67d354475c83d/example/luobolist"
        )
        .then(res => {
          if (res.data.status === 0) {
            // console.log(res.data.data);
            this.lists = res.data.data;
          } else {
            Toast("加载轮播图失败。。。");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-items-wrap > div.is-active {
    background: orange;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .mint-swipe-indicator,
  >div.is-active {
    background: #fff;
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
