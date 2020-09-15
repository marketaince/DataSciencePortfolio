<template>
    <section id="home-section">
      <div id="home-hero" class="hero container">
        <div class="introduction hero-content">
            <h3>Site Under Construction</h3>
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
    }


    #home-hero {

        display: flex;
        z-index: 10;

        .introduction {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            color: black;

            h1 {

                letter-spacing: 0.1em;
                font-size: 5rem;
                text-align: center;
            }

            h2 {

                letter-spacing: 0.1em;
                font-size: 3rem;
                margin-bottom: 1.5rem;
                text-align: center;
            }


            h3 {

                letter-spacing: 0.1em;
                font-size: 0.8rem;
                margin-bottom: 1.5rem;
                text-align: center;
            }

            p {

                padding-top: 1rem;
            }
        }
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

  }

  /* Mobile Horizontal Settings <= 500px --- ex. Pixel 2 */

  @media (max-width: 750px) and (max-height: 500px) {

  }


  /* Mobile Horizontal Settings <= 300px --- ex. Galaxy Fold */

  @media (max-width: 700px) and (max-height: 300px) {

  }

  /* Mobile Horizontal Settings <= 400px --- ex. iPhone 6 */

  @media (max-width: 680px) and (max-height: 400px) {

  }


  /* Mobile Vertical Settings <= 500px --- ex. Pixel 2 */

  @media (max-width: 500px) {

  }


   /* Mobile Vertical Settings <= 400px --- ex. iPhone 6 */

  @media (max-width: 400px) {

  }


  /* Mobile Vertical Settings <= 300px --- ex. Galaxy Fold */

  @media (max-width: 300px) {

  }



    /* Tablet Horizontal Settings */

    @media (max-width: 680px) and (max-height: 400px) {

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


    /* Galaxy Fold Horizontal Settings */

    @media (max-width: 680px) and (max-height: 320px) {

        #home-hero {

            .introduction {

                h1 {
                    font-size: 1.8rem;
                    text-align: center;
                }

                h2 {
                    font-size: 1rem;
                    text-align: center;
                }

                .btn {
                    font-size: 0.7rem;
                    padding: 5px 15px;
                }
            }

        }
    }





    /* Tablet Horizontal Settings */

    @media (max-width: 750px) and (max-height: 500px) {

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

            .introduction {

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


    /* Galaxy Fold Vertical Settings */

    @media (max-width: 320px) {

        #home-hero {

            .introduction {

                h1 {
                    font-size: 2.3rem;
                    text-align: center;
                }

                h2 {
                    font-size: 1.3rem;
                    text-align: center;
                }

                .btn {
                    font-size: 0.8rem;
                }
            }

        }
    }

</style>