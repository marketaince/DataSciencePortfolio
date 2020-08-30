<template>
    <section>
        <div class="nav-bar-spacer"></div>
        <div class="container section-content">

            <h1>Fun Demo Project of a Dog App</h1>
        </div>
        <div class="container">
            <div class="general-card interface-card">
                <div class="interface">
                    <div class="image-upload">
                        <h2>What breed am I?</h2>
                        <div class="uploaded-image">
                            <img :src="uploadedImage" >
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
                            <img :src="result.location">
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
    </section>
</template>

<script>

    import { mapState, mapGetters } from "vuex";

    export default {
        components: {

        },
        name: "DogApp.vue",
        computed: {
          ...mapGetters('dogAppView', ['dogPredictions']),
          ...mapState({
            dogPredictions: state => state.dogAppView.dogPredictions,
          })

        },
        data () {
            return {
                selectedFile: null,
                uploadedImage: '/img/DogApp_icon2.png',
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
                        console.log('DataQuery: ', response)
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



    .interface-card {
        margin: 3rem auto 300px auto;
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





</style>