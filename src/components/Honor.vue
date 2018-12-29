<template>
  <div>
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

    <!-- 荣誉证书 -->
    <div :class="{main:main1,main2:main2}">
      <div class="title" :class="{fj:main1}">
        <h2 :class="{fd1:main1}">关于朗创</h2>
        <div :class="{fd2:main1}">首页 / 关于朗创</div>
      </div>
      <div class="book" :class="{book2:book2}">
        <div
          class="animated delay-1s"
          :class="{bookleft1:bookleft1,bookleft2:bookleft2,bounceInLeft:max}"
        >
          <h3>关于朗创</h3>
          <span class="blobk"></span>
          <p>吉林省朗创科技有限公司是一家高新技术应用领域中从事专业应用系统开发、信息安全服务的高新技术企业。 总部设立在长春，业务范围涵盖软件开发与维护、移动端APP、大型Java、Web集成等项目的开发，成功案例百余起。 在遍布全国的业内公司中，建立了广泛的软件技术人才培养及输送体系，是通信、银行、金融、教育、医疗等行业重要的IT综合服务提供商和战略合作伙伴。</p>
          <p>朗创科技核心开发团队及管理高层均毕业于吉林大学计算机科学与技术学院，其中博士3人，硕士6人。近百人的员工团队， 具备行业工作经验10年以上员工12人，工作经验5年以上20余人。公司先后与吉林大学、长春理工大学、长春工业大学等高校建立实习基地，达成深度战略合作协议。</p>
          <p>朗创科技成立以来先后被吉林省软件行业协会授予吉林省优秀软件企业，吉林省软件行业协会理事单位，并取得国家“双软认证”以及国家高新技术企业资格认定; 通过了ISO9001质量管理体系认证、CMMIL3软件成熟度三级认证，拥有超过15个软件产品著作权。本着“质量第一、诚信为本”的朴素经营理念， 在“创想、创享”的企业文化带动下，严格按照现代企业模式进行管理运营，以务实、创新的精神不断进行实践探索，致力打造一家区域领先、国内知名的高科技企业。</p>
        </div>
        <div
          class="animated delay-1s"
          :class="{bookright1:bookright1,bookright2:bookright2,bounceInRight:max}"
        >
          <h3>资质荣誉</h3>
          <span class="blobk"></span>
          <div class="certificatebox">
            <div class="certificate">
              <img src="../assets/z1.jpg">
              <img src="../assets/z2.jpg" class="img2">
              <img src="../assets/z3.jpg">
            </div>
            <div class="certificate">
              <img src="../assets/z4.jpg">
              <img src="../assets/z5.jpg" class="img2">
              <img src="../assets/z6.jpg">
            </div>
            <div class="certificate">
              <img src="../assets/z4.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="OurServices">
        <h3>我们的服务</h3>
        <span class="blobk blobk2"></span>
        <div class="ulbox" :class="{ulbox2:ul2}">
          <div class="animated delay-1s" :class="{ul:ul1,ul2:ul2,bounceInUp:min}">
            <span>需求分析</span>
            <span>原型设计</span>
            <span>UI设计</span>
            <span>交互设计</span>
            <span>用户体验</span>
          </div>
          <div class="animated delay-2s" :class="{ul:ul1,ul2:ul2,ulx:ul1,bounceInUp:min}">
            <span>前端框架</span>
            <span>IOS开发</span>
            <span>ANDROID开发</span>
            <span>JAVA</span>
            <span>PHP</span>
          </div>
          <div class="animated delay-3s" :class="{ul:ul1,ul2:ul2,bounceInUp:min}">
            <span>兼容测试</span>
            <span>真机测试</span>
            <span>BUG探索</span>
            <span>用例测试</span>
            <span>缺陷管理</span>
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
  </div>
</template>

<script>
export default {
  name: "Honor",
  data() {
    return {
      a1: false,
      a2: true,
      a3: false,
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
      //证书
      main1: true,
      main2: false,
      book2: false,
      bookleft1: true,
      bookleft2: false,
      bookright1: true,
      bookright2: false,
      ul1: true,
      ul2: false,
      min: false,
      max: true
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
    }
  },
  mounted() {
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
      this.book2 = true;
      (this.bookleft1 = false),
        (this.bookleft2 = true),
        (this.bookright1 = false),
        (this.bookright2 = true);
      this.ul1 = true;
      this.ul2 = false;
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
      this.book2 = true;
      (this.bookleft1 = false),
        (this.bookleft2 = true),
        (this.bookright1 = false),
        (this.bookright2 = true);
      this.ul1 = false;
      this.ul2 = true;
    }
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth;
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
        this.book2 = true;
        (this.bookleft1 = false),
          (this.bookleft2 = true),
          (this.bookright1 = false),
          (this.bookright2 = true);
        this.ul1 = true;
        this.ul2 = false;
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
        this.book2 = false;
        (this.bookleft1 = true),
          (this.bookleft2 = false),
          (this.bookright1 = true),
          (this.bookright2 = false);
        this.ul1 = true;
        this.ul2 = false;
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
        this.book2 = true;
        (this.bookleft1 = false),
          (this.bookleft2 = true),
          (this.bookright1 = false),
          (this.bookright2 = true);
        this.ul1 = false;
        this.ul2 = true;
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
        this.book2 = false;
        (this.bookleft1 = true),
          (this.bookleft2 = false),
          (this.bookright1 = true),
          (this.bookright2 = false);
        this.ul1 = true;
        this.ul2 = false;
      }
    }
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

/*证书*/
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

.book {
  width: 100%;
  display: flex;
  margin: 6em auto;
}
.book2 {
  width: 90%;
  flex-wrap: Wrap;
  margin: 6em auto;
}
.bookleft1,
.bookright1 {
  width: 45%;
  margin: 0 2.5%;
}
.bookleft2,
.bookright2 {
  width: 100%;
}
.blobk {
  width: 2em;
  height: 0.5em;
  background: #27a8b4;
}
h3 {
  font-size: 2em;
  font-weight: 700;
  line-height: 2em;
}
p {
  text-indent: 2em;
  color: #7f8c97;
  margin-top: 5%;
  line-height: 1.8em;
}
.certificatebox {
  margin-top: 4%;
}
.certificate {
  width: 100%;
  display: flex;
}
.certificate img {
  width: 20%;
  height: 5%;
  margin-top: 1%;
}
.certificate .img2 {
  margin: 1% 20%;
}
.blobk2 {
  margin: 0 auto;
}
.OurServices {
  margin-top: 6em;
}
.OurServices h3 {
  text-align: center;
}
.ulbox {
  width: 100%;
  display: flex;
  margin-top: 3em;
}
.ulbox2 {
  flex-wrap: Wrap;
}
.ul {
  width: 30%;
  text-align: center;
}
.ulbox span {
  font-size: 1.2em;
  line-height: 2em;
  font-weight: 700;
}
.ul2 {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}
.ulx {
  margin: 0 5%;
}
</style>

