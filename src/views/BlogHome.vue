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
          data-rss="https://medium.com/feed/retainable"
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

    let recaptchaLink = document.createElement('link')
    recaptchaLink.setAttribute('href', 'https://www.retainable.io/assets/retainable/rss-embed/retainable.css')
    recaptchaLink.setAttribute('rel', "stylesheet")
    document.head.appendChild(recaptchaLink)
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
.read-more {
  margin-bottom: 2rem;
}

.post-title {
  color: $dark-background;
}

.author {
  color: $dark-background;
}

.post-image {
  border-radius: 0 3rem 0 3rem;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
}

figure {
  text-align: center;
  margin: 2rem 0;
}

pre {
  background-color: #fafafa;
  padding: 2rem;
  //margin: 1rem 0;
}

blockquote {
  //margin: 2rem;
  padding: 1rem;
  box-shadow: inset 2px 0 0 0 rgba(41, 41, 41, 1);
  padding-left: 2rem;
}

.rtb-inline {
  color: $dark-background;
  a {
    color: $dark-background;
  }
  h3 {
    margin-top: 3rem;
  }
  p {
    margin: 1rem 0;
  }
  ul {
    list-style-type: disc;
    margin-left: 2rem;
    margin-top: 1rem;
  }
  ol {
    margin-left: 2rem;
    margin-top: 1rem;
  }
  a.pager {
    color: white;
  }
}

.rtb-pagination-container .row a.pager {
  color: white;
  border: 0;
}

.excerpt {
  color: $dark-background;
  p {
    margin: 0.7rem 0;
  }
  a {
    color: $dark-background;
  }
  h3 {
    margin-top: 1rem;
  }
}


/* Desktop Settings */

#blog-section {
  position: relative;
}

.blogs-cards {
  padding-bottom: 2rem;
}

.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.blog {
  display: flex;
  overflow: hidden;
  color: #fff;
  flex-direction: column;
  padding-bottom: 2rem;
  &:hover &-image img {
    transform: scale(1.05);
  }
  &-image {
    height: 200px;
    transform: translateZ(0);
    display: block;
    overflow: hidden;
    //margin-bottom: 1rem;
  }
  &-image img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);
    overflow: hidden;
  }
  &-text {
    line-height: 1;
    text-align: center;
  }
  &-text-title {
    display: block;
    font-size: 1rem;
    padding: 1rem 1rem 0 1rem;
    line-height: 1.5em;
    text-align: justify;
    //margin: 1rem 0 0 0;
  }
  &-text-description {
    font-size: 0.8rem;
    line-height: 1.5em;
    padding: 1rem 1rem 0 1rem;
    text-align: justify;
  }
  &-text-metadata {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  &-text-category {
    text-transform: uppercase;
    font-size: 0.7rem;
    opacity: 0.7;
    margin: 0;
  }
  &-text-published-date {
    font-size: 0.7rem;
    opacity: 0.7;
    margin: 0;
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

@media (max-width: 768px) {
  .blogs {
    grid-template-columns: repeat(2, 1fr);
  }
}


/* Mobile Vertical Settings */

@media (max-width: 500px) {
  #blog-section {
    &::before {
      height: 8rem;
    }
  }
  .blogs {
    display: block;
  }
}
</style>