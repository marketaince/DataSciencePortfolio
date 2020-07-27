<template>
    <section id="home-section">
      <div id="home-hero" class="container">
        <div class="introduction">
            <h2>Site Under Construction</h2>
          <h1>Markéta Ince</h1>
          <h2>Data Scientist</h2>
            <a href="/img/Marketa_Ince_CV.pdf" download><div class="btn">DOWNLOAD MY CV</div></a>
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

/* Desktop Settings */


  #home-section {

    position: relative;

    &::before{
      content:'';
      background: url('/img/Nasa_red.webp') no-repeat center center/cover;
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
          text-align: center;
      }

      h2 {
        //font-family: $bold-font-family;
        letter-spacing: 0.1em;
        font-size: 3rem;
          margin-bottom: 1.5rem;
          text-align: center;
      }

      p {
        padding-top: 1rem;

      }
    }
  }

  /* Mobile Horizontal Settings */

      @media (max-width: 680px) and (max-height: 400px){
        #home-hero {
            .introduction{
                h1 {
                    font-size: 3rem;
                    text-align: center;
                }

                h2 {
                    font-size: 2rem;
                    text-align: center;
                }
            }

        }
    }


    /* Mobile Vertical Settings */

    @media (max-width: 500px) {
        #home-hero {
            .introduction{
                h1 {
                    font-size: 3rem;
                    text-align: center;
                }

                h2 {
                    font-size: 2rem;
                    text-align: center;
                }
            }

        }
    }
</style>