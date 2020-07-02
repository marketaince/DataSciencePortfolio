<template>
    <section id="about-section">
      <div class="nav-bar-spacer"></div>
      <div id="about-section-content" class="container section-content">
        <h1>About Me</h1>
        <div class="separation-line"></div>
        <p class="about-intro">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem ipsum dolor sit amet..</p>
      </div>
      <div class="container about-section">
        <h1>Skills</h1>
      </div>
      <div class="container about-section">
        <h1>Timeline</h1>
      </div>
    </section>
</template>

<script>
    export default {
        name: "About.vue"
    }
</script>

<style lang="scss">
    @import "./src/scss/_variables.scss";

  #blog-section {

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

  .about-section {

    h1 {
      letter-spacing: 0.2em;
      font-size: 2rem;
      padding-top: 1rem;
      text-align: center;
      color: #fff;

    }
  }



</style>