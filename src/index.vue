<script setup>
// import NavigateBar from "@/components/navigateBar.vue";
// import Sidebar from "@/components/sidebar.vue";
// import MarkdownIt from "markdown-it";
// import AboutMain from "@/components/aboutMain.vue";

// const md = new MarkdownIt()
import NavigateBar from "@/components/navigateBar.vue";
import TheFooter from "@/components/theFooter.vue";
</script>

<template>
  <div class="NFTLeo_fn_main" data-footer-sticky="">

   <navigate-bar></navigate-bar>


    <!-- Content -->
    <div class="NFTLeo_fn_content">

      <!-- Hero Header -->
      <div class="NFTLeo_fn_hero">

        <!-- Overlay (of hero header) -->
        <div class="bg_overlay">

          <!-- Overlay Color -->
          <div class="bg_color">
          </div>
          <!-- !Overlay Color -->

          <!-- Overlay Image -->
          <div class="bg_image">
            <img src="./img/hero/bg.jpg" alt="背景图">
          </div>
          <!-- !Overlay Image -->

        </div>
        <!-- Overlay (of hero header) -->

        <div class="hero_content">
          <div class="container">
            <div class="content">
              <h2 class="fn_title" title="NFTLeo">Sec</h2>
              <p class="fn_desc fn_animated_text">西北工业大学</p>
              <p class="fn_desc fn_animated_text">网络安全基地</p>
            </div>
          </div>
          <a href="#about" class="NFTLeo_fn_down magic-hover magic-hover__square">
            <span class="text">Scroll Down</span>
            <span class="icon"><img src="./static/picture/right-arr.svg" alt="" class="fn__svg"></span>
          </a>
        </div>



      </div>
      <!-- !Hero Header -->


      <!-- About Section -->
      <section id="about">
        <div class="container">

          <!-- About Item #1 -->
          <div class="NFTLeo_fn_about_item">
            <div class="img_item">
              <img src="./static/picture/1.jpg" alt="">
            </div>
            <div class="content_item">
              <div class="NFTLeo_fn_title" data-align="left">
                <h3 class="fn_title">Web</h3>
                <div class="line"><span></span></div>
              </div>

              <div class="desc">
                <p>Web安全</p>
                <p>test</p>
              </div>

              <div class="buttons">
                <a href="web.html" class="NFTLeo_fn_button">
                  <span class="icon"><img src="./static/picture/github.svg" alt="" class="fn__svg"></span>
                  <span class="text">More</span>
                </a>

              </div>

            </div>
          </div>
          <!-- !About Item #1 -->

          <!-- About Item #2 -->
          <div class="NFTLeo_fn_about_item reverse">
            <div class="img_item">
              <img src="./static/picture/edenTreaty.jpg" alt="">
            </div>
            <div class="content_item">

              <div class="NFTLeo_fn_title" data-align="left">
                <h3 class="fn_title">Re</h3>
                <div class="line"><span></span></div>
              </div>

              <div class="desc">
                <p>逆向工程安全</p>
                <p>test</p>
              </div>

              <div class="buttons">
                <a href="re.html" class="NFTLeo_fn_button">
                  <span class="icon"><img src="./static/picture/github.svg" alt="" class="fn__svg"></span>
                  <span class="text">More</span>
                </a>
              </div>

            </div>
          </div>
          <!-- !About Item #2 -->

          <!-- About Item #3 -->
          <div class="NFTLeo_fn_about_item reverse">
            <div class="img_item">
              <img src="./static/picture/Pwnable.png" alt="">
            </div>
            <div class="content_item">

              <div class="NFTLeo_fn_title" data-align="left">
                <h3 class="fn_title">Pwn</h3>
                <div class="line"><span></span></div>
              </div>

              <div class="desc">
                <p>二进制安全</p>
                <p>test</p>
              </div>

              <div class="buttons">
                <a href="pwn.html" class="NFTLeo_fn_button">
                  <span class="icon"><img src="./static/picture/github.svg" alt="" class="fn__svg"></span>
                  <span class="text">More</span>
                </a>
              </div>

            </div>
          </div>
          <!-- !About Item #3 -->

          <!-- About Item #4 -->
          <div class="NFTLeo_fn_about_item">
            <div class="img_item">
              <img src="./static/picture/single.jpg" alt="">
            </div>
            <div class="content_item">

              <div class="NFTLeo_fn_title" data-align="left">
                <h3 class="fn_title">其他</h3>
                <div class="line"><span></span></div>
              </div>

              <div class="desc">
                <p>其他的一些内容</p>
                <p>test</p>
              </div>

              <div class="buttons">
                <a href="Development.html" class="NFTLeo_fn_button">
                  <span class="icon"><img src="./static/picture/github.svg" alt="" class="fn__svg"></span>
                  <span class="text">More</span>
                </a>

              </div>

            </div>
          </div>
          <!-- !About Item #4 -->

        </div>
      </section>
      <!-- !About Section -->

      <!-- !Services Section -->
      <section>
        <!-- Main Title -->
        <div class="NFTLeo_fn_title">
          <h3 class="fn_title">路线图</h3>
          <div class="line"><span></span></div>
        </div>
        <!-- !Main Title -->

        <!-- Timeline -->
        <div class="NFTLeo_fn_timeline">

          <!-- Timeline Content -->
          <div class="timeline_content">
            <ul class="timeline_list">
              <li class="timeline_item" data-index="1">
                <div class="t_item">
                  <div class="t_item_img">
                    <div class="NFTLeo_fn_gallery_1_2">
                      <div class="gallery_in">
                        <div class="item row2">
                          <img src="./static/picture/edenTreaty.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/origin.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/Noel.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t_item_info">
                    <p class="fn_date"><span>Sept - 2023</span></p>
                    <h3 class="fn_title"><a href="roadmap-single.html">Test</a></h3>
                    <p class="fn_desc">啊？乖乖站好</p>
                    <p class="fn_read">
                      <a href="Sept - 2023.html" class="NFTLeo_fn_button only_text">
                        <span class="text">Read More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline_item" data-index="2">
                <div class="t_item">
                  <div class="t_item_img">
                    <div class="NFTLeo_fn_gallery_1_2">
                      <div class="gallery_in">
                        <div class="item row2">
                          <img src="./static/picture/edenTreaty.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/23.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/32.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t_item_info">
                    <p class="fn_date"><span>Q2 - 2022</span></p>
                    <h3 class="fn_title"><a href="roadmap-single.html">Test</a></h3>
                    <p class="fn_desc">啊？乖乖站好</p>
                    <p class="fn_read">
                      <a href="roadmap-single.html" class="NFTLeo_fn_button only_text">
                        <span class="text">Read More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline_item active" data-index="3">
                <div class="t_item">
                  <div class="t_item_img">
                    <div class="NFTLeo_fn_gallery_1_2">
                      <div class="gallery_in">
                        <div class="item row2">
                          <img src="./static/picture/13.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/24.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/33.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t_item_info">
                    <p class="fn_date"><span>Q3 - 2022</span></p>
                    <h3 class="fn_title"><a href="roadmap-single.html">Test</a></h3>
                    <p class="fn_desc">啊？乖乖站好</p>
                    <p class="fn_read">
                      <a href="roadmap-single.html" class="NFTLeo_fn_button only_text">
                        <span class="text">Read More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline_item" data-index="4">
                <div class="t_item">
                  <div class="t_item_img">
                    <div class="NFTLeo_fn_gallery_1_2">
                      <div class="gallery_in">
                        <div class="item row2">
                          <img src="./static/picture/14.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/3.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/34.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t_item_info">
                    <p class="fn_date"><span>Q4 - 2022</span></p>
                    <h3 class="fn_title"><a href="roadmap-single.html">Test</a></h3>
                    <p class="fn_desc">啊？乖乖站好</p>
                    <p class="fn_read">
                      <a href="roadmap-single.html" class="NFTLeo_fn_button only_text">
                        <span class="text">Read More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline_item" data-index="5">
                <div class="t_item">
                  <div class="t_item_img">
                    <div class="NFTLeo_fn_gallery_1_2">
                      <div class="gallery_in">
                        <div class="item row2">
                          <img src="./static/picture/17.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/25.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/35.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t_item_info">
                    <p class="fn_date"><span>Q1 - 2023</span></p>
                    <h3 class="fn_title"><a href="roadmap-single.html">Meta Verse</a></h3>
                    <p class="fn_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p class="fn_read">
                      <a href="roadmap-single.html" class="NFTLeo_fn_button only_text">
                        <span class="text">Read More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline_item" data-index="6">
                <div class="t_item">
                  <div class="t_item_img">
                    <div class="NFTLeo_fn_gallery_1_2">
                      <div class="gallery_in">
                        <div class="item row2">
                          <img src="./static/picture/19.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/19.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/19.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t_item_info">
                    <p class="fn_date"><span>June 23, 2022</span></p>
                    <h3 class="fn_title"><a href="roadmap-single.html">New Haircut Collection #01 is Coming Up</a></h3>
                    <p class="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                    <p class="fn_read">
                      <a href="roadmap-single.html" class="NFTLeo_fn_button only_text">
                        <span class="text">Read More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline_item" data-index="7">
                <div class="t_item">
                  <div class="t_item_img">
                    <div class="NFTLeo_fn_gallery_1_2">
                      <div class="gallery_in">
                        <div class="item row2">
                          <img src="./static/picture/19.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/19.jpg" alt="">
                        </div>
                        <div class="item">
                          <img src="./static/picture/19.jpg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="t_item_info">
                    <p class="fn_date"><span>July 01, 2022</span></p>
                    <h3 class="fn_title"><a href="roadmap-single.html">New Haircut Collection #02 is Coming Up</a></h3>
                    <p class="fn_desc">Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.</p>
                    <p class="fn_read">
                      <a href="roadmap-single.html" class="NFTLeo_fn_button only_text">
                        <span class="text">Read More</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- !Timeline Content -->

          <!-- Timeline Progress -->
          <div class="timeline_progress">

            <!-- Nav -->
            <a href="#" class="nav_prev"><img src="./static/picture/right-arr.svg" alt="" class="fn__svg"></a>
            <a href="#" class="nav_next"><img src="./static/picture/right-arr.svg" alt="" class="fn__svg"></a>
            <!-- !Nav -->

            <div class="progress_line_wrapper">
              <div class="progress_line">
                <ul>
                  <li data-index="1">
                    <a href="Sept - 2023.html">
                      <span class="text">Sept - 2023</span>
                      <span class="circle"></span>
                    </a>
                  </li>
                  <li data-index="2">
                    <a href="#">
                      <span class="text">Oct - 2023</span>
                      <span class="circle"></span>
                    </a>
                  </li>
                  <li class="active" data-index="3">
                    <a href="#">
                      <span class="text">Nov - 2023</span>
                      <span class="circle"></span>
                    </a>
                  </li>
                  <li data-index="4">
                    <a href="#">
                      <span class="text">Oct - 2023</span>
                      <span class="circle"></span>
                    </a>
                  </li>
                  <li data-index="5">
                    <a href="#">
                      <span class="text">Dec - 2023</span>
                      <span class="circle"></span>
                    </a>
                  </li>
                  <li data-index="6">
                    <a href="#">
                      <span class="text">Jan, 2024</span>
                      <span class="circle"></span>
                    </a>
                  </li>
                  <li data-index="7">
                    <a href="#">
                      <span class="text">Feb, 2024</span>
                      <span class="circle"></span>
                    </a>
                  </li>
                </ul>
                <span class="active_line"></span>
              </div>
            </div>
          </div>
          <!-- !Timeline Progress -->

        </div>
      </section>
      <!-- !Timeline -->


      <!-- !Drops Section -->


      <!-- Investor Section -->
      <section id="investor">

        <!-- Dividers -->
        <img src="./static/picture/divider.svg" alt="" class="fn__svg fn__divider top_divider">
        <img src="./static/picture/divider.svg" alt="" class="fn__svg fn__divider bottom_divider">
        <!-- !Dividers -->

        <div class="container">

          <!-- Main Title -->
          <div class="NFTLeo_fn_title">
            <h3 class="fn_title">学习资源</h3>
            <div class="line"><span></span></div>
          </div>
          <!-- !Main Title -->

          <!-- Investor List Shortcode -->
          <div class="NFTLeo_fn_investor">
            <ul>
              <li>
                <div class="item">
                  <img src="./static/picture/ctfshow.png" alt="">
                  <a href="https://ctf.show/challenges" class="full_link"></a>
                </div>
              </li>
              <li>
                <div class="item">
                  <img src="./static/picture/buuctf.png" alt="">
                  <a href="https://buuoj.cn/challenges" class="full_link"></a>
                </div>
              </li>
              <li>
                <div class="item">
                  <img src="./static/picture/polarctf.png" alt="">
                  <a href="https://polarctf.com/#/page/challenges" class="full_link"></a>
                </div>
              </li>
              <li>
                <div class="item">
                  <img src="./static/picture/bilibili.png" alt="">
                  <a href="https://www.bilibili.com" class="full_link"></a>
                </div>
              </li>

            </ul>
          </div>
          <!-- !Investor List Shortcode -->

        </div>
      </section>
      <!-- !Investor Section -->



      <!-- Blog Section -->
      <section id="blog">
        <div class="container">

          <!-- Main Title -->
          <div class="NFTLeo_fn_title">
            <h3 class="fn_title">最新文章</h3>
            <div class="line"><span></span></div>
          </div>
          <!-- !Main Title -->


          <!-- Moving Blog List Shortcode -->
          <div class="NFTLeo_fn_moving_blog">
            <ul>
              <li>
                <div class="items">
                  <img src="./static/picture/110.jpg" alt="" class="blog-alt-img">
                  <p class="fn_date">
                    <span>Feb 01, 2023</span>
                  </p>
                  <h3 class="fn_title">
                    <a href="single-blog.html">Find modern art on NFT platform</a>
                  </h3>
                  <p class="fn_desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                  <p class="fn_read">
                    <a href="single-blog.html" class="NFTLeo_fn_button only_text">
                      <span class="text">Read More</span>
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div class="items">
                  <img src="./static/picture/26.jpg" alt="" class="blog-alt-img">
                  <p class="fn_date">
                    <span>March 23, 2023</span>
                  </p>
                  <h3 class="fn_title">
                    <a href="single-blog.html">Introducing NFT Security Group</a>
                  </h3>
                  <p class="fn_desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                  <p class="fn_read">
                    <a href="single-blog.html" class="NFTLeo_fn_button only_text">
                      <span class="text">Read More</span>
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div class="items">
                  <img src="./static/picture/36.jpg" alt="" class="blog-alt-img">
                  <p class="fn_date">
                    <span>April 13, 2023</span>
                  </p>
                  <h3 class="fn_title">
                    <a href="single-blog.html">Trending NFTs: Herman Backle</a>
                  </h3>
                  <p class="fn_desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                  <p class="fn_read">
                    <a href="single-blog.html" class="NFTLeo_fn_button only_text">
                      <span class="text">Read More</span>
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <!-- !Moving Blog List Shortcode -->


        </div>
      </section>
      <!-- !Blog Section -->

    </div>
    <!-- Content -->

    <the-footer></the-footer>
    <!-- Video Shortcode -->
    <div class="NFTLeo_fn_video">
      <div class="bg_overlay">
        <div class="bg_image" data-bg-img="./img/hero/bg.jpg"></div>
        <div class="bg_color"></div>
      </div>
      <div class="v_content">
        <div>
          <audio src="./static/music/DSP_BGM15_Leo.ogg" autoplay loop></audio>
        </div>
      </div>

    </div>
    <!-- !Video Shortcode -->

  </div>

<!-- music -->

<!-- music -->
</template>

<style scoped>

</style>
