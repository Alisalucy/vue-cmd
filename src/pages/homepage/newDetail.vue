<template>
  <div class="new-content">
    <h1 class="title">{{newsDetail.title}}</h1>
    <div class="subtitle">
      <span>发表时间：{{newsDetail.time}}</span>
      <span>点击次数：{{newsDetail.click}}</span>
    </div>
    <hr>
    <div class="content" v-html="newsDetail.content"></div>

    <comment :newsid="id"></comment>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from '@/pages/coment'
export default {
  data(){
    return {
      id:this.$route.params.id,
      newsDetail:{}
    }
  },
  components:{
    comment
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
            this.newsDetail = res.data.message[this.id-1];
            console.log(this.newsDetail)
          } else {
            Toast("加载轮播图失败。。。");
          }
        });
    }
  }
}
</script>

<style lang="scss">
.new-content{
  background: rgb(248, 246, 246);
  padding: 4px 4px;

  .title{
    color: #444;
    font-size: 16px;
    text-align: center;
    line-height: 1.3em;
    margin: 10px 0;
  }

  .subtitle{
    color: lightskyblue;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }

/* v-html 插入的html内容，在这写样式的时间需要把 scoped去掉，不然样式不起作用 */
  .content{
    margin: 10px 0;
    >div > p{
      color:#666;
      text-indent: 2em; 
      line-height: 1.5em;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>