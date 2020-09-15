<template>
    <section id="dog-app-section">
      <div id="dog-app-hero" class="hero">
        <div class="hero-content">
          <loading :active.sync="isLoading"
          :is-full-page="fullPage"
          color="#FB0F53"
          ></loading>

          <div class="nav-bar-spacer"></div>
          <div class="container section-content">

              <h1>Fun Demo Project of a Dog App</h1>
              <p>*Backend is using free resources of Heroku, which may lead to app responding with a delay.</p>
          </div>
          <div class="container">
              <div class="general-card interface-card">
                  <div class="interface">
                      <div class="image-upload">
                          <h2>What breed am I?</h2>
                            <div class="uploaded-image">
                              <transition name="fade">
                                <img :src="uploadedImage" :key="uploadedImage">
                              </transition>
                            </div>
                          <div class="image-upload-controls">
                              <div>
                               <input id="image" class="file-upload" type="file" accept="image/jpeg" @change=onFileSelected>
                              <label for="image">Choose a file</label>
                              </div>
                              <button class="btn" @click="onUpload">Predict</button>
                          </div>


                      </div>
                      <div class="results">

                          <h2>Results</h2>

                          <div v-for="result in dogPredictions" :key="result.name" class="result-div">

                              <div class="result-image">
                                <transition name="fade">
                                  <img :src="result.location" :key="result.location">
                                </transition>
                              </div>

                            <div class="result-info">
                              <h3>{{result.name}}</h3>
                              <div class="probability-res">
                                <div class="general-card probability">
                                  <div :style="result.probability"></div>
                                </div>
                                <span>{{result.prob}}%</span>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

    import { mapState, mapGetters } from "vuex";
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        components: {
          Loading
        },
        name: "DogApp.vue",
        computed: {
          ...mapGetters('dogAppView', ['dogPredictions','isLoading']),
          ...mapState({
            dogPredictions: state => state.dogAppView.dogPredictions,
            isLoading: state => state.dogAppView.isLoading,
          })

        },
        data () {
            return {
                selectedFile: null,
                uploadedImage: '/img/DogApp_icon2.png',
                fullPage: true
            }

        },
        methods: {
            onFileSelected(event) {
                let data = event.target.files[0];
                this.selectedFile = event.target.files[0];
                this.uploadedImage = URL.createObjectURL(data);
                this.$store.dispatch('dogAppView/wipeDogClasses')
            },
            onUpload() {

                const image_data = new FormData()
                image_data.append('image', this.selectedFile, this.selectedFile.name)


                this.$store.dispatch('dogAppView/getPredictedDogClasses', image_data)
                    .then(response => {
                        console.log('DataQuery: ', response);

                    })
                    .catch(() => {});
            }
        },
        mounted(){
          this.$store.dispatch('dogAppView/wipeDogClasses')
        }
    }
</script>

<style lang="scss">
@import "./src/scss/_variables.scss";

    #dog-app-hero {

        height: 100%;
        width: 100%;
      position: relative;
    }

    .interface-card {
        margin: 3rem auto 3rem auto;
        padding: 2rem;
    }

    .result-div {
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
    }

    .result-info {
      text-align: left;

      h3 {
        display: block;
        margin-bottom: 2rem;
      }


    }

    .result-image {
      margin-right: 2rem;

      img {
      width: 150px;
      height: auto;
      border-radius: 2rem;
      box-shadow: 0px 1px 5px 1px #7a7777;
      }

    }


    .probability-res{
      display: flex;
      margin-bottom: 2rem;
      align-items: center;
    }

    .probability{
      overflow: hidden;
      height: 20px;
      width: 300px;
      margin-right: 1rem;


      div {
        height: 100%;
        text-align: center;
        background: $secondary;
        border-radius: 3rem;
        box-shadow: 0 5px 5px 0 rgba(251, 15, 83, 0.2), 0 0 0 1px #E6ECF8;
      }

      span {
        color:black;
      }


    }

    .uploaded-image{
        margin: 2rem auto;
        position: relative;
        width: 400px;
        height: 400px;



        overflow: hidden;
        border-radius: 3rem;
            box-shadow: 0px 1px 5px 1px #7a7777;


        img {

          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
                }

    }

    .interface {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;

        .image-upload {
            text-align: center;

            .image-upload-controls{
                display:flex;
                justify-content: space-between;
                padding: 1rem 4rem;
            }

        }

        .file-upload {
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
        }


        .file-upload + label {
            cursor: pointer;
            display: inline-block;
            padding: 10px 30px;
            color: #fff;
            background-color: $contrast-dark;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-family: $main-font-family;
            font-weight: bold;

              &:hover {
                  background-color: #03cef0;
              }
        }

        .results {
          text-align: center;
        }
        /*.file-upload:focus + label,*/
        /*.file-upload + label:hover {*/
        /*    background-color: red;*/
        /*}*/



    }





  /* Desktop Settings <= 1400px */

  @media (max-width: 1400px) {

      .result-image {
        img {
          width: 130px;
        }
      }

      .probability{
        width: 250px;
      }

  }

  /* Tablet Vertical Settings <= 1024px  --- ex. iPad Pro */

  @media (max-width: 1024px) {
    .interface {
      display: block;

      .results {

        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;

      }


    }
  }


  /* Tablet Vertical Settings <= 900px */

  @media (max-width: 900px) {

  }

  /* Tablet Vertical Settings <= 768px --- ex. iPad */

  @media (max-width: 768px) {
      .uploaded-image{
        width: 300px;
        height: 300px;
      }

      .interface {


        .image-upload {


            .image-upload-controls{
                padding: 1rem 1rem;}
        }
      }


      .probability{
        width: 150px;
      }

      .result-info {

        h3 {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
      }
      .result-image {
        img {
          width: 80px;
        }
      }

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
      .uploaded-image{
        width: 200px;
        height: 200px;
      }

      .interface {
        .image-upload {
            .image-upload-controls{
                display:block;
              margin-top:0;

              button {
                margin-top: 1rem;
              }
            }
        }
      }

    .result-div {
      display: block;
        img {
          width: 100px;
        }
    }

    .result-image {
      margin-right: 0;
    }

  }


  /* Mobile Vertical Settings <= 300px --- ex. Galaxy Fold */

  @media (max-width: 300px) {
    .interface-card {
        margin: 3rem -1rem 300px -1rem;
        padding: 1rem;
    }
  }





</style>