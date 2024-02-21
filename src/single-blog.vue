<script setup>

import TheFooter from "@/components/theFooter.vue";
import NavigateBar from "@/components/navigateBar.vue";
import {ref} from "vue";
import CategoriesWeb from "@/components/CategoriesWeb.vue";
import AuthorCard from "@/components/AuthorCard.vue";
import Comment from "@/components/Comment.vue";
import NearSearchMap from "@/components/NearSearchMap.vue";
import axios from "axios";

const blog_data = ref(
  {
    author: '陈十',
    title: '我们将走向何方',
    time: 20240207,
    content: 'test',
    group: 'Web组'
  }
)

function fetchBlogContent()
{
  let content = ref('');
  // const sqlQuery = 'SELECT content FROM blog_data'
  axios.post("/api/blog_content",
      { author:blog_data.value.author,
    title:blog_data.value.title,
    time:blog_data.value.time,
    group:blog_data.value.group })
      .then(response => {
        console.log(response.data);
        // let the backend show up the content
        // content = 'SELECT content FROM blog_data'
      })
      .catch(error => {
        console.error(error);
      })
}



</script>

<template>
  <div class="NFTLeo_fn_main" data-footer-sticky="">
    <navigate-bar></navigate-bar>
    <!-- Content -->
    <div class="NFTLeo_fn_content">


      <!-- Blog Single Page -->
      <div class="NFTLeo_fn_blog_single NFTLeo_fn_single">

        <!-- Single Background -->
        <div class="single_bg"></div>
        <!-- !Single Background -->


        <!-- Single Content -->
        <div class="single_content">

          <div class="container" id="blog-single-content">

            <div class="NFTLeo_fn_share">
              <h5 class="label">Share:</h5>
              <ul>
                <li><a href="#"><i class="fn-icon-wechat"></i></a></li>
                <li><a href="#"><i class="fn-icon-github"></i></a></li>
                <li><a href="#"><i class="fn-icon-rss"></i></a></li>
              </ul>
            </div>

            <div class="NFTLeo_fn_breadcrumbs">
              <p>
                <a href="index.html">首页</a>
                <span class="separator">/</span>
                <a href="blog.html">Blog</a>
                <span class="separator">/</span>
                <span class="current">  {{ blog_data.group }}</span>
              </p>
            </div>

            <div class="single_img">
              <img src="/src/static/picture/single.jpg" alt="">
            </div>


            <!-- Page With Sidebar -->
            <div class="NFTLeo_fn_wsidebar">

              <!-- Left Sidebar -->
              <div class="sidebar_left">


                <!-- !Mini Items  -->

                <!-- Single Title -->
                <div class="single_title">
                  <h2 class="fn_title">{{ blog_data.title }}</h2>

                </div>
                <!-- !Single Title -->

                <!-- Mini Items  -->
                <div class="NFTLeo_fn_minis">
                  <div class="m_item">
                    <a>{{ blog_data.time }}</a>
                  </div>
                  <div class="m_item">
                    <span>By <a href="/web/shichen">{{ blog_data.author }}</a></span>
                  </div>
                  <div class="m_item">
                    <a>4 Comments</a>
                  </div>
                </div>


                <!-- Single Description -->
                <div class="single_desc">
                  <p> fetchBlogContent.value.content </p>
                </div>
                <!-- !Single Description -->

                <!-- Author Information Box -->
                <author-card></author-card>
                <!-- Author Information Box -->


              </div>
              <!-- !Left Sidebar -->

              <!-- Right Sidebar -->
              <div class="sidebar_right">

                <!-- Widget (Banner) -->
                <div class="widget widget-banner">
                  <img src="/src/static/picture/banner.jpg" alt="">
                </div>
                <!-- !Widget (Banner) -->
              </div>
              <!-- !Right Sidebar -->

            </div>
            <!-- !Page With Sidebar -->

          </div>

          <!-- Previous & Next Box -->
          <near-search-map></near-search-map>
          <!-- !Previous & Next Box -->


          <div class="container" id="comment-section">

            <!-- Page With Sidebar -->
            <div class="NFTLeo_fn_wsidebar">

              <!-- Left Sidebar -->
              <div class="sidebar_left">

                <!-- Comments -->
                <comment></comment>
                <!-- Comments -->

              </div>
              <!-- !Left Sidebar -->

              <!-- Right Sidebar -->
              <div class="sidebar_right">

                <!-- Widget (Top Articles) -->
                <div class="widget widget-articles">
                  <div class="wid-title">
                    <span class="text">{{ blog_data.group }}其他热门文章</span>
                    <span class="icon"></span>
                  </div>

                  <div class="NFTLeo_fn_widget_articles">
                    <ul>
                      <li>
                        <div class="item">
                          <a href="#" class="full_link"></a>
                          <h3 class="fn_title">反序列化</h3>
                          <p class="fn_date">
                            <span class="post_date">June 22, 2021</span>
                            <span class="comment_count">5 Comments</span>
                          </p>
                          <span class="count">1</span>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <a href="#" class="full_link"></a>
                          <h3 class="fn_title">JWT</h3>
                          <p class="fn_date"><span>June 22, 2021</span></p>
                          <span class="count">2</span>
                        </div>
                      </li>
                      <li>
                        <div class="item">
                          <a href="#" class="full_link"></a>
                          <h3 class="fn_title">Node.js</h3>
                          <p class="fn_date"><span>June 22, 2021</span></p>
                          <span class="count">3</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- !Widget (Top Articles) -->

                <!-- !Widget (Custom Categories) -->
                <categories-web></categories-web>
                <!-- !Widget (Custom Categories) -->
              </div>
              <!-- !Right Sidebar -->

            </div>
            <!-- !Page With Sidebar -->

          </div>


        </div>
        <!-- !Single Content -->

      </div>
      <!-- !Blog Single Page -->

      <the-footer></the-footer>
    </div>
    <!-- Content -->
  </div>


</template>

<style scoped>

</style>