<template>
    <section id="project-section">
      <div class="nav-bar-spacer"></div>
      <div id="project-section-content" class="container section-content">
        <h1>My Projects</h1>
        <div class="separation-line"></div>
          <p>Check Some of My Projects Below.</p>
        <div class="projects-cards" >
            <div class="cards">
              <div class="card" v-for="project in projects" :key="project.name">
                <div class="card-image">
                  <img src="../assets/card.png" alt="" />
                </div>
                <div class="card-text">
                  <div class="card-text-wrap">
                    <p class="card-text-category">{{ project.category }}</p>
                    <h2 class="card-text-title">{{ project.name }}</h2>
                    <p class="card-text-description">{{ project.description }}</p>
                    <div class="card-text-buttons">
                      <a :href="project.demo_link" target="_blank"><img src="../assets/icons/Trial.png"/></a>
                      <a :href="project.blog_link" target="_blank"><img src="../assets/icons/Blog.png"/></a>
                      <a :href="project.github_link" target="_blank"><img src="../assets/icons/GitHubs.png"/></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
      name: "Projects.vue",
      data () {
        return {
          projects: [
            {
              name: "Dog App",
              category: "Data Science",
              background: "../assets/card.png",
              description: "Simple application to recognize dog breeds using Convolutional Neural Network architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git"
            },
            {
              name: "Dog App",
              category: "Data Science",
              background: "../assets/card.png",
              description: "Simple application to recognize dog breeds using Convolutional Neural Network architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git"
            },
            {
              name: "Dog App",
              category: "Data Science",
              background: "../assets/card.png",
              description: "Simple application to recognize dog breeds using Convolutional Neural Network architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git"
            },
            {
              name: "Dog App",
              category: "Data Science",
              background: "../assets/card.png",
              description: "Simple application to recognize dog breeds using Convolutional Neural Network architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git"
            }

          ],
        }
      }
    }
</script>

<style lang="scss">
    @import "./src/scss/_variables.scss";

  #project-section {

    //height: 100vh;
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


  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    grid-gap: 1rem;
  }

  .card {
  position: relative;
  background: $secondary;
  overflow: hidden;
    height:600px;

  &::after {
    content: "";
    position: absolute;
    display: block;
    background: inherit;
    opacity: 0.9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(2) translateX(0) translateY(100%) rotate(-10deg);
    transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1);
  }

  // Bring in main color overlay
  &:hover:after {
    transform: scale(2) translateX(0) translateY(40%) rotate(-10deg);
  }

  // Scale image on hover

  &:hover &-image {
    transform: scale(1.2);
  }

  // Bring in text on hover

  &:hover &-text {
    opacity: 1;
    transform: translateY(0);
  }


  &-image {
    height: auto;
    transform: translateZ(0);
    display: block;
    transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);
  }

  &-image:before {
    content: "";
    display: block;
    padding-top: 75%;
    overflow: hidden;
  }

  &-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    line-height: 0;
  }

  &-text {
    position: absolute;
    //top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    text-align: center;
    z-index: 1;
    color: #fff;
    transform: translateY(-100%);
    transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1),
      transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
    transition-delay: 300ms;

    p {
      padding: 0 2rem;
      margin: 1rem 0;
    }
  }

  &-text-wrap {
    position: absolute;
    width: 100%;
    bottom: 0;
    /*transform: translateY(50%);*/
    /*transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1);*/
  }

  &-text-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 2rem;
    grid-gap: 1rem;

    a {
      cursor: pointer;
      margin: 0 auto;
    }


    img {
      width: 40px;
      filter: invert(100%);
      -webkit-filter: invert(100%);

    }
  }

  &-text-title {
    font-size: 2rem;
    padding: 0 1rem;
    margin: 5px 0 0 0;
  }

  &-text-category {
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.7;
    margin: 0;
  }
}





</style>