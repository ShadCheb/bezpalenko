<template>
    <section class="modal" @click="closeModal">
        <div class="modal__call__content"  @click.stop="">
            <div class="modal__header">
                <h2 class="modal__caption">Запись на обучение</h2>
                <button class="btn-close" @click="closeModal">
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="modal__body">
                <p class="p-text__16">Отправь заявку и наш специалист свяжется с тобой для записи:</p>
                <form action="mail.php" class="form" :class="{load: send}">
                    <label class="label">
                        <input name="name" type="text" placeholder="Имя" 
                          v-model="dataList.name.value"
                        >
                    </label>
                    <label class="label">
                        <input name="phone" 
                          type="text" 
                          class="input__phone"
                          :class="{'not-valid': dataList.phone.not_valid}"
                          placeholder="Телефон*"
                          v-model="dataList.phone.value"
                          @change="validInput('phone')"
                        >
                    </label>

                    <app-select
                      :list="listCourse"
                      :default = "selectCours"
                      label="Выбери курс"
                      @emitselect="selectCourse"
                    >
                    </app-select>

                    <label class="label-check">
                      <input type="checkbox"
                        v-model="dataList.check.value"
                      >
                        <span></span><p>Я даю согласие на обработку моих персональных данных</p>
                    </label>

                    <input type="hidden" name="type" value="record">

                    <button type="submit" class="btn-7" 
                      @click.prevent="submit"
                      :disabled="send"
                    >Отправить</button>

                    <div class="alert-close" v-if="alertShow" @click="alertShow = false">
                      <div 
                        class="alert"
                        :class="(alertDanger) ? 'alert-danger' : 'alert-success'"
                      >
                      {{ message }}
                      </div>
                    </div>
                </form>
            </div>
        </div>
      </section>
</template>

<script>
import $ from 'jquery';
import Select from './Select.vue';
import SendMxin from '../send-mixin';

export default {
  name: 'Record',
  components: {AppSelect: Select},
  props: ['defaultCours'],
  mixins: [SendMxin],
  data() {
    return{
      selectCours: null,

      listCourse: [
        {
          value: 'Lash Start',
          id: 0
        },
        {
          value: 'Lash Professional',
          id: 1
        },
        {
          value: 'Lash Expert',
          id: 2
        },
        {
          value: 'Ламинирование',
          id: 3
        },
        {
          value: 'Brow Master',
          id: 4
        }
      ],

      dataList: {
        name: {
          value: ''
        },
        phone: {
          value: '',
          required: true,
          valid: 'phone',
          not_valid: false
        },
        check: {
          value: false,
          required: true,
        },
        course: {
          value: ''
        }
      },

      send: false,

      alertDanger: false,
      alertShow: false,
      message: ''
    };
  },
  created() {
    if (this.defaultCours) this.selectDefaultCours();

    document.body.style.cssText = 'overflow: hidden;';
  },
  methods: {
    selectCourse(value) {
      if (value) this.dataList.course.value = value;
    },
    validInput(input) {
      if (this.dataList[input].not_valid) this.dataList[input].not_valid = false;
    },
    selectDefaultCours() {
      let cours;

      this.listCourse.forEach((item) => {
        if (item.id === this.defaultCours.id_cours) {
          cours = item;
        }
      });

      if (!cours) return;

      this.selectCours = cours;
    },
    closeModal() {
      document.body.style.cssText = '';
      this.$emit('emitclosemodal');
    },
    
  }
}
</script>

