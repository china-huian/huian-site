<template>
  <div class="animated delay-1s bounceInLeft">
    <div class="top">
      <img src="../assets/xz1.png" :class="{btn:btn1r,btn2r:btn2r}" @click="up">
      <img src="../assets/xz3.png" :class="{btn:btn1r,btn2r:btn2r}" @click="Close">
      <img src="../assets/xz2.png" :class="{btn:btn1r,btn2r:btn2r}" @click="dw">
    </div>
    <div class="main">
      <h1>{{this.msg.title}}</h1>
      <h6>{{this.msg.typemsg}}</h6>
      <img :src="this.msg.imgurl" :class="{img1r:img1r,img2:img2}">
      <div :class="{txtboxr:txtboxr,txtbox2r:txtbox2r}">
        <div class="box1">
          <h3>项目说明</h3>
          <span class="blobk"></span>
          <div class="txt">{{this.msg.txt}}</div>
        </div>
        <div class="box2">
          <h3>项目详情</h3>
          <span class="blobk"></span>
          <div class="txt">
            <div class="fj">
              <div class="fd1">名称</div>
              <div class="fd2">{{this.msg.title}}</div>
            </div>
            <div class="fj">
              <div class="fd1">日期</div>
              <div class="fd2">{{this.msg.time}}</div>
            </div>
            <div class="fj">
              <div class="fd1">类别</div>
              <div class="fd2">{{this.msg.typemsg}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="boxz">
      <h3>其他项目</h3>
      <span class="blobk"></span>
    </div>
    <div class="Other" :class="{txtboxr:txtboxr,txtbox2r:txtbox2r}">
      <div class="Otherbox fj">
        <div
          class="boxx fd1"
          v-for="(item,index) in data"
          :key="index"
          @click="screen(item.type,item.title)"
        >
          <img :src="item.imgurl" class="bb">
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      // screenWidthx: document.body.clientWidth,
      btn1r: true,
      btn2r: false,
      img1r: true,
      img2: false,
      txtboxr: true,
      txtbox2r: false,
      arr: [], // 转换数组
      data: [], // 多个数据存储数组
      msg: "", // 单个数据存储数组
      list: {
        // 定义模型数据
        app: [
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A1-1.png"),
            title: "办公自动化系统-1",
            txt:
              "“移动办公自动化系统”是慧安推出的针对中小型企业、部门办公自动化的移动解决方案。包括客户端和管理端。客户端包括通讯录、消息、我的任务（审批、协同、待办）、日程、文档、公告、会议、考勤、日报、假期等。",
            type: "app"
          },
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A2-1.png"),
            title: "办公自动化系统-2",
            txt:
              "“移动办公自动化系统”是慧安推出的针对中小型企业、部门办公自动化的移动解决方案。包括客户端和管理端。管理端包括桌面管理、信息管理、通讯管理、文档管理、人事管理、客户管理、行政管理、报表管理等。",
            type: "app"
          },
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A3-1.png"),
            title: "鼎代驾服务平台",
            txt:
              "“鼎代驾服务平台”主要针对酒后代驾服务链提供了完整的解决方案。包括：用户客户端、代驾司机客户端和服务管理端。通过客户服务端，用户可以呼叫、查看附近的代驾司机并约单。代驾司机通过客户端可以查看客户的订单并决定是否接单。服务管理负责管理代驾司机注册、审核、评价，监督订单的状态，资金分配和审计，回应客户反馈。",
            type: "app"
          },
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A4-1.png"),
            title: "食代生物",
            txt:
              "“食代生物”是专门为微商团队开发的App。客户端完成了微商产品的展示，团队人员展示、团队财务关系展示以及个人设置。后台管理则实现了产品管理、订单管理，用户管理、关系管理、账户管理以及系统配置管理。",
            type: "app"
          },
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A2-1.png"),
            title: "企业通讯录",
            txt:
              "“企业通讯录”独立于OA提供了面向企业的多租户授权通讯录服务，分客户端、管理后台和企业管理后台。通过企业管理后台，用户可以注册和管理企业。一般管理后台负责部门以及联系人的创建。用户通过客户端可以查询、拨打、备份相应权限的通讯录。",
            type: "app"
          },
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A3-1.png"),
            title: "九益车综合服务平台",
            txt:
              "“九益车总和服务平台”是一款车辆用户服务软件。通过平台可对车辆进行设置提醒项目及提醒周期；可通过不同的维度进行统计分析车辆状态 ；在平台也已实现交流学习、产品购买等增值服务；通过在线商城（跳转到京东九益车店铺）实现汽车租赁以及二手车交易。",
            type: "app"
          },
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A1-1.png"),
            title: "长春交警学习平台",
            txt:
              "“长春交警学习平台”为城市交警提供了内部的知识学习、政策通知以及法律法规辅导测评的平台。通过学习平台，交警部门大大提升了新政策法规普及的效率。辅助基层交警紧跟时政精神，即时获取上级下达的通报和公告。",
            type: "app"
          },
          {
            time: "2016.0614",
            typemsg: "App定制开发",
            imgurl: require("../assets/A4-1.png"),
            title: "爱健康",
            txt:
              "“爱健康平台”提供了个人健康顾问解决方案，包括客户端51care、检测平台、后台管理部分。通过线下配套的医疗测试仪器和以及定制的数据网关，注册账户的使用者可以通过本App，查询相应身体检查的多种健康参数。配合后台中慧润福专业的医疗健康团队的专家，使用者可以实时获取各个时期的健康报告，为个人的健康状况以及治疗状态的调整提供参考。",
            type: "app"
          }
        ],
        wx: [
          {
            time: "2016.0614",
            typemsg: "微信开发",
            imgurl: require("../assets/B1-1.png"),
            title: "吉林移动和生活",
            txt:
              "“微信公众号” 体现着电信运营商运营渠道互联网化。我们工作内容涵盖了包括 “吉林移动和生活”、“吉林移动和你玩手机”、“长春移动”、“吉林省校园”等多个电信运营商公众号的活动开发。通过微信渠道，电信运营商在社交平台上品牌宣传和提供服务，吸引社交网络用户，增加品牌粘性和客户忠诚度。",
            type: "wx"
          },
          {
            time: "2016.0614",
            typemsg: "微信开发",
            imgurl: require("../assets/B2-1.png"),
            title: "吉林移动和你玩手机",
            txt:
              "“微信公众号” 体现着电信运营商运营渠道互联网化。我们工作内容涵盖了包括 “吉林移动和生活”、“吉林移动和你玩手机”、“长春移动”、“吉林省校园”等多个电信运营商公众号的活动开发。通过微信渠道，电信运营商在社交平台上品牌宣传和提供服务，吸引社交网络用户，增加品牌粘性和客户忠诚度。",
            type: "wx"
          },
          {
            time: "2016.0614",
            typemsg: "微信开发",
            imgurl: require("../assets/B3-1.png"),
            title: "长春移动",
            txt:
              "“微信公众号” 体现着电信运营商运营渠道互联网化。我们工作内容涵盖了包括 “吉林移动和生活”、“吉林移动和你玩手机”、“长春移动”、“吉林省校园”等多个电信运营商公众号的活动开发。通过微信渠道，电信运营商在社交平台上品牌宣传和提供服务，吸引社交网络用户，增加品牌粘性和客户忠诚度。",
            type: "wx"
          },
          {
            time: "2016.0614",
            typemsg: "微信开发",
            imgurl: require("../assets/B4-1.png"),
            title: "吉林省校园",
            txt:
              "“微信公众号” 体现着电信运营商运营渠道互联网化。我们工作内容涵盖了包括 “吉林移动和生活”、“吉林移动和你玩手机”、“长春移动”、“吉林省校园”等多个电信运营商公众号的活动开发。通过微信渠道，电信运营商在社交平台上品牌宣传和提供服务，吸引社交网络用户，增加品牌粘性和客户忠诚度。",
            type: "wx"
          },
          {
            time: "2016.0614",
            typemsg: "微信开发",
            imgurl: require("../assets/B2-1.png"),
            title: "一部手机游长白山",
            txt:
              "基于微信平台的多种能力，“微信小程序”可以提供各种便民服务。例如基于LBS的车位查找E找车位，以及景区的信息发布一部手机游长白山等。",
            type: "wx"
          }
        ],
        wz: [
          {
            time: "2016.0614",
            typemsg: "网站开发",
            imgurl: require("../assets/C1-1.png"),
            title: "盛达篮球俱乐部",
            txt:
              "盛达篮球俱乐部app是一个内部管理app，它的功能包括制定比赛计划、制定训练计划、管理球员、时时更新球员数据以及管理俱乐部合作事项，使俱乐部管理人员能更清晰的了解每个球员的信息情况，便于人员管理，也便于跟踪比赛计划和训练计划。",
            type: "wz"
          },
          {
            time: "2016.0614",
            typemsg: "网站开发",
            imgurl: require("../assets/C2-1.png"),
            title: "食代分销",
            txt:
              "食代分销移动终端管理平台是一套针对微商团队专门开发的团队提成管理系统，适用于不存在淘宝店、微店等系统，主要依靠微信及朋友圈、微博、论坛贴吧等渠道进行商品销售的用户。平台帮助商户全网布局，多网合一，让团队实现移动营销的全覆盖。食代分销移动终端管理平台提供了便捷、安全的信息管理，告别纸张或EXCEL表的繁琐记录方式，使信息更加规范、管理更加条理，从而节约团队管理时间。平台向厂家直接提交进货申请，自动计算出团队各体系分成金额。各级别代理申请仅需一台手机即可完成，上级代理直接使用移动端发展下线代理，管理后台显示当前用户的下级代理的数目及详细信息。",
            type: "wz"
          },
          {
            time: "2016.0614",
            typemsg: "网站开发",
            imgurl: require("../assets/C3-1.png"),
            title: "小驴OA",
            txt:
              "网小驴就是“效率”的谐音。这是一款推陈出新的办公平台，独立部署可覆盖数百上千用户的企业，是少有的可满足复杂逻辑的商务数字办公一体化软件，帮助企业实现全程信息化管理和核心数据私有化。可覆盖计划任务、项目管理、工作流程、移动办公、人力资源、会议管理、资源管控、组织行为。商业智能、环境知觉等诸多领域。在提供办公体验、资源快速接入以满足用户所需的同时，也持续致力于中小微企业数据私有化保护。站开发",
            type: "wz"
          },
          {
            time: "2016.0614",
            typemsg: "网站开发",
            imgurl: require("../assets/C4-1.png"),
            title: "艺融网",
            txt:
              "艺融网将艺术品作为“金融资产纳入个人和机构的投资范畴”实现金融资本与艺术品收藏、投资的融合，将艺术品金融化。平台搭建了基于艺术品项目投融资的成熟业务模式，同时与专业战略合作伙伴一道建立了“艺术品鉴定—客观估值—专业保管—预收购人确认”的专业服务体系，树立了核心竞争优势，形成了较高的行业壁垒，现已成为艺术品互联网金融领域的领军企业。艺融网凭借专业经验和成功模式，开拓艺术品金融的千亿级市场。随着业务的稳步快速发展，凭借强劲的发展势头和优秀的运营团队，艺融网受到了资本界的高度关注，基于合作理念、综合实力、业界经验等综合考量，艺融网于2015年引入了海外集团、北大燕园集团上亿元人民币战略投资。",
            type: "wz"
          }
        ],
        sj: [
          {
            time: "2016.0614",
            typemsg: "大数据业务",
            imgurl: require("../assets/D1-1.png"),
            title: "苋草商城",
            txt:
              "苋草商城微信公众平台是一款购物类软件，更方便快捷的购物体验。您可以在商城购买优质猪肉，也可以在合作饭店品尝美食，并获得购买商城猪肉所需的积分，既经济又实慧的购物模式。同时又包含代理商和商户管理模块，实现了前端手机管理的模式，既能让代理商在手机上就可以时时看到自己的收益，又能时时修改商户资料信息，让普通用户、代理商、商户以及平台之间的交易更高效地运转。",
            type: "sj"
          },
          {
            time: "2016.0614",
            typemsg: "大数据业务",
            imgurl: require("../assets/D2-1.png"),
            title: "投趣",
            txt:
              "投趣微信公众平台是一款生活类型软件，是一种全新的生活方式。集各类兴趣主题优质活动为一体的信息免费发布、活动发起、资源共享的社交互动平台，是一款方便个人用户及小微团体发布活动的工具。投趣把全微信用户资源进行整合，并分享到平台，实现了互联网+大数据的共享。与自媒体直播的结合，打造微信直播频道，创造出微信资源与微信直播频道相结合的新型自媒体平台。",
            type: "sj"
          }
        ]
      }
    };
  },
  methods: {
    // 进页面筛选函数
    screen(type, title) {
      switch (type) {
        case "app":
          this.arr = this.list.app;
          break;

        case "wx":
          this.arr = this.list.wx;
          break;

        case "wz":
          this.arr = this.list.wz;
          break;

        case "sj":
          this.arr = this.list.sj;
          break;
      }
      for (let i = 0; i < this.arr.length; i++) {
        if (title == this.arr[i].title) {
          this.msg = this.arr[i];
          this.data = [...this.arr];
          this.data.splice(i, 1);
        }
      }
    },
    dw() {
      // 下一个
      let title = this.msg.title;
      for (let i = 0; i < this.arr.length; i++) {
        if (title == this.arr[i].title) {
          this.msg = this.arr[i + 1];
          this.data = this.arr;
          this.data.splice(i + 1, 1);
        }
      }
    },
    up() {
      // 上一个
      let title = this.msg.title;
      for (let i = 0; i < this.arr.length; i++) {
        if (title == this.arr[i].title) {
          this.msg = this.arr[i - 1];
          this.data = this.arr;
          this.data.splice(i - 1, 1);
        }
      }
    },
    Close() {
      this.$store.state.switch = false;
    }
  },
  mounted() {
    let type = this.$store.state.type;
    let title = this.$store.state.title;
    this.screen(type, title);
    const that = this;
    if (this.$store.state.screenWidth < 992) {
      this.btn1r = false;
      this.btn2r = true;
      this.img1r = false;
      this.img2 = true;
      this.txtboxr = false;
      this.txtbox2r = true;
    }
  },
  computed: {
    // 监听store的中专
    listenshowpage1() {
      return this.$store.state.screenWidth;
    }
  },
  watch: {
    // 监听store
    listenshowpage1() {
      let val = this.$store.state.screenWidth;
      if (val < 992) {
        this.btn1r = false;
        this.btn2r = true;
        this.img1r = false;
        this.img2 = true;
        this.txtboxr = false;
        this.txtbox2r = true;
      } else {
        this.btn1r = true;
        this.btn2r = false;
        this.img1r = true;
        this.img2 = false;
        this.txtboxr = true;
        this.txtbox2r = false;
      }
    }
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 8vw;
  background: #000;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
}
.btn {
  display: inline;
  margin: 2vw 1%;
  width: 3vw;
}
.btn2r {
  display: inline;
  margin: 2vw 2%;
  width: 5vw;
}
.main {
  margin-top: 8.5vw;
}
h1 {
  width: 100%;
  text-align: center;
  font-size: 2em;
  font-weight: 800;
  line-height: 2em;
}
h6 {
  width: 100%;
  text-align: center;
}
.img1r {
  width: 50%;
  margin: 6em auto;
}
.img2 {
  width: 90%;
  margin: 3em auto;
}
.txtboxr {
  width: 50%;
  margin: 0 auto;
  display: flex;
}
.txtbox2r {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.blobk {
  width: 2em;
  height: 0.5em;
  background: #27a8b4;
}
h3 {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 2em;
}
.txtboxr .box1 {
  width: 60%;
}
.txtboxr .box2 {
  width: 35%;
  margin-left: 5%;
}
.txtbox2r .box1,
.txtbox2r .box2 {
  width: 100%;
}
.txt {
  font-size: 1.2em;
  line-height: 2em;
  margin: 5% 0;
}
.txt .fj {
  border-bottom: 1px dotted #dfdfdf;
}
.txt .fd1 {
  width: 35%;
}
.txt .fd2 {
  width: 65%;
}
.Other {
  margin: 0 auto auto;
  margin-bottom: 6em;
}
.Otherbox {
  margin-top: 3em;
}
.boxx {
  width: 30%;
  margin-right: 3%;
  cursor: pointer;
}
.bb {
  width: 90%;
  margin: 0 auto;
}
.boxz {
  width: 50%;
  margin: 6em auto auto;
}
.title {
  font-size: 1.2em;
  font-weight: 600;
  line-height: 2em;
  width: 90%;
  margin: 0 auto;
}
</style>

