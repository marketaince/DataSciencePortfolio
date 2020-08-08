<template>
    <section id="contact-section">
      <div class="nav-bar-spacer"></div>
      <div id="contact-section-content" class="container section-content">
        <h1>Get in touch</h1>
        <div class="separation-line"></div>
        <p>Please feel free to contact me.</p>
      </div>
      <div class="container">
          <div class="contact-form general-card">
              <div class="contact-information-side">
                <div class="contact-information-wrapper">
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/Phone.png">
                        </div>
                        <a class="contact-information-text" href="tel:+32485781729">+32 485 78 17 29</a>
                    </div>
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/LinkedIn.png">
                        </div>
                        <a class="contact-information-text" href="https://www.linkedin.com/in/marketaince" target="_blank">LinkedIn Profile</a>
                    </div>
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/Mail.png">
                        </div>
                        <div class="contact-information-text"><a href="mailto:marketa.ince@gmail.com?subject=Mail%20From%20Website">marketa.ince@gmail.com</a></div>
                    </div>
                    <div class="contact-info">
                        <div class="contact-information-icon">
                            <img src="/img/GitHub.png">
                        </div>
                        <a class="contact-information-text" href="https://github.com/MarketaInce" target="_blank">GitHub Profile</a>
                    </div>
                </div>
                <div class="contact-information-picture">
                    <img src="/img/Me_01.jpg">
                </div>

            </div>
              <div class="contact-form-side">
                    <form action="" class="contact-form-wrapper">
                        <div class="text-fields">
                             <textarea
                              class="text-input message-input general-card"
                              placeholder="Enter Message"
                            >
                            </textarea>
                        </div>
                        <div class="text-fields">
                            <input
                              type="text"
                              class="text-input name-input general-card"
                              placeholder="Name"
                            />
                            <input
                              type="email"
                              class="text-input email-input general-card"
                              placeholder="Email Address"
                            />
                             <div class="button-wrapper-div">
                               <button class="btn" type="submit">Send Message</button>
                            </div>
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

  }

    .contact-form {
        padding: 4rem;
        //margin: 0 3rem;


        //background-color: rgba(255,255,255,0.05);
        //border-color: $neutral-background;
        //border-width: 0.5px;
        //border-style: solid;
        margin-bottom: 4rem;
        margin-top:1rem;

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
                    box-shadow:  0 0 5pt 1pt #8d0000;
                }

                .message-input {
                    height: 200px;
                    resize: vertical;
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
                //display: block;
                //width: 100%;

                //box-shadow: 0px 1px 20px 0px rgb(87 62 62 / 68%);





                img {
                    border-radius: 3rem;
                    display: block;
                    width: 100%;
                    box-shadow: 0px 1px 5px 1px #7a7777;






                }
            }

            .contact-info {
                display: flex;
                align-content: flex-end;
                margin: 2.5rem 0;
                color:black;
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
                color:black;
                a {
                    color:black;
                }
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
    .contact-form {
        .contact-information-side {
            padding: 1rem;
            //grid-template-rows: repeat(4, minmax(60px, 80px));
            display: flex;
            flex-direction: column;

            .contact-information-picture{
                display: none;
            }


        }
    }
  }

  /* Mobile Horizontal Settings <= 500px --- ex. Pixel 2 */

  @media (max-width: 750px) and (max-height: 500px) {

          .contact-form {

        margin: 0;
        margin-bottom: 3rem;
        padding: 1rem;
    }


    .contact-form {

        .contact-information-side {

            padding: 0;

            .contact-information-icon {

                img {
                    max-width: 30px;
                }
            }
        }

        &-side {

            .contact-form-wrapper {

                display: block;
            }
        }
    }

  }


  /* Mobile Horizontal Settings <= 300px --- ex. Galaxy Fold */

  @media (max-width: 700px) and (max-height: 300px) {

  }

  /* Mobile Horizontal Settings <= 400px --- ex. iPhone 6 */

  @media (max-width: 680px) and (max-height: 400px) {

  }


  /* Mobile Vertical Settings <= 500px --- ex. Pixel 2 */

  @media (max-width: 500px) {
    #contact-section {

        &::before{

            height: 8rem;
        }
    }

    .contact-form {

        margin: 0;
        margin-bottom: 3rem;
        padding: 1rem;
    }


    .contact-form {

        .contact-information-side {

            padding: 0;
            margin-left:0;

            .contact-information-icon {

                margin-right: 1rem;

                img {
                    max-width: 30px;
                }
            }
        }

        &-side {

            .contact-form-wrapper {

                display: block;
            }
        }
    }
  }


   /* Mobile Vertical Settings <= 400px --- ex. iPhone 6 */

  @media (max-width: 400px) {

  }


  /* Mobile Vertical Settings <= 300px --- ex. Galaxy Fold */

  @media (max-width: 300px) {

  }




</style>
