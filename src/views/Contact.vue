<template>
    <section id="contact-section">
      <div class="nav-bar-spacer"></div>
      <div id="contact-section-content" class="container section-content">
        <h1>Get in touch</h1>
        <div class="separation-line"></div>
        <p>Please feel free to contact me.</p>
      </div>
      <div class="container contact-form">
        <div class="contact-form-side">
            <form action="">
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
                <textarea
                  class="text-input message-input"
                  placeholder="Enter Message"
                >
                </textarea>
              </div>
              <button class="btn" type="submit">Submit</button>
            </form>
        </div>
        <div class="contact-information-side">
            <div class="contact-information-icon">
                <img src="../../src/assets/icons/Phone.png">
            </div>
            <div class="contact-information-text"><p>+32 485 78 17 29</p></div>
            <div class="contact-information-icon">
                <img src="../../src/assets/icons/LinkedIn-white.png">
            </div>
            <div class="contact-information-text">
                <a href="https://www.linkedin.com/in/marketaince" target="_blank">
                    <p>linkedin.com/in/marketaince</p>
                </a>
            </div>
            <div class="contact-information-icon">
                <img src="../../src/assets/icons/Mail.png">
            </div>
            <div class="contact-information-text"><p>marketa.ince@gmail.com</p></div>
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

  #contact-section {

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
      z-index: 17;
      border-bottom: 3px $secondary solid;;

    }
  }

    .contact-form {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(2, 1fr);

        &-side form {
            display: flex;
            flex-direction: column;


            & .text-fields {
                display: flex;
                flex-direction: column;
                margin-bottom: 2rem;

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
                    height: 300px;
                }

            }


        }


        .contact-information-side {
            color: #fff;
            /*text-align: center;*/
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;
            padding: 4rem;

            .contact-information-icon {

                text-align: center;
                margin: auto 0;

                img {
                    max-width: 60px;
                }
            }

            .contact-information-text {
                text-align: left;
                margin: auto 0;
            }
        }
    }

    @media (max-width: 768px) {
        .contact-form {
            .contact-information-side {
                padding: 1rem;
            }
        }
    }

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
                    max-width: 40px;
                }
            }
    }
  }



  }

</style>