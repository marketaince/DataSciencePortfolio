<template>
    <section id="home-section">
      <div id="home-hero" class="container">
        <div class="introduction">
          <h1>Markéta Ince</h1>
          <h2>Data Scientist</h2>
          <a href="#home-projects" class="btn">My Work</a>
        </div>
      </div>
      <div id="home-about" class="container section-content">
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
</template>

<script>
    export default {
        name: "Home.vue"
    }
</script>

<style lang="scss">
  #header {

    //height: 100vh;
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
    //grid-gap: 1rem;
    z-index: 10;

    .introduction {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      color: #fff;
      height: 100vh;
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

</style>