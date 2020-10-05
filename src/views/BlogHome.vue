<template>
  <section id="blog-section">
    <div id="blog-hero" class="hero container">
      <div class="hero-content">
        <div class="nav-bar-spacer"></div>
        <header id="blog-section-content" class="container section-content">
          <h1>My Blogs</h1>
          <div class="separation-line"></div>
          <p>Blog pages under construction.</p>
        </header>
        <section id="retainable-rss-embed"
          data-rss="https://medium.com/feed/MarketaInce"
          data-maxcols="10"
          data-layout="grid"
          data-poststyle="inline"
          data-readmore="Read the rest"
          data-buttonclass="btn"
          data-offset="-100"></section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog.vue",
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.retainable.io/assets/retainable/rss-embed/retainable.js')
    document.head.appendChild(recaptchaScript)

    // let recaptchaLink = document.createElement('link')
    // recaptchaLink.setAttribute('href', 'https://www.retainable.io/assets/retainable/rss-embed/retainable.css')
    // recaptchaLink.setAttribute('rel', "stylesheet")
    // document.head.appendChild(recaptchaLink)
  },
  data() {
    return {
      blogs: []
    }
  }
}
</script>

<style lang="scss">
@import "./src/scss/_variables.scss";
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.4s;
  transition: opacity 0.4s
}

div[data-v-6ad3d82e] {
  color: black;
  box-sizing: border-box;
  &.row {
    display: flex;
    justify-content: space-around;
    flex-shrink: 0;
    flex-wrap: wrap;
    a {
      color: black;
    }
  }
  &.col-sm-6 {
    width: 400px;
    height: 500px;
    overflow: hidden;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
    border-radius: 3rem;
    position: relative;
    transition: all 750ms cubic-bezier(0.2, 1, 0.3, 1);
    margin-bottom: 2rem;
    .post-date {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1.5rem;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 0 0 3rem 0;
      color: $primary;
      font-weight: bold;
    }
    .post-image {
      width: 100%;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      overflow: auto;
      display: block;
      height: 250px;
    }
    .post-title {
      padding: 1.5rem;
      display: block;
      text-align: center;
      transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);
    }
    .author {
      padding-left: 1rem;
    }
    .excerpt {
      padding: 1.5rem 1.5rem 0 1.5rem;
    }
    .read-more {
      position: static;
      // width:auto;
      // height:auto;
      .btn {
        position: absolute;
        bottom: 0;
        right: 0;
        color: white;
        border-radius: 3rem 0 0 0;
        font-weight: bold;
        background-color: rgba(182, 8, 41, 0.8)
      }
    }
    &:hover {
      box-shadow: 0 5px 5px 5px rgba(182, 8, 41, 0.5), 0 0 0 1px #E6ECF8;
      .post-title {
        transform: scale(1.1)
      }
    }
  }
}

#post-container {
  color: black;
  position: relative;
  // padding: 0 8rem;
  max-width: 800px;
  margin: auto;
  padding: 0 0.5rem;
  font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif;
  a {
    color: black;
  }
  .rtb-close {
    color: $primary;
    font-weight: bold;
    width: 3rem;
    height: 3rem;
    // display:block;
    border: 1px solid $primary;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    font-family: $main-font-family;
    span {
      display: block;
      margin: auto;
    }
  }
  h1 {
    font-size: 3rem;
    padding: 2rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: 2.5rem;
    &.post-author {
      font-size: 1rem;
      color: $dark-background;
      font-family: $main-font-family;
    }
    a {
      text-decoration: underline;
      color: $dark-background;
    }
  }
  figure {
    margin-top: 2.5rem;
    max-height: 500px;
    overflow: hidden;
    img {
      width: 100%;
    }
    figcaption {
      color: $dark-background;
      font-family: $main-font-family;
      text-align: center;
    }
  }
  blockquote {
    margin-top: 2.5rem;
    margin-left: -1rem;
    padding-left: 23px;
    font-size: 1.5rem;
    box-shadow: inset 3px 0 0 0 rgba(41, 41, 41, 1);
    font-style: italic;
    letter-spacing: -0.003em;
    line-height: 2rem;
    strong {
      font-weight: 700;
    }
  }
  pre {
    margin-top: 2.5rem;
    background: rgba(242, 242, 242, 1);
    padding: 1.5rem;
    // overflow-x: auto;
    word-break: break-word;
    font-family: Menlo, Monaco, "Courier New", Courier, monospace;
    white-space: pre-wrap;
    font-size: 1rem;
    span {
      word-break: break-word;
    }
  }
  ul {
    list-style-type: disc;
    padding-inline-start: 40px;
    font-size: 1.5rem;
    margin-top: 1rem;
    li {
      margin-top: 1.5rem;
    }
  }
  .rtb-pagination-container {
    .row {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: $main-font-family;
      margin-top: 1rem;
      div {
        width: 400px;
        display: flex;
        justify-content: space-around;
        // background: black;
        margin-bottom: 1rem;
        &.source-link {
          a {
            background-color: #7f7f7f;
            &:hover {
              background-color: #282828;
            }
          }
        }
      }
      a {
        // display: inline-block;
        padding: 10px 30px;
        color: #fff;
        background-color: $contrast-dark;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        outline: 0;
        font-weight: 700;
        &:hover {
          background-color: #147484;
        }
        &.newer {
          background-color: #FEC601;
          &:hover {
            background-color: #d3a400;
          }
        }
        &.older {
          background-color: #157145;
          &:hover {
            background-color: #0c442a;
          }
        }
      }
    }
  }
}


/* Desktop Settings <= 1400px */

@media (max-width: 1400px) {}


/* Tablet Vertical Settings <= 1024px  --- ex. iPad Pro */

@media (max-width: 1024px) {}


/* Tablet Vertical Settings <= 900px */

@media (max-width: 900px) {}


/* Tablet Vertical Settings <= 768px --- ex. iPad */

@media (max-width: 768px) {}


/* Mobile Horizontal Settings <= 500px --- ex. Pixel 2 */

@media (max-width: 750px) and (max-height: 500px) {}


/* Mobile Horizontal Settings <= 300px --- ex. Galaxy Fold */

@media (max-width: 700px) and (max-height: 300px) {}


/* Mobile Horizontal Settings <= 400px --- ex. iPhone 6 */

@media (max-width: 680px) and (max-height: 400px) {}


/* Mobile Vertical Settings <= 500px --- ex. Pixel 2 */

@media (max-width: 500px) {}


/* Mobile Vertical Settings <= 400px --- ex. iPhone 6 */

@media (max-width: 400px) {}


/* Mobile Vertical Settings <= 300px --- ex. Galaxy Fold */

@media (max-width: 300px) {}


/* Tablet Vertical Settings */

@media (max-width: 768px) {}


/* Mobile Vertical Settings */

@media (max-width: 500px) {}
</style>