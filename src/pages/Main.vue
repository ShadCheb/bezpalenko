<template>
    <div class="body__mask">
        <main class="main" id="main">
            <div class="main__bcg">
                <img src="../../public/images/main-1.jpg">
            </div>
            <header class="header">
                <div class="container">
                    <div class="main__header">
                        <div class="btn__menu elems--mobile">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div class="main__logo">
                            <picture>
                              <source media="(min-width: 1241px)" srcset="../../public/images/logo.png">
                              <img src="../../public/images/logo-black.png" alt="LashSchool V.Bezpalenko">
                            </picture>
                        </div>
                        <div class="icon__container elems--mobile mobile__flex-end">
                          <a href="https://www.instagram.com/bezpalenkovika/" 
                            class="icon-28--inst icon-svg--white"
                            target="_blank"
                          >
                              <svg viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0"/><path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0"/>
                              </svg>
                          </a>
                          <a href="https://vk.com/lashbezpalenko" 
                            class="icon-28--vk icon-svg--white"
                            target="_blank"
                          >
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.145 19.5c3.472 0 2.234-2.198 2.502-2.83-.004-.472-.008-.926.008-1.202.22.062.739.325 1.811 1.367 1.655 1.67 2.078 2.665 3.415 2.665h2.461c.78 0 1.186-.323 1.389-.594.196-.262.388-.722.178-1.438-.549-1.724-3.751-4.701-3.95-5.015a2.84 2.84 0 0 1 .103-.175h-.002c.632-.835 3.044-4.449 3.399-5.895a.019.019 0 0 0 .002-.008c.192-.66.016-1.088-.166-1.33-.274-.362-.71-.545-1.299-.545h-2.461c-.824 0-1.449.415-1.765 1.172-.529 1.345-2.015 4.111-3.129 5.09a64.114 64.114 0 0 1 .007-3.233c.036-1.535.152-3.029-1.441-3.029H9.339c-.998 0-1.953 1.09-.919 2.384.904 1.134.325 1.766.52 4.912-.76-.815-2.112-3.016-3.068-5.829-.268-.761-.674-1.466-1.817-1.466H1.594C.596 4.501 0 5.045 0 5.956 0 8.002 4.529 19.5 12.145 19.5zM4.055 6.001c.217 0 .239 0 .4.457.979 2.883 3.175 7.149 4.779 7.149 1.205 0 1.205-1.235 1.205-1.7l-.001-3.702C10.372 6.98 9.926 6.37 9.633 6l3.508.004c.002.017-.02 4.095.01 5.083 0 1.403 1.114 2.207 2.853.447 1.835-2.071 3.104-5.167 3.155-5.293.075-.18.14-.241.376-.241H22.006l-.002.009c-.225 1.05-2.446 4.396-3.189 5.435l-.034.05c-.327.534-.593 1.124.045 1.954h.001c.058.07.209.234.429.462.684.706 3.03 3.12 3.238 4.08-.138.022-.288.006-2.613.011-.495 0-.882-.74-2.359-2.23-1.328-1.292-2.19-1.82-2.975-1.82-1.524 0-1.413 1.237-1.399 2.733.005 1.622-.005 1.109.006 1.211-.089.035-.344.105-1.009.105C5.8 18 1.668 7.929 1.509 6.004c.055-.005.812-.002 2.546-.003z"/>
                              </svg>
                          </a>
                        </div>
                        <nav class="main__nav">
                            <ul>
                                <li>
                                    <a href="/">О школе</a>
                                </li>
                                <li>
                                    <a href="#0"
                                      @click.prevent="moveLink('our_courses')"
                                    >Наши курсы</a>
                                </li>
                                <li>
                                    <a href="/pages/raspisanie">Расписание</a>
                                </li>
                                <li>
                                    <a href="/pages/prepodavateli">Преподаватели</a>
                                </li>
                                <li>
                                    <a href="/pages/result">Результаты учеников</a>
                                </li>
                                <li>
                                    <a href="/pages/vakansii">Вакансии</a>
                                </li>
                                <li>
                                    <a href="#0"
                                      @click.prevent="moveLink('contacts')"
                                    >Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div class="container main__container">
                <div class="main__content">
                    <h1 class="main__caption-h1">
                        <span>Школа по</span>
                        <span class="main__caption-h1__gradient">моделированию</span>
                        <span class="main__caption-h1__gradient">взгляда</span>
                    </h1>
                    <ul class="main__ul">
                        <li>наращивание ресниц</li>
                        <li>оформление бровей</li>
                        <li>ламинирование ресниц</li>
                    </ul>
        
                    <button class="btn-1 btn-1--white" @click="openModalRecord">Записаться на обучение</button>
                </div>

                <div class="main__under-text">
                    <p class="p-text__16">Международный аккредитованный
                            учебный центр по моделированию
                            взгляда в Севастополе и Симферополе</p>
                    <div class="icon__container elem--desctop">
                        <a href="https://www.instagram.com/bezpalenkovika/" 
                          class="icon-28--inst icon-svg--white"
                          target="_blank"
                        >
                            <svg viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg">
                                <path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0"/><path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0"/>
                            </svg>
                        </a>
                        <a href="https://vk.com/lashbezpalenko" 
                          class="icon-28--vk icon-svg--white"
                          target="_blank"
                        >
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.145 19.5c3.472 0 2.234-2.198 2.502-2.83-.004-.472-.008-.926.008-1.202.22.062.739.325 1.811 1.367 1.655 1.67 2.078 2.665 3.415 2.665h2.461c.78 0 1.186-.323 1.389-.594.196-.262.388-.722.178-1.438-.549-1.724-3.751-4.701-3.95-5.015a2.84 2.84 0 0 1 .103-.175h-.002c.632-.835 3.044-4.449 3.399-5.895a.019.019 0 0 0 .002-.008c.192-.66.016-1.088-.166-1.33-.274-.362-.71-.545-1.299-.545h-2.461c-.824 0-1.449.415-1.765 1.172-.529 1.345-2.015 4.111-3.129 5.09a64.114 64.114 0 0 1 .007-3.233c.036-1.535.152-3.029-1.441-3.029H9.339c-.998 0-1.953 1.09-.919 2.384.904 1.134.325 1.766.52 4.912-.76-.815-2.112-3.016-3.068-5.829-.268-.761-.674-1.466-1.817-1.466H1.594C.596 4.501 0 5.045 0 5.956 0 8.002 4.529 19.5 12.145 19.5zM4.055 6.001c.217 0 .239 0 .4.457.979 2.883 3.175 7.149 4.779 7.149 1.205 0 1.205-1.235 1.205-1.7l-.001-3.702C10.372 6.98 9.926 6.37 9.633 6l3.508.004c.002.017-.02 4.095.01 5.083 0 1.403 1.114 2.207 2.853.447 1.835-2.071 3.104-5.167 3.155-5.293.075-.18.14-.241.376-.241H22.006l-.002.009c-.225 1.05-2.446 4.396-3.189 5.435l-.034.05c-.327.534-.593 1.124.045 1.954h.001c.058.07.209.234.429.462.684.706 3.03 3.12 3.238 4.08-.138.022-.288.006-2.613.011-.495 0-.882-.74-2.359-2.23-1.328-1.292-2.19-1.82-2.975-1.82-1.524 0-1.413 1.237-1.399 2.733.005 1.622-.005 1.109.006 1.211-.089.035-.344.105-1.009.105C5.8 18 1.668 7.929 1.509 6.004c.055-.005.812-.002 2.546-.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <section class="learn" id="learn">
            <div class="container">
                <h2 class="caption__h2">Чему ты можешь <span>научиться?</span></h2>

                <article class="learn__blocks">
                    <article class="learn__block">
                        <p class="p-text__16">
                            Сейчас каждая девушка мечтает быть идеалом красоты. 
                            Не следить за своей внешностью считается дурным тоном. 
                            Поэтому мастера beauty-сферы становятся всё более 
                            востребованными.
                        </p>
                    </article>
                    <article class="learn__block">
                        <p class="p-text__16">
                            В нашей школе ты можешь получить профессию 
                            <span class="p-select--red">мастера по 
                            наращиванию ресниц, мастера-бровиста, мастера по ламинированию 
                            ресниц,</span> а также пройти 
                            <span class="p-select--red">повышение квалификации.</span>
                        </p>
                    </article>
                    <article class="learn__block">
                        <p class="p-text__16">
                            Вeauty-индустрия постоянно развивается, поэтому мы 
                            тщательно следим за трендами и даем ученикам только 
                            актуальные навыки и знания по авторским программам.
                        </p>
                    </article>
                </article>
            </div>
        </section>

        <section class="fact">
            <div class="container">
                <h2 class="caption__h2 caption--black"><span>5 фактов</span> о нашей школе</h2>

                <article class="fact__blocks">
                    <article class="fact__block fact__block--horizon">
                        <p class="fact__number benefits__number">8</p>
                        <p class="fact__text">
                            лет учебной практики
                        </p>
                    </article>
                    <article class="fact__block fact__block--horizon">
                        <p class="fact__number benefits__number">17</p>
                        <p class="fact__text">
                            авторских курсов
                        </p>
                    </article>
                    <article class="fact__block fact__block--vertical">
                        <p class="fact__text">более</p>
                        <p class="fact__number benefits__number">9000</p>
                        <p class="fact__text">
                            учеников по всему миру
                        </p>
                    </article>
                    <article class="fact__block fact__block--vertical">
                        <p class="fact__number benefits__number">1375</p>
                        <p class="fact__text">
                            студентов-чемпионов
                        </p>
                    </article>
                    <article class="fact__block">
                        <p class="p-text__16 p-text--upercase p-text--center">
                            комплекс уникального опыта и знаний от 
                            команды профессионалов
                            <span class="p-select--bold">
                                с 10-летним стажем
                            </span>
                        </p>
                    </article>
                    <article class="fact__block fact__block--horizon">
                        <p class="fact__number benefits__number">12</p>
                        <p class="fact__text">
                            стран, где прошли наши курсы
                        </p>
                    </article>
                </article>
            </div>
            
            <div class="bcg__sheet-1"></div>
        </section>

        <section class="prof">
            <div class="container">
                <h2 class="caption__h2 caption--black"><span>Какие профессии</span>
                 ты сможешь получить в нашей школе?</h2>
                <article class="prof__content">
                  <ul class="process__ul p-text--shift">
                    <li>Мастер по наращиванию ресниц</li>
                    <li>Мастер-бровист</li>
                    <li>Мастер по ламиниированию ресниц</li>
                  </ul>
                  <p class="p-text__16">+ Ты можешь повысить свою квалификацию</p>
                </article>
                <p class="p-text__16 prof__p">Вeauty-индустрия постоянно развивается, 
                  поэтому мы тщательно следим за трендами и даем ученикам 
                  только актуальные навыки и знания по авторским программам.</p>
            </div>            
            <div class="bcg__sheet-1"></div>
        </section>

        <section class="this">
            <div class="container">
                <article class="this__blocks">
                    <div class="this__text">
                        <h2 class="caption__h2"><span>LashSchool V.Bezpalenko</span> это:</h2>
                        <ul class="this__ul">
                            <li>
                                <span class="this__ul__number">1</span>
                                Победители в номинации <strong>“Лучший учебный центр по наращиванию ресниц 
                                и оформлению бровей”</strong> на премии “Лидер года” в 2016, 2017 и 2018 годах
                            </li>
                            <li>
                                <span class="this__ul__number">2</span>
                                Лауреаты Федерального конкурса, организованного депутатами ГосДумы 
                                “Сделано в России” 
                            </li>
                            <li>
                                <span class="this__ul__number">3</span>
                                Организаторы чемпионата по наращиванию ресниц “LashChamp” и 
                                спикеры конференций по всему миру
                            </li>
                        </ul>
                    </div>
                    <div class="this__img">
                        <picture>
                          <source media="(min-width: 1241px)" srcset="../../public/images/this-2.png">
                          <img src="../../public/images/this-2_m.png" alt="LashSchool V.Bezpalenko">
                        </picture>
                    </div>
                </article>
            </div>
        </section>

        <section class="tr-center">
            <div class="container">
                <article class="tr-center__blocks">
                    <div class="tr-center__video">
                        <article class="tr-center__video-block" data-video="">
                            <div class="video-block__bcg-1"></div>
                            <div class="video-block__bcg-2"></div>
                            <!--Видео-->
                            <div class="video-block__video" :id="video1.idContainer"></div>
                            <button type="button" 
                              class="video-block__play"
                              data-video="video1"
                              @click="clickPlayVideo($event)"
                            ></button>
                        </article>
                    </div>
                    <div class="tr-center__text">
                        <div class="tr-center__li">
                          <p class="p-text__16">
                              <span class="p-select--bold p-text--upercase">LashSchool V.Bezpalenko</span> 
                              -  это единственный в Крыму аккредитованный
                              учебный центр с правом выдавать
                              дипломы государственного образца.
                          </p>
                        </div>
                        <hr class="hr">
                        <div class="tr-center__li">
                          <p class="p-text__16">
                              Для начинающих мастеров наша школа станет опорной 
                              платформой для яркого и успешного старта.
                          </p>
                          <p class="p-text__16">
                              Мастера-лэшмейкеры с опытом могут повысить свою 
                              квалификацию, получить дополнительную мотивацию к 
                              развитию и ответы на все вопросы.
                          </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section class="cours" id="our_courses">
            <div class="bcg__cours-1"></div>
            <div class="container">
                <div class="cours__content">
                    <div class="cours__caption-h2">
                        <div class="cours__caption-h2__content">
                            <div class="caption__circle__content">
                              <span class="caption__circle"></span>
                              <span class="caption__circle"></span>
                              <span class="caption__circle"></span>
                            </div>
                            <h2 class="caption__h2">Наши <span>курсы</span></h2>
                        </div>
                    </div>
                    
                    <div class="cours__blocks">
                        <article class="cours__block cours__block--1">
                            <div class="cours__block__text">
                                <p class="cours__p">
                                    Курс
                                </p>
                                <p class="cours__caption">
                                    "Lash Start"
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
                                <p class="cours__caption">
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
                                <p class="cours__caption">
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
                                <p class="cours__caption">
                                    "Ламинирова- ние ресниц+ <span>Botox Lashes"</span>
                                </p>
                                <a href="/pages/laminirovanie" class="link_block"></a>
                            </div>
                            <img src="../../public/images/course/course-4.jpg" alt="Курс Ламинирова- ние ресниц+ Botox Lashes">
                        </article>
                        <article class="cours__block cours__block--5">
                            <div class="cours__block__text">
                                <p class="cours__p">
                                    Курс
                                </p>
                                <p class="cours__caption">
                                    "Brow Master" + "Brow Professional" 
                                </p>
                                <p class="cours__p">
                                    Моделирование и оформление бровей
                                </p>
                                <a href="/pages/brow-master" class="link_block"></a>
                            </div>
                            <img src="../../public/images/course/course-5.jpg" alt="Курс Brow Master + Brow Professionals">
                        </article>
                    </div>
                </div>
            </div>
            <div class="bcg__sheet-2"></div>
        </section>

        <section class="idea">
            <div class="container">
                <article class="idea__block">
                    <p>
                        Как тебе идея зарабатывать в день месячную з/п офисного работника?
                        Или управлять своим графиком работы самостоятельно?
                        И проводить больше времени с семьей?                            
                    </p>
                    <p>
                        <strong>
                            Всё это реально для наших выпускниц
                            Убедись в этом сама!
                        </strong>
                    </p>
                </article>
                
                <button class="btn-2 btn--red btn--arrow" @click="openModalRecord">
                  <span>Записаться на обучение</span></button>
            </div>
        </section>

        <section class="process">
            <div class="container">
                <h2 class="caption__h2 caption--black">Как проходит <span>обучение в нашей школе?</span></h2>
                <article class="process__blocks">
                    <div class="process__video">
                        <article class="process__video-block" data-video="">
                            <!--Видео-->
                            <div class="video-block__video" :id="video2.idContainer"></div>
                            <button type="button" 
                              class="video-block__play"
                              data-video="video2"
                              @click="clickPlayVideo($event)"
                            ></button>
                            <div class="process__video__label">Хочешь узнать?</div>
                        </article>
                    </div>
                    <div class="process__text">
                        <p class="p-text__16 p-text--shift"><strong>Все курсы состоят из теоретической 
                                и практической частей.</strong><p>
                        <p class="p-text__16 p-text--shift"><strong>Теория</strong> сопровождается видео-презентацией и 
                            подробными иллюстрациями, а после, ты получишь конспект 
                            по теории.</p>
                        <p class="p-text__16 p-text--shift"><strong>Практика</strong> занимает большую часть курса и 
                            является основной. Ты сможешь отработать полученные 
                            навыки на нескольких моделях под руководством преподавателя 
                            и ассистента, так что внимания хватит всем.</p>
                        <p>Для работы на курсе мы предоставим тебе:</p>
                        <ul class="process__ul p-text--shift">
                            <li>Инструменты и материалы премиум-класса, 
                                на которых работает вся сеть наших студий</li>
                            <li>Моделей для отработки полученных знаний и навыков</li>
                            <li>Питание</li>
                        </ul>
                        <p class="p-text__16">После курса ты получишь сертификат об 
                            обучении в лучшей школе Крыма.</p> 
                    </div>
                </article>
                <div class="link--center">
                  <a href="/pages/prepodavateli" class="btn-2 btn--red btn--arrow">
                    <span>Узнать больше о преподавателях</span>
                  </a>
                </div>
            </div>
        </section>

        <section class="after">
            <div class="container">
                <article class="after__text">
                    <h2 class="caption__h2">А что после <span>обучения?</span></h2>
                    <p class="p-text--shift">Мы не бросаем своих учеников. Ты всегда 
                        можешь проконсультироваться с преподавателем даже после обучения.</p>
                    <p class="p-text--shift">А лучшие ученицы могут получить работу 
                        в сети наших студий сразу после обучения.</p>
                    <p class="p-text--shift">Ты по желанию можешь получить 
                        сертификат государственного образца, что будет 
                        свидетельствовать о получении качественных знаний при 
                        оформлении документов на работу.</p>
                    <p class="p-text--shift">Большинство наших выпускниц работают 
                        по профессии, полученной у нас, и приходят на 
                        повышение квалификации.</p>                        
                </article>
            </div>
            <div class="after__block-img">
              <picture>
                <source media="(min-width: 1241px)" srcset="../../public/images/aftrer-1.png">
                <img src="../../public/images/aftrer-1_m.png" alt="LashSchool V.Bezpalenko" class="after__img">
              </picture>
              <div class="bcg__sheet-3"></div>
            </div>
        </section>

        <section class="result">
            <div class="container">
                <div class="link--center">
                  <a href="/pages/result" class="btn-2 btn--red btn--arrow">
                    <span>Посмотреть результаты учеников</span>
                  </a>
                </div>
            </div>
            <div class="bcg__sheet-3"></div>
        </section>

        <section class="why">
            <div class="container">
                <h2 class="caption__h2 caption--black">Почему стоит обучаться <span>имено у нас?</span></h2>
                <div class="why__blocks">
                    <article class="why__block">
                        <img src="../../public/images/after/after-1.jpg" alt="Прибыльная профессия">
                        <div class="why__block__text">
                            Ты хочешь сменить свою профессию на прибыльную и 
                            творческую, но не знаешь как это сделать?
                        </div>
                    </article>
                    <article class="why__block">
                        <img src="../../public/images/after/after-2.jpg" alt="Развитие для мастеров">
                        <div class="why__block__text">
                            Ты опытный мастер, но хочешь развиваться дальше? 
                            Тебя не устраивает твой доход и вечная нехватка 
                            личного времени?
                        </div>
                    </article>
                    <article class="why__block">
                        <img src="../../public/images/after/after-3.jpg" alt="Качественное обучение">
                        <div class="why__block__text">
                            Ты ищешь самое качественное обучение, после которого 
                            у тебя не останется вопросов и ты сможешь стать 
                            успешным мастером?
                        </div>
                    </article>
                    <article class="why__block">
                        <img src="../../public/images/after/after-4.jpg" alt="Лучшие курсы">
                        <div class="why__block__text">
                            Ты уже прошла курсы в других школах, но получила 
                            больше вопросов, чем ответов?
                        </div>
                    </article>
                </div>

                <div class="arrow">
                </div>

                <div class="why__quote">
                    <div class="why__quote__img">
                        <img src="../../public/images/why-1.jpg" alt="Школа по моделированию взгляда">
                    </div>
                    <div class="why__quote__text">
                        <p class="p-text__16">
                            Наша школа по моделированию взгляда - то место, где 
                            дают практические навыки, а не просто теоретические 
                            знания, которые можно найти в интернете. Мы гарантируем 
                            индивидуальный подход к каждому студенту. А широкий 
                            выбор курсов помогает развиваться мастерам любого 
                            уровня, “с нуля” до управления собственной сетью 
                            студий по наращиванию ресниц.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="address" id="contacts">
            <div class="container">
                <div class="adress__caption">
                    <h2 class="caption__h2">Где мы <span>находимся?</span></h2>
                    <div class="address__circle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p class="address__under-text p-text__16">
                      Наши учебные центры расположены в Крыму 
                      в 2-х городах <strong>Севастополе и Симферополе</strong>.
                    </p>
                </div>

                <div class="address__blocks">
                    <div class="address__map--left">
                        <div class="address__map__container">
                            <div>
                                <img src="../../public/images/address-2.jpg" alt="">
                                <div class="address__map__map">
                                    <!--Карта-->
                                  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aee0f6c05e86a015ced0c6676894ff62c3098b6d2c6ce41c013b80ed30d08b522&amp;source=constructor" width="150%" height="150%" frameborder="0"></iframe>
                                </div>
                                <div class="address__map__text">
                                    <p class="p-text__16">
                                        Учебный центр в Севастополе
                                        пр.Генерала Острякова 166-Б
                                    </p>
                                </div>
                            </div>
                            <div class="address__circle"></div> 
                        </div>
                        <div class="address__btn__container">
                            <button class="btn__video"></button>
                            <p class="p-text__16">Как нас найти в Севастополе</p>
                        </div>
                    </div>
                    <div class="address__btn">
                        <div class="address__text">
                            <p class="p-text__16">
                                Наши учебные центры расположены в Крыму 
                                в 2-х городах Севастополе и Симферополе.
                            </p>
                        </div>
                        <div class="address__btns__container">
                            <div class="address__btn__container">
                                <button class="btn__video"></button>
                                <p class="p-text__16">Как нас найти в Севастополе</p>
                            </div>
                            <div class="address__btn__container">
                                <button class="btn__video"></button>
                                <p class="p-text__16">Как нас найти в Симферополе</p>
                            </div>
                        </div>
                        <div class="bcg__line--left">
                        </div>
                        <div class="bcg__line--right">
                        </div>
                    </div>
                    <div class="address__map--right">
                        <div class="address__map__container">
                            <div>
                                <img src="../../public/images/address-2.jpg" alt="">
                                <div class="address__map__map">
                                    <!--Карта-->
                                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A241c433cf36b2416509586127838921f1d42efc53865bb7cc162b2709811c2cb&amp;source=constructor" width="150%" height="150%" frameborder="0"></iframe>
                                </div>
                                <div class="address__map__text">
                                    <p class="p-text__16">
                                        Учебный центр в Симферополе
                                        ул.Вилар 45 (2 этаж)                                        
                                    </p>
                                </div>
                            </div>
                            <div class="address__circle"></div> 
                        </div>
                        <div class="address__btn__container">
                            <button class="btn__video"></button>
                            <p class="p-text__16">Как нас найти в Симферополе</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="wait">
            <div class="container">
                <h2 class="caption__h2">Чего же ты ждешь?</h2>
                <div class="wait__text">
                    <p class="p-text__16">Места в группах заканчиваются быстро. Успей получить 
                        востребованную прибыльную профессию в удобную для тебя дату.</p>
                </div>
                <div class="wait__btns">
                    <button class="btn-3 btn--red" @click="openModalQuestion">
                        Задать вопрос
                        <span class="btn-icon icon-svg--question">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.357 31.357">
                                <path d="M15.255 0c5.424 0 10.764 2.498 10.764 8.473 0 5.51-6.314 7.629-7.67 9.62-1.018 1.481-.678 3.562-3.475 3.562-1.822 0-2.712-1.482-2.712-2.838 0-5.046 7.414-6.188 7.414-10.343 0-2.287-1.522-3.643-4.066-3.643-5.424 0-3.306 5.592-7.414 5.592-1.483 0-2.756-.89-2.756-2.584C5.339 3.683 10.084 0 15.255 0zm-.211 24.406a3.492 3.492 0 0 1 3.475 3.476 3.49 3.49 0 0 1-3.475 3.476 3.49 3.49 0 0 1-3.476-3.476 3.491 3.491 0 0 1 3.476-3.476z"/>
                            </svg>
                        </span>
                    </button>
                    <button class="btn-3 btn--white" @click="openModalRecord">
                        Записаться на курс
                        <span class="btn-icon icon-svg--pen">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;">
                            <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981
                                c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611
                                C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069
                                L27.473,390.597L0.3,512.69z"/>
                        </svg>                       
                        </span>
                    </button>
                    <a href="/pages/raspisanie" class="btn-3 btn--white">
                        Смотреть расписание
                        <span class="btn-icon icon-svg--sheet" viewBox="0 0 100 100">
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
            <div class="bcg__sheet-6">
            </div>
        </section>

        <footer class="footer">
            <div class="container">
                <div class="footer__content">
                    <div class="footer__col-1">
                        <a href="https://www.instagram.com/bezpalenkovika/" 
                          class="footer__link"
                          target="_blank"
                        >
                            <span class="icon-28--inst">
                                <svg viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0"/><path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0"/>
                                </svg>
                            </span>
                            <span class="footer__link__text">bezpalenkovika</span>
                        </a>
                        <a href="https://vk.com/lashbezpalenko" 
                          class="footer__link"
                          target="_blank"
                        >
                            <span class="icon-28--vk">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.145 19.5c3.472 0 2.234-2.198 2.502-2.83-.004-.472-.008-.926.008-1.202.22.062.739.325 1.811 1.367 1.655 1.67 2.078 2.665 3.415 2.665h2.461c.78 0 1.186-.323 1.389-.594.196-.262.388-.722.178-1.438-.549-1.724-3.751-4.701-3.95-5.015a2.84 2.84 0 0 1 .103-.175h-.002c.632-.835 3.044-4.449 3.399-5.895a.019.019 0 0 0 .002-.008c.192-.66.016-1.088-.166-1.33-.274-.362-.71-.545-1.299-.545h-2.461c-.824 0-1.449.415-1.765 1.172-.529 1.345-2.015 4.111-3.129 5.09a64.114 64.114 0 0 1 .007-3.233c.036-1.535.152-3.029-1.441-3.029H9.339c-.998 0-1.953 1.09-.919 2.384.904 1.134.325 1.766.52 4.912-.76-.815-2.112-3.016-3.068-5.829-.268-.761-.674-1.466-1.817-1.466H1.594C.596 4.501 0 5.045 0 5.956 0 8.002 4.529 19.5 12.145 19.5zM4.055 6.001c.217 0 .239 0 .4.457.979 2.883 3.175 7.149 4.779 7.149 1.205 0 1.205-1.235 1.205-1.7l-.001-3.702C10.372 6.98 9.926 6.37 9.633 6l3.508.004c.002.017-.02 4.095.01 5.083 0 1.403 1.114 2.207 2.853.447 1.835-2.071 3.104-5.167 3.155-5.293.075-.18.14-.241.376-.241H22.006l-.002.009c-.225 1.05-2.446 4.396-3.189 5.435l-.034.05c-.327.534-.593 1.124.045 1.954h.001c.058.07.209.234.429.462.684.706 3.03 3.12 3.238 4.08-.138.022-.288.006-2.613.011-.495 0-.882-.74-2.359-2.23-1.328-1.292-2.19-1.82-2.975-1.82-1.524 0-1.413 1.237-1.399 2.733.005 1.622-.005 1.109.006 1.211-.089.035-.344.105-1.009.105C5.8 18 1.668 7.929 1.509 6.004c.055-.005.812-.002 2.546-.003z"/>
                                </svg>
                            </span>
                            <span class="footer__link__text">lashbezpalenko</span>
                        </a>
                    </div>
                    <div class="footer__nav-container">
                        <ul class="footer__nav">
                            <li><a href="/">О школе</a></li>
                            <li><a href="#0" @click.prevent="moveLink('our_courses')">Наши курсы</a></li>
                            <li><a href="/pages/raspisanie">Расписание</a></li>
                            <li><a href="/pages/prepodavateli">Преподаватели</a></li>    
                        </ul>                    
                        <ul class="footer__nav">
                            <li><a href="/pages/result">Результаты <br>учеников</a></li>
                            <li><a href="/pages/vakansii">Вакансии</a></li>
                            <li><a href="#0" @click.prevent="moveLink('contacts')">Контакты</a></li>
                        </ul>
                    </div>
                    <div class="footer__col-1">
                        <p class="p-text--upercase">Записаться по тел.</p>
                        <a href="tel:+79788915324" class="footer__phone-link">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="792px" height="792px" viewBox="0 0 792 792" style="enable-background:new 0 0 792 792;" xml:space="preserve">
                            <path d="M521.806,792c0,0,71.889,0,71.889-71.997V71.997C593.694,0,521.806,0,521.806,0H270.194c0,0-71.889,0-71.889,71.997
                                v648.006C198.306,792,270.194,792,270.194,792H521.806z M396,762.022c-19.841,0-35.944-16.104-35.944-35.944
                                c0-19.842,16.103-35.944,35.944-35.944c19.842,0,35.944,16.103,35.944,35.944C431.944,745.919,415.842,762.022,396,762.022z
                                    M342.083,43.888c0-4.457,2.121-7.944,4.78-7.944h98.272c2.624,0,4.781,3.559,4.781,7.944v2.121c0,4.457-2.157,7.944-4.781,7.944
                                h-98.272c-2.624,0-4.78-3.559-4.78-7.944V43.888z M234.25,89.861h323.5v575.111h-323.5V89.861z"/>
                        </svg>                       
                            +7 (978) 891-53-24</a>
                    </div>
                </div>
            </div>
            <div class="bcg__sheet-4"></div>
        </footer>

        <app-record 
          v-if="modalRecord"
          @emitclosemodal="modalRecord = false"
        >
        </app-record>

        <app-question
          v-if="modalQuestion"
          @emitclosemodal="modalQuestion = false"
        >
        </app-question>
    </div>
</template>

<script>
import $ from 'jquery';
import Record     from '../components/Record.vue';
import Question   from '../components/Question.vue';

export default {
  name: 'Main',
  components: {
    AppRecord:     Record,
    AppQuestion:   Question
  },
  data() {
    return {
      video1: {
        idContainer: 'video-1',
        idVideo: 'RXa4niEyXTI',
        api: null,
      },
      video2: {
        idContainer: 'video-2',
        idVideo: 'RXa4niEyXTI',
        api: null,
      },

      modalRecord: false,
      modalQuestion: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getRequest();

      this.loadPlayer();
    },
    getRequest(){
      let link = this.getGet('link');

      if (link) this.moveLink(link);
    },
    getGet(key) {
      let s = window.location.search;

      s = s.match(new RegExp(key + '=([^&=]+)'));

      return s ? s[1] : false;
    },
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
      let idVideo1 = this.video1.idVideo;
      let idVideo2 = this.video2.idVideo;

      this.runAPIReady('video-1', idVideo1, 'video1');
      this.runAPIReady('video-2', idVideo2, 'video2');
    },
    runAPIReady(container, video, number) {
      let self = this;

      this[number].api = new window['YT'].Player(container, {
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

      this[number].api.playVideo();
    },

    // Перемещение
    /*Меню перемещение*/
    moveLink(link) {
        if (!link) return;

        link = '#' + link;
        let V = 0.2;
        let w = window.pageYOffset;  // прокрутка
        let t = document.querySelector(link).getBoundingClientRect().top;  // отступ от окна браузера до id
        let start = null;

        window.scrollTo(0,w + t);
    },

    // Мдальные окна
    openModalRecord() {
      this.modalRecord = true;
    },
    openModalQuestion() {
      this.modalQuestion = true;
    }


    /* init() {
      this.addScript();
      $('.benefits__number').spincrement({
          thousandSeparator: "",
          duration: 1200
      });
    },
    addScript() {
      let script = document.createElement("script");
  
          script.src = "../js/jquery.spincrement.min.js";
          document.body.appendChild(script);
    } */
  }
}
</script>

