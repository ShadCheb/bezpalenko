<template>
    <div class="body__mask">
        <main class="v_main">
            <div class="container">
                <article class="v_main__content">
                    <div class="v_main__img">
                        <img src="../../public/images/vakansii/main-2.png" alt="">
                    </div>
                    <div class="v_main__text">
                        <div class="v_main__caption">Вакансии для мастера</div>
                        <p class="v_main__under-caption">в Севастополе и Симферополе</p>
                        <p class="v_main__p">
                            Студия наращивания ресниц
                            Виктории Безпаленко разыскивает своего лэшмейкера.                                
                        </p>
                    </div>
                </article>
            </div>
            <div class="container container--small">
                <div class="v_main__blocks">
                    <article class="v_main__block">
                        <div class="v_main__block__caption grey">Тебе надоело</div>
                        <ul class="v_main__block_ul">
                            <li>Вечно искать клиентов</li>
                            <li>Платить за аренду и рекламу</li>
                            <li>Тратиться на материалы и оборудование</li>
                            <li>Зарабатывать  копейки?</li>
                        </ul>
                    </article>
                    <article class="v_main__block">
                        <div class="v_main__block__caption red">Ты хочешь</div>
                        <ul class="v_main__block_ul">
                            <li>Стабильно высокий заработок</li>
                            <li>Свободный график работы</li>
                            <li>Возможность развиваться в профессии</li>
                        </ul>
                    </article>
                </div>
            </div>
        </main>

        <section class="v_vakansia">
            <div class="container container--small">
                <article class="v_vakansia__blocks">
                    <div class="v_vakansia__text">
                        <p class="p-text__20 p-text--upercase"><strong>
                            Тогда вакансия в нашей студии тебе подходит!                                
                        </strong></p>
                    </div>
                    <div class="v_vakansia__btn">
                        <button class="btn-7">Мне интересна эта вакансия</button>
                    </div>
                </article>
            </div>
        </section>

        <section class="v_people">
            <div class="container container--small">
                <article class="v_people__content">
                    <div class="v_people__text">
                        <h2 class="caption__h2 caption--shift-40 caption--black caption--left">
                            Нам действительно нужны <span>особые люди</span>, потому что:
                        </h2>
                        <p class="v_people__p">
                            Мы лучшая студия по Наращиванию ресниц в Крыму
                        </p>
                        <p class="v_people__p">
                            Нам доверяют сотни девушек свои реснички и уверены на 100% в качестве выполнения работы                            
                        </p>
                        <p class="v_people__p">
                            Нас рекомендуют и приглашают на различные мероприятия в качестве экспертов
                        </p>
                        <p class="v_people__p">
                            На нашу студию равняются и хотят быть похожими
                        </p>
                    </div>
                    <div class="v_people__img">
                        <img src="../../public/images/vakansii/people-1.jpg" alt="">
                    </div>
                </article>
            </div>
        </section>
        
        <section class="v_say">
            <div class="container container--small">
                <p class="v_say__p">Ты думаешь, что все наши мастера сразу после школы
                        пришли в наращивание ресниц? Тогда для начала</p>
                <p class="caption__h2 caption--shift-40 caption--black"><span>расскажем о нашем коллективе.</span></p>
                <p>Все наши девочки-мастерицы раньше были бухгалтерами, банковскими сотрудниками, 
                    продавцами, менеджерами в офисах и учителями и хотели поменять свою жизнь.</p>
            </div>
        </section>

        <section class="v_photo">
            <div class="container">
                <div class="v_photo__img">
                    <img src="../../public/images/vakansii/photo-1.jpg" alt="">
                    <img src="../../public/images/vakansii/photo-2.jpg" alt="">
                    <img src="../../public/images/vakansii/photo-3.jpg" alt="">
                </div>
            </div>
        </section>

        <section class="v_they">
            <div class="container container--small">
                <article class="v_they__content">
                    <div class="v_they__block">
                        <div class="v_they__label">Теперь они</div>
                        <ul class="v_they__list">
                            <li>Являются мастерами лучшей студии по наращиванию ресниц;</li>
                            <li>Имеют доход выше среднего и могут порадовать себя ежемесячным шопингом;</li>
                        </ul>
                    </div>
                    <div class="v_they__block">
                        <ul class="v_they__list">
                            <li>Поднимаются по карьерной лестнице до преподавателей и успешно ведут 
                                МК по России и за границей;</li>
                            <li>Всем коллективом ежегодно мы отдыхаем в разных странах;</li>
                            <li>Они работают в красивой профессии и потрясающе выглядят сами.</li>
                        </ul>
                    </div>
                </article>
            </div>
            <div class="v_they__bcg"></div>
        </section>

        <section class="bm_fits">
            <div class="container container--small">
                <div class="bm_fits__video">
                    <article class="bm_fits__video-block">
                        <!--Видео-->
                        <div class="video-block__video" :id="videoItem.idContainer"></div>
                        <button type="button" 
                          class="video-block__play"
                          data-video="video-1"
                          @click="clickPlayVideo($event)"
                        ></button>
                    </article>
                </div>
            </div>
        </section>

        <section class="v_trainer">
            <div class="container container--small">
                <article class="v_trainer__content">
                    <div class="v_trainer__img">
                        <img src="../../public/images/vakansii/trainer-1.png" alt="">
                    </div>
                    <div class="v_trainer__text">
                        <div class="v_trainer__label">
                            Виктория Безпаленко
                        </div>
                        <p class="p-text__18">основатель и руководитель сети студий - 
                            трепетно относится к своим сотрудникам, обучает каждого 
                            индивидуально, чтобы гости студии, приходя к любому мастеру, 
                            были уверены в качестве.</p>
                    </div>
                </article>
            </div>
        </section>

        <section class="v_come">
            <div class="container container--small">
                <h2 class="caption__h2 caption--black caption--shift-0">Подходишь ли ты нам?</h2>
                <p class="p-text__18">Обязательно откликнись на эту вакансию, если:</p>

                <div class="v_come__blocks">
                    <ul class="v_they__list">
                        <li>Ты устала самостоятельно искать себе клиентов</li>
                        <li>Ты понимаешь преимущества работы в специализированной студии</li>
                    </ul>
                    <ul class="v_they__list">
                        <li>Тебе важно работать в дружном коллективе </li>
                        <li>Тебе хочется стабильности и доход выше среднего</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="v_why">
            <div class="container container--small">
                <article class="v_why__content">
                    <div class="v_why__caption">
                        <h2 class="caption__h2 caption--left">Почему именно в сети студий Виктории Безпаленко?</h2>
                    </div>
                    <div class="v_why__text">
                        <ul class="v_why__list">
                            <li>Зарплата наших мастеров больше, чем у большинства домашних лешмейкеров</li>
                            <li>Все мастера работают по авторским методикам наращивания</li>
                            <li>Мы первые узнаём о всех новинках Lash-индустрии</li>
                            <li>У нас более 1000 положительных отзывов</li>
                            <li>У нас уже 4 студии и мы готовимся к открытию новых.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>

        <section class="v_thought">
            <div class="container container--small">
                <p class="p-text__20"><strong>Возможно ты подумала, что у тебя недостаточно навыков, 
                    чтобы работать в лучшей студии Крыма?</strong></p>
                <div class="v_thought__content">
                    <p class="p-text__18">При подборе сотрудников мы ориентируемся на личные 
                        качества человека и его желание работать у нас. 
                        Всему остальному мы научим.
                    </p>
                    <button class="btn-7"
                      @click.prevent="openModalJob"
                    >Откликнуться на вакансию</button>
                </div>
            </div>
        </section>

        <section class="v_video">
            <div class="container">
                <div class="bm_review__blocks">
                    <article class="bm_review__video-block"
                      v-for="(video, index) in videoList"
                      :key="index"
                    >
                        <!--Видео-->
                        <div class="video-block__video" :id="video.idContainer"></div>
                        <button type="button" 
                          class="video-block__play"
                          :data-video="video.idContainer"
                          @click="clickPlayVideo($event)"
                        ></button>
                    </article>


                    <!--<article class="bm_review__video-block" data-video="">
                        <div class="video-block__video"></div>
                        <button type="button" class="video-block__play"></button>
                    </article>
                    <article class="bm_review__video-block" data-video="">
                        <div class="video-block__video"></div>
                        <button type="button" class="video-block__play"></button>
                    </article>-->
                </div>
            </div>
        </section>

        <section class="v_gallery">
            <div class="container container--small">
                <h2 class="caption__h2 caption--black">А вот наш дружный и красивый коллектив:</h2>
                <div class="gallery__plagin">
                  <carousel-3d 
                    :perspective="0" 
                    :space="200" 
                    :controlsVisible="true" 
                    :width="500"
                    :border="0"
                  >
                    <slide :index="0">
                      <img src="../../public/images/vakansii/gallery/gallery-0.jpg">
                    </slide>
                    <slide :index="1">
                      <img src="../../public/images/vakansii/gallery/gallery-1.jpg">
                    </slide>
                    <slide :index="2">
                      <img src="../../public/images/vakansii/gallery/gallery-2.jpg">
                    </slide>
                  </carousel-3d>
                </div>
            </div>
        </section>

        <section class="p_btn">
            <div class="container">
                <div class="lp_button__circle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button class="btn-7" @click.prevent="openModalJob">
                    Хочу у вас работать
                </button>
                <div class="lp_button__circle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>

        <app-job 
          v-if="modalJob"
          @emitclosemodal="modalJob = false"
        >
        </app-job>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Job   from '../components/Job.vue';

