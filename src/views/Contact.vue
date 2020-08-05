<template>
    <section id="contact-section">
      <div class="nav-bar-spacer"></div>
      <div id="contact-section-content" class="container section-content">
        <h1>Get in touch</h1>
        <div class="separation-line"></div>
        <p>Please feel free to contact me.</p>
      </div>
      <div class="container">
          <div class="contact-form">
              <div class="contact-information-side">
                <div class="contact-information-wrapper">
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/Phone.webp">
                        </div>
                        <a class="contact-information-text" href="tel:+32485781729">+32 485 78 17 29</a>
                    </div>
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/LinkedIn_white.webp">
                        </div>
                        <a class="contact-information-text" href="https://www.linkedin.com/in/marketaince" target="_blank">LinkedIn Profile</a>
                    </div>
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/Mail.webp">
                        </div>
                        <div class="contact-information-text"><a href="mailto:marketa.ince@gmail.com?subject=Mail%20From%20Website">marketa.ince@gmail.com</a></div>
                    </div>
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/GitHub_white.webp">
                        </div>
                        <a class="contact-information-text" href="https://github.com/MarketaInce" target="_blank">GitHub Profile</a>
                    </div>
                </div>
                <div class="contact-information-picture">
                    <img src="/img/Me_01.webp">
                </div>

            </div>
              <div class="contact-form-side">
                    <form action="" class="contact-form-wrapper">
                      <div class="text-fields">
                        <input
                          type="text"
                          class="text-input name-input"
                          placeholder="Name"
                        />
                        <input
                          type="email"
                          class="text-input email-input"
                          placeholder="Email Address"
                        />
                         <div class="button-wrapper-div">
                           <button class="btn" type="submit">Send Message</button>
                        </div>
                      </div>
                        <div class="text-fields">
                         <textarea
                          class="text-input message-input"
                          placeholder="Enter Message"
                        >
                        </textarea>
                        </div>
                    </form>
                </div>
          </div>


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


    /* Desktop Settings */

  #contact-section {

    //height: 100vh;
    position: relative;

    &::before{
      content:'';
      background: url('/img/Nasa_red.webp') no-repeat center 30% /cover;
      position: fixed;
      top:0;
      left:0;
      width:100vw;
      height: 4rem;
      z-index: 17;
      border-bottom: 3px $secondary solid;;

    }
  }

    .contact-form {
        padding: 4rem;
        margin: 0 3rem;


        background-color: rgba(255,255,255,0.05);
        border-color: $neutral-background;
        border-width: 0.5px;
        border-style: solid;
        margin-bottom: 4rem;

        &-side {
            margin-top: 1rem;

            .contact-form-wrapper{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 3rem;


            }


        }

        &-side form {
            display: flex;
            flex-direction: column;


            & .text-fields {
                display: flex;
                flex-direction: column;

                .text-input {
                    padding: 1rem;
                    margin: 1rem 0;
                    border-radius: 0.5rem;
                    border: none;
                }

                .text-input:focus {
                    outline: 0;
                    box-shadow: 0 0 3pt 2pt $secondary;
                }

                .message-input {
                    height: 200px;
                }



            }

            & .button-wrapper-div{
                    text-align: center;

                    button {
                        margin: 2rem auto;
                    }

                }


        }


        .contact-information-side {
            color: #fff;
            display: grid;
            grid-template-columns: repeat(2, 2fr);
            grid-gap: 3rem;
            margin-left: 2rem;

            .contact-information-wrapper{
                margin:auto;
            }

            .contact-information-picture{

                padding: 4rem;

                img {
                    border-radius: 20px;
                    display: block;
                    width: 100%;
                }
            }

            .contact-info {
                display: flex;
                align-content: flex-end;
                margin: 2.5rem 0;
            }

            .contact-information-icon {

                text-align: center;
                margin: auto 3rem auto 0;
                display: inline-block;

                img {
                    max-width: 60px;
                }
            }

            .contact-information-text {
                text-align: left;
                margin: auto 3rem auto 0;
                display: inline-block;
            }
        }
    }

    @media (max-width: 1024px) {
    .contact-form {

        .contact-information-side{

            .contact-information-wrapper{
                margin: 0;
            }

            .contact-information-picture{

                padding: 2rem;

                img {
                    margin: auto;
                }
            }


            .contact-information-icon {
                img {
                    max-width: 50px;
                }
            }

        }
    }
    }


    /* Tablet Vertical Settings */

    @media (max-width: 768px) {
        .contact-form {
            .contact-information-side {
                padding: 1rem;
                grid-template-rows: repeat(4, minmax(60px, 80px));


            }
        }
    }


    /* Mobile Horizontal Settings */
    @media (max-width: 680px) and (max-height: 400px) {

    }


    /* Mobile Vertical Settings */
  @media (max-width: 500px) {
    #contact-section {

      &::before{
        height: 8rem;
      }
    }

    .contact-form {
        display: block;
    }


  .contact-form {
     .contact-information-side {
        padding: 2rem 0;

        .contact-information-icon {
            img {
                max-width: 30px;
            }
        }
     }
  }



  }

</style>