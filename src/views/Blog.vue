<template>
    <section id="blog-section">
      <div class="nav-bar-spacer"></div>
      <div id="blog-section-content" class="container section-content">
        <h1>Blog</h1>
        <div class="separation-line"></div>
        <p>Some interesting articles</p>
      </div>
      <div class="container blogs-cards" >
        <div class="blogs">
          <div class="blog" v-for="blog in blogs" :key="blog.name">
            <router-link to="/blog/1">
              <div class="blog-image">
                <img src="/img/Card.png" alt="" />
              </div>
              <div class="blog-text">
                <div class="blog-text-wrap">
                  <h2 class="blog-text-title">{{ blog.name }}</h2>
                  <p class="blog-text-description">{{ blog.description }}</p>
                  <div class="blog-text-metadata">
                    <p class="blog-text-published-date">{{ blog.published }}</p>
                    <p class="blog-text-category">{{ blog.category }}</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
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
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020"
            },
            {
              name: "2 Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020"
            },
            {
              name: "3 Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020"
            },
            {
              name: "4 Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020"
            },
            {
              name: "5 Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020"
            },
            {
              name: "6 Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020"
            },
            {
              name: "7 Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../img/card.png",
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
      background: url('/img/Nasa_red.png') no-repeat center 30% /cover;
      position: fixed;
      top:0;
      left:0;
      width:100vw;
      height: 4rem;
      z-index: 17;
      border-bottom: 3px $secondary solid;;

    }
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

  @media (max-width: 768px) {
    .blogs {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    #blog-section {

      &::before{
        height: 8rem;
      }
    }

    .blogs {
      display: block;
    }


  }
</style>