export default {
  name: 'Vakansii',
  components: {
    Carousel3d,
    Slide,
    AppJob: Job
  },
  data() {
    return {
      modalJob: false,

      videoItem: {
        idContainer: 'video-1',
        idVideo: 'RXa4niEyXTI',
        api: null,
        link: 'info-video'
      },
      videoList: {
        video1: {
          idContainer: 'video-2',
          idVideo: 'RXa4niEyXTI',
          api: null,
          link: 'info-video'
        },
        video2: {
          idContainer: 'video-3',
          idVideo: 'RXa4niEyXTI',
          api: null,
          link: 'info-video'
        },
        video3: {
          idContainer: 'video-4',
          idVideo: 'RXa4niEyXTI',
          api: null,
          link: 'info-video'
        },
      },
      videoListApi: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.loadPlayer();
    },
    // Видео
    loadPlayer() {
      // let YT;

      if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
          let scriptYT = document.createElement("script");
  
          scriptYT.src = "https://www.youtube.com/iframe_api";

          document.body.appendChild(scriptYT);

          window.onYouTubePlayerAPIReady = () => {
              this.onYouTubePlayer();
          };
      } else this.onYouTubePlayer();      
    },
    onYouTubePlayer() {
      let idContent1 = this.videoItem.idContainer;
      let idVideo1 = this.videoItem.idVideo;

      this.runAPIReady(idContent1, idVideo1, 'video0');

      for (let video in this.videoList) {
        let idContent = this.videoList[video].idContainer;
        let idVideo = this.videoList[video].idVideo;

        this.runAPIReady(idContent, idVideo, video);
      }
    },
    runAPIReady(container, video, number) {
      let self = this;

      this.videoListApi[number] = new window['YT'].Player(container, {
          videoId: video,
          playerVars: {
              modestbranding: 1,
              rel: 0,
          },
          events: {
              'onPlay': self.clickPlayVideo
          }
      });
    },
    clickPlayVideo(e) {
      let target = e.target;
      let number = target.dataset.video;

      target.classList.add('hidden');
      target.parentElement.classList.add('play');

      this.videoListApi[number].playVideo();
    },

    openModalJob() {
      this.modalJob = true;
    }
  }
}
</script>

