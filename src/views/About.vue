<template>
    <section id="about-section">
      <div class="nav-bar-spacer"></div>
      <div id="about-section-content" class="container section-content">
        <h1>About Me</h1>
        <div class="separation-line"></div>
        <p class="about-intro">I'm a Data Scientist with more than two years of working experience. My language of choice is Python, but I have experience with SQL, R, GNU Octave. I have analytical mindset with strong  attention to detail and a great passion for programming. In the recent year, I started working on front end development to develop user Interfaces to visualize data with JavaScript/ Vue.js.
        </p>
      </div>
      <div class="container about-section">
        <h1>Timeline</h1>
        <ul class="timeline">
          <li v-for="event in timeline" :key="event.title">
            <div :class="event.classes">
              <div class="flag-wrapper">
                <span class="hexa"></span>
                <span class="flag">{{ event.title }}</span>
                <span class="time-wrapper"><span class="time">{{ event.date }}</span></span>
              </div>
              <div class="desc">{{ event.description }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container certificates-section">
        <h1>Certificates</h1>
        <div class="certificates">
          <div v-for="certificate in certificates" :key="certificate.name" class="certificate">
            <a :href="certificate.url" target="_blank" v-if="certificate.url !== ''"><h1 class="certificate-title">{{ certificate.name }}</h1></a>
            <h1 class="certificate-title" v-if="certificate.url === ''">{{ certificate.name }}</h1>
            <p class="certificate-date">{{ certificate.date }}</p>
            <p class="certificate-description">{{ certificate.description }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "About.vue",
        data () {
          return {
            timeline: [
              {classes: "direction-r", institution: "Valion NV", title: "Chatbot App", date: "Spring 2020", description: "I took a part in an internal POC for the development of a Chatbot App. This app is designed to improve the user experience of potential customers, who want to use a Chatbot on their website."},
              {classes: "direction-l", institution: "Valion NV", title: "Energy Resources Analysis", date: "2018 - 2019", description: "The goal of this project is to perform a data analysis for VEA and to discover new insights on the current state of Belgian housing based on a data-driven approach."},
              {classes: "direction-r", institution: "Valion NV", title: "Data Pipelines on AWS", date: "2018 - 2019", description: "I took part in implementing and automating data flows for assets management of Het Facilitair Bedrijf - VO. I built several data pipeline flows which involve getting data from APIs, applying ETL on them and storing them in Amazon RDS databases."},
              {classes: "direction-l", institution: "Valion NV", title: "Data Science & Machine Learning ", date: "2018 - 2019", description: "During my internship in Innovation Lab of VDAB, I had the chance to take a part in Next Best Steps (Kans op Werk) project, which is a large-scale project developed by a large team of data science/engineering experts."},
              {classes: "direction-r", institution: "Bleckmann", title: "Work", date: "Mar. 2017 - Jul. 2018", description: "Inventory of stock in a logistic company targeted on clothing industry."},
              {classes: "direction-l", institution: "Brno University of Technology", title: "Master Degree in Civil Engineering", date: "2013 - 2017", description: "In the year of 2017, I obtained a Masters Degree in the field of Water Management and Water Structures at Faculty of Civil Engineering, BUT. When preparing my final thesis “Analysis of flood situation on selected part of river.”"},
              {classes: "direction-r", institution: "Brno University of Technology", title: "Bachelor Degree in Civil Engineering", date: "2009 - 2013", description: "In 2013 I successfully obtained my Bachelors Degree at the Faculty of Civil Engineering. During this four years studies I obtained all the extensive theoretical and practical knowledge required for a future Engineer. My thesis “Revitalization of river for fish,” is focused on evaluating a part of river Svitava in therms of its habitability by aquatic animals."}
            ],
            certificates: [
              {name: "Deep Learning | Nanodegree Certificate", date: "Udacity, sep. 2019", description: "Focus: Deep Learning topics such as Computer Vision | Natural Language Processing (NLP) | Convolutional Neural Networks (CNNs) | Recurrent Neural Networks (RNNs) | Generative Adversarial Networks (GANs).", url: "https://confirm.udacity.com/3QERAJML", logo: ""},
              {name: "Machine Learning - Introduction | Nanodegree Certificate", date: "Udacity, aug. 2019", description: "Focus: Most fundamental topics of Machine Learning and Artificial Intelligence.", url: "https://confirm.udacity.com/EKFP9KA", logo: ""},
              {name: "Machine Learning By Standford University | Certificate", date: "Coursera, jul. 2019", description: "Focus: Strongly on mathematics and Machine Learning and Deep Learning theory.", url: "https://www.coursera.org/account/accomplishments/certificate/GFNZ8WUGHUFT", logo: ""},
              {name: "The Modern JavaScript Bootcamp | Certificate", date: "Udemy, jun. 2020", description: "Focus: Bootcamp covering all essential topics to build a real-world app with JavaScript - ES6/ES7.", url: "https://www.udemy.com/certificate/UC-027ffebd-e406-4575-8f53-507c29ed5633/", logo: ""},
              {name: "Spark and Python for Big Data with Pyspark | Certificate", date: "udemy, jan. 2020", description: "Focus: PySpark. Course on Machine Learning with Big Data using Pyspark.", url: "https://www.udemy.com/certificate/UC-XBK42HU5/", logo: ""},
              {name: "Analyzing Your Data With Power BI for BI Professionals | Certificate", date: "u2u training, oct. 2019", description: "Focus: Power BI. On-site one week training provided by U2U nv/sa.", url: "", logo: ""},
              {name: "DataCamp Online Trainings", date: "Datacamp, 2017 - continUous", description: "Multiple trainings provided by DataCamp, covering topics such as data manipulation and cleaning, and data analysis with Python.", url: "http://datacamp.com/profile/marketaince", logo: ""}


            ]
          }
        }
    }
</script>

<style lang="scss">
    @import "./src/scss/_variables.scss";

  #about-section {

    position: relative;

    &::before{
      content:'';
      background: url('../assets/Nasa_red.png') no-repeat center 30% /cover;
      position: fixed;
      top:0;
      left:0;
      width:100vw;
      height: 4rem;
      z-index: 17;
      border-bottom: 3px $secondary solid;;

    }
  }

  .about-section,
  .certificates-section {

    padding-bottom: 2rem;

    h1 {
      letter-spacing: 0.2em;
      font-size: 2rem;
      padding-top: 1rem;
      text-align: center;
      color: #fff;

    }
  }

  .certificates {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }

  .certificate {

    display: flex;
    flex-direction: column;

    & .certificate-title {
      font-size: 1.2rem;
      text-align: left;
      margin-bottom: 1rem;
    }

    & .certificate-date {
      font-size: 1rem;
      color: $neutral-background;
      text-transform: uppercase;
    }

    & .certificate-description {
      font-size: 1rem;
      color: #fff;
      text-align: justify;
    }
  }

