<script setup>
import NavigateBar from "@/components/navigateBar.vue";
import TheFooter from "@/components/theFooter.vue";
import MemberCardPwn from "@/components/memberCardPwn.vue";



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
            <h3 class="fn_title fn_animated_text" data-wait="1000" data-speed="8">Pwn</h3>
            <p class="fn_desc">
              <a href="index.html">首页</a>
              <span class="separator">/</span>
              <span class="current">Pwn组</span>
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
                <img src="../static/picture/Pwnable.png" alt="">
              </div>
              <div class="content_item">

                <div class="NFTLeo_fn_title" data-align="left">
                  <h3 class="fn_title">Pwn in CTF</h3>
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


          </div>
        </section>
        <!-- !Information Section -->

        <!-- Gurantee section -->
        <section class="gurantee-section">
          <div class="container">
            <!-- Guarantee List -->
            <div class="NFTLeo_fn_title">
              <h3 class="fn_title">Resource</h3>
              <div class="line"><span></span></div>
            </div>

            <div class="NFTLeo_fn_gualist">
              <ul>
                <li>
                  <div class="item">
                    <span class="line"></span>
                    <img src="../static/picture/search-engine.svg" alt="" class="fn__svg">
                    <h3 class="fn_title">CTF training</h3>
                    <p class="fn_desc fn_animated_text">CTFshow……</p>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <span class="line"></span>
                    <img src="../static/picture/management.svg" alt="" class="fn__svg">
                    <h3 class="fn_title">Money</h3>
                    <p class="fn_desc fn_animated_text">????</p>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <span class="line"></span>
                    <img src="../static/picture/padlock.svg" alt="" class="fn__svg">
                    <h3 class="fn_title">Secured & Trusted</h3>
                    <p class="fn_desc fn_animated_text">We developed tools and then participate in competitions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <!-- !Guarantee List -->

          </div>
        </section>
      </div>

      <!-- Team Section -->
      <section id="team">

        <div class="container">

          <!-- Main Title -->
          <div class="NFTLeo_fn_title">
            <h3 class="fn_title">成员介绍</h3>
            <div class="line"><span></span></div>
          </div>
          <!-- !Main Title -->


          <!-- Team List Shortcode -->
          <div class="NFTLeo_fn_team">
            <ul class="team_list">
              <member-card-pwn></member-card-pwn>
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

</template>

<style scoped>

</style>