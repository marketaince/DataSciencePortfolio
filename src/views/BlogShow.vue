<template>
    <section id="blog-section">
      <div class="nav-bar-spacer"></div>
      <div id="blog-section-content" class="container section-content">
        <h1>Blog</h1>
        <div class="separation-line"></div>
        <p>Some interesting articles.</p>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Blog.vue",
        data () {
        return {
          blogs: [
            {
              name: "Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../assets/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020"
            }
          ]
        }
        }
    }
</script>

<style lang="scss">
    @import "./src/scss/_variables.scss";

  #blog-section {

    position: relative;

    &::before{
      content:'';
      background: url('../assets/nasa_red.png') no-repeat center 30% /cover;
      position: fixed;
      top:0;
      left:0;
      width:100vw;
      height: 4rem;
      z-index: 1;
      border-bottom: 3px $secondary solid;;

    }
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

  &:hover &-image img {
    transform: scale(1.05);
  }

  &-image {
    height:200px;
    transform: translateZ(0);
    display: block;

    overflow:hidden;
    //margin-bottom: 1rem;
  }

  &-image img {
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
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

  &-text-metadata{
    display:flex;
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
</style>