<template>
  <div>
    <header class="header header--page">
        <div class="container">
            <div class="main__header">
                <div class="btn__menu elems--mobile">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="main__logo">
                    <picture>
                      <source media="(min-width: 1241px)" srcset="../public/images/logo.png">
                      <img src="../public/images/logo-black.png" alt="LashSchool V.Bezpalenko">
                    </picture>
                </div>
                <div class="icon__container elems--mobile mobile__flex-end">
                  <a href="#0" class="icon-28--inst icon-svg--white">
                      <svg viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg">
                          <path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0"/><path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0"/>
                      </svg>
                  </a>
                  <a href="#0" class="icon-28--vk icon-svg--white">
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
                            <a href="/?link=our_courses">Наши курсы</a>
                        </li>
                        <router-link
                            tag="li"
                            active-class="active"
                            to="/raspisanie"
                        >
                            <a>Расписание</a>
                        </router-link>
                        <router-link
                            tag="li"
                            active-class="active"
                            to="/prepodavateli"
                        >
                            <a>Преподаватели</a>
                        </router-link>
                        <router-link
                            tag="li"
                            active-class="active"
                            to="/result"
                        >
                            <a>Результаты учеников</a>
                        </router-link>
                        <router-link
                            tag="li"
                            active-class="active"
                            to="/vakansii"
                        >
                            <a>Вакансии</a>
                        </router-link>
                        <li>
                            <a href="/?link=contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
      
    <router-view></router-view>

    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__col-1">
                    <a href="#0" class="footer__link">
                        <span class="icon-28--inst">
                            <svg viewBox="0 0 512.001 512.001" xmlns="http://www.w3.org/2000/svg">
                                <path d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0"/><path d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zm0 0M399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0"/>
                            </svg>
                        </span>
                        <span class="footer__link__text">bezpalenkovika</span>
                    </a>
                    <a href="#0" class="footer__link">
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
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>
