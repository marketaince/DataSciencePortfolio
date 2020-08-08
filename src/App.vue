<template>
  <div id="app">
    <header id="header">
    </header>
    <nav id="navbar" :class="{ colored_navbar: coloredNavbar }">
      <div class="container" >
          <div class="logo">
<!--              <img src="/img/Logo_white.png">-->
<!--            <h1>İI</h1>-->
          </div>
        <ul>
          <router-link :class="[currentPage === '/' ? activeClass : '']" to="/">Home</router-link>
          <router-link :class="[currentPage === '/about' ? activeClass : '']" to="/about">About</router-link>
<!--          <router-link :class="[currentPage === '/blog' ? activeClass : '']" to="/blog">Blog</router-link>-->
          <router-link :class="[currentPage === '/projects' ? activeClass : '']" to="/projects">Projects</router-link>
          <router-link :class="[currentPage === '/contact' ? activeClass : '']" to="/contact">Contact</router-link>
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
          <p> &copy; InceInsights 2020. All rights reserved</p>
            <span class="sources"><a  target="_blank" href="https://icons8.com/icons/set/full-test-tube">Full Test Tube icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>


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
  },
  data () {
    return {
      coloredNavbarData: false,
      activeClass: 'active'
    }
  },
  computed: {
    coloredNavbar: function () {
      return this.currentPage !== '/';
    },
    currentPage() {
      return this.$route.path;
    }
  }
}

</script>

<style lang="scss">

  @import "./src/scss/_variables.scss";

  #app {
  min-height: 100vh;
  font-family: $main-font-family;
  line-height: 1.6;
  background: white;
  color: $primary;
  overflow: hidden;

  }

  a {
    text-decoration: none;
    color: #fff;
  }

  ul {
    list-style: none;
  }

  .general-card {
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
    border-radius: 3rem;
    color: black;
  }

  .active{
    font-weight: bold;
    //font-size: 1.1rem;
    color: #eccc57;
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

      &:hover {
          background-color: $flags-light;
      }

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

  .sources {
      font-size: 0.4rem;
      margin-bottom: 0.5rem;
  }


  #navbar {
    width: 100vw;
    height: max-content;
    color: #fff;
    background-color: #a31b1d;
    position: fixed;
    z-index: 20;


      .logo {
        z-index: 20;
        text-align: center;

          h1 {
            z-index: 20;
            display: block;
            margin: auto;
            padding: 1rem;
          }
          img {
              max-width: 70px;
              z-index: 20;
          }
      }

    .container{

      display: flex;
      justify-content: space-between;

      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        /*justify-content: ;*/
        z-index: 20;
      }

      a {
        padding: 1rem 1.5rem;
        z-index: 20;

        &:hover {
            background-color: rgba(255,255,255,0.1);
            cursor: pointer;
          z-index: 20;
        }

        a{
          display: block;
          color: #fff;
          z-index: 20;
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
      background-color: rgba(255,255,255,0.05);
      padding-top: 3rem;

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
      color: black;

    }

    p {
      padding-top: 1rem;
      padding-bottom: 2rem;
      color: black;
      text-align: center;
    }
  }

  #page-container {
    position: relative;
    min-height: 100vh;
  }

  #content-wrap {
    padding-bottom: 4rem;
  }

  #footer {
    width: 100vw;
    height: 4rem;
    color: #fff;
    background: #a31b1d;
    bottom:0;
    text-align: center;
    padding: 1rem 0;
    position: absolute;

  }

  /* Desktop Settings <= 1400px */

  @media (max-width: 1400px) {

  }

  /* Tablet Vertical Settings <= 1024px  --- ex. iPad Pro */

  @media (max-width: 1024px) {

  }


  /* Tablet Vertical Settings <= 900px */

  @media (max-width: 900px) {

  }

  /* Tablet Vertical Settings <= 768px --- ex. iPad */

  @media (max-width: 768px) {

    .container {

      padding: 0 2rem;
    }
  }

  /* Mobile Horizontal Settings <= 500px --- ex. Pixel 2 */

  @media (max-width: 750px) and (max-height: 500px) {

    .active{

      font-size: 0.9rem;
    }


    #navbar {

      .container {

        //display: block;


        ul {

          font-size: 0.8rem;

          a {

            text-align: center;
          }
        }
      }
    }

  }


  /* Mobile Horizontal Settings <= 300px --- ex. Galaxy Fold */

  @media (max-width: 700px) and (max-height: 300px) {

  }

  /* Mobile Horizontal Settings <= 400px --- ex. iPhone 6 */

  @media (max-width: 680px) and (max-height: 400px) {

    .active{

      font-size: 0.9rem;
    }

    #navbar {

      .container {

        ul {
          font-size: 0.8rem;
        }
      }
    }

  }


  /* Mobile Vertical Settings <= 500px --- ex. Pixel 2 */

  @media (max-width: 500px) {

    .logo{

      display: none;
    }

    .nav-bar-spacer {

      height: 8rem;
    }

    .active{

      font-size: 0.9rem;
    }

    #navbar {

      .container {

        display: block;


        ul {

          font-size: 0.8rem;
          display:grid;
          grid-template-columns: repeat(4, 1fr);

          a {

            text-align: center;
          }
        }
      }
    }

    #footer {
        font-size: 0.7rem;
    }

  }


   /* Mobile Vertical Settings <= 400px --- ex. iPhone 6 */

  @media (max-width: 400px) {
    #navbar {

      .container {




        ul {


          grid-template-columns: repeat(3, 1fr);


        }
      }
    }
  }


  /* Mobile Vertical Settings <= 300px --- ex. Galaxy Fold */

  @media (max-width: 300px) {
     .nav-bar-spacer {

      height: 12rem;
    }




    #navbar {

      .container {




        ul {


          grid-template-columns: repeat(2, 1fr);


        }
      }
    }
  }


</style>
