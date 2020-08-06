<template>
    <section id="about-section">
      <div class="nav-bar-spacer"></div>
      <div id="about-section-content" class="container section-content">
        <h1>About Me</h1>
        <div class="separation-line"></div>
        <div class="about">
          <div class="about-skills text">
             <p class="about-intro">I'm a Data Scientist with more than two years of working experience. My language of choice is Python, but I have experience with SQL, R, GNU Octave. I have analytical mindset with strong  attention to detail and a great passion for programming. In the recent year, I started working on front end development to develop user Interfaces to visualize data with JavaScript/ Vue.js.
            </p>
          </div>

          <div class="about-skills">
            <div class="skills" v-for="skill in skills" :key="skill.skill">
              <div class="skill-logo" :style="{ 'background-image': 'url(' + skill.logo + ')' }"></div>
            </div>
          </div>
        </div>

      </div>
      <div class="container about-section">
        <h1>Timeline</h1>
        <div class="separation-line"></div>
        <ul class="timeline">
          <li v-for="event in timeline" :key="event.title" class="elements">
            <div class="element"> <!--:class="event.classes"-->
              <div class="flag-wrapper">
                <div class="hexa"></div>
                <div class="flag">{{ event.title }}</div>
              </div>
              <div class="time-wrapper"><span class="time">{{ event.date }}</span></div>
              <div class="desc">{{ event.description }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="container certificates-section">
        <h1>Certificates</h1>
        <div class="separation-line"></div>
        <div class="certificates">
          <div v-for="certificate in certificates" :key="certificate.name" class="certificate">
            <div class="certificate-title-logo">
              <div class="certificate-logo" :style="{ 'background-image': 'url(' + certificate.logo + ')' }"></div>
              <a :href="certificate.url" target="_blank" v-if="certificate.url !== ''"><h1 class="certificate-title">{{ certificate.name }}</h1></a>
              <h1 class="certificate-title" v-if="certificate.url === ''">{{ certificate.name }}</h1>
            </div>
            <p class="certificate-date">{{ certificate.date }}</p>
            <p class="certificate-description">{{ certificate.description }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>

    export default {

        components: {
        },
        name: "About.vue",
        data () {
          return {
            timeline: [
              {classes: "", institution: "Valion NV", title: "Chatbot App", date: "Spring 2020", description: "I took a part in an internal POC for the development of a Chatbot App. This app is designed to improve the user experience of potential customers, who want to use a Chatbot on their website."},
              {classes: "", institution: "Valion NV", title: "Energy Resources Analysis", date: "2018 - 2019", description: "The goal of this project is to perform a data analysis for VEA and to discover new insights on the current state of Belgian housing based on a data-driven approach."},
              {classes: "", institution: "Valion NV", title: "Data Pipelines on AWS", date: "2018 - 2019", description: "I took part in implementing and automating data flows for assets management of Het Facilitair Bedrijf - VO. I built several data pipeline flows which involve getting data from APIs, applying ETL on them and storing them in Amazon RDS databases."},
              {classes: "", institution: "Valion NV", title: "Data Science & Machine Learning ", date: "2018 - 2019", description: "During my internship in Innovation Lab of VDAB, I had the chance to take a part in Next Best Steps (Kans op Werk) project, which is a large-scale project developed by a large team of data science/engineering experts."},
              {classes: "", institution: "Bleckmann", title: "Work", date: "Mar. 2017 - Jul. 2018", description: "Inventory of stock in a logistic company targeted on clothing industry."},
              {classes: "", institution: "Brno University of Technology", title: "Master Degree in Civil Engineering", date: "2013 - 2017", description: "In the year of 2017, I obtained a Masters Degree in the field of Water Management and Water Structures at Faculty of Civil Engineering, BUT. When preparing my final thesis “Analysis of flood situation on selected part of river.”"},
              {classes: "", institution: "Brno University of Technology", title: "Bachelor Degree in Civil Engineering", date: "2009 - 2013", description: "In 2013 I successfully obtained my Bachelors Degree at the Faculty of Civil Engineering. During this four years studies I obtained all the extensive theoretical and practical knowledge required for a future Engineer. My thesis “Revitalization of river for fish,” is focused on evaluating a part of river Svitava in therms of its habitability by aquatic animals."}
            ],
            certificates: [
              {name: "Deep Learning Nanodegree", date: "Udacity, sep. 2019", description: "Focus: Deep Learning topics such as Computer Vision | Natural Language Processing (NLP) | Convolutional Neural Networks (CNNs) | Recurrent Neural Networks (RNNs) | Generative Adversarial Networks (GANs).", url: "https://confirm.udacity.com/3QERAJML", logo: "/img/certificates/Udacity_logo.webp"},
              {name: "Machine Learning - Introduction Nanodegree", date: "Udacity, aug. 2019", description: "Focus: Most fundamental topics of Machine Learning and Artificial Intelligence.", url: "https://confirm.udacity.com/EKFP9KA", logo: "/img/certificates/Udacity_logo.webp"},
              {name: "Machine Learning By Standford University ", date: "Coursera, jul. 2019", description: "Focus: Strongly on mathematics and Machine Learning and Deep Learning theory.", url: "https://www.coursera.org/account/accomplishments/certificate/GFNZ8WUGHUFT", logo: "/img/certificates/Coursera_logo.webp"},
              {name: "The Modern JavaScript Bootcamp ", date: "Udemy, jun. 2020", description: "Focus: Bootcamp covering all essential topics to build a real-world app with JavaScript - ES6/ES7.", url: "https://www.udemy.com/certificate/UC-027ffebd-e406-4575-8f53-507c29ed5633/", logo: "/img/certificates/Udemy_logo.webp"},
              {name: "Spark and Python for Big Data with Pyspark ", date: "udemy, jan. 2020", description: "Focus: PySpark. Course on Machine Learning with Big Data using Pyspark.", url: "https://www.udemy.com/certificate/UC-XBK42HU5/", logo: "/img/certificates/Udemy_logo.webp"},
              {name: "Analyzing Your Data With Power BI for BI Professionals ", date: "u2u training, oct. 2019", description: "Focus: Power BI. On-site one week training provided by U2U nv/sa.", url: "", logo: "/img/certificates/U2U_logo.webp"},
              {name: "DataCamp Online Trainings", date: "Datacamp, 2017 - continUous", description: "Multiple trainings provided by DataCamp, covering topics such as data manipulation and cleaning, and data analysis with Python.", url: "http://datacamp.com/profile/marketaince", logo: "/img/certificates/DataCamp_logo.webp"}


            ],
            skills: [
              {logo: "/img/skills/Python_logo.webp", skill: "Python"},
              {logo: "/img/skills/R_logo.webp", skill: "R"},
              {logo: "/img/skills/AWS_logo.webp", skill: "AWS"},
              {logo: "/img/skills/GitHub_logo.webp", skill: "GitHub"},
              {logo: "/img/skills/JavaScript_logo.webp", skill: "JavaScript/ES6"},
              {logo: "/img/skills/Vue_js_logo.webp", skill: "Vue.js"},
              {logo: "/img/skills/Spark_logo.webp", skill: "PySpark"},
              {logo: "/img/skills/PowerBI_logo.webp", skill: "Power BI"}
            ]
          }
        }
    }
</script>

<style lang="scss">

@import "./src/scss/_variables.scss";

/* Desktop Settings */
#about-section {

  position: relative;

}

.about-section,
.certificates-section {

  padding-bottom: 2rem;

  h1 {
    letter-spacing: 0.2em;
    font-size: 2rem;
    padding-top: 0.5rem;
    text-align: center;
    color: #fff;

  }
}

.certificates {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  .certificate-title-logo{
    display: flex;
    align-items: flex-start;
    float: left;

    .certificate-logo {

      min-width:70px;
      width: 70px;
      height: 70px;
      background-size: 70px 70px;


      margin-right: 1rem;
      margin-bottom: 1rem;


      display: flex;
      border-radius: 50%;
      /*line-height: 73px;*/
      font-weight: bold;
      align-items: center;
      justify-content: center;
      text-align: center;
      user-select: none;
      background-position-x: 0%;
      background-position-y: 0%;
      background-repeat-x: no-repeat;
      background-repeat-y: no-repeat;
      background-attachment: scroll;
      background-origin: content-box;
      background-clip: border-box;
      background-color: transparent;
    }

  }

}

.about{
  margin: 3rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 700px 1fr;
  padding: 2rem;
}



.about-skills{

  padding: 2rem;

  &.text{
   border-color: $neutral-background;
  border-width: 0.5px;
  border-style: solid;
  background-color: rgba(255,255,255,0.05);
  }

  .skills{
    display: flex;
    align-items: center;
    float: left;

    .skill-logo {

      min-width:60px;
      width: 60px;
      height: 60px;
      background-size: 60px 60px;


      margin-right: 2rem;
      margin-bottom: 2rem;


      display: flex;
      border-radius: 50%;
      /*line-height: 73px;*/
      font-weight: bold;
      align-items: center;
      justify-content: center;
      text-align: center;
      user-select: none;
      background-position-x: 0%;
      background-position-y: 0%;
      background-repeat-x: no-repeat;
      background-repeat-y: no-repeat;
      background-attachment: scroll;
      background-origin: content-box;
      background-clip: border-box;
      background-color: white;
    }

  }
}



.certificate {

  display: flex;
  flex-direction: column;
  border-color: $neutral-background;
  border-width: 0.5px;
  border-style: solid;
  padding: 2rem;
  background-color: rgba(255,255,255,0.05);


  & .certificate-title {
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  & .certificate-date {
    font-size: 1rem;
    color: $neutral-background;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  & .certificate-description {
    font-size: 1rem;
    color: #fff;
    text-align: justify;
  }
}


.about-intro{
margin:0;
  padding:0;
}




// timeline styles

.element {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  display: block;
  position: relative;
}

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

  &:before{
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

  &:after{
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
}

.flag {
  position: relative;
  display: inline-block;
  background: $neutral-background;
  font-weight: 600;
  z-index: 15;
  padding: 6px 10px;
  border-radius: 5px;
}


.time-wrapper {
  display: block;
  position: relative;
  /*margin: 4px 0 0 0;*/
  z-index: 14;
  line-height: 1em;
  vertical-align: middle;
  color: #000000;
}

.time {
  background: $secondary;
  display: block;
  padding: 8px;
  color: #fff;
}



.desc {
  position: relative;
  margin: 1.2em 0 0 0;
  padding: 1em;
  color: #fff;
  //background: $neutral-background;
  -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  box-shadow: 0 0 1px rgba(0,0,0,0.20);
  z-index: 15;
}

.element {
  & .flag:after {
    content: "";
    position: absolute;
    left: 50%;
    height: 0;
    width: 0;
    margin-left: -8px;
    border: solid transparent;
    border-bottom-color: $neutral-background;
    border-width: 8px;
    pointer-events: none;
  }

  & .time-wrapper {
    float: none;
  }

  & .desc {
    position: relative;
    padding: 1em;
    z-index: 15;
  }
}





.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;

  &:before {
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


  & .hexa{
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

    &:before {
      border-bottom: 4px solid $secondary;
      border-left-width: 8px;
      border-right-width: 8px;
      top: -4px;
    }

    &:after {
      border-left-width: 8px;
      border-right-width: 8px;
      border-top: 4px solid $secondary;
      bottom: -4px;
    }
  }

  & li {
    padding: 2em 0;

    &:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }

  & li:nth-child(even) .flag-wrapper {
    text-align: left;
  }

  & li:nth-child(odd) .flag-wrapper {
    text-align: right;
  }



  & li:nth-child(odd) .element {
    position: relative;
    width: 647px;
    float: left;
    text-align: right;
  }

  & li:nth-child(even) .element {
    position: relative;
    width: 647px;
    float: right;
    text-align: left;
  }

  & li:nth-child(even) .hexa {
    left: -28px;
    right: auto;
    top: 14px;
  }

  & li:nth-child(odd) .hexa {
    left: auto;
    right: -28px;
    top: 14px;
  }




  & li:nth-child(odd) .element .flag {
    text-align: right;
  }

  & li:nth-child(even) .element .flag {
    text-align: left;
  }


  & li:nth-child(odd) .element .flag:after {
    left: auto;
    right: -16px;
    top: 20px;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: $neutral-background;
    border-width: 8px;
  }

  & li:nth-child(even) .element .flag:after {
    top: 20px;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: $neutral-background;
    border-width: 8px;
    left: -8px;
  }

  & li:nth-child(odd) .element .time-wrapper {
    float: right;
    margin-right: 0.5rem;

    .time {
      border-radius: 5px 0 5px 5px;
    }
  }

  & li:nth-child(even) .element .time-wrapper {
    float: left;
    margin-left: 0.5rem;

    .time {
      border-radius: 0 5px 5px 5px;
    }
  }

}

/* Desktop Settings < 1400 */
@media(max-width: 1400px) {

    .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:nth-child(odd) .element {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .timeline li:nth-child(even) .element {
    position: relative;
    width: 380px;
    float: right;
    text-align: left;
  }
}








/* Desktop Settings < 900 */
@media(max-width: 900px) {

    .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:nth-child(odd) .element {
    position: relative;
    width: 310px;
    float: left;
    text-align: right;
  }

  .timeline li:nth-child(even) .element {
    position: relative;
    width: 310px;
    float: right;
    text-align: left;
  }
}

/* Tablet Vertical Settings */
@media(max-width: 768px){

  .certificates {

      grid-template-columns: repeat(2, 1fr);

      .certificate-title-logo{

      .certificate-logo {
        min-width:50px;
        width: 50px;
        height: 50px;
        background-size: 50px 50px;
      }
    }
  }

}

/* Mobile Vertical Settings */
@media (max-width: 500px) {
  #about-section {

    &::before{
      height: 8rem;
    }
  }

  .certificates {
    display: block;

        .certificate{
      margin-bottom: 2rem;
    }

    .certificate-title-logo{

      .certificate-logo {
        min-width:30px;
        width: 30px;
        height: 30px;
        background-size: 30px 30px;
      }
    }


  }

  .certificates-section {
      margin: 2rem 0 0 0;
  }


  .timeline {
    //.hexa {
    //  text-align: left;
     // transform: translateX(-50%);
     // right: auto;
   // }
    & li:nth-child(even) .element,
    & li:nth-child(odd) .element {
      text-align: left;
      float: left;
      margin-left: 1.2rem;
    }


    & li:nth-child(even) .flag-wrapper,
    & li:nth-child(odd) .flag-wrapper{
      text-align: left;
    }

    & li:nth-child(even) .element .flag,
    & li:nth-child(odd) .element .flag{
      text-align: left;
    }

    & li:nth-child(even) .hexa,
    & li:nth-child(odd) .hexa {
          left: -28px;
    right: auto;
    }

    & li:nth-child(odd) .element .flag:after {
      top: 20px;
      margin-top: -8px;
      border: solid transparent;
      border-right-color: $neutral-background;
      border-width: 8px;
      left: -8px;
    }

    & li:nth-child(odd) .element .time-wrapper {
      float: left;
      margin-left: 0.5rem;

      .time {
        border-radius: 0 5px 5px 5px;
      }
    }


  }


  .timeline:before {
    position: absolute;
    left: 0;
  }



}
</style>