/*@import url(https://fonts.googleapis.com/css?family=Raleway:400,900);*/

/*body{*/
/*  font-family: 'Raleway', sans-serif;*/
/*  color: #333;*/
/*}*/

/*header h1{*/
/*  text-align: center;*/
/*  font-weight: bold;*/
/*  margin-top: 0;*/
/*}*/

/* header p{*/
/*   text-align: center;*/
/*   margin-bottom: 0;*/
/* }*/

.hexa{
  border: 0px;
  float: left;
  text-align: center;
  height: 35px;
  width: 60px;
  font-size: 22px;
  background: $secondary;
  color: #000000;
  position: relative;
  margin-top: 15px;
}

.hexa:before{
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 15px solid $secondary;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: -15px;
}

.hexa:after{
  content: "";
  position: absolute;
  left: 0;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 15px solid $secondary;
  bottom: -15px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213,213,213);
  background: -moz-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
  background: -webkit-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -o-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -ms-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: linear-gradient(to bottom, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  z-index: 5;
}

.timeline li {
  padding: 2em 0;
}

.timeline .hexa{
  width: 16px;
  height: 10px;
  position: absolute;
  background: $secondary;
  z-index: 5;
  left: 0;
  right: 0;
  margin-left:auto;
  margin-right:auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid $secondary;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid $secondary;
  bottom: -4px;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  text-align: center;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: $neutral-background;
  font-weight: 600;
  z-index: 15;
  padding: 6px 10px;
  text-align: left;
  border-radius: 5px;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -15px;
  height: 0;
  width: 0;
  margin-left: -8px;
  border: solid transparent;
  border-bottom-color: $neutral-background;
  border-width: 8px;
  pointer-events: none;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 0 0;
  z-index: 14;
  line-height: 1em;
  vertical-align: middle;
  color: #000000;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.time {
  background: $secondary;
  display: inline-block;
  padding: 8px;
  color: #fff;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  color: #fff;
  //background: $neutral-background;
  -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  box-shadow: 0 0 1px rgba(0,0,0,0.20);
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  z-index: 15;
}

@media(min-width: 768px){

  .certificates{
    grid-template-columns: repeat(2, 1fr);
  }


  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .timeline .hexa {
    left: -28px;
    right: auto;
    top: 8px;
  }

  .timeline .direction-l .hexa {
    left: auto;
    right: -28px;
  }

  .direction-l {
    position: relative;
    width: 310px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 310px;
    float: right;
    text-align: left;
  }

  .flag-wrapper {
    display: inline-block;
  }

  .flag {
    font-size: 18px;
  }

  .direction-l .flag:after {
    left: auto;
    right: -16px;
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: $neutral-background;
    border-width: 8px;
  }

  .direction-r .flag:after {
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: $neutral-background;
    border-width: 8px;
    left: -8px;
  }

  .time-wrapper {
    display: inline;
    vertical-align: middle;
    margin: 0;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    padding: 5px 10px;
  }

  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }
}

@media(min-width: 992px){
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .direction-l {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 380px;
    float: right;
    text-align: left;
  }
}

@media (max-width: 500px) {
  #about-section {

    &::before{
      height: 8rem;
    }
  }

  .certificates {
    display: block;
  }


  .timeline {
    .hexa {
      text-align: left;
      transform: translateX(-50%);
      right: auto;
    }
  }


  .timeline:before {
    position: absolute;
    left: 0;
  }

  .certificates-section {
      margin: 2rem 0 0 0;
  }
}
</style>