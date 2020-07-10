<template>
  <div id="app">
    <header id="header">
    </header>
    <nav id="navbar">
      <div class="container" >
          <div class="logo">
              <img src="../dist/img/Logo_white.png">
          </div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </nav>

    <div id="page-container">
      <div id="content-wrap">
        <transition name="fade" mode="out-in">
          <router-view :key="$route.fullPath"></router-view>
        </transition>
      </div>
      <footer id="footer"> <!-- v-if="$route.name !== 'Home'" -->
        <div class="footer-content container">
          <p>Copyright &copy; 2020. All Rights Reserved</p>
          <div class="social">
          </div>
        </div>
      </footer>
    </div>


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
    min-height: 100vh;
    font-family: $main-font-family;
    line-height: 1.6;
    background: $dark-background;
    color: $primary;
  }

  a {
    text-decoration: none;
    color: #fff;
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
    font-size: 1rem;
  }

  .separation-line {
    background-color: $neutral-background;
    height: 2px;
    width: 4rem;
    margin: 0.5rem auto 1rem auto;
    display: block;
  }

  .container {
    margin:auto;
    max-width: $container-width;
    overflow: hidden;
    padding: 0 1rem;
  }

  .nav-bar-spacer {
    height: 4rem;
    //position: fixed;
  }

  #navbar {
    width: 100vw;
    height: 4rem;
    color: #fff;
    background-color: rgba(255,255,255,0.05);
    position: fixed;
    z-index: 20;

      .logo {
          img {
              max-width: 70px;
          }
      }

    .container{

      display: flex;
      justify-content: space-between;

      ul {
        display: flex;
        align-items: center;
      }

      li {
        padding: 1rem 1.5rem;
        &:hover {
            background-color: rgba(255,255,255,0.1);
            cursor: pointer;
        }

        a{
          display: block;
          color: #fff;
        }

      }
    }
  }

  #header-content {

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


  }


  .section-content {

    h1 {
      letter-spacing: 0.2em;
      font-size: 2rem;
      padding-top: 1rem;
      text-align: center;
      color: $neutral-background;

    }

    p {
      padding-top: 1rem;
      padding-bottom: 2rem;
      color: #fff;
      text-align: center;
    }
  }

  #page-container {
    position: relative;
    min-height: 100vh;
  }

  #content-wrap {
    padding-bottom: 4rem;    /* Footer height */
  }

  #footer {
    width: 100vw;
    height: 4rem;
    color: #fff;
    background: #000;
      bottom:0;
    text-align: center;
    padding: 1rem 0;
    //margin-top: 2rem;
      position: absolute;
  //bottom: 0;

    /*.footer-content {*/
    /*  margin: auto 0;*/
    /*}*/

  }

  @media (max-width: 800px) {
    .container {
      padding: 0 2rem;
    }

  }

  @media (max-width: 500px) {
    .logo{
      display: none;
    }

    .nav-bar-spacer {
      height: 8rem;
      //position: fixed;
    }

    #navbar {

      height: 8rem;

      .container {
        display: block;


        ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          a {
            text-align: center;
          }


        }

      }
    }

  }

</style>
