<template>
  <div id="app">
    <header id="header">
      <nav id="navbar">
        <div class="container" >
            <div class="logo">
                <img src="../src/assets/Logo_white.png">
            </div>
<!--          <h1 class="logo">İI</h1>-->
          <ul>
            <li><a class="current" href="#home">About</a></li>
            <li><a href="#home-projects">Blog</a></li>
            <li><a href="#home-projects">Projects</a></li>
            <li><a href="#home-contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div id="header-content" class="container">
<!--        <div class="photo">-->
<!--          <img src="../src/assets/101362402_3215921011759798_8343829096173666304_o.jpg">-->
<!--        </div>-->
        <div class="introduction">
          <h1>Markéta Ince</h1>
          <h2>Data Scientist</h2>
          <a href="#home-projects" class="btn">My Work</a>
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
    color: $primary;
    overflow:hidden;
  }

  a {
    text-decoration: none;
    //color: $primary-light;
  }

  ul {
    list-style: none;
  }

  .btn {
    cursor: pointer;
    display: inline-block;
    padding: 10px 30px;
    color: #fff;
    background-color: $primary;
    border: none;
    border-radius: 5px;
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
    z-index: 3;
    color: #fff;
    background-color: rgba(255,255,255,0.05);
      /*padding-bottom: 1rem;*/

      .logo {
          img {
              max-width: 70px;
          }
      }

    .container{

      display: flex;
      justify-content: space-between;
      /*padding-top: 1rem;*/



      ul {
        display: flex;
        align-items: center;
      }

      li {
        padding: 1rem 1.5rem;
        &:hover {
            background-color: rgba(255,255,255,0.1);
        }


        a{
            display: block;
          color: #fff;


        }

      }
    }
  }

  #header {
    // background: url('../src/assets/code_universe.png') no-repeat center center/cover;
    //background: url('../src/assets/nasa-Q1p7bh3SHj8-unsplash.jpg') no-repeat center center/cover;
    background: url('../src/assets/nasa_red.png') no-repeat center center/cover;
    height: 100vh;
    position: relative;
    //color: $primary;

  }

  #header-content {
    height: 100%;
    display: grid;
    grid-gap: 1rem;
    /*grid-template-areas:*/
    /*        "photo intro intro intro"*/
    /*        "photo intro intro intro"*/
    /*        "photo intro intro intro";*/
    z-index: 2;

    .photo {

      display: flex;
      justify-content: center;
      align-items: flex-start;
      opacity:1;
      z-index:3;
      /*grid-area: photo;*/
      background-color: rgba(255,255,255,0.05);
      padding-top: 3rem;
      /*align-items: center;*/
      /*justify-content: center;*/

      img {
        max-width: 200px;
        align-content: center;
        border: 1px $neutral-background solid;
        border-radius: 50%;

      }
    }

    .introduction {

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: #fff;
      height: 50vh;
      /*grid-area: intro;*/
      /*padding-top: 3rem;*/

      h1 {
        //font-family: $bold-font-family;
        letter-spacing: 0.1em;
        font-size: 5rem;
      }

      h2 {
        //font-family: $bold-font-family;
        letter-spacing: 0.1em;
        font-size: 3rem;
          margin-bottom: 1.5rem;
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
