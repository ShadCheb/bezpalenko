<template>
    <section class="modal" @click="closeModal">
        <div class="modal__call__content"  @click.stop="">
            <div class="modal__header">
                <h2 class="modal__caption">Работа</h2>
                <button class="btn-close" @click="closeModal">
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="modal__body">
                <p class="p-text__16">Отправь заявку и мы пригласим тебя на собеседование:</p>
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

                    <input type="hidden" name="type" value="job">

                    <button type="submit" class="btn-7">Отправить</button>
                </form>
            </div>
        </div>
      </section>
</template>

<script>
import SendMxin from '../send-mixin';

export default {
  name: 'Job',
  mixins: [SendMxin],
  data() {
    return{
    };
  },
  created() {
    document.body.style.cssText = 'overflow: hidden;';
  },
  methods: {
    closeModal() {
      document.body.style.cssText = '';
      this.$emit('emitclosemodal');
    }
  }
}
</script>

