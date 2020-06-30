<template>
    <section id="blog-section">
      <div class="nav-bar-spacer"></div>
      <div id="blog-section-content" class="container section-content">
        <h1>Blog</h1>
        <div class="separation-line"></div>
        <div class="projects-cards">
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Blog.vue"
    }
</script>

<style lang="scss">
    @import "./src/scss/_variables.scss";

  #blog-section {

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

</style>