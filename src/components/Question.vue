<template>
    <section class="modal" @click="closeModal">
        <div class="modal__call__content"  @click.stop="">
            <div class="modal__header">
                <h2 class="modal__caption">Задай вопрос</h2>
                <button class="btn-close" @click="closeModal">
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="modal__body">
                <p class="p-text__16">Отправь вопрос и наш специалист ответит на него:</p>
                <form action="mail.php" class="form">
                    <label class="label">
                        <input name="name" type="text" 
                          placeholder="Имя"
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
                    <label class="label">
                        <input name="email" 
                          type="text" 
                          class="input__email"
                          placeholder="Email*"
                          :class="{'not-valid': dataList.email.not_valid}"
                          v-model="dataList.email.value"
                          @change="validInput('phone')"
                        >
                    </label>
                    <label class="label">
                        <textarea name="message" 
                          type="text" 
                          class="input__required input__message"
                          placeholder="Сообщение*"
                          v-model="dataList.message.value"
                          rows="4"
                        ></textarea>
                    </label>

                    <label class="label-check">
                      <input type="checkbox"
                        v-model="dataList.check.value"
                      >
                        <span></span><p>Я даю согласие на обработку моих персональных данных</p>
                    </label>

                    <input type="hidden" name="type" value="question">

                    <button type="submit" class="btn-7">Отправить</button>
                </form>
            </div>
        </div>
      </section>
</template>

<script>
import SendMxin from '../send-mixin';

export default {
  name: 'Question',
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

