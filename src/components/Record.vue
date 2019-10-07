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
                <form action="mail.php" class="form">
                    <label class="label">
                        <input name="name" type="text" placeholder="Имя">
                    </label>
                    <label class="label">
                        <input name="phone" 
                          type="text" 
                          class="input__required input__phone"
                          data-valid="phone"
                          placeholder="Телефон*"
                        >
                    </label>

                    <label class="label-check">
                      <input type="checkbox">
                        <span></span><p>Я даю согласие на обработку моих персональных данных</p>
                    </label>

                    <input type="hidden" name="type" value="record">

                    <app-select
                      :list="listCourse"
                      :default = "selectCours"
                      label="Выбери курс"
                    >
                    </app-select>

                    <button type="submit" class="btn-7">Отправить</button>
                </form>
            </div>
        </div>
      </section>
</template>

<script>
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
      ]
    };
  },
  created() {
    if (this.defaultCours) this.selectDefaultCours();

    document.body.style.cssText = 'overflow: hidden;';
  },
  methods: {
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
    }
  }
}
</script>

