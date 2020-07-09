<template>
    <section id="blog-section">
      <div class="nav-bar-spacer"></div>
      <div class="container header">
          <div class="header-image">
              <img src="../assets/markus-spiske-qjnAnF0jIGk-unsplash.jpg" alt="" />
          </div>
      </div>
      <div class="blog-post container">
          <h1 class="blog-post-title">{{ blog.name }}</h1>
          <div class="blog-post-metadata">
            <p class="blog-post-published-date">{{ blog.published }}</p>
            <p class="blog-post-category">{{ blog.category }}</p>
          </div>
          <div class="blog-post-paragraph">
              <div
                  v-for="paragraph in blog.paragraph_text"
                  class="blog-post-paragraph-text"
                  v-bind:class="paragraph.classes"
                  :key="paragraph"
              >
                  <p v-if="paragraph.type === 'text'">{{ paragraph.content }}</p>
                  <ul v-if="paragraph.type === 'unordered_list'"><li v-for="li in paragraph.content" :key="li">{{ li }}</li></ul>
                  <ol v-if="paragraph.type === 'ordered_list'"><li v-for="li in paragraph.content" :key="li">{{ li }}</li></ol>

              </div>
          </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Blog.vue",
        data () {
        return {
          blog: {
              name: "Building an App recognizing dog Breeds | Udacity project spin up.",
              category: "Data Science",
              background: "../assets/card.png",
              description: "Simple application to recognize dog breeds using CNN architecture. This project was a part of Udacity Deep Learning Nanodegree.",
              demo_link: "https://esribelux.maps.arcgis.com/apps/opsdashboard/index.html#/8b51c6df54b44117b4717ed7c170bff2",
              blog_link: "https://www.dataquest.io/blog/",
              github_link: "https://github.com/MarketaInce/DogAppCNN.git",
              published: "April 19 2020",
              paragraph_text: [
                  {type: "text", classes: 'header', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
                  {type: "text", classes: 'paragraph', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget. Tincidunt eget nullam non nisi est sit. Elit pellentesque habitant morbi tristique. Nisi vitae suscipit tellus mauris a diam. Et molestie ac feugiat sed lectus vestibulum mattis. A diam sollicitudin tempor id eu nisl nunc mi. A lacus vestibulum sed arcu non. Egestas congue quisque egestas diam in. Consectetur adipiscing elit pellentesque habitant morbi tristique. Gravida quis blandit turpis cursus in. Auctor augue mauris augue neque gravida in. Curabitur vitae nunc sed velit."},
                  {type: "ordered_list", classes: 'paragraph list upper-roman', content: ["first", "second", "third"]},
                  {type: "text", classes: 'paragraph', content: "Aliquam purus sit amet luctus venenatis lectus magna fringilla. Accumsan in nisl nisi scelerisque eu ultrices. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Aliquam sem fringilla ut morbi tincidunt. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Et tortor at risus viverra adipiscing at in. Elementum nibh tellus molestie nunc non blandit massa enim. Rhoncus urna neque viverra justo nec."},
                  {type: "ordered_list", classes: 'paragraph list lower-alpha', content: ["first", "second", "third"]},
                  {type: "text", classes: 'paragraph', content: "Non enim praesent elementum facilisis leo vel fringilla. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Eros donec ac odio tempor. Pellentesque diam volutpat commodo sed egestas. Turpis massa tincidunt dui ut ornare lectus. Blandit libero volutpat sed cras ornare arcu. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Proin sed libero enim sed faucibus turpis. Tellus in metus vulputate eu scelerisque felis. Viverra adipiscing at in tellus integer feugiat. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Sagittis aliquam malesuada bibendum arcu. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Suspendisse sed nisi lacus sed viverra tellus in."},
                  {type: "text", classes: 'emphasis', content: "Est sit amet facilisis magna etiam tempor orci eu lobortis."},
                  {type: "text", classes: 'paragraph', content: "Est sit amet facilisis magna etiam tempor orci eu lobortis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ut ornare lectus sit amet. Ut aliquam purus sit amet luctus venenatis lectus. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Quis auctor elit sed vulputate mi sit amet mauris. Ultricies integer quis auctor elit sed vulputate mi sit amet. Pharetra convallis posuere morbi leo urna. Rhoncus est pellentesque elit ullamcorper. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Semper feugiat nibh sed pulvinar proin. Fusce ut placerat orci nulla pellentesque dignissim enim. Vitae auctor eu augue ut lectus arcu. Libero enim sed faucibus turpis in eu. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus."},
                  {type: "unordered_list", classes: 'paragraph list circle', content: ["first", "second", "third"]},
                  {type: "text", classes: 'paragraph', content: "Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Dolor sit amet consectetur adipiscing elit ut aliquam. Proin fermentum leo vel orci porta non. Sed viverra ipsum nunc aliquet bibendum. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Gravida in fermentum et sollicitudin ac orci phasellus. Sed sed risus pretium quam. Et odio pellentesque diam volutpat commodo sed egestas. Enim ut tellus elementum sagittis. Consequat id porta nibh venenatis cras sed felis eget. Neque sodales ut etiam sit amet nisl purus. Turpis egestas maecenas pharetra convallis posuere morbi. Risus viverra adipiscing at in tellus integer. Porttitor massa id neque aliquam. Tortor at risus viverra adipiscing. Risus feugiat in ante metus. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac."}
              ]
            }
          }
        }
    }
</script>

<style lang="scss">
    @import "./src/scss/_variables.scss";

  #blog-section {

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




  .header {
    //position: relative;
    overflow: hidden;
    width: $container-width;
      padding: 2rem 5rem 0 5rem;
      max-height: 40vh;
      /*height: 300px;*/
  }

  .header-image {

      display: block;

      img {
        position: relative;
        top: 0;
        left: 0;
        bottom:0;
        right:0;
    width: 100%;
      height: auto;
      }

  }


      .blog-post {
        color: #fff;
        padding: 0 5rem;


      &-title {
          font-size: 2rem;
          margin-top: 2rem;
          text-align: justify;
          padding: 0 5rem;
      }

      &-metadata {
          margin-top: 1rem;
          padding: 0 5rem;
          display:flex;
          justify-content: space-between;
      }

      &-category {
        text-transform: uppercase;
        font-size: 1rem;
        opacity: 0.7;
        margin: 0;
      }

      &-published-date {
        font-size: 1rem;
        opacity: 0.7;
        margin: 0;
      }

      &-paragraph {
          margin-top: 2rem;
          font-size: 1.2rem;
          text-align: justify;
          line-height: 1.5em;
          padding: 0 5rem;
      }

      &-paragraph-text {
          line-height: 1.5em;
          margin-bottom: 1rem;


          &.header {
              font-size: 1.5rem;
              margin: 3rem 2rem;
              text-transform: uppercase;
              font-weight: bold;
          }

          &.emphasis {
              font-size: 1.3rem;
              margin: 3rem 2rem;
              font-style: italic;
          }

          &.list {
              margin: 3rem 5rem;
              line-height: 2em;

              &.circle ul {
                  list-style-type: disc;
              }

              &.upper-roman ol {
                  list-style-type: upper-roman;
              }

              &.lower-alpha ol {
                  list-style-type: lower-alpha;
              }

          }

      }


  }

      @media (max-width: 500px) {
    #blog-section {

      &::before{
        height: 8rem;
      }
    }
  }
</style>