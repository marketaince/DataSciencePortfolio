<template>
    <section id="home-section">
      <div id="home-hero" class="container">
        <div class="introduction">
          <h1>Markéta Ince</h1>
          <h2>Data Scientist</h2>
          <router-link to="/projects" class="btn">My Work</router-link>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Home.vue"
    }
</script>

<style lang="scss">
  #home-section {

    position: relative;

    &::before{
      content:'';
      background: url('../assets/nasa_red.png') no-repeat center center/cover;
      position: absolute;
      top:0;
      left:0;
      width:100vw;
      height: 100vh;
      z-index: 1;

    }
  }


  #home-hero {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    z-index: 10;

    .introduction {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      color: #fff;
      height: 100vh;

      h1 {
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

</style>