<template>
    <div class="body__mask">
        <main class="bm_main bm_main--item">
            <div class="container container--small">
                <div class="bm_main__content">
                    <div class="bm_main__img">
                        <picture>
                          <source media="(min-width: 1241px)" srcset="../../public/images/brou_master/main-1.png">
                          <img src="../../public/images/brou_master/main-1_m.png" alt="LashSchool V.Bezpalenko">
                        </picture>
                    </div>
                    <div class="bm_main__text">
                        <h1 class="caption__h2 caption--black">Курс <span>BROW MASTER + BROW PROFESSIONAL</span></h1>
                        <h2 class="under-caption__h2">Моделирование и оформление бровей</h2>
                    </div>
                </div>
            </div>
        </main>
        
        <section class="bm_if-you">
            <div class="container container--small">
                <div class="bcg__zag elems--mobile"></div>
                <h2 class="caption__h2 caption--black elem--desctop">Если ты:</h2>
                <h2 class="caption__h2 caption--black elem--mobile">Этот курс для тебя, если ты
                    <span>мастер по наращиванию ресниц</span>:
                </h2>

                <article class="bm_if-you__blocks">
                    <article class="bm_if-you__block">
                        <img src="../../public/images/brou_master/check.jpg" alt="">
                        <div>
                            <p class="p-text__16"><strong>
                                Мастер по наращиванию ресниц и хочешь:
                                </strong>
                            </p>
                            <ul class="process__ul">
                                <li>Увеличить свой доход</li>
                                <li>Расширить линейку своих услуг</li>
                                <li>Увеличить клиентскую базу</li>
                            </ul>
                        </div>
                    </article>
                    <article class="bm_if-you__block">
                        <img src="../../public/images/brou_master/check.jpg" alt="">
                        <div>
                            <p class="p-text__16"><strong>
                                Ищешь подработку к основному виду деятельности
                                </strong>
                            </p>
                        </div>
                    </article>
                    <article class="bm_if-you__block">
                        <img src="../../public/images/brou_master/check.jpg" alt="">
                        <div>
                            <p class="p-text__16"><strong>
                                Собираешься стать востребованным beauty-мастером
                                </strong>
                            </p>
                        </div>
                    </article>
                    <article class="bm_if-you__block">
                        <img src="../../public/images/brou_master/check.jpg" alt="">
                        <div>
                            <p class="p-text__16"><strong>
                                Никогда не занималась оформлением бровей и согласна 
                                учиться с нуля и перенимать опыт профессионалов.
                            </strong>
                            </p>
                        </div>
                    </article>
                </article>
            </div>
        </section>

        <section class="bm_fits">
            <div class="container container--small">
                <h2 class="caption__h2 caption--black">Тогда этот курс идеально тебе подходит!</h2>
                <div class="bcg__zag elems--mobile"></div>
                <article class="bm_fits__video-block" data-video="">
                    <!--Видео-->
                    <div class="video-block__video" :id="videoItem1.idContainer"></div>
                    <button type="button" 
                      class="video-block__play"
                      data-video="video1"
                      @click="clickPlayVideo($event)"
                    ></button>
                    <div class="process__video__label">Процесс обучения</div>
                </article>
            </div>
        </section>

        <section class="bm_why">
            <div class="container container--small">
                <article class="bm_why__content">
                    <div class="bm_why__text">
                        <h2 class="caption__h2 caption--black">Почему лэшмейкеры становятся 
                            <span>хорошими Brow-мастерами?</span></h2>
                        <p class="p-text__16 p-text--shift">
                            Наверняка, ты сталкивалась с этой проблемой, делая фото 
                            своей работы. Неухоженные брови делают образ незавершенным 
                            и способны испортить эффект от прекрасно выполненного наращивания.
                        </p>
                        <p class="p-text__16">
                            Поэтому, замечательно, если лешмейкер не только нарастит красивые 
                            ресницы, но и приведёт брови в надлежащий вид.
                        </p>
                    </div>
                    <div class="bm_why__img">
                        <img src="../../public/images/brou_master/main2.jpg" alt="">
                    </div>
                </article>
            </div>
        </section>

        <section class="bm_refuse">
            <div class="container">
                <h2 class="under-caption__h2">От такого комплекса не откажется,практически, ни одна клиентка.</h2>
                <div class="bm_refuse__blocks">
                    <article class="bm_refuse__block">
                        <p class="bm_refuse__p">
                            Себестоимость процедуры по оформлению бровей невелика, а при 
                            грамотном распределении времени занимает не более 20-40 минут.
                        </p>
                    </article>
                    <article class="bm_refuse__block">
                        <p class="bm_refuse__p">
                            Не все клиентки наращивают ресницы из месяца в месяц, многие из 
                            них делают перерыв, но приучив своих клиенток к культуре красивых, 
                            ухоженных бровей ты будешь видеться с ними не реже 2 раз в месяц!
                        </p>
                    </article>
                    <article class="bm_refuse__block">
                        <p class="bm_refuse__p">
                            Просидев неподвижно 2-3 часа, а затем переключившись на брови, ты 
                            дашь своим глазам и позвоночнику небольшой отдых и к вечеру не 
                            будешь мучаться от боли в суставах и мышцах.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="bm_button">
            <button class="btn-4 btn--red">Записаться на курс</button>
        </section>

        <section class="bm_fits">
            <div class="container container--small">
                <h2 class="caption__h2 caption--black">Пройди курс по оформлению бровей в
                        нашей школе и увеличь средний чек в 1,5 раза!</h2>
                <article class="bm_fits__video-block" data-video="">
                    <!--Видео-->
                    <div class="video-block__video" :id="videoItem2.idContainer"></div>
                    <button type="button" 
                      class="video-block__play"
                      data-video="video2"
                      @click="clickPlayVideo($event)"
                    ></button>
                    <div class="process__video__label">На моих глазах ты станешь профи</div>
                </article>
            </div>
        </section>

        <section class="bm_program">
            <div class="container container--small">
                <h2 class="caption__h2 caption--black caption--left caption--shift-40">Программа курса</h2>
                <article class="bm_program__block">
                    <h2 class="bm_program__caption">1 день</h2>
                    <h3 class="bm_program__caption-under mobile__li--red">10:00-13:30 Теоретический блок</h3>
                    <ul class="process__ul p-text--shift">
                        <li>Значение бровей;</li>
                        <li>Брови и характер. Обзор форм бровей;</li>
                        <li>Виды манипуляций с бровями - достоинства и недостатки;</li>
                        <li>Изучение форм лица, подбор подходящей формы бровей;</li>
                        <li>Тридинг (коррекция нитью);</li>
                        <li>Демонстрация преподавателем выполнение работы на модели;</li>
                    </ul>
                    <ul class="process__ul p-text--shift">
                        <li>Обзор материалов и инструментов;</li>
                        <li>Коррекция лица при помощи бровей;</li>
                        <li>Разметка бровей для нормально, близко и далеко посаженных глаз;</li>
                        <li>Строение бровей;</li>
                        <li>Основы коррекции бровей;</li>
                        <li>Особенности мужской и подрастковой коррекции бровей;</li>
                        <li>Отрисовка на тренажёрах;</li>
                    </ul>
                    
                    <h3 class="bm_program__caption-under mobile__li--red">13:30-14:00 Перерыв, обед</h3>
                    <ul class="process__ul p-text--shift">
                        <li>Окрашивание бровей краской – подбор цвета;</li>
                        <li>Практическая отработка на моделях самостоятельно, под руководством преподавателя. ( в индивидуальном порядке работает с каждым учеником) 
                            + на курсе присутствует ассистент, поэтому внимания к каждому студенту в два раза больше;</li>
                    </ul>

                    <h3 class="bm_program__caption-under mobile__li--red">16:30-17:30 Работа над ошибками. Домашнее задание</h3>
                    <p class="p-text__16">Вручение фирменных сертификатов "BROW MASTER " ведущей школы Крыма.</p>

                    <div class="bm_fits__video">
                        <article class="bm_fits__video-block" data-video="">
                            <!--Видео-->
                            <div class="video-block__video" :id="videoItem3.idContainer"></div>
                            <button type="button" 
                              class="video-block__play"
                              data-video="video3"
                              @click="clickPlayVideo($event)"
                            ></button>
                            <div class="process__video__label">Процесс обучения Brow-мастеров</div>
                        </article>
                    </div>
                </article>   
                
                <article class="bm_program__block">
                    <h2 class="bm_program__caption ">2 день</h2>
                    <h3 class="bm_program__caption-under mobile__li--red">2-й день. "Brow Professional"</h3>
                    <h3 class="bm_program__caption-under mobile__li--red">10:00-13:00 Теоретический блок</h3>
                    <ul class="process__ul p-text--shift">
                        <li>Проверка домашнего задания;</li>
                        <li>Биовыпрямление бровей;</li>
                        <li>Работа с проблемными бровями;</li>
                        <li>Ламинирование бровей;</li>
                        <li>Окрашивание в технике омбре, градиент;</li>
                        <li>Колористика в работе с хной</li>
                        <li>Реконструкция бровей – заполнение пробелов, шрамов, при помощи искусственных (наращивание бровей);</li>
                        <li>Окрашивание бровей Prof Henna и биотатуаж хной. Демонстрация работы, преподавателем на модели.</li>
                    </ul>

                    <h3 class="bm_program__caption-under mobile__li--red">13:00-13:30 Перерыв.Обед</h3>
                    <div class="bm_program__p">
                        <h3 class="bm_program__caption-under mobile__li--red">14:00- 16:30</h3> 
                        <p class="p-text__16">Практическая отработка формы и окрашивание хной на моделях самостоятельно, 
                            под руководством преподавателя (в индивидуальном порядке) + на курсе присутствует ассистент, 
                            поэтому внимания к каждому студенту в два раза больше.
                        </p>
                    </div>
                    <h3 class="bm_program__caption-under mobile__li--red">16:30-17:00 Работа над ошибками</h3>
                    <h3 class="bm_program__caption-under">Вручение фирменных сертификатов "BROW PROFESSIONAL" от 
                        ведущей beauty школы Крыма.</h3>
                    <h3 class="bm_program__caption-under">После обучения, все студенты получают фото своих работ 
                        до и после, для использования в своём портфолио</h3>

                    <div class="gallery__plagin">
                        <carousel-3d :perspective="0"
                          :controlsVisible="true" 
                          :space="(clientW > 1200) ? 200 : 150" 
                          :width="(clientW > 1200) ? 500 : 310" 
                          :height="(clientW > 1200) ? 470 : 290" 
                          :border="0"
                          :display="3"
                        >
                          <slide :index="0">
                            <img src="../../public/images/brou_master/gallery/gallery-0.jpg">
                          </slide>
                          <slide :index="1">
                            <img src="../../public/images/brou_master/gallery/gallery-1.jpg">
                          </slide>
                          <slide :index="2">
                            <img src="../../public/images/brou_master/gallery/gallery-2.jpg">
                          </slide>
                          <slide :index="3">
                            <img src="../../public/images/brou_master/gallery/gallery-3.jpg">
                          </slide>
                          <slide :index="4">
                            <img src="../../public/images/brou_master/gallery/gallery-4.jpg">
                          </slide>
                          <slide :index="5">
                            <img src="../../public/images/brou_master/gallery/gallery-5.jpg">
                          </slide>
                          <slide :index="6">
                            <img src="../../public/images/brou_master/gallery/gallery-6.jpg">
                          </slide>
                          <slide :index="7">
                            <img src="../../public/images/brou_master/gallery/gallery-7.jpg">
                          </slide>
                        </carousel-3d>
                    </div>
                </article>
            </div>
        </section>

        <section class="bm_review">
            <div class="container container--small">
                <h2 class="caption__h2 caption--black">Отзывы студентов о курсе:</h2>
            </div>
            <div class="container">
                <div class="bm_review__blocks">
                    <article class="bm_review__video-block"
                      v-for="(video, key, index) in videoList"
                      :key="index"
                    >
                        <!--Видео-->
                        <div class="video-block__video" :id="video.idContainer"></div>
                        <button type="button" 
                          class="video-block__play"
                          :data-video="key"
                          @click="clickPlayVideo($event)"
                        ></button>
                    </article>
                </div>
            </div>
        </section>

        <section class="bm_review-text">
            <div class="container container--small">
                <div class="bm_review-text__content carousel-text">
                    <carousel-3d :controlsVisible="true" :width="800" :height="500" :display="1" 
                      :disabled="true"
                      :space="365"
                      :dickable="false"
                      :border="0"
                    >
                        <slide :index="0">
                          <article class="review-text__block">
                            <div class="review-text__header">
                              <div class="review-text__avatar">
                                <img src="../../public/images/brou_master/review/avatar-1.jpg" alt="">
                              </div>
                              <p class="p-text__18 p-text--upercase">
                                <strong>Мария Богда</strong>
                              </p>
                            </div>
                            <div class="review-text__text">
                              <p class="p-text__16 p-text--shift">
                                Очень довольна курсами BROW MASTER + PROFESSIONAL! в LashSchool 
                                V.Bezpalenko.
                              </p>
                              <p class="p-text__16 p-text--shift">
                                Знающие и любящие своё дело преподаватели всё рассказали, показали 
                                как правильно работать, готовые конспекты с рисунками предоставили 
                                в подарок. На практике все показали, рассказали.
                              </p>
                              <p class="p-text__16 p-text--shift">
                                Сама школа предоставила для отработки своих моделей. Первые работы 
                                по бровям уже есть. Сертифицированные материалы для работы. Что 
                                немаловажно в нашей профессии. Чтоб наши будущие клиенты чувствовали, 
                                что о их здоровье заботятся.
                              </p>
                              <p class="p-text__16 p-text--shift">
                                Приятная и дружная атмосфера, в которой день прошёл с позитивом. 
                                Всё организовано и отработано до мелочей. Теперь буду только в 
                                вашей школе повышать свои навыки. Хороших вам учеников и процветания!
                              </p>
                            </div>
                          </article>
                        </slide>
                        <slide :index="1">
                          <article class="review-text__block">
                              <img src="../../public/images/brou_master/review/1.jpg">
                              <a :href="require('../../public/images/brou_master/review/1.jpg')" 
                                class="link_block" target="_blank"></a>
                          </article>
                        </slide>
                        <slide :index="2">
                          <article class="review-text__block">
                              <img src="../../public/images/brou_master/review/2.jpg">
                              <a :href="require('../../public/images/brou_master/review/2.jpg')" 
                                class="link_block" target="_blank"></a>
                          </article>
                        </slide>
                        <slide :index="3">
                          <article class="review-text__block">
                              <img src="../../public/images/brou_master/review/3.jpg">
                              <a :href="require('../../public/images/brou_master/review/3.jpg')" 
                                class="link_block" target="_blank"></a>
                          </article>
                        </slide>
                        <slide :index="4">
                          <article class="review-text__block">
                              <img src="../../public/images/brou_master/review/4.jpg">
                              <a :href="require('../../public/images/brou_master/review/4.jpg')" 
                                class="link_block" target="_blank"></a>
                          </article>
                        </slide>
                        <slide :index="5">
                          <article class="review-text__block">
                              <img src="../../public/images/brou_master/review/5.jpg">
                              <a :href="require('../../public/images/brou_master/review/5.jpg')" 
                                class="link_block" target="_blank"></a>
                          </article>
                        </slide>
                        <slide :index="6">
                          <article class="review-text__block">
                              <img src="../../public/images/brou_master/review/6.jpg">
                              <a :href="require('../../public/images/brou_master/review/6.jpg')" 
                                class="link_block" target="_blank"></a>
                          </article>
                        </slide>
                        <slide :index="7">
                          <article class="review-text__block">
                              <img src="../../public/images/brou_master/review/7.jpg">
                              <a :href="require('../../public/images/brou_master/review/7.jpg')" 
                                class="link_block" target="_blank"></a>
                          </article>
                        </slide>
                    </carousel-3d>
                </div>
            </div>
        </section>

        <section class="bm_form">
            <div class="container container--small">
                <article class="bm_form__block">
                    <div class="bm_form__text">
                        <h2 class="caption__h2 caption--left">Запишись на курс BROW MASTER + BROW PROFESSIONAL”!</h2>
                        <p class="bm_form__p">Это прямой путь к дополнительному доходу и довольным клиентам!</p>
                    </div>
                    <div class="bm_form__form">
                        <form action="">
                            <label class="label">
                                <input type="text" name="name" placeholder="Как вас зовут?">
                            </label>
                            <label class="label">
                                <input type="text" name="phone" placeholder="Введите № телефона">
                            </label>
                            <label class="label-check">
                                <input type="checkbox">
                                <span></span>
                                <p>Я даю согласие на обработку моих персональных данных</p>
                            </label>

                            <button class="btn-5">Хочу на курс по оформлению бровей</button>
                        </form>
                    </div>
                </article>
            </div>
        </section>

        <section class="bm_cours">
            <div class="container container--small">
                <h2 class="bm_cours__caption">Ознакомься с другими нашими курсами</h2>
                <div class="bm_cours__content">
                    <article class="cours__block cours__block--1">
                        <div class="cours__block__text">
                            <p class="cours__p">
                                Курс
                            </p>
                            <p class="cours__caption cours__caption--22">
                                “Lash Start”
                            </p>
                            <p class="cours__p">
                                1 ступень наращивание ресниц для новичков
                            </p>
                            <a href="/pages/lash-start" class="link_block"></a>
                        </div>
                        <img src="../../public/images/course/course-1.jpg" alt="Курс Lash Start">
                    </article>
                    <article class="cours__block cours__block--2">
                        <div class="cours__block__text">
                            <p class="cours__p">
                                Курс
                            </p>
                            <p class="cours__caption cours__caption--22">
                                "Lash Professional"
                            </p>
                            <p class="cours__p">
                                2 ступень 2D-3D объёмы
                            </p>
                            <a href="/pages/lash-professional" class="link_block"></a>
                        </div>
                        <img src="../../public/images/course/course-2.jpg" alt="Курс Lash Professional">
                    </article>
                    <article class="cours__block cours__block--3">
                        <div class="cours__block__text">
                            <p class="cours__p">
                                Курс
                            </p>
                            <p class="cours__caption cours__caption--22">
                                "Lash Expert"
                            </p>
                            <p class="cours__p">
                                "Работа со сложными ресницами" (МЕГА ОБЪЁМЫ от 4 D)
                            </p>
                            <a href="/pages/lash-expert" class="link_block"></a>
                        </div>
                        <img src="../../public/images/course/course-3.jpg" alt="Курс Lash Expert">
                    </article>
                    <article class="cours__block cours__block--4">
                        <div class="cours__block__text">
                            <p class="cours__p">
                                Курс
                            </p>
                            <p class="cours__caption cours__caption--22">
                                "Ламинирова- ние ресниц+ <span>Botox Lashes"</span>
                            </p>
                            <a href="/pages/laminirovanie" class="link_block"></a>
                        </div>
                        <img src="../../public/images/course/course-4.jpg" alt="Курс Ламинирова- ние ресниц+ Botox Lashes">
                    </article>
                </div>

                <div class="link--center">
                  <a href="/pages/raspisanie" class="btn-6">Смотреть расписание
                      <span class="btn-icon btn-icon--15 icon-svg--sheet" viewBox="0 0 100 100">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                              width="470.586px" height="470.586px" viewBox="0 0 470.586 470.586" style="enable-background:new 0 0 470.586 470.586;"
                          >
                              <path d="M327.081,0H90.234C74.331,0,61.381,12.959,61.381,28.859v412.863c0,15.924,12.95,28.863,28.853,28.863H380.35
                                  c15.917,0,28.855-12.939,28.855-28.863V89.234L327.081,0z M333.891,43.184l35.996,39.121h-35.996V43.184z M384.972,441.723
                                  c0,2.542-2.081,4.629-4.635,4.629H90.234c-2.55,0-4.619-2.087-4.619-4.629V28.859c0-2.548,2.069-4.613,4.619-4.613h219.411v70.181
                                  c0,6.682,5.443,12.099,12.129,12.099h63.198V441.723z M128.364,128.89H334.15c5.013,0,9.079,4.066,9.079,9.079
                                  c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079C119.285,132.957,123.352,128.89,128.364,128.89z
                                  M343.229,198.98c0,5.012-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
                                  C339.163,189.901,343.229,193.968,343.229,198.98z M343.229,257.993c0,5.013-4.066,9.079-9.079,9.079H128.364
                                  c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15C339.163,248.914,343.229,252.98,343.229,257.993z
                                  M343.229,318.011c0,5.013-4.066,9.079-9.079,9.079H128.364c-5.012,0-9.079-4.066-9.079-9.079s4.067-9.079,9.079-9.079H334.15
                                  C339.163,308.932,343.229,312.998,343.229,318.011z"/>
                          </svg>                       
                      </span>
                  </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'BrowMaster',
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      clientW: 0,

      videoItem1: {
        idContainer: 'video-1',
        idVideo: 'RXa4niEyXTI',
        api: null,
        link: 'info-video'
      },
      videoItem2: {
        idContainer: 'video-2',
        idVideo: 'RXa4niEyXTI',
        api: null,
        link: 'info-video'
      },
      videoItem3: {
        idContainer: 'video-3',
        idVideo: 'RXa4niEyXTI',
        api: null,
        link: 'info-video'
      },
      videoList: {
        video4: {
          idContainer: 'video-4',
          idVideo: 'RXa4niEyXTI',
          api: null,
          link: 'info-video'
        },
        video5: {
          idContainer: 'video-5',
          idVideo: 'RXa4niEyXTI',
          api: null,
          link: 'info-video'
        },
        video6: {
          idContainer: 'video-6',
          idVideo: 'RXa4niEyXTI',
          api: null,
          link: 'info-video'
        },
      },
      videoListApi: {}
    }
  },
  created() {
    this.clientW = document.body.clientWidth;
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
      let YT;
      if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
          let scriptYT = document.createElement("script");
  
          scriptYT.src = "https://www.youtube.com/iframe_api";

          document.body.appendChild(scriptYT);
      }

      window.onYouTubePlayerAPIReady = () => {
        this.onYouTubePlayer();
      };
    },
    onYouTubePlayer() {
      let idContent1 = this.videoItem1.idContainer;
      let idVideo1 = this.videoItem1.idVideo;
      let idContent2 = this.videoItem2.idContainer;
      let idVideo2 = this.videoItem2.idVideo;
      let idContent3 = this.videoItem3.idContainer;
      let idVideo3 = this.videoItem3.idVideo;

      this.runAPIReady(idContent1, idVideo1, 'video1');
      this.runAPIReady(idContent2, idVideo2, 'video2');
      this.runAPIReady(idContent3, idVideo3, 'video3');

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
  }
}
</script>

