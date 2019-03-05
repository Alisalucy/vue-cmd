<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea class="com-box" placeholder="在此处发表评论(字数不能超过120字)" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <ul
      class="mui-table-view com-list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li class="mui-table-view-cell" v-for="(item,i) in comlist" :key="item.id">
        <div class="com-title">
          <span>第{{i+1}}楼</span>
          <span>用户：{{item.person}}</span>
          <span>发表时间：{{item.time | dataform}}</span>
        </div>
        <div class="com-body">
          <span>{{item.content}}</span>
          <span class="click">删除</span>
        </div>
      </li>
    </ul>

    <mt-button type="primary" plain size="large" @click="loadMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comlist: [],
      len: ""
    };
  },
  props: ["mewsid"],
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$axios
        .get(
          "  https://www.easy-mock.com/mock/5c517463365dc44db88b09e3/example_copy/comment/" +
            this.mewsid
        )
        .then(res => {
          if (res.data.status === 0) {
            this.comlist.length = 10;
            if (this.comlist.length) {
              this.comlist = res.data.data;
            } else {
              this.comlist = res.data.data;
              this.comlist.length = 10;
            }
          } else {
            Toast("加载轮播图失败。。。");
          }
        });
    },
    loadMore() {
      this.loading = true;
      let last;
      setTimeout(() => {
        last = this.comlist[this.comlist.length - 1];
        for (let i = 0; i < 10; i++) {
          this.comlist.push(last + i);
        }

        this.loading = false;
      }, 2500);
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  margin-top: 2em;
  h3 {
    color: #555;
    font-size: 18px;
  }
  .com-box {
    color: #666;
    font-size: 12px;
  }

  .com-list {
    margin: 1em 0;
    font-size: 12px;
    .mui-table-view-cell {
      padding: 0 0;

      .com-title {
        background: #d6d3d3;
      }

      .com-body {
        line-height: 1.5em;
        text-indent: 2em;
        margin: 0.3em 0;
        display: flex;
        justify-content: space-between;
        .click {
          color: #d6d3d3;
        }
        .click:hover {
          color: red;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>