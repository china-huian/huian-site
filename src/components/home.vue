<template>
  <div>
    <div class="body">
      <!-- 导航栏 -->
      <div class="topbox">
        <div class="body">
          <a href="index.html">
            <img src="../assets/logo.png" class="logo fd1">
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
              <a href="javascript:;" :class="{a:a2,nava:navx}" @click="btn1('2')">关于慧安</a>
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
    </div>
    <!-- 轮播图 -->
    <div class="Rotation" :style="{width:min+'px',height:height+'px'}">
      <ul :style="{width:max+'px'}">
        <li class="fd1" :style="{width:min+'px'}" v-for="(item,index) in Rotation" :key="index">
          <div class="title">
            <h3
              :class="{animated:true,bounceInDown:animated,bounceOutDown:animated2}"
              class="delay-1s"
            >{{item.title}}</h3>
            <span
              :class="{animated:true,bounceInLeft:animated,bounceOutDown:animated2}"
              class="delay-1s"
            >{{item.txt}}</span>
            <button
              :class="{animated:true, bounceInUp:animated,bounceOutDown:animated2}"
              class="delay-1s btn"
            >{{item.btn}}</button>
          </div>
          <img :src="item.uri" class="bj" :style="{height:height+'px'}">
        </li>
      </ul>
      <img src="../assets/l.png" class="l" @click="up">
      <img src="../assets/r.png" class="r" @click="dw">
    </div>
    <!-- 公司能力 -->
    <div class="ability" :class="{ability1:widx,ability2:wid}">
      <div :class="{widthx:wid,bounceInUp:jt}" class="widths animated delay-1s">
        <img src="../assets/1.png" :class="{imgw:widx,imgws:wid}">
        <h4>软件解决方案</h4>
        <em>软件需求分析师、软件架构师、高级软件工程师、UI设计师为您提供最专业的信息化解决方案。</em>
      </div>
      <div :class="{widthx:wid,bounceInUp:jt}" class="widths animated delay-2s">
        <img src="../assets/2.png" :class="{imgw:widx,imgws:wid}">
        <h4>IT信息化咨询服务</h4>
        <em>帮助客户了解和整理需求制定出开发步骤并帮助进行后续开发过程。</em>
      </div>
      <div :class="{widthx:wid,bounceInUp:jt}" class="widths animated delay-3s">
        <img src="../assets/3.png" :class="{imgw:widx,imgws:wid}">
        <h4>定制化软件开发</h4>
        <em>根据用户需求，进行个性化的软件开发， 从需求到验收的“过程化”开发服务。</em>
      </div>
    </div>
    <!-- 关于慧安 -->
    <div class="about fj" :class="{about1:about1,about2:about2}">
      <div class="left" :class="{fd1:about1,aboutleft:about2}">
        <div class="abouttitle animated delay-1s" :class="{bounceInUp:about}">
          <h4>关于慧安</h4>
          <span class="blobk"></span>
        </div>
        <div
          class="abouttxt animated delay-1s"
          :class="{abouttxt1:aboutbj1,abouttxt2:aboutbj2,fadeInLeft:about}"
        >慧安通信是一家创新型企业，拥有一支充满朝气、高学历、高素质、年轻化、专业化的研发团队。为公司的蓬勃发展提供源源不断的活力与动力。一线研发团队有36人，100%本科以上学历，重点大学及硕士以上学历占20%，其中计算机专业90%以上，团队成员平均从业年限3-4年。</div>
        <button class="Honor" @click="Honor">资质荣誉</button>
        <img
          src="../assets/gs.png"
          class="aboutbj animated delay-1s"
          :class="{aboutbj1:aboutbj1,aboutbj2:aboutbj2,bounceInDown:about}"
        >
      </div>
      <div
        class="right animated delay-1s"
        :class="{fd2:about1,aboutright:about2,bounceInRight:about}"
      >
        <div :class="{panel1:panel1,panel2:panel2}">
          <div
            class="paneltitle"
            :class="{ba:ba1}"
            @click="panelbtn1"
            @mouseenter="enter('1')"
            @mouseleave="leave"
          >产品UI</div>
          <div
            class="paneltxt animated delay-1s"
            :class="{bounceIn:panel1}"
            v-show="panel1"
          >UI/UX设计团队专注于移动智能UI设计，提供用户研究、交互设计、视觉设计三位一体的整合性设计服务。UI设计涉猎的服务包括手机系统、iPhone及Android手机应用、平板应用等手持移动设备上的UI设计。</div>
        </div>
        <div :class="{panel1:panel3,panel2:panel4}">
          <div
            class="paneltitle"
            :class="{ba:ba2}"
            @click="panelbtn2"
            @mouseenter="enter('2')"
            @mouseleave="leave"
          >IOS/Android</div>
          <div
            class="paneltxt animated delay-1s"
            :class="{bounceIn:panel3}"
            v-show="panel3"
          >移动端开发团队拥有一套完整的移动端APP开发模型，团队成员熟悉了解每一个IOS开发框架，并且精通面向对象的各种程序设计方法，编程能力极强。在Android（安卓）方面，手机端开发团队致力于用户体验，精通安卓系统的各项目开发，团队成员专业素质极强，专业技能精湛。</div>
        </div>
        <div :class="{panel1:panel5,panel2:panel6}">
          <div
            class="paneltitle"
            :class="{ba:ba3}"
            @click="panelbtn3"
            @mouseenter="enter('3')"
            @mouseleave="leave"
          >JAVA</div>
          <div
            class="paneltxt animated delay-1s"
            :class="{bounceIn:panel5}"
            v-show="panel5"
          >团队成员熟悉了解JBuilder、Eclipse、EJB、Servlet/JSP、Struts、Spring、Hibernate、JSF、JUnit等各种专业技术与产品。同时熟悉各种主流数据库Oracle、DB2、SQLServer，主流的设计工具Rose、EA。</div>
        </div>
      </div>
    </div>

    <!-- 技术服务 -->
    <div class="services">
      <div class="abouttitle servicetop">
        <h4>技术服务</h4>
        <span class="blobk"></span>
      </div>
      <div class="service animated delay-1s" :class="{bounceInUp:servicedh}">
        <div :class="{fj:service,servicebox:service,servicebox2:service2,servicebox3:service3}">
          <div :class="{fd1:service,service1:service,service2:service2,service4:service3}">
            <div
              class="serviceback1"
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
            >
              <h6 class="servicetitle">微信平台开发</h6>
              <span class="servicetxt">展示企业形象
                <br>宣传产品与服务
              </span>
              <button class="btn" @click="Jump('1')">更多</button>
            </div>
            <div
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
              @mouseenter="serviceshow('1')"
              @mouseleave="servicehide"
            >
              <img src="../assets/img1.png" class="servicebj">
              <div
                class="Eject animated delay-1s"
                v-show="serviceshow1"
                :class="{bounceInDown:serviceshow1}"
              >
                <div class="Mask"></div>
                <a class="yuan">
                  <img src="../assets/lj.png" class="li" @click="Jump('1')">
                </a>
              </div>
            </div>
          </div>
          <div :class="{fd2:service,service1:service,service2:service2,service4:service3}">
            <div
              class="serviceback2"
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
            >
              <h6 class="servicetitle">APP 开发</h6>
              <span class="servicetxt">准确把握产品定位及传播受众需求
                <br>完美实现您的想法
              </span>
              <button class="btn" @click="Jump('2')">更多</button>
            </div>
            <div
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
              @mouseenter="serviceshow('2')"
              @mouseleave="servicehide"
            >
              <img src="../assets/img3.png" class="servicebj">
              <div
                class="Eject animated delay-1s"
                v-show="serviceshow2"
                :class="{bounceInDown:serviceshow2}"
              >
                <div class="Mask"></div>
                <a class="yuan">
                  <img src="../assets/lj.png" class="li" @click="Jump('2')">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div :class="{fj:service,servicebox:service,servicebox2:service2,servicebox3:service3}">
          <div :class="{fd1:service,service2:service2,service1:service,service4:service3}">
            <div
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
              @mouseenter="serviceshow('3')"
              @mouseleave="servicehide"
            >
              <img src="../assets/img4.png" class="servicebj">
              <div
                class="Eject animated delay-1s"
                v-show="serviceshow3"
                :class="{bounceInDown:serviceshow3}"
              >
                <div class="Mask"></div>
                <a class="yuan">
                  <img src="../assets/lj.png" class="li" @click="Jump('3')">
                </a>
              </div>
            </div>
            <div
              class="serviceback3"
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
            >
              <h6 class="servicetitle">网站开发</h6>
              <span class="servicetxt">建立一个高质量、国际化的网站
                <br>成为企业的销售利器
              </span>
              <button class="btn" @click="Jump('3')">更多</button>
            </div>
          </div>
          <div :class="{fd2:service,service2:service2,service1:service,service4:service3}">
            <div
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
              @mouseenter="serviceshow('4')"
              @mouseleave="servicehide"
            >
              <img src="../assets/img2.png" class="servicebj">
              <div
                class="Eject animated delay-1s"
                v-show="serviceshow4"
                :class="{bounceInDown:serviceshow4}"
              >
                <div class="Mask"></div>
                <a class="yuan">
                  <img src="../assets/lj.png" class="li" @click="Jump('4')">
                </a>
              </div>
            </div>
            <div
              class="serviceback4"
              :class="{fd1:service,servicew:service,servicew2:service2,service3:service3}"
            >
              <h6 class="servicetitle">大数据业务</h6>
              <span class="servicetxt">高质量、灵活、易管控的数据管理
                <br>更高效管理数据架构
              </span>
              <button class="btn" @click="Jump('4')">更多</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 行业领域 -->
      <div class="field">
        <div class="abouttitle servicetop">
          <h4>行业领域</h4>
          <span class="blobk"></span>
        </div>
        <ul class="fieldul">
          <li :class="{fieldli:field1}" @click="fieldbtn('1')">
            <img src="../assets/l1.png" class="fieldbj">
            <span class="fieldtxt">商城</span>
            <em class="triangle_border_up" v-show="field1" v-if="fieldx"></em>
          </li>
          <li :class="{fieldli:field2}" @click="fieldbtn('2')">
            <img src="../assets/l2.png" class="fieldbj">
            <span class="fieldtxt">社会服务</span>
            <em class="triangle_border_up" v-show="field2" v-if="fieldx"></em>
          </li>
          <li :class="{fieldli:field3}" @click="fieldbtn('3')">
            <img src="../assets/l3.png" class="fieldbj">
            <span class="fieldtxt">企业管理</span>
            <em class="triangle_border_up" v-show="field3" v-if="fieldx"></em>
          </li>
          <li :class="{fieldli:field4}" @click="fieldbtn('4')">
            <img src="../assets/l4.png" class="fieldbj">
            <span class="fieldtxt">金融管理</span>
            <em class="triangle_border_up" v-show="field4" v-if="fieldx"></em>
          </li>
          <li :class="{fieldli:field5}" @click="fieldbtn('5')">
            <img src="../assets/l5.png" class="fieldbj">
            <span class="fieldtxt">社交媒体</span>
            <em class="triangle_border_up" v-show="field5" v-if="fieldx"></em>
          </li>
        </ul>
        <div class="fieldbox">
          <div :class="{fieldmain1:fieldmain1,fieldmain2:fieldmain2}">
            <div class="fieldmain">
              <h6 class="fieldtitle">{{list[indexz].title}}</h6>
              <span class="fieldtitle2">{{list[indexz].title2}}</span>
              <em class="fieldtxt">{{list[indexz].text}}</em>
            </div>
            <div class="fieldimg">
              <img :src="list[indexz].imgurl" class="bj">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 团队 -->
    <div class="team">
      <div :class="{fj:service,servicebox1:service,servicebox2:service2,servicebox3:service3}">
        <div class="abouttitle servicetop">
          <h4>团队</h4>
          <span class="blobk"></span>
        </div>
        <div :class="{fd1:service,service1:service,service2:service2,service4:service3}">
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('1')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t1.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show1"
              :class="{bounceInDown:serviceshow1}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('2')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t2.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show2"
              :class="{bounceInDown:serviceshow1}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
        </div>
        <div :class="{fd2:service,service1:service,service2:service2,service4:service3}">
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('3')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t3.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show3"
              :class="{bounceInDown:serviceshow2}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('4')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t4.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show4"
              :class="{bounceInDown:serviceshow2}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div :class="{fj:service,servicebox1:service,servicebox2:service2,servicebox3:service3}">
        <div :class="{fd1:service,service2:service2,service1:service,service4:service3}">
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('5')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t5.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show5"
              :class="{bounceInDown:serviceshow3}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('6')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t6.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show6"
              :class="{bounceInDown:serviceshow3}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
        </div>
        <div :class="{fd2:service,service2:service2,service1:service,service4:service3}">
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('7')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t7.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show7"
              :class="{bounceInDown:serviceshow4}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
          <div
            class="animated delay-1s"
            :class="{rubberBand:servicedh2,fd1:service,servicew:service,servicew2:service2,service3:service3}"
            @mouseenter="team('8')"
            @mouseleave="servicehide2"
          >
            <!-- <img src="../assets/t8.jpg" class="servicebj"> -->
            <div
              class="Eject animated delay-1s"
              v-show="show8"
              :class="{bounceInDown:serviceshow4}"
            >
              <div class="Mask" @click="Albumshow"></div>
              <a class="yuan2" @click="Albumshow">
                <img src="../assets/j.png" class="li">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 相册 -->
    <div
      class="Album"
      @click="Albumhide"
      @wheel="Albumwheel"
      @touchstart="Albumwheel1"
      @touchend="Albumwheel2"
      v-show="Album"
    >
      <div class="Mask"></div>
      <div :class="{imgbox:imgbox,imgbox2:imgbox2}" :style="{top:top+'px'}">
        <!-- <img src="../assets/t1.jpg" class="bj Albumimg">
        <img src="../assets/t2.jpg" class="bj Albumimg">
        <img src="../assets/t3.jpg" class="bj Albumimg">
        <img src="../assets/t4.jpg" class="bj Albumimg">
        <img src="../assets/t5.jpg" class="bj Albumimg">
        <img src="../assets/t6.jpg" class="bj Albumimg">
        <img src="../assets/t7.jpg" class="bj Albumimg">
        <img src="../assets/t8.jpg" class="bj Albumimg"> -->
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- 合作 -->
    <div class="cooperation" :class="{cooperationx:cooperation3}">
      <div class="abouttitle servicetop">
        <h4>合作</h4>
        <span class="blobk"></span>
      </div>
      <ul class="fj">
        <li
          v-for="(item,index) in listh"
          :key="index"
          class="fd1"
          :class="{cooperation1:cooperation1,cooperation2:cooperation2,cooperation3:cooperation3}"
        >
          <img :src="item.src" class="bj">
        </li>
      </ul>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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
  name: "home",
  data() {
    return {
      //导航
      a1: true,
      a2: false,
      a3: false,
      a4: false,
      a5: false,
      a6: false,
      //监听的992
      screenWidth: document.body.clientWidth,
      navx: false,
      //点击之后是否隐藏
      nav: true,
      //轮播图
      min: document.body.clientWidth,
      max: "",
      height: (document.documentElement.clientWidth / 10) * 4,
      Rotation: [
        {
          title: "慧安科技欢迎您",
          txt: "您在互联网领域的开发合作伙伴",
          uri: require("../assets/banner1.jpg"),
          btn: "慧安欢迎您"
        },
        {
          title: "我们的得服务",
          txt: "用品质赢得信赖，用专业赢得市场",
          uri: require("../assets/banner2.jpg"),
          btn: "我们提供"
        }
      ],
      animated: false,
      animated2: true,
      //公司能力
      wid: false,
      widx: true,
      jt: false,
      // 关于慧安
      about1: true,
      about2: false,
      aboutbj1: true,
      aboutbj2: false,
      panel1: true,
      panel2: false,
      panel3: false,
      panel4: true,
      panel5: false,
      panel6: true,
      //进场动画
      about: false,
      // 师表移入改变事件
      ba1: false,
      ba2: false,
      ba3: false,
      // 技术服务默认宽度
      service: true,
      //第二次宽度兼容50%
      service2: false,
      // 遮罩显示
      serviceshow1: false,
      serviceshow2: false,
      serviceshow3: false,
      serviceshow4: false,
      // 第三次兼容100%宽度
      service3: false,
      // 进场动画
      servicedh: false,

      //行业领域
      field1: true,
      field2: false,
      field3: false,
      field4: false,
      field5: false,
      //绑定宽度类
      fieldmain1: true,
      fieldmain2: false,
      indexz: "0",
      fieldx: true,
      list: [
        {
          title: "商城",
          title2: "产品：百嘉足球、在线商城网站开发",
          text:
            "积累出商场网站建设模版体系，一键搭建PC网店、WAP商城、iOS App、安卓App、微商城及支付宝微信与网银多种支付方式，全渠道覆盖互联网各终端。有B2B2C多种运营方式，兼容不同用户群体，整合统计及报表功能，涵盖数据来源、流量来源、来源趋势、爆款分析、每日商品关注数据、成交量、成交额等。",
          imgurl: require("../assets/img_case_1.png")
        },
        {
          title: "社会服务",
          title2: "产品：掌上东林、沈阳移动、优辆约车",
          text:
            "均采用高可用、高性能、易扩展、可伸缩的产品框架，针对社会类涉及到的通信、高并发等问题，在数据存储、分布式系统、网络通信等方面积累了丰富的经验。采用LBS技术，实现实时位置读取，轨迹定位，行程优化等功能。",
          imgurl: require("../assets/img_case_2.png")
        },
        {
          title: "企业管理",
          title2: "产品：小驴OA、老吾老敬老院管理",
          text:
            "为用户提供全面的客户信息管理、市场营销管理、销售团队管理以及客户服务管理。所有功能均基于B/S架构和移动互联网技术，保证线上线下数据实时掌控，极大地提高企业签单率和工作效率。",
          imgurl: require("../assets/img_case_3.png")
        },
        {
          title: "金融管理",
          title2: "产品：大宗外卖",
          text:
            "兼容做市商、撮合交易和直接买卖，权益、实物商品、固定资产均可交易，理财平台对安全性与稳定性要求更多，系统中的所有模块既相辅相成又相互独立，做到数据备份、安全防护。用当前最为安全的银行托管模式/银行存管模式进行资金结算，降低平台运营风险，确保平台用户资金安全。",
          imgurl: require("../assets/img_case_4.png")
        },
        {
          title: "社交媒体",
          title2: "产品：投趣自媒体直播平台",
          text:
            "集在线直播、社交互动、分享传播等基础功能为一体，使用私有协议，实现主播与观众之间的多路、低延迟音频互动，端到端延时小于400ms，抗丢包率超过30%，抗800ms的网络抖动、支持千万级用户同时在线。采用传输通道选路智能化，流控策略控制云端化，分布式混音等技术手段，拥有卓越的音视频质量。",
          imgurl: require("../assets/img_case_5.png")
        }
      ],
      // 团队
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      servicedh2: false,

      // 相册
      top: 0,
      imgbox: true,
      imgbox2: false,
      // 触摸时的点
      startY: "",
      endY: "",
      Album: false,
      // 合作
      listh: [
        { src: require("../assets/logo_1.png") },
        { src: require("../assets/logo_2.png") },
        { src: require("../assets/logo_3.png") },
        { src: require("../assets/logo_4.png") },
        { src: require("../assets/logo_5.png") },
        { src: require("../assets/logo_6.png") },
        { src: require("../assets/logo_7.png") },
        { src: require("../assets/logo_8.png") }
      ],
      cooperation1: true,
      cooperation2: false,
      cooperation3: false,
      bottombox1: true,
      bottombox2: false,
      bottombox3: false
    };
  },
  methods: {
    // 导航栏变色函数
    btn1(index) {
      switch (index) {
        case "1":
          this.a1 = true;
          this.a2 = false;
          this.a3 = false;
          this.a4 = false;
          this.a5 = false;
          this.a6 = false;
          if (this.screenWidth < 992) {
            this.nav = false;
          }
          window.scrollTo(0, 0);
          break;

        case "2":
          this.a1 = false;
          this.a2 = true;
          this.a3 = false;
          this.a4 = false;
          this.a5 = false;
          this.a6 = false;
          if (this.screenWidth < 992) {
            this.nav = false;
          }
          let about = document.getElementsByClassName("about")[0].offsetTop;
          let he = document.getElementsByClassName("about")[0].offsetHeight;
          window.scrollTo(0, about - he);
          this.about = true;
          break;

        case "3":
          this.a1 = false;
          this.a2 = false;
          this.a3 = true;
          this.a4 = false;
          this.a5 = false;
          this.a6 = false;
          this.servicedh = true;
          if (this.screenWidth < 992) {
            this.nav = false;
          }
          let service = document.getElementsByClassName("service")[0].offsetTop;
          window.scrollTo(0, service);
          break;

        case "4":
          this.a1 = false;
          this.a2 = false;
          this.a3 = false;
          this.a4 = true;
          this.a5 = false;
          this.a6 = false;
          this.servicedh2 = true;
          if (this.screenWidth < 992) {
            this.nav = false;
          }
          let team = document.getElementsByClassName("team")[0].offsetTop;
          window.scrollTo(0, team);
          break;

        case "5":
          this.a1 = false;
          this.a2 = false;
          this.a3 = false;
          this.a4 = false;
          this.a5 = true;
          this.a6 = false;
          if (this.screenWidth < 992) {
            this.nav = false;
          }
          let cooperation = document.getElementsByClassName("cooperation")[0]
            .offsetTop;
          let he2 = document.getElementsByClassName("cooperation")[0]
            .offsetHeight;
          window.scrollTo(0, cooperation - he2);
          break;

        case "6":
          this.a1 = false;
          this.a2 = false;
          this.a3 = false;
          this.a4 = false;
          this.a5 = false;
          this.a6 = true;
          if (this.screenWidth < 992) {
            this.nav = false;
          }
          let bottom = document.getElementsByClassName("bottom")[0].offsetTop;
          window.scrollTo(0, bottom);
          break;
        default:
          console.log("没有匹配到对应的数字");
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
    // 轮播图下一张移动函数
    move() {
      let Rotationa = this.Rotation[0];
      this.Rotation.splice(0, 1);
      let Rotationab = this.Rotation;
      Rotationab.push(Rotationa);
      this.animated = true;
      this.animated2 = false;
    },
    // 轮播图上一张移动函数
    movex() {
      let up = this.Rotation.length - 1;
      let Rotationa = this.Rotation[up];
      this.Rotation.splice(up, 1);
      let Rotationab = this.Rotation;
      Rotationab.unshift(Rotationa);
      this.animated = true;
      this.animated2 = false;
    },
    // 添加进场动画
    move2() {
      this.animated = false;
      this.animated2 = true;
    },
    // 上一张
    up() {
      this.movex();
    },
    // 下一张
    dw() {
      this.move();
    },
    // 能力介绍点击切换
    panelbtn1() {
      this.panel1 = true;
      this.panel2 = false;
      this.panel3 = false;
      this.panel4 = true;
      this.panel5 = false;
      this.panel6 = true;
    },
    panelbtn2() {
      this.panel1 = false;
      this.panel2 = true;
      this.panel3 = true;
      this.panel4 = false;
      this.panel5 = false;
      this.panel6 = true;
    },
    panelbtn3() {
      this.panel1 = false;
      this.panel2 = true;
      this.panel3 = false;
      this.panel4 = false;
      this.panel5 = true;
      this.panel6 = false;
    },
    // 滚动条监听事件回调函数
    handleScroll() {
      let clientHeight = document.documentElement.clientHeight; // 可见区域高度 Rotation
      let Rotationhe = document.getElementsByClassName("Rotation")[0]
        .offsetHeight;
      let Rotationtop = document.getElementsByClassName("Rotation")[0]
        .offsetTop;
      let cooperationhe = document.getElementsByClassName("cooperation")[0]
        .offsetHeight;
      let cooperationtop = document.getElementsByClassName("cooperation")[0]
        .offsetTop;
      let bottomhe = document.getElementsByClassName("bottom")[0].offsetHeight;
      let bottomtop = document.getElementsByClassName("bottom")[0].offsetTop;
      let teamhe = document.getElementsByClassName("team")[0].offsetHeight;
      let teamtop = document.getElementsByClassName("team")[0].offsetTop;
      let abouthe = document.getElementsByClassName("about")[0].offsetHeight;
      let abouttop = document.getElementsByClassName("about")[0].offsetTop;
      let service = document.getElementsByClassName("services")[0].offsetTop;
      let servicehe = document.getElementsByClassName("services")[0]
        .offsetHeight;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (
        scrollTop < Rotationtop + Rotationhe - clientHeight / 2 &&
        scrollTop > Rotationtop - clientHeight / 2
      ) {
        this.a1 = true;
        this.a2 = false;
        this.a3 = false;
        this.a4 = false;
        this.a5 = false;
        this.a6 = false;
      } else if (
        scrollTop < abouttop + abouthe - clientHeight / 2 &&
        scrollTop > abouttop - clientHeight / 2
      ) {
        // 公司简介滚动到
        this.a1 = false;
        this.a2 = true;
        this.a3 = false;
        this.a4 = false;
        this.a5 = false;
        this.a6 = false;
        this.about = true;
      } else if (
        scrollTop > Rotationtop - clientHeight / 2 &&
        scrollTop < abouttop + abouthe - clientHeight / 2
      ) {
        this.jt = true;
      } else if (
        scrollTop < service + servicehe - clientHeight / 2 &&
        scrollTop > service - clientHeight / 2
      ) {
        this.a1 = false;
        this.a2 = false;
        this.a3 = true;
        this.a4 = false;
        this.a5 = false;
        this.a6 = false;
        this.servicedh = true;
      } else if (
        scrollTop < teamtop + teamhe - clientHeight / 2 &&
        scrollTop > teamtop - clientHeight / 2
      ) {
        this.a1 = false;
        this.a2 = false;
        this.a3 = false;
        this.a4 = true;
        this.a5 = false;
        this.a6 = false;
        this.servicedh2 = true;
      } else if (
        scrollTop < cooperationtop + cooperationhe - clientHeight / 2 &&
        scrollTop > cooperationtop - clientHeight / 2
      ) {
        this.a1 = false;
        this.a2 = false;
        this.a3 = false;
        this.a4 = false;
        this.a5 = true;
        this.a6 = false;
      } else if (scrollTop > cooperationtop + cooperationhe) {
        this.a1 = false;
        this.a2 = false;
        this.a3 = false;
        this.a4 = false;
        this.a5 = false;
        this.a6 = true;
      }
    },
    // 移入事件
    enter(index) {
      switch (index) {
        case "1":
          this.ba1 = true;
          this.ba2 = false;
          this.ba3 = false;
          break;

        case "2":
          this.ba2 = true;
          this.ba1 = false;
          this.ba3 = false;
          break;

        case "3":
          this.ba3 = true;
          this.ba1 = false;
          this.ba2 = false;
          break;
      }
    },
    leave() {
      this.ba1 = false;
      this.ba2 = false;
      this.ba3 = false;
    },
    // 移入显示遮罩
    serviceshow(index) {
      switch (index) {
        case "1":
          this.serviceshow1 = true;
          break;

        case "2":
          this.serviceshow2 = true;
          break;

        case "3":
          this.serviceshow3 = true;
          break;

        case "4":
          this.serviceshow4 = true;
          break;
      }
    },
    servicehide() {
      this.serviceshow1 = false;
      this.serviceshow2 = false;
      this.serviceshow3 = false;
      this.serviceshow4 = false;
    },
    // 行业领域函数
    fieldbtn(index) {
      this.indexz = index - 1;
      switch (index) {
        case "1":
          this.field1 = true;
          this.field2 = false;
          this.field3 = false;
          this.field4 = false;
          this.field5 = false;
          if (this.screenWidth < 992) {
            this.fieldx = false;
          }
          break;

        case "2":
          this.field1 = false;
          this.field2 = true;
          this.field3 = false;
          this.field4 = false;
          this.field5 = false;
          if (this.screenWidth < 992) {
            this.fieldx = false;
          }
          break;

        case "3":
          this.field1 = false;
          this.field2 = false;
          this.field3 = true;
          this.field4 = false;
          this.field5 = false;
          if (this.screenWidth < 992) {
            this.fieldx = false;
          }
          break;

        case "4":
          this.field1 = false;
          this.field2 = false;
          this.field3 = false;
          this.field4 = true;
          this.field5 = false;
          if (this.screenWidth < 992) {
            this.fieldx = false;
          }
          break;

        case "5":
          this.field1 = false;
          this.field2 = false;
          this.field3 = false;
          this.field4 = false;
          this.field5 = true;
          if (this.screenWidth < 992) {
            this.fieldx = false;
          }
          break;
      }
    },
    team(index) {
      switch (index) {
        case "1":
          this.show1 = true;
          break;

        case "2":
          this.show2 = true;
          break;

        case "3":
          this.show3 = true;
          break;

        case "4":
          this.show4 = true;
          break;

        case "5":
          this.show5 = true;
          break;

        case "6":
          this.show6 = true;
          break;

        case "7":
          this.show7 = true;
          break;

        case "8":
          this.show8 = true;
          break;
      }
    },
    servicehide2() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
      this.show6 = false;
      this.show7 = false;
      this.show8 = false;
    },
    // 相册滚轮事件
    Albumwheel(e) {
      let imgh = document.getElementsByClassName("Albumimg");
      if (e.deltaY > 0) {
        if (this.top > -(imgh[0].height * (imgh.length - 1))) {
          this.top -= imgh[0].height + 50;
        }
      } else {
        if (this.top < 0) {
          this.top += imgh[0].height + 50;
        }
      }
    },
    // 开始触摸
    Albumwheel1(e) {
      this.endY = e.touches[0].clientY;
    },
    // 结束触摸  开始移动
    Albumwheel2(e) {
      this.startY = e.changedTouches[0].clientY;
      let imgh = document.getElementsByClassName("Albumimg");
      if (this.endY > this.startY) {
        if (this.top > -(imgh[0].height * (imgh.length - 1))) {
          this.top -= imgh[0].height + 25;
        }
      } else {
        if (this.top < 0) {
          this.top += imgh[0].height + 25;
        }
      }
    },
    // 点击显示相册
    Albumshow() {
      this.Album = true;
    },
    // 点击关闭相册
    Albumhide() {
      this.Album = false;
    },
    // 合作轮播
    hz() {
      let no1 = this.listh[0];
      this.listh.splice(0, 1);
      let listh = this.listh;
      listh.push(no1);
    },
    Honor() {
      this.$router.push("/Honor");
      window.removeEventListener("scroll", this.handleScroll);
    },
    Jump(index) {
      window.removeEventListener("scroll", this.handleScroll);
      this.$router.push("/cases");
      let jump = Number(index) + 1;
      void sessionStorage.setItem("jump", jump);
    }
  },
  mounted() {
    let count = this.$store.state.count;
    this.btn1(count);
    // 监听滚动条
    window.addEventListener("scroll", this.handleScroll);
    //轮播图切换调用
    setInterval(this.move2, 4500);
    setInterval(this.move, 5000);
    setInterval(this.hz, 3000);
    // 轮播图ul宽度
    this.max = this.Rotation.length * this.min;
    // 导航兼容显示
    const that = this;
    if (this.screenWidth < 992 && this.screenWidth > 768) {
      this.navx = true;
      this.nav = false;
      this.wid = true;
      this.widx = false;
      this.about1 = false;
      this.about2 = true;
      this.aboutbj2 = true;
      this.aboutbj1 = false;
      this.service2 = true;
      this.service = false;
      this.service = true;
      this.fieldmain2 = true;
      this.fieldmain1 = false;
      this.fieldx = false;
      this.height = (document.documentElement.clientWidth / 10) * 6;
      this.imgbox2 = true;
      this.imgbox = false;
      this.cooperation2 = true;
      this.cooperation1 = false;
      this.cooperation3 = false;
      this.bottombox1 = false;
      this.bottombox3 = false;
      this.bottombox2 = true;
    } else if (this.screenWidth < 768) {
      this.navx = true;
      this.nav = false;
      this.wid = true;
      this.widx = false;
      this.about1 = false;
      this.about2 = true;
      this.aboutbj2 = true;
      this.aboutbj1 = false;
      this.service3 = true;
      this.service2 = false;
      this.service = false;
      this.fieldmain2 = true;
      this.fieldmain1 = false;
      this.fieldx = false;
      this.height = (document.documentElement.clientWidth / 10) * 6;
      this.imgbox2 = true;
      this.imgbox = false;
      this.cooperation2 = false;
      this.cooperation1 = false;
      this.cooperation3 = true;
      this.bottombox1 = false;
      this.bottombox3 = true;
      this.bottombox2 = false;
    }
    //监听窗口变化
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth;
        that.min = document.body.clientWidth;
        that.max = that.Rotation.length * that.min;
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
        this.aboutbj2 = true;
        this.aboutbj1 = false;
        this.about1 = false;
        this.about2 = true;
        this.height = (document.documentElement.clientWidth / 10) * 5;
        this.service2 = true;
        this.service = false;
        this.service3 = false;
        this.fieldmain2 = true;
        this.fieldmain1 = false;
        this.fieldx = false;
        this.imgbox2 = false;
        this.imgbox = true;
        this.cooperation2 = true;
        this.cooperation1 = false;
        this.cooperation3 = false;
        this.bottombox1 = false;
        this.bottombox3 = false;
        this.bottombox2 = true;
      } else if (val < 1200 && val > 992) {
        this.aboutbj2 = true;
        this.aboutbj1 = false;
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
      } else if (val < 768) {
        this.navx = true;
        this.nav = false;
        this.wid = true;
        this.widx = false;
        this.aboutbj2 = true;
        this.aboutbj1 = false;
        this.about1 = false;
        this.about2 = true;
        this.height = (document.documentElement.clientWidth / 10) * 5;
        this.service3 = true;
        this.service2 = false;
        this.service = false;
        this.fieldmain2 = true;
        this.fieldmain1 = false;
        this.fieldx = false;
        this.imgbox2 = true;
        this.imgbox = false;
        this.cooperation2 = false;
        this.cooperation1 = false;
        this.cooperation3 = true;
        this.bottombox1 = false;
        this.bottombox3 = true;
        this.bottombox2 = false;
      } else {
        this.navx = false;
        this.nav = true;
        this.wid = false;
        this.widx = true;
        this.aboutbj2 = false;
        this.aboutbj1 = true;
        this.about1 = true;
        this.about2 = false;
        this.height = (document.documentElement.clientWidth / 10) * 4;
        this.service2 = false;
        this.service = true;
        this.service3 = false;
        this.fieldmain2 = false;
        this.fieldmain1 = true;
        this.fieldx = true;
        this.imgbox2 = false;
        this.imgbox = true;
        this.cooperation2 = false;
        this.cooperation1 = true;
        this.cooperation3 = false;
        this.bottombox1 = true;
        this.bottombox3 = false;
        this.bottombox2 = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  margin: 0 2em;
  width: 10%;
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

/*轮播图*/
.Rotation {
  width: 100%;
  overflow: hidden;
  position: relative;
  top: 6em;
  left: 0;
}
.bj {
  width: 100%;
}
.Rotation li {
  position: relative;
  height: 100%;
}
.Rotation li img {
  margin-top: -8%;
}
.title {
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0;
  top: 22%;
  color: #fff;
}
h3 {
  font-size: 1.5em;
  font-weight: 700;
}
.title span {
  font-size: 1em;
  font-weight: 500;
  line-height: 2em;
}
.btn {
  display: block;
  line-height: 2em;
  border: 2px solid #fff;
  background: none;
  margin: 1.5em auto;
  color: #fff;
  font-weight: 600;
  padding: 0 1em;
}
.l,
.r {
  width: 5%;
  position: absolute;
  top: 25%;
}
.l {
  left: 3%;
}
.r {
  right: 3%;
}

/*公司能力*/
.ability {
  display: flex;
  margin: 6em auto;
}
.ability1 {
  width: 60%;
  min-width: 992px;
}
.ability2 {
  width: 90%;
  flex-wrap: Wrap;
}
.widths {
  width: 30%;
  padding: 0 5%;
}
h4 {
  font-size: 1.2em;
  color: #000;
  font-weight: 600;
  line-height: 3em;
}
.widthx {
  width: 100%;
  margin: 5% auto;
}
.imgw {
  width: 30%;
}
.imgws {
  width: 15%;
}

/* 关于慧安 */
.about {
  margin: 6em auto;
}
.abouttitle {
  width: 100%;
}
.left {
  padding-left: 5%;
  width: 50%;
  position: relative;
}
.right {
  padding-right: 5%;
  width: 35%;
}
.blobk {
  width: 2em;
  height: 0.5em;
  background: #27a8b4;
}
.abouttxt {
  background: #fff;
  margin: 6% 0;
  line-height: 1.8em;
  padding: 5%;
}
.Honor {
  text-align: center;
  background: #27a8b4;
  line-height: 2.5em;
  padding: 0 1em;
  border: none;
  color: #fff;
  font-size: 1.2em;
  font-weight: 600;
}
.paneltxt {
  line-height: 2em;
}
.paneltitle {
  font-size: 1.2em;
  font-weight: 700;
  line-height: 2.5em;
}
.ba {
  background: #27a8b4;
}
/* 关于慧安兼容 */
.abouttxt1 {
  width: 40%;
}
.abouttxt2 {
  width: 85%;
}
.about1 {
  width: 60%;
  min-width: 992px;
}
.about2 {
  width: 90%;
}
.aboutbj1 {
  position: absolute;
  z-index: -1;
  right: 0;
  top: 0;
  width: 55%;
}
.aboutbj2 {
  width: 70%;
  margin: 5% auto;
  margin-left: 0;
}
.aboutleft {
  width: 85%;
  margin: 0 auto;
}
.aboutright {
  width: 85%;
  margin: 0 auto;
}
.panel1 {
  background: #27a8b4;
  color: #fff;
  padding: 5%;
  margin: 1em 0;
}
.panel2 .paneltitle {
  line-height: 3m;
}
.panel2 {
  margin: 1em 0;
}

/* 技术服务 */
.service {
  display: flex;
  width: 100%;
  flex-wrap: Wrap;
  margin-bottom: 6em;
}
.service1 {
  display: flex;
  width: 50%;
  height: 100%;
}
.service2 {
  width: 100%;
  height: 50%;
  display: flex;
}
.servicew {
  width: 50%;
  position: relative;
}
.servicew2 {
  width: 100%;
  position: relative;
}
.service3 {
  width: 100%;
  height: 50%;
  position: relative;
}
.service4 {
  width: 100%;
  height: 50%;
}
.servicebox {
  height: 15vw;
  width: 100%;
}
.servicebox2 {
  height: 50vw;
  width: 100%;
}
.servicebox3 {
  width: 100%;
  height: 220vw;
}
.servicetitle {
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  color: #fff;
  padding-top: 10%;
}
.servicetxt {
  display: block;
  margin: 3% auto;
  color: #fff;
  text-align: center;
  width: 100%;
}
.serviceback1 {
  background: #32c5d2;
}
.serviceback2 {
  background: #7a6a61;
}
.serviceback3 {
  background: #e7505a;
}
.serviceback4 {
  background: #57bfe1;
}
.servicebj {
  width: 100%;
  height: 100%;
}
.servicetop {
  width: 100%;
  margin: 6em auto 3em auto;
}
.servicetop h4 {
  width: 100%;
  text-align: center;
}
.servicetop .blobk {
  margin: 0 auto;
  display: block;
}
.Eject {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.Mask {
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
}
.yuan {
  width: 10%;
  height: 16%;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -2.5%;
  top: 40%;
  background: #000;
}
.li {
  width: 50%;
  height: 50%;
  margin: 25% auto;
}

/* 行业领域 */
.field {
  width: 100%;
  margin: 6em auto;
}
.fieldul {
  margin: 0 auto;
  text-align: center;
  line-height: 2em;
  font-size: 1.2em;
  font-weight: 600;
}
.fieldbj {
  width: 100%;
}
.fieldul li {
  display: inline-block;
  padding: 0 2%;
  color: #cfd9e6;
  filter: grayscale(100%);
  margin: 5% auto auto;
}
.fieldli {
  color: #32c5d2 !important;
  filter: grayscale(0%) !important;
}
.fieldtxt {
  width: 100%;
  text-align: center;
}
.triangle_border_up {
  width: 0;
  height: 0;
  border-width: 0 20px 20px;
  border-style: solid;
  border-color: transparent transparent #333;
  margin: 25% auto auto;
  display: block;
}
.fieldbox {
  width: 100%;
  background: url("../assets/bj2.jpg");
  color: #fff;
}
.fieldmain1 {
  width: 60%;
  margin: 0 auto;
  display: flex;
  padding: 6em 0;
  min-width: 779px;
}
.fieldmain2 {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap-reverse;
}
.fieldmain2 .fieldimg {
  padding: 0;
  margin-top: 6em;
}
.fieldmain2 .fieldmain {
  width: 100%;
  margin-bottom: 6em;
}
.fieldmain {
  width: 60%;
}
.fieldmain2 .fieldimg {
  width: 100%;
  padding: 0;
  min-width: 100%;
}
.fieldtitle {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 2em;
}
.fieldtitle2 {
  color: #838e9a;
  line-height: 2em;
}
.fieldtxt {
  color: #838e9a;
  line-height: 1.8em;
}
.fieldimg {
  width: 35%;
  padding-left: 5%;
  min-width: 412px;
}
/* 相册 */
.Album {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  top: 0;
  left: 0;
  overflow: hidden;
}
.imgbox {
  width: 30%;
  position: absolute;
  left: 35%;
}
.imgbox2 {
  width: 90%;
  left: 5%;
  position: absolute;
}
.Albumimg {
  margin: 15% auto;
}
/* 团队 */
.servicebox1 {
  width: 60%;
  margin: 0 auto;
}
.yuan2 {
  width: 17%;
  height: 17%;
  position: absolute;
  left: 50%;
  margin-left: -7.5%;
  top: 40%;
}

/* 合作 */
.cooperation {
  width: 60%;
  margin: 0 auto;
  height: 13vw;
}
.cooperation ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.cooperation1 {
  width: 25%;
}
.cooperation2 {
  width: 30%;
}
.cooperation3 {
  width: 100%;
}
.cooperationx {
  height: 37vw !important;
}

/* 底部栏 */
.bottom {
  width: 100%;
  background: #31383c;
  padding: 3em 0;
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
</style>
