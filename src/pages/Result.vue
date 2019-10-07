<template>
    <div class="body__mask">
        <main class="r_main">
            <div class="r_main__header">
                <div class="container container--small">
                    <div class="r_main__caption">
                        <h1 class="caption__h2"><span>Результаты</span> учеников</h1>
                    </div>
                </div>
            </div>
            <div class="container container--small">
                <article class="r_main__content">
                    <div class="r_main__text">
                        <p class="p-text__18 p-text--shift"><strong>
                            Мы гордимся нашими студентами, ведь большинство из них добиваются 
                            успеха в beauty-индустрии, становятся востребованными мастерами и 
                            осуществляют свои мечты.
                        </strong></p>
                        <p class="p-text__18"><strong>
                            Предлагаем ознакомиться с успехами наших выпускников                                
                        </strong></p>
                    </div>
                    <div class="r_main__img">
                        <img src="../../public/images/result/main-2.png" alt="">
                    </div>
                </article>
            </div>
        </main>

        <section class="r_review">
            <article class="r_review__block"
              v-for="(review, key, index) in reviewlist"
              :key="index"
            >
                <div class="container container--small">
                    <div class="r_review__content">
                        <div class="r_review__header">
                            <div class="r_review__img">
                                <img :src="review.avatar" alt="">
                            </div>
                            <div>
                                <p class="r_review__name">{{ review.name }}</p>
                                <p class="r_review__city">{{ review.city }}</p>
                            </div>
                        </div>
                        <div class="r_review__text" v-html="review.review">
                          <!--отзыв-->
                        </div>
                    </div>
                    <div class="r_review__appendix" 
                      :id="'lightgallery-' + key"
                      v-if="review.gallery"
                    >
                        <a 
                          v-for="(images, imgIndex) in review.gallery"
                          :key="imgIndex"
                          :href="images.url"
                        >
                          <img :src="images.url_small" alt="">
                        </a>
                    </div>
                    <div class="r_review__appendix"
                      v-else
                    >
                      <div class="r_review__photo"
                        v-if="review.photo"
                      >
                        <img :src="review.photo" alt="">
                      </div>
                      <div class="r_review__video"
                        v-if="review.video"
                      >
                        <div class="video-block__video" :id="review.video.idContainer"></div>
                        <button type="button" 
                          class="video-block__play"
                          :data-video="key"
                          @click="clickPlayVideo($event)"
                        ></button>
                      </div>
                    </div>
                </div>
            </article>
        </section>

    </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      reviewlist: {
        1: {
          avatar: '../images/result/1/avatar-1.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                Когда Ольга пришла в нашу школу, она уже имела опыт в наращивании 
                ресниц. Но ей не хотелось останавливаться на достигнутом. Желание 
                выполнять идеальное наращивание ресниц привело её к нам.
            </p>
            <p class="p-text__18 p-text--shift">
                Ольга неоднократно повышала свою квалификацию на индивидуальном 
                обучении у Виктории Безпаленко. Своим трудом наша ученица добилась 
                высокого мастерства, которое по достоинству оценили её клиенты.
            </p>
            <p class="p-text__18">
                Ольга продолжает развиваться lash-сфере. Сейчас она - призёр 
                Украины по наращиванию ресниц. Ольга активно проводит мастер-классы 
                по всей Украине, принимает участие на чемпионатах по наращиванию 
                ресниц в качестве судьи, а также выступает в качестве спикера на 
                beauty-конференциях
            </p>
          `,
          name: 'Ольга Малакуцкая',
          city: 'г. Харьков (Украина)',
          gallery: [
            {
              url: '../images/result/1/1-1.jpg',
              url_small: '../images/result/1/1-1-small.jpg'
            },
            {
              url: '../images/result/1/1-2.jpg',
              url_small: '../images/result/1/1-2-small.jpg'
            },
            {
              url: '../images/result/1/1-3.jpg',
              url_small: '../images/result/1/1-3-small.jpg'
            },
            {
              url: '../images/result/1/1-4.jpg',
              url_small: '../images/result/1/1-4-small.jpg'
            },
            {
              url: '../images/result/1/1-5.jpg',
              url_small: '../images/result/1/1-5-small.jpg'
            },
            {
              url: '../images/result/1/1-6.jpg',
              url_small: '../images/result/1/1-6-small.jpg'
            },
            {
              url: '../images/result/1/1-7.jpg',
              url_small: '../images/result/1/1-7-small.jpg'
            }
          ]
        },
        2: {
          avatar: '../images/result/2/avatar-2.jpg',
          review: `
            <p class="p-text__18">
                Всего год назад Юлия пришла в нашу школу на базовый курс “Lash Start”, 
                а уже сегодня стала ведущим мастером по наращиванию ресниц в Стамбуле!
            </p>
            <p class="p-text__18">
                Навыки, полученные в нашей школе востребованы и признаны клиентами по всему миру.
                Смотрите в видео, чего достигла Юлия
            </p>
          `,
          name: 'Юлия Кристес',
          city: 'Турция г.Стамбул',
          photo: '../images/result/2/photo-2.jpg',
          video: {
            idContainer: 'video-2',
            idVideo: 'RXa4niEyXTI',
            api: null,
            link: 'info-video'
          }
        },
        3: {
          avatar: '../images/result/3/avatar-3.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                Людмила долгое время наращивала себе ресницы у Виктории Безпаленко. 
                Глядя на успехи Виктории, решила тоже связать свою жизнь с 
                Lash-индустрией.
            </p>
            <p class="p-text__18 p-text--shift">
                Людмила очень упорно шла к цели стать лучшим мастером в своём городе. 
                Она прошла все обучающие курсы в нашей школе. Результат не 
                заставил себя долго ждать. Людмила открыла собственную студию 
                по наращиванию ресниц, и теперь сама обучает студентов.
            </p>
          `,
          name: 'Людмила Медведь',
          city: 'г. Мелитополь (Украина)',
          gallery: [
            {
              url: '../images/result/3/3-1.jpg',
              url_small: '../images/result/3/3-1-small.jpg'
            },
            {
              url: '../images/result/3/3-2.jpg',
              url_small: '../images/result/3/3-2-small.jpg'
            },
            {
              url: '../images/result/3/3-3.jpg',
              url_small: '../images/result/3/3-3-small.jpg'
            },
            {
              url: '../images/result/3/1-4.jpg',
              url_small: '../images/result/3/3-4-small.jpg'
            },
            {
              url: '../images/result/3/3-5.jpg',
              url_small: '../images/result/3/3-5-small.jpg'
            },
          ]
        },
        4: {
          avatar: '../images/result/4/avatar-4.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                Оксана - это одна из первых учениц Виктории Безпаленко, которая ещё с юных лет 
                чётко понимала, чтобы добиться успеха, нужно усердно трудиться.
                И вот, спустя 4 года у неё своя студия, она преподаватель и успешная бизнес 
                леди в любимой профессии.
            </p>
          `,
          name: 'Плаксина Оксана',
          city: '',
          gallery: [
            {
              url: '../images/result/4/4-1.jpg',
              url_small: '../images/result/4/4-1-small.jpg'
            },
            {
              url: '../images/result/4/4-2.jpg',
              url_small: '../images/result/4/4-2-small.jpg'
            },
            {
              url: '../images/result/4/4-3.jpg',
              url_small: '../images/result/4/4-3-small.jpg'
            },
            {
              url: '../images/result/4/4-4.jpg',
              url_small: '../images/result/4/4-4-small.jpg'
            },
            {
              url: '../images/result/4/4-5.jpg',
              url_small: '../images/result/4/4-5-small.jpg'
            },
          ]
        },
        5: {
          avatar: '../images/result/5/avatar-5.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                Эта амбициозная девушка ставит цель и не видит никаких преград!
                Наргиза является примером стремительного карьерного роста.
            </p>
            <p class="p-text__18 p-text--shift">
                Пройдя обучение у Виктории в июне 2015г., уже в сентябре она открыла 
                свою студию, а в декабре 2015 стала Чемпионкой России по наращиванию 
                ресниц. За столь короткий промежуток времени, Наргиза участвовала 
                в организации многочисленных мастер-классов.
            </p>
            <p class="p-text__18 p-text--shift">
                На данный момент она является представителем линейки материалов 
                для наращивания ресниц и успешным руководителем!
            </p>
          `,
          name: 'Наргиза Муртазина',
          city: 'г. Симферополь (Украина)',
          gallery: [
            {
              url: '../images/result/5/5-1.jpg',
              url_small: '../images/result/5/5-1-small.jpg'
            },
            {
              url: '../images/result/5/5-2.jpg',
              url_small: '../images/result/5/5-2-small.jpg'
            },
            {
              url: '../images/result/5/5-3.jpg',
              url_small: '../images/result/5/5-3-small.jpg'
            },
            {
              url: '../images/result/5/5-4.jpg',
              url_small: '../images/result/5/5-4-small.jpg'
            },
          ]
        },
        6: {
          avatar: '../images/result/6/avatar-6.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                На обучение Елена приехала в Севастополь, так как не успела попасть 
                на мастер-класс Виктории Безпаленко в Италии.
            </p>
            <p class="p-text__18 p-text--shift">
                Елена долго искала хорошего преподавателя среди многих стран мира и 
                её заинтересовала авторская технология Виктории, а именно тема 
                "Работа со сложными ресницами"
            </p>
            <p class="p-text__18 p-text--shift">
                На сегодняшний день, Елена чемпион Европы по наращиванию ресниц в объёмном 
                наращивании. Топовый мастер в Лондоне и владелец собственной студии!
            </p>
            <p class="p-text__18 p-text--shift">
              Смотрите видео, где Елена рассказывает о пройденном курсе
            </p>
          `,
          name: 'Елена Ким',
          city: 'Великобритания, Лондон',
          video: {
            idContainer: 'video-6',
            idVideo: 'RXa4niEyXTI',
            api: null,
            link: 'info-video'
          }
        },
        7: {
          avatar: '../images/result/7/avatar-7.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                Вероника - это прекрасный пример, когда в одном человеке гармонично 
                сочетаются замечательная мама двух деток и успешная бизнес-леди.
            </p>
            <p class="p-text__18 p-text--shift">
                В нашей школе Вероника проходила курс повышения квалификации, что дало 
                большой толчок в ее развитии, как самостоятельного мастера. 
            </p>
            <p class="p-text__18 p-text--shift">
                Она участвовала в мастер-классах и выступала спикером на Международных 
                конференциях, открыла свою школу-студию, в которой успешно проводит 
                обучение. Для Вероники наращивание ресниц - это не просто процедура, 
                она видит в этом глубокий смысл и миссию.
            </p>
          `,
          name: 'Вероника Гиберт',
          city: 'г. Никополь (Украина)',
          gallery: [
            {
              url: '../images/result/7/7-1.jpg',
              url_small: '../images/result/7/7-1-small.jpg'
            },
            {
              url: '../images/result/7/7-2.jpg',
              url_small: '../images/result/7/7-2-small.jpg'
            },
            {
              url: '../images/result/7/7-3.jpg',
              url_small: '../images/result/7/7-3-small.jpg'
            },
          ]
        },
        8: {
          avatar: '../images/result/8/avatar-8.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                В 2015 г. Любовь прошла курсы повышения квалификации в школе Виктории 
                Безпаленко в г. Краснодар. Ей были очень близки техники Виктории и 
                она активно стала отрабатывать их на практике уже после обучения.
            </p>
            <p class="p-text__18 p-text--shift">
                Некоторое время спустя, Любовь стала пробовать свои силы в различных 
                конкурсах и чемпионатах, и результат не заставил себя ждать.
            </p>
            <p class="p-text__18 p-text--shift">
                В октябре 2016 г. Любовь Стан не только стала чемпионкой, но и 
                завоевала Гран-при на Чемпионате по наращиванию ресниц 
                "Lash Designer" и путёвку в 5-ти звездочный отель на Кипр.
            </p>
          `,
          name: 'Любовь Стан',
          city: 'г.Краснодар',
          gallery: [
            {
              url: '../images/result/8/8-1.jpg',
              url_small: '../images/result/8/8-1-small.jpg'
            },
            {
              url: '../images/result/8/8-2.jpg',
              url_small: '../images/result/8/8-2-small.jpg'
            },
          ]
        },
        9: {
          avatar: '../images/result/9/avatar-9.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                Карьера Ольги началась с подработки дома, в декретном отпуске. 
                Она обучалась у Виктории и классическому наращиванию, и повышала 
                квалификацию.
            </p>
            <p class="p-text__18 p-text--shift">
                После второго курса Ольга поняла, что хочет заниматься этим серьезно. 
                И с этого момента она активно начала работать, принимать участие в 
                различных мастер классах, дважды становилась Призером Чемпионата 
                Украины по наращиванию ресниц.
            </p>
            <p class="p-text__18 p-text--shift">
                Сейчас Ольга трудится в собственной Студии и обучает юных мастеров.
            </p>
          `,
          name: 'Ольга Мержева',
          city: 'г. Мелитополь (Украина)',
          gallery: [
            {
              url: '../images/result/9/9-1.jpg',
              url_small: '../images/result/9/9-1-small.jpg'
            },
            {
              url: '../images/result/9/9-2.jpg',
              url_small: '../images/result/9/9-2-small.jpg'
            },
            {
              url: '../images/result/9/9-3.jpg',
              url_small: '../images/result/9/9-3-small.jpg'
            },
            {
              url: '../images/result/9/9-4.jpg',
              url_small: '../images/result/9/9-4-small.jpg'
            },
            {
              url: '../images/result/9/9-5.jpg',
              url_small: '../images/result/9/9-5-small.jpg'
            },
            {
              url: '../images/result/9/9-6.jpg',
              url_small: '../images/result/9/9-6-small.jpg'
            },
            {
              url: '../images/result/9/9-7.jpg',
              url_small: '../images/result/9/9-7-small.jpg'
            },
            {
              url: '../images/result/9/9-8.jpg',
              url_small: '../images/result/9/9-8-small.jpg'
            },
          ]
        },
        10: {
          avatar: '../images/result/10/avatar-10.jpg',
          review: `
            <p class="p-text__18 p-text--shift">
                Ирина – человек, который всегда знал, что она не просто работник, 
                а руководитель. Только найти любимое дело, в котором она хотела 
                бы реализоваться не так просто. Сначала Ирина пыталась учиться 
                наращиванию самостоятельно, консультируясь со своим мастером, 
                но твердо приняла решение, что необходимо пройти 
                профессиональное обучение.
            </p>
            <p class="p-text__18 p-text--shift">
                Пройдя базовый курс в нашей школе, она не только получила 
                качественные знания и навыки, но и приняла решение не 
                останавливаться на достигнутом.
            </p>
            <p class="p-text__18 p-text--shift">
                Ирина прослушала все мастер-классы и прошла все повышения 
                квалификации в школе Виктории Безпаленко. На данный момент 
                Ирина успешный мастер и преподаватель с большой клиентской 
                базой, она постоянно стремится к развитию и совершенствованию 
                навыков и знаний.
            </p>
          `,
          name: 'Ирина Шафиулина',
          city: 'г.Симферополь',
          gallery: [
            {
              url: '../images/result/10/10-1.jpg',
              url_small: '../images/result/10/10-1-small.jpg'
            },
            {
              url: '../images/result/10/10-2.jpg',
              url_small: '../images/result/10/10-2-small.jpg'
            },
            {
              url: '../images/result/10/10-3.jpg',
              url_small: '../images/result/10/10-3-small.jpg'
            },
          ]
        },
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initGalleryList();

      lightGallery(document.querySelector('#lightgallery-test')); 

      this.loadPlayer();
    },
    initGalleryList() {
      for (let key in this.reviewlist) {
        this.initGallery(key);
      }
    },
    initGallery(id) {
      if (!this.reviewlist[id].gallery) return;

      lightGallery(document.querySelector('#lightgallery-' + id)); 
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
      for (let review in this.reviewlist) {
          if (this.reviewlist[review].video)
          {
            let idContent = this.reviewlist[review].video.idContainer;
            let idVideo = this.reviewlist[review].video.idVideo;

            this.runAPIReady(idContent, idVideo, review);
          }
      }
    },
    runAPIReady(container, video, number) {
      let self = this;

      this.reviewlist[number].api = new window['YT'].Player(container, {
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

      this.reviewlist[number].api.playVideo();
    },
  }
}
</script>

