<template>
  <div id="app">
    <nav id="navbar">
      <div class="container" >
        <h1 class="logo">Ince Insights</h1>
        <ul>
          <li><a class="current" href="#home">Home</a></li>
          <li><a href="#home-projects">Projects</a></li>
          <li><a href="#home-contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <header id="header">
      <div id="header-content" class="container">
        <div class="photo">
          <img src="../src/assets/101362402_3215921011759798_8343829096173666304_o.jpg">
        </div>
        <div class="introduction">
          <h1>Markéta Ince</h1>
          <h2>Data Scientist</h2>
        </div>
      </div>
    </header>
    <section id="home-about">
      <div id="home-about-content" class="container">
        <h1>About Me</h1>
        <div class="separation-line"></div>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </section>
    <section id="home-projects">
      <div id="home-projects-content" class="container">
        <h1>My Projects</h1>
        <div class="separation-line"></div>
        <div class="projects-cards">

        </div>
      </div>
    </section>
    <section id="home-contact">
      <div id="home-contact-content" class="container">
        <h1>Contact Me</h1>
        <div class="separation-line"></div>
      </div>
    </section>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
  @import "./src/scss/_variables.scss";

  #app {
    font-family: $main-font-family;
    line-height: 1.6;
    background: $dark-background;
    /*background: linear-gradient(45deg, rgb(64, 0, 0) 0%, rgb(0, 0, 0) 44%, rgb(0, 0, 0) 56%, rgb(93, 0, 0) 99%);*/
    color: $primary-light;
  }

  a {
    text-decoration: none;
    color: $primary-light;
  }

  ul {
    list-style: none;
  }

  .separation-line {
    background-color: $neutral-background;
    height: 2px;
    width: 3rem;
    margin: 0 auto 1rem auto;
    display: block;
  }

  .container {
    margin:auto;
    max-width: $container-width;
    overflow: auto;
    padding: 0 20px;
  }

  // main nav
  #navbar {
    width: 100vw;
    background: #000;

    .container{

      display: flex;
      justify-content: space-between;
      padding-top: 1rem;


      ul {
        display: flex;
      }

      li {
        padding: 1rem 1.5rem;
      }
    }
  }



  #header-content {
    height: 75vh;
    display: grid;
    margin-top: 3rem;
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);

    .photo {

      display: flex;
      justify-content: center;
      align-items: center;
      /*align-items: center;*/
      /*justify-content: center;*/

      img {
        max-width: 400px;
        align-content: center;
        border: 1px $neutral-background solid;

      }
    }

    .introduction {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h1 {
        font-family: $bold-font-family;
        letter-spacing: 0.2em;
        font-size: 5rem;
      }

      h2 {
        font-family: $bold-font-family;
        letter-spacing: 0.2em;
        font-size: 3rem;
      }

      p {
        padding-top: 1rem;

      }
    }
  }

  #home-about {
    background: $secondary-light;
    color: $dark-background;

    &-content {



      h1 {
        font-family: $bold-font-family;
        letter-spacing: 0.2em;
        font-size: 2rem;
        padding-top: 1rem;
        text-align: center;
        color: $neutral-background;
      }

      p {
        padding-top: 1rem;
        padding-bottom: 2rem;
      }


    }

  }


  #home-projects {
    &-content {
      h1 {
        font-family: $bold-font-family;
        letter-spacing: 0.2em;
        font-size: 2rem;
        padding-top: 1rem;
        text-align: center;
        color: $neutral-background;
      }

      p {
        padding-top: 1rem;
        padding-bottom: 2rem;
      }
    }
  }

  #home-contact {
    &-content {
      h1 {
        font-family: $bold-font-family;
        letter-spacing: 0.2em;
        font-size: 2rem;
        padding-top: 1rem;
        text-align: center;
        color: $neutral-background;
      }

      p {
        padding-top: 1rem;
        padding-bottom: 2rem;
      }
    }
  }

</style>
