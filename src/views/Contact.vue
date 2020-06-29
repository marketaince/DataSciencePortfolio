<template>
    <section id="contact-section">
      <div class="nav-bar-spacer"></div>
      <div id="contact-section-content" class="container section-content">
        <h1>Contact Me</h1>
        <div class="separation-line"></div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Contact.vue"
    }
</script>

<style lang="scss">
    @import "./src/scss/_variables.scss";

  #contact-section {

    //height: 100vh;
    position: relative;

    &::before{
      content:'';
      background: url('../assets/nasa_red.png') no-repeat center 30% /cover;
      position: absolute;
      top:0;
      left:0;
      width:100vw;
      height: 4rem;
      z-index: 1;
      border-bottom: 3px $secondary solid;;

    }
  }

</style>