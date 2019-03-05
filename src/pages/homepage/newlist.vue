<template>
  <div>
    <ul class="mui-table-view mui-media">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <!-- 把id当作参数传给当前路由 to就变成属性了 所以需要加 ： -->
        <router-link :to="'/home/newDetail/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.src" alt>
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span class="flt-left">发表时间：{{item.time | dataform}}</span>
              <span class="flt-right">点击次数：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.$axios.get(
          "https://www.easy-mock.com/mock/5c5173fe7bd67d354475c83d/example/newlist"
        )
        .then(res => {
          if (res.data.status === 0) {
            this.newslist = res.data.message;
          } else {
            Toast("加载轮播图失败。。。");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
      font-weight: 100;
    }

    .mui-ellipsis {
      font-size: 12px;
      color: lightskyblue;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>