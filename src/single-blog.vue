<script setup>

import TheFooter from "@/components/theFooter.vue";
import NavigateBar from "@/components/navigateBar.vue";
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
                <a href="blog.html">博客主页</a>
                <span class="separator">/</span>
                <span class="current">Web组</span>
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
                  <h2 class="fn_title">我们将走向何方？</h2>

                </div>
                <!-- !Single Title -->

                <!-- Mini Items  -->
                <div class="NFTLeo_fn_minis">
                  <div class="m_item">
                    <a href="/blogs/20240401">April 01, 2024</a>
                  </div>
                  <div class="m_item">
                    <span>By <a href="/web/shichen">陈十</a></span>
                  </div>
                  <div class="m_item">
                    <a>4 Comments</a>
                  </div>
                </div>


                <!-- Single Description -->
                <div class="single_desc">
                  <p>Test.</p>
                </div>
                <!-- !Single Description -->

                <!-- Author Information Box -->
                <div class="NFTLeo_fn_author_info">
                  <div class="info_img">
                    <img src="/src/static/picture/61.jpg" alt="">
                  </div>
                  <div class="info_desc">
                    <h3 class="fn_title">陈十</h3>
                    <p class="fn_desc">我所热爱的，便是我的生活。</p>
                    <ul class="social">
                      <li><a href="#"><i class="fn-icon-wechat"></i></a></li>
                      <li><a href="#"><i class="fn-icon-github"></i></a></li>
                      <li><a href="#"><i class="fn-icon-rss"></i></a></li>
                    </ul>
                  </div>
                </div>
                <!-- !Author Information Box -->


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
          <div class="NFTLeo_fn_pnb">
            <div class="container">
              <div class="pnb_wrapper">

                <div class="prev item">
                  <a href="#" class="full_link"></a>
                  <div class="item_in">
                    <div class="img" data-bg-img="img/blog/1.jpg"></div>
                    <div class="desc">
                      <p class="fn_desc">上一篇文章</p>
                      <h3 class="fn_title">全力以赴！</h3>
                    </div>
                  </div>
                </div>

                <div class="trigger">
                  <a href="blog.html" class="full_link"></a>
                  <div class="icon">
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                    <span></span><span></span><span></span><span></span>
                  </div>
                </div>

                <div class="next item">
                  <a href="#" class="full_link"></a>
                  <div class="item_in">
                    <div class="img" data-bg-img="img/blog/3.jpg"></div>
                    <div class="desc">
                      <p class="fn_desc">下一篇文章</p>
                      <h3 class="fn_title">
                        为美好的网络安全事业献上祝福！</h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <!-- !Previous & Next Box -->


          <div class="container" id="comment-section">

            <!-- Page With Sidebar -->
            <div class="NFTLeo_fn_wsidebar">

              <!-- Left Sidebar -->
              <div class="sidebar_left">

                <!-- Comments -->
                <div class="NFTLeo_fn_comments">

                  <div class="comment-title">
                    <h3 class="fn_title">3 Comments</h3>
                  </div>

                  <div class="comment-list">
                    <ul class="list">
                      <li class="comment">
                        <div class="comment-body">
                          <div class="comment-avatar">
                            <img src="/src/static/picture/comment-author1.jpg" alt="">
                          </div>
                          <div class="comment-text-wrap">
                            <div class="comment-data">
                              <h3 class="author">Mion</h3>
                              <p class="date">April 9, 2023 at 9:03 pm</p>
                            </div>
                            <div class="comment-text">
                              <div class="desc">
                                <p>迎面起来的你让我如此蠢蠢欲动。</p>
                              </div>
                              <div class="fn_reply">
                                <a href="#" class="reply">

                                  <span>回复</span>
                                </a>
                                <a href="#" class="edit">编辑</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="comment">
                        <div class="comment-body">
                          <div class="comment-avatar">
                            <img src="/src/static/picture/comment-author2.jpg" alt="">
                          </div>
                          <div class="comment-text-wrap">
                            <div class="comment-data">
                              <h3 class="author">陈驰</h3>
                              <p class="date">May 9, 2023 at 9:03 pm</p>
                            </div>
                            <div class="comment-text">
                              <div class="desc">
                                <p>狗熊岭仙人</p>
                              </div>
                              <div class="fn_reply">
                                <a href="#" class="reply">

                                  <span>回复</span>
                                </a>
                                <a href="#" class="edit">编辑</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="comment">
                        <div class="comment-body">
                          <div class="comment-avatar">
                            <img src="/src/static/picture/comment-author3.jpg" alt="">
                          </div>
                          <div class="comment-text-wrap">
                            <div class="comment-data">
                              <h3 class="author">陈十</h3>
                              <p class="date">May 9, 2023 at 9:03 pm</p>
                            </div>
                            <div class="comment-text">
                              <div class="desc">
                                <p>all of these bullshit are fake news.</p>
                              </div>
                              <div class="fn_reply">
                                <a href="#" class="reply">

                                  <span>回复</span>
                                </a>
                                <a href="#" class="edit">编辑</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="comment-respond">
                    <div class="respond-title">
                      <h3 class="fn_title">评论 (支持Markdown)</h3>
                    </div>
                    <div class="respond-log">
                      <p><a href="/login.html">登录</a>
                        <a href="/register.html">注册</a>
                      </p>
                    </div>
                    <form class="comment-form">
                      <ul class="input-items">
                        <li class="input-item">
                          <div class="input_item">
                            <textarea name="comment" placeholder="下方查看Markdown渲染结果"></textarea>
                          </div>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                      <a href="#" class="NFTLeo_fn_button only_text">
                        <span class="text">发表评论</span>
                      </a>
                    </form>
                  </div>

                </div>
                <!-- Comments -->

              </div>
              <!-- !Left Sidebar -->

              <!-- Right Sidebar -->
              <div class="sidebar_right">

                <!-- Widget (Top Articles) -->
                <div class="widget widget-articles">
                  <div class="wid-title">
                    <span class="text">其他热门文章</span>
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

                <!-- Widget (Custom Categories) -->
                <div class="widget widget-custom-categories">
                  <div class="wid-title">
                    <span class="text">Categories</span>
                    <span class="icon"></span>
                  </div>
                  <div class="NFTLeo_fn_categories" data-more="Show More" data-less="Show Less" data-count="4">
                    <ul>
                      <li><a href="#">命令执行</a><span class="count">77</span></li>
                      <li><a href="#">爆破</a><span class="count">48</span></li>
                      <li><a href="#">XSS</a><span class="count">31</span></li>
                      <li><a href="#">反序列化</a><span class="count">29</span></li>
                      <li><a href="#">Java</a><span class="count">33</span></li>
                      <li><a href="#">SQL注入</a><span class="count">24</span></li>
                      <li><a href="#">文件包含</a><span class="count">53</span></li>
                      <li><a href="#">文件上传</a><span class="count">42</span></li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
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