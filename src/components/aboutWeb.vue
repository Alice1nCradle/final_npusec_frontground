<script setup>
import NavigateBar from "@/components/navigateBar.vue";
import Sidebar from "@/components/sidebar.vue";
import BlogPost from "@/components/blogPost.vue";
import {ref} from "vue";
import TheFooter from "@/components/theFooter.vue";
import MemberCard from "@/components/memberCard.vue";

const webMembers = ref([
  {
    id : 1,
    name : "高思平",
    content : "Test",
    group:　'Web',
    link: "/web/sipinggao"
  },
  {
    id : 2,
    name : "陈十",
    content : "test",
    group:　'Web',
    link: "/web/shichen"
  },
  {
    id : 3,
    name : "郑传礼",
    content : "test",
    group:　'Web',
    link: "/web/chuanlizheng"
  },
  {
    id : 4,
    name : "郑植",
    content : "test",
    group:　'Web',
    link: "/web/zhizheng"
  }
])

</script>

<template>
  <!-- Main -->
  <div class="NFTLeo_fn_main" data-footer-sticky="">


    <navigate-bar></navigate-bar>


    <!-- Content -->
    <div class="NFTLeo_fn_content">


      <!-- Page Title -->
      <div class="NFTLeo_fn_pagetitle">
        <div class="bg_overlay">
          <div class="bg_color"></div>
          <div class="bg_image" data-bg-img="img/hero/bg.jpg"></div>
        </div>
        <div class="pt_content">
          <div class="container">
            <h3 class="fn_title fn_animated_text" data-wait="1000" data-speed="8">Web</h3>
            <p class="fn_desc">
              <a href="index.html">首页</a>
              <span class="separator">/</span>
              <span class="current">Web组</span>
            </p>
          </div>
        </div>
      </div>
      <!-- !Page Title -->

      <!-- About Page -->
      <div class="NFTLeo_fn_aboutpage">


        <!-- Information Section -->
        <section id="information">
          <div class="container">


            <!-- About Item #1 -->
            <div class="NFTLeo_fn_about_item">
              <div class="img_item">
                <img src="../static/picture/1.jpg" alt="">
              </div>
              <div class="content_item">

                <div class="NFTLeo_fn_title" data-align="left">
                  <h3 class="fn_title">Web in CTF</h3>
                  <div class="line"><span></span></div>
                </div>

                <div class="desc">
                  <p>TEST.</p>
                </div>

                <div class="buttons">
                  <a href="#" class="NFTLeo_fn_button">
                    <span class="icon"><img src="../static/picture/opensea.svg" alt="" class="fn__svg"></span>
                    <span class="text">Wechat</span>
                  </a>

                </div>

              </div>
            </div>
            <!-- !About Item #1 -->

            <!-- About Item #2 -->
            <div class="NFTLeo_fn_about_item reverse">
              <div class="img_item">
                <img src="../static/picture/1.jpg" alt="">
              </div>
              <div class="content_item">

                <div class="NFTLeo_fn_title" data-align="left">
                  <h3 class="fn_title">渗透测试</h3>
                  <div class="line"><span></span></div>
                </div>

                <div class="desc">
                  <p>TEST.</p>
                </div>

                <div class="buttons">
                  <a href="#" class="NFTLeo_fn_button">
                    <span class="icon"><img src="../static/picture/opensea.svg" alt="" class="fn__svg"></span>
                    <span class="text">Wechat</span>
                  </a>

                </div>

              </div>
            </div>
            <!-- !About Item #2 -->

          </div></section>
        <!-- !Information Section -->

        <!-- Gurantee section -->
        <section class="gurantee-section">
          <div class="container">
            <!-- Guarantee List -->
            <div class="NFTLeo_fn_title">
              <h3 class="fn_title">Why choose us?</h3>
              <div class="line"><span></span></div>
            </div>

            <div class="NFTLeo_fn_gualist">
              <ul>
                <li>
                  <div class="item">
                    <span class="line"></span>
                    <img src="../static/picture/search-engine.svg" alt="" class="fn__svg">
                    <h3 class="fn_title">High Quality</h3>
                    <p class="fn_desc fn_animated_text">The NftLeos’s collection includes dozens of rare costumes ands colorways of artist's.</p>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <span class="line"></span>
                    <img src="../static/picture/management.svg" alt="" class="fn__svg">
                    <h3 class="fn_title">Top Resources</h3>
                    <p class="fn_desc fn_animated_text">Tasty design resources made with care for each pixel. NFTs and game resources.</p>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <span class="line"></span>
                    <img src="../static/picture/padlock.svg" alt="" class="fn__svg">
                    <h3 class="fn_title">Secured & Trusted</h3>
                    <p class="fn_desc fn_animated_text">A collection of 990 unique NftLeo built to go beyond the digital space.</p>
                  </div>
                </li>
              </ul>
            </div>
            <!-- !Guarantee List -->

          </div>
        </section></div>



      <!-- Video Section -->
      <section id="video">
        <!-- Video Shortcode -->
        <div class="NFTLeo_fn_video">
          <div class="bg_overlay">
            <div class="bg_image" data-bg-img="img/hero/bg.jpg"></div>
            <div class="bg_color"></div>
          </div>
          <div class="v_content">
            <div>
              <audio src="../../NPUSEC-frontend/static/music/DSP_BGM15_Leo.ogg"></audio>
            </div>
          </div>
        </div>
        <!-- !Video Shortcode -->


      </section>
      <!-- !Video Section -->


      <!-- Team Section -->
      <section id="team">

        <div class="container">

          <!-- Main Title -->
          <div class="NFTLeo_fn_title">
            <h3 class="fn_title">成员介绍</h3>
            <div class="line"><span></span></div>
          </div>
          <!-- !Main Title -->

          <div class="mw_650 fn_description">
            <p class="fn_desc fn_animated_text">这里的人都是Web组的。</p>
          </div>


          <!-- Team List Shortcode -->
          <div class="NFTLeo_fn_team">
            <ul class="team_list">

              <li class="team_item">
                <div class="t_item">
                  <member-card></member-card>
                </div>
              </li>

              <li class="team_item">
                <div class="t_item">
                  <div class="person_info">
                    <div class="img_holder">
                      <img src="../static/picture/27.jpg" alt="">
                    </div>
                    <div class="title_holder">
                      <h3 class="fn_title">Shey Hike</h3>
                      <p class="fn_desc">Visualizer</p>
                    </div>
                  </div>
                  <div class="person_social">
                    <ul>
                      <li><a href="#"><i class="fn-icon-twitter"></i></a></li>
                      <li><a href="#"><i class="fn-icon-facebook"></i></a></li>
                      <li><a href="#"><i class="fn-icon-instagram"></i></a></li>
                      <li><a href="#"><i class="fn-icon-pinterest"></i></a></li>
                      <li><a href="#"><i class="fn-icon-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="team_item">
                <div class="t_item">
                  <div class="person_info">
                    <div class="img_holder">
                      <img src="../static/picture/37.jpg" alt="">
                    </div>
                    <div class="title_holder">
                      <h3 class="fn_title">Paul Smith</h3>
                      <p class="fn_desc">Motion Artist</p>
                    </div>
                  </div>
                  <div class="person_social">
                    <ul>
                      <li><a href="#"><i class="fn-icon-twitter"></i></a></li>
                      <li><a href="#"><i class="fn-icon-facebook"></i></a></li>
                      <li><a href="#"><i class="fn-icon-instagram"></i></a></li>
                      <li><a href="#"><i class="fn-icon-pinterest"></i></a></li>
                      <li><a href="#"><i class="fn-icon-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="team_item">
                <div class="t_item">
                  <div class="person_info">
                    <div class="img_holder">
                      <img src="../static/picture/41.jpg" alt="">
                    </div>
                    <div class="title_holder">
                      <h3 class="fn_title">Nick Phillip</h3>
                      <p class="fn_desc">3D Artist</p>
                    </div>
                  </div>
                  <div class="person_social">
                    <ul>
                      <li><a href="#"><i class="fn-icon-twitter"></i></a></li>
                      <li><a href="#"><i class="fn-icon-facebook"></i></a></li>
                      <li><a href="#"><i class="fn-icon-instagram"></i></a></li>
                      <li><a href="#"><i class="fn-icon-pinterest"></i></a></li>
                      <li><a href="#"><i class="fn-icon-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="team_item">
                <div class="t_item">
                  <div class="person_info">
                    <div class="img_holder">
                      <img src="../static/picture/51.jpg" alt="">
                    </div>
                    <div class="title_holder">
                      <h3 class="fn_title">Liana Phill</h3>
                      <p class="fn_desc">Artist</p>
                    </div>
                  </div>
                  <div class="person_social">
                    <ul>
                      <li><a href="#"><i class="fn-icon-twitter"></i></a></li>
                      <li><a href="#"><i class="fn-icon-facebook"></i></a></li>
                      <li><a href="#"><i class="fn-icon-instagram"></i></a></li>
                      <li><a href="#"><i class="fn-icon-pinterest"></i></a></li>
                      <li><a href="#"><i class="fn-icon-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="team_item">
                <div class="t_item">
                  <div class="person_info">
                    <div class="img_holder">
                      <img src="../static/picture/61.jpg" alt="">
                    </div>
                    <div class="title_holder">
                      <h3 class="fn_title">Bras Gonjalwes</h3>
                      <p class="fn_desc">Visualizer Artist</p>
                    </div>
                  </div>
                  <div class="person_social">
                    <ul>
                      <li><a href="#"><i class="fn-icon-twitter"></i></a></li>
                      <li><a href="#"><i class="fn-icon-facebook"></i></a></li>
                      <li><a href="#"><i class="fn-icon-instagram"></i></a></li>
                      <li><a href="#"><i class="fn-icon-pinterest"></i></a></li>
                      <li><a href="#"><i class="fn-icon-behance"></i></a></li>
                    </ul>
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <!-- !Team List Shortcode -->


        </div>

      </section>
      <!-- !Team Section -->



    </div>
    <!-- !About Page -->


  </div>
  <!-- Content -->

<the-footer></the-footer>

</template>

<style scoped>

</style>