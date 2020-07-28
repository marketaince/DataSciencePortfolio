<template>
    <section id="project-section">
      <div class="nav-bar-spacer"></div>
      <div id="project-section-content" class="container section-content">
        <h1>My Projects</h1>
        <div class="separation-line"></div>
        <p>Check Some of My Projects Below.</p>
      </div>
      <div class="projects-cards container" >
          <div class="projects">
            <div class="project" v-for="project in projects" :key="project.name">
              <div class="project-image">
                <img src="/img/Card.png" alt="" />
              </div>
              <div class="project-text">
                <div class="project-text-wrap">
                  <p class="project-text-category">{{ project.category }}</p>
                  <h2 class="project-text-title">{{ project.name }}</h2>
                  <p class="project-text-description">{{ project.description }}</p>
                  <div class="project-text-buttons">
                    <a :href="project.demo_link" target="_blank"><img src="/img/Trial.png"></a>
                    <a :href="project.blog_link" target="_blank"><img src="/img/Blog.png"></a>
                    <a :href="project.github_link" target="_blank"><img src="/img/GitHub.png"></a>
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
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using Convolutional Neural Network architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git"
            },
            {
              name: "2 Dog App",
              category: "Data Science",
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using Convolutional Neural Network architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git"
            },
            {
              name: "3 Dog App",
              category: "Data Science",
              background: "../img/card.png",
              description: "Simple application to recognize dog breeds using Convolutional Neural Network architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git"
            },
            {
              name: "4 Dog App",
              category: "Data Science",
              background: "../img/card.png",
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

.projects-cards {
  padding-bottom: 2rem;
}

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    //box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    grid-gap: 2rem;
  }

  .project {
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

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    #project-section {

      &::before{
        height: 8rem;
      }
    }

    .projects {
      display: block;
      .project {
        margin-bottom: 2rem;
        height: 300px;

        .project-text-category {
          font-size: 1rem;
          margin: 0.5rem 0;
        }

        .project-text-title {
          font-size: 1.5rem;
        }

        .project-text-description {
          font-size: 0.8rem;
          margin: 0.5rem 0;
        }

        .project-text-buttons {
          padding: 0.5rem 2rem
        }

        &:hover:after {
          transform: scale(2) translateX(0) translateY(30%) rotate(-10deg);
        }

      }

      &-text-buttons {

        img {
          width: 25px;
        }
  }


    }

  }

</style>