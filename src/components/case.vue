<template>
  <div :class="{ov: this.$store.state.switch}">
    <div class="topbox">
      <div class="body">
        <a href="index.html">
          <img src="../assets/logo.svg" class="logo fd1">
        </a>
        <button class="hor-nav-toggler" type="button" v-show="navx" @click="navshow">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
        <ul class="nav fd2" :class="{navul:navx}" v-show="nav">
          <li :class="{navli:navx}">
            <a href="javascript:;" :class="{a:a1,nava:navx}" @click="btn1('1')">首页</a>
          </li>
          <li :class="{navli:navx}">
            <a href="javascript:;" :class="{a:a2,nava:navx}" @click="btn1('2')">关于惠安</a>
          </li>
          <li :class="{navli:navx}">
            <a href="javascript:;" :class="{a:a3,nava:navx}" @click="btn1('3')">IT服务</a>
          </li>
          <li :class="{navli:navx}">
            <a href="javascript:;" :class="{a:a4,nava:navx}" @click="btn1('4')">团队</a>
          </li>
          <li :class="{navli:navx}">
            <a href="javascript:;" :class="{a:a5,nava:navx}" @click="btn1('5')">合作</a>
          </li>
          <li :class="{navli:navx}">
            <a href="javascript:;" :class="{a:a6,nava:navx}" @click="btn1('6')">联系我们</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 项目展示列表 -->
    <div :class="{main:main1,main2:main2}">
      <div class="title" :class="{fj:main1}">
        <h2 :class="{fd1:main1}">关于朗创</h2>
        <div :class="{fd2:main1}">首页 / 关于朗创 / 技术服务</div>
      </div>
      <div class="project">
        <div class="button">
          <button
            class="button1"
            :class="{colour:colour1,colour2:colour21,colour3:colourx1}"
            @mouseenter="colour('1')"
            @mouseleave="colourhide"
            @click="colourshow('1')"
          >查看全部</button>
          <button
            class="button1"
            :class="{colour:colour2,colour2:colour22,colour3:colourx2}"
            @mouseenter="colour('2')"
            @mouseleave="colourhide"
            @click="colourshow('2')"
          >App定制开发</button>
          <button
            class="button1"
            :class="{colour:colour3,colour2:colour23,colour3:colourx3}"
            @mouseenter="colour('3')"
            @mouseleave="colourhide"
            @click="colourshow('3')"
          >微信开发</button>
          <button
            class="button1"
            :class="{colour:colour4,colour2:colour24,colour3:colourx4}"
            @mouseenter="colour('4')"
            @mouseleave="colourhide"
            @click="colourshow('4')"
          >网站开发</button>
          <button
            class="button1"
            :class="{colour:colour5,colour2:colour25,colour3:colourx5}"
            @mouseenter="colour('5')"
            @mouseleave="colourhide"
            @click="colourshow('5')"
          >大数据业务</button>
        </div>
        <div class="list fj">
          <div
            :class="{imgbox:imgbox,fd1:imgbox,imgbox2:imgbox2}"
            v-for="(item,index) in data"
            :key="index"
            @click="imgbtn(index)"
          >
            <div class="bj" :class="{bjx:bjx}">
              <img :src="item.imgurl" class="bj1">
            </div>
            <div class="titlex">{{item.title}}</div>
            <div class="txt">{{item.txt}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部栏 -->
    <div class="bottom">
      <div class="bottombox fj">
        <div
          class="fd1"
          :class="{bottombox1:bottombox1,bottombox2:bottombox2,bottombox3:bottombox3}"
        >
          <h4>友情链接</h4>
          <div class="fj">
            <a href="https://www.aliyun.com/" class="fd1">阿里云</a>
            <a href="https://www.ibm.com/cn-zh/" class="fd1">IBM</a>
          </div>
          <div class="fj">
            <a href="https://github.com/" class="fd1">Github</a>
            <a href="https://isux.tencent.com/" class="fd1">腾讯ISUX</a>
          </div>
          <div class="fj">
            <a href="https://www.lanhuapp.com/" class="fd1">蓝湖</a>
            <a href="http://www.aliued.cn/" class="fd1">阿里巴巴UED</a>
          </div>
        </div>
        <div
          class="fd1 bottombox1"
          :class="{bottombox1:bottombox1,bottombox2:bottombox2,bottombox3:bottombox3}"
        >
          <h4>联系我们</h4>
          <div>邮箱：hr@lovcreate.com</div>
          <div>电话：0431-85150008</div>
          <div>传真：0431-85150008</div>
        </div>
        <div
          class="fd1"
          :class="{bottombox1:bottombox1,bottombox2:bottombox2,bottombox3:bottombox3}"
        >
          <h4>地址</h4>
          <div>吉林省/长春市/临河街/南湖大路交汇/中海紫御华府/25栋/2单元/2415室</div>
        </div>
      </div>
      <div class="bq">吉ICP备14000174号</div>
    </div>
    <detail v-if="this.$store.state.switch" :class="{z:this.$store.state.switch}"></detail>
  </div>
</template>

<script>
import detail from "./detail";
export default {
  name: "Honor",
  data() {
    return {
      a1: false,
      a2: false,
      a3: true,
      a4: false,
      a5: false,
      a6: false,
      //监听的992
      screenWidth: document.body.clientWidth,
      navx: false,
      //点击之后是否隐藏
      nav: true,
      //底部
      bottombox1: true,
      bottombox2: false,
      bottombox3: false,
      //
      main1: true,
      main2: false,
      colour1: true,
      colour2: true,
      colour3: true,
      colour4: true,
      colour5: true,
      colour21: false,
      colour22: false,
      colour23: false,
      colour24: false,
      colour25: false,
      colourx1: false,
      colourx2: false,
      colourx3: false,
      colourx4: false,
      colourx5: false,
      imgbox: true,
      imgbox2: false,
      bjx: false,
      data: [],
      data1: [
        {
          imgurl: require("../assets/A1-1.png"),
          title: "办公自动化系统-1",
          txt: "App定制开发",
          type: "app"
        },
        {
          imgurl: require("../assets/A2-1.png"),
          title: "办公自动化系统-2",
          txt: "App定制开发",
          type: "app"
        },
        {
          imgurl: require("../assets/A3-1.png"),
          title: "鼎代驾服务平台",
          txt: "App定制开发",
          type: "app"
        },
        {
          imgurl: require("../assets/A4-1.png"),
          title: "食代生物",
          txt: "App定制开发",
          type: "app"
        },
        {
          imgurl: require("../assets/A2-1.png"),
          title: "企业通讯录",
          txt: "App定制开发",
          type: "app"
        },
        {
          imgurl: require("../assets/A3-1.png"),
          title: "九益车综合服务平台",
          txt: "App定制开发",
          type: "app"
        },
        {
          imgurl: require("../assets/A1-1.png"),
          title: "长春交警学习平台",
          txt: "App定制开发",
          type: "app"
        },
        {
          imgurl: require("../assets/A4-1.png"),
          title: "爱健康",
          txt: "App定制开发",
          type: "app"
        }
      ],
      data2: [
        {
          imgurl: require("../assets/B1-1.png"),
          title: "吉林移动和生活",
          txt: "微信开发",
          type: "wx"
        },
        {
          imgurl: require("../assets/B2-1.png"),
          title: "吉林移动和你玩手机",
          txt: "微信开发",
          type: "wx"
        },
        {
          imgurl: require("../assets/B3-1.png"),
          title: "长春移动",
          txt: "微信开发",
          type: "wx"
        },
        {
          imgurl: require("../assets/B4-1.png"),
          title: "吉林省校园",
          txt: "微信开发",
          type: "wx"
        },
        {
          imgurl: require("../assets/B2-1.png"),
          title: "一部手机游长白山",
          txt: "小程序开发",
          type: "wx"
        }
      ],
      data3: [
        {
          imgurl: require("../assets/C1-1.png"),
          title: "盛达篮球俱乐部",
          txt: "网站开发",
          type: "wz"
        },
        {
          imgurl: require("../assets/C2-1.png"),
          title: "食代分销",
          txt: "网站开发",
          type: "wz"
        },
        {
          imgurl: require("../assets/C3-1.png"),
          title: "小驴OA",
          txt: "网站开发",
          type: "wz"
        },
        {
          imgurl: require("../assets/C4-1.png"),
          title: "艺融网",
          txt: "网站开发",
          type: "wz"
        }
      ],
      data4: [
        {
          imgurl: require("../assets/D1-1.png"),
          title: "苋草商城",
          txt: "大数据业务",
          type: "sj"
        },
        {
          imgurl: require("../assets/D2-1.png"),
          title: "投趣",
          txt: "大数据业务",
          type: "sj"
        }
      ]
    };
  },
  methods: {
    btn1(index) {
      switch (index) {
        case "1":
          this.$store.state.count = "1";
          this.$router.push("/");
          break;

        case "2":
          this.$store.state.count = "2";
          this.$router.push("/");
          break;

        case "3":
          this.$store.state.count = "3";
          this.$router.push("/");
          break;

        case "4":
          this.$store.state.count = "4";
          this.$router.push("/");
          break;

        case "5":
          this.$store.state.count = "5";
          this.$router.push("/");
          break;

        case "6":
          this.$store.state.count = "6";
          this.$router.push("/");
          break;
      }
    },
    //点击显示导航栏
    navshow() {
      if (this.nav == true) {
        this.nav = false;
      } else {
        this.nav = true;
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight; // 可见区域高度 Rotation
      if (scrollTop > clientHeight / 2) {
        this.min = true;
      }
    },
    // 鼠标移入
    colour(index) {
      switch (index) {
        case "1":
          this.colour1 = false;
          this.colour21 = true;
          break;

        case "2":
          this.colour2 = false;
          this.colour22 = true;
          break;

        case "3":
          this.colour3 = false;
          this.colour23 = true;
          break;

        case "4":
          this.colour4 = false;
          this.colour24 = true;
          break;

        case "5":
          this.colour5 = false;
          this.colour25 = true;
          break;
      }
    },
    // 鼠标移出
    colourhide() {
      this.colour1 = true;
      this.colour21 = false;
      this.colour2 = true;
      this.colour22 = false;
      this.colour3 = true;
      this.colour23 = false;
      this.colour4 = true;
      this.colour24 = false;
      this.colour5 = true;
      this.colour25 = false;
    },
    //点击按钮
    colourshow(index) {
      switch (index) {
        case "1":
          this.colourx1 = true;
          this.colourx2 = false;
          this.colourx3 = false;
          this.colourx4 = false;
          this.colourx5 = false;
          let data1 = this.data1;
          let data2 = this.data2;
          let data3 = this.data3;
          let data4 = this.data4;
          this.data = [...data1, ...data2, ...data3, ...data4];
          break;

        case "2":
          this.colourx1 = false;
          this.colourx2 = true;
          this.colourx3 = false;
          this.colourx4 = false;
          this.colourx5 = false;
          this.data = this.data1;
          break;

        case "3":
          this.colourx1 = false;
          this.colourx2 = false;
          this.colourx3 = true;
          this.colourx4 = false;
          this.colourx5 = false;
          this.data = this.data2;
          break;

        case "4":
          this.colourx1 = false;
          this.colourx2 = false;
          this.colourx3 = false;
          this.colourx4 = true;
          this.colourx5 = false;
          this.data = this.data3;
          break;

        case "5":
          this.colourx1 = false;
          this.colourx2 = false;
          this.colourx3 = false;
          this.colourx4 = false;
          this.colourx5 = true;
          this.data = this.data4;
          break;
      }
    },
    imgbtn(index) {
      this.$store.state.type = this.data[index].type;
      this.$store.state.title = this.data[index].title;
      this.$store.state.switch = true;
      this.$store.state.screenWidth = this.screenWidth;
    }
  },
  mounted() {
    let jump = String(sessionStorage.getItem("jump"));
    this.colourshow(jump);
    window.addEventListener("scroll", this.handleScroll);
    const that = this;
    if (this.screenWidth < 992 && this.screenWidth > 768) {
      this.navx = true;
      this.nav = false;
      this.wid = true;
      this.widx = false;
      this.bottombox1 = false;
      this.bottombox3 = false;
      this.bottombox2 = true;
      this.main1 = false;
      this.main2 = true;
      this.imgbox = true;
      this.imgbox2 = false;
      this.bjx = true;
    } else if (this.screenWidth < 768) {
      this.navx = true;
      this.nav = false;
      this.wid = true;
      this.widx = false;
      this.bottombox1 = false;
      this.bottombox3 = true;
      this.bottombox2 = false;
      this.main1 = false;
      this.main2 = true;
      this.imgbox = false;
      this.imgbox2 = true;
      this.bjx = false;
    }
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth;
        that.$store.state.screenWidth = document.body.clientWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      if (val < 992 && val > 768) {
        this.navx = true;
        this.nav = false;
        this.wid = true;
        this.widx = false;
        this.bottombox1 = false;
        this.bottombox3 = false;
        this.bottombox2 = true;
        this.main1 = false;
        this.main2 = true;
        this.imgbox = true;
        this.imgbox2 = false;
        this.bjx = true;
      } else if (val < 1200 && val > 992) {
        this.bottombox1 = false;
        this.bottombox3 = false;
        this.bottombox2 = true;
        this.navx = false;
        this.nav = true;
        this.wid = false;
        this.widx = true;
        this.bottombox1 = true;
        this.bottombox3 = false;
        this.bottombox2 = false;
        this.main1 = true;
        this.main2 = false;
        this.imgbox = true;
        this.imgbox2 = false;
        this.bjx = true;
      } else if (val < 768) {
        this.navx = true;
        this.nav = false;
        this.wid = true;
        this.widx = false;
        this.bottombox1 = false;
        this.bottombox3 = true;
        this.bottombox2 = false;
        this.main1 = false;
        this.main2 = true;
        this.imgbox = false;
        this.imgbox2 = true;
        this.bjx = false;
      } else {
        this.navx = false;
        this.nav = true;
        this.wid = false;
        this.widx = true;
        this.bottombox1 = true;
        this.bottombox3 = false;
        this.bottombox2 = false;
        this.main1 = true;
        this.main2 = false;
        this.imgbox = true;
        this.imgbox2 = false;
        this.bjx = false;
      }
    }
  },
  components: {
    detail
  }
};
</script>

<style scoped>
.topbox {
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #999;
  left: 0;
  top: 0;
  z-index: 9999;
  background: #fff;
}
.logo {
  margin: 2em 2em;
}
.body {
  min-width: 992px;
  width: 60%;
  margin: 0 auto;
}
.topbox ul {
  display: flex;
}
li a {
  text-align: center;
  line-height: 4.5em;
  display: block;
  font-weight: 700;
  font-size: 1.2em;
  padding: 0 1em;
}

/*颜色变化*/
.a {
  color: #32c5d2 !important;
}
/*手机的导航样式*/
.navul {
  flex-wrap: Wrap;
  position: absolute;
  top: 100%;
  background: #404851;
  width: 100%;
}
.navli {
  border-bottom: 1px solid #999;
  width: 100%;
}
.nava {
  color: #fff;
  font-size: 0.8em;
  line-height: 3em;
}
.hor-nav-toggler {
  background: #e6eaed;
  position: absolute;
  top: 2em;
  display: inline-block;
  padding: 5px 8px 6px 8px;
  border: none;
  right: 5%;
}
.line {
  width: 15px;
  display: block;
  height: 2px;
  padding: 0px;
  margin: 3px 0;
  background: #abb7c3;
}
/* 底部栏 */
h4 {
  font-size: 1.2em;
  color: #000;
  font-weight: 600;
  line-height: 3em;
}
.bottom {
  width: 100%;
  background: #31383c;
  padding: 3em 0;
  margin-top: 6em;
}
.bottombox {
  width: 60%;
  margin: 0 auto;
  color: #fff;
}
.bottombox h4,
.bottombox a {
  color: #fff;
}
.bottombox a {
  width: 50%;
}
.bottombox1 {
  width: 30%;
}
.bottombox2 {
  width: 50%;
}
.bottombox3 {
  width: 100%;
}
.bottombox1 .fd1 {
  width: 50%;
  text-align: left;
}
.bq {
  width: 60%;
  margin: 0 auto;
  color: #7f8c97;
  line-height: 3em;
}

/* 中间*/
.title {
  width: 90%;
  margin: 0 auto;
}
.title h2 {
  font-size: 1.3em;
  font-weight: 700;
  line-height: 2em;
}
.title div {
  color: #7f8c97;
  line-height: 2em;
}
.main {
  margin: 0 auto;
  margin-top: 8em;
  width: 60%;
  min-width: 992px;
}
.main2 {
  width: 90%;
  margin: 0 auto;
  margin-top: 8em;
}
.project {
  width: 100%;
  margin: 6em auto auto;
}
.button {
  text-align: center;
}
.button1 {
  margin: 0 2%;
  padding: 0 2%;
  line-height: 2.5em;
  display: inline-block;
  margin-top: 5%;
}
.colour2 {
  color: #fff;
  background: #32c5d2;
}
.colour3 {
  color: #fff !important;
  background: #32c5d2 !important;
}
.colour {
  background: #fff;
  color: #000;
}
.list {
  width: 100%;
  margin-top: 5%;
}
.imgbox {
  width: 45%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin: 0 2%;
  margin-top: 5%;
  cursor: pointer;
}
.imgbox2 {
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin: 0 2%;
  margin-top: 5%;
  cursor: pointer;
}
.imgbox2 .bj {
  height: 70vw;
}
.bj {
  width: 95%;
  margin: 0 auto;
  padding-top: 2.5%;
  height: 20vw;
  margin-bottom: 5%;
  overflow: hidden;
}
.bjx {
  height: 35vw;
}
.bj1 {
  width: 100%;
}
.titlex {
  font-size: 1.3em;
  font-weight: 700;
  width: 100%;
  text-align: center;
  line-height: 2em;
}
.txt {
  width: 100%;
  text-align: center;
  line-height: 2em;
  padding-bottom: 3%;
}

/*模块*/
.z {
  width: 100%;
  overflow-y: scroll;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  height: 100vh;
}
.ov {
  overflow: hidden;
  height: 100vh;
}
</style>

