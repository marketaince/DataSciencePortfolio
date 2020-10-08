<template>
  <div id="app">
    <header id="navbar" :class="{ colored_navbar: coloredNavbar }">
      <div class="container" >
        <div class="logo"></div>
        <nav>
          <ul>
            <router-link :class="[currentPage === '/' ? activeClass : '']" to="/">Home</router-link>
            <router-link :class="[currentPage === '/projects' ? activeClass : '']" to="/projects">Projects</router-link>
          </ul>
        </nav>
      </div>
    </header>
    <main id="page-container">
      <div id="content-wrap">
        <transition name="fade" mode="out-in">
          <router-view :key="$route.fullPath"></router-view>
        </transition>
      </div>
      <footer id="footer">
        <div class="footer-content container">
          <p> &copy; InceInsights 2020. All rights reserved</p>
          <div class="citations">
            <p>Sources</p>
            <span class="sources">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script>
// Export App
export default {
  name: 'App',
  components: {},
  data() {
    return {
      coloredNavbarData: false,
      activeClass: 'active'
    }
  },
  computed: {
    coloredNavbar: function() {
      return this.currentPage !== '/';
    },
    currentPage() {
      return this.$route.path;
    }
  }
}
</script>

<style lang="scss">
/* Import scss variables */

@import "./src/scss/_variables.scss";

/*** TRANSITIONS ***/

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-out;
}

.fade-leave-to {
  opacity: 0;
}


/*** UTILITY ***/

.hero {
  height: 100%;
  width: 100%;
  position: relative;
  .hero-content {
    min-height: 100vh;
  }
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

.btn {
  cursor: pointer;
  display: inline-block;
  padding: 10px 30px;
  color: #fff;
  background-color: $primary;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  outline: 0;
  &:hover {
    background-color: $flags-light;
  }
  &-dark {
    background-color: $dark-background;
  }
  &-contrast {
    background-color: $contrast-dark;
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
  margin: auto;
  max-width: $container-width;
  overflow: hidden;
  padding: 0 1rem;
}

.nav-bar-spacer {
  height: 4rem;
}


/*** APP ***/

#app {
  min-height: 100vh;
  font-family: $main-font-family;
  line-height: 1.6;
  background: white;
  color: $primary;
  overflow: hidden;
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
  .container {
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
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
        z-index: 20;
      }
      a {
        display: block;
        color: #fff;
        z-index: 20;
      }
    }
  }
}

.active {
  font-weight: bold;
  //font-size: 1.1rem;
  color: #eccc57;
}

.sources {
  font-size: 0.5rem;
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
  //padding-bottom: 4rem;
}

#footer {
  width: 100vw;
  min-height: 4rem;
  color: #fff;
  background: #a31b1d;
  bottom: 0;
  text-align: center;
  padding: 1rem 0;
  position: relative;
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .citations {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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

@media (max-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}


/* Mobile Horizontal Settings <= 500px --- ex. Pixel 2 */

@media (max-width: 750px) and (max-height: 500px) {
  .active {
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

@media (max-width: 700px) and (max-height: 300px) {}


/* Mobile Horizontal Settings <= 400px --- ex. iPhone 6 */

@media (max-width: 680px) and (max-height: 400px) {
  .active {
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
  .logo {
    display: none;
  }
  .nav-bar-spacer {
    height: 4rem;
  }
  .container {
    padding: 0 1rem;
  }
  .active {
    font-size: 0.9rem;
  }
  #navbar {
    .container {
      display: block;
      ul {
        font-size: 0.8rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        a {
          text-align: center;
        }
      }
    }
  }
  #footer {
    font-size: 0.7rem;
    .footer-content {
      display: block;
      .citations {
        padding: 0 2rem;
        align-items: flex-start;
      }
    }
  }
}


/* Mobile Vertical Settings <= 400px --- ex. iPhone 6 */

@media (max-width: 400px) {
  #navbar {
    .container {
      .blog-app {
        display: none;
      }
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
