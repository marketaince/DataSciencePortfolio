<template>
    <section>
        <div class="nav-bar-spacer"></div>
        <div class="container section-content">

            <h1>Fun Demo Project of a Dog App</h1>
        </div>
        <div class="container">
            <div class="general-card interface-card">kajfisdfisdjifj
                <div class="interface">
                    <div class="image-upload">
                        <div class="uploaded-image">
                            <img :src="uploadedImage" >
                        </div>

                        <input type="file" accept="image/jpeg" @change=onFileSelected>
                        <button @click="onUpload">Upload</button>
                    </div>
                    <div class="results"></div>

                </div>



            </div>


        </div>


    </section>
</template>

<script>
    //import PictureInput from 'vue-picture-input'

    export default {
        components: {

        },
        name: "DogApp.vue",
        data () {
            return {
                selectedFile: null,
                uploadedImage: '',
            }

        },
        methods: {
            onFileSelected(event) {
                this.selectedFile = event.target.files[0];
                let data = event.target.files[0].url;
                this.uploadedImage = data;
                console.log(event.target.files[0]);
            },
            onUpload() {
                console.log('Sending to backend!!')
            }
        }
    }
</script>

<style lang="scss">
@import "./src/scss/_variables.scss";



    .interface-card {
        margin: 3rem auto 5rem auto;
        padding: 2rem;
    }


    .uploaded-image{
        width: 300px;
        height: 300px;
        background-color: $neutral-background;
        padding: 2rem;

        img {

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





</style>