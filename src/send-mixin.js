import $ from 'jquery';

export default {
  methods: {
    submit() {
        this.send = true;
        
        let resRequired = this.checkRequired(this.dataList);

        if (!resRequired) {
            this.send = false;

            return;
        }

        let dataForm = {};

        for (let input in this.dataList) {
          dataForm[input] = this.dataList[input].value;
        }

        $.ajax({
            // url:  required('../../public/scripts/mail.php'),
            type: 'POST',
            data: dataForm,
        })
        .done((msg) => {
            if(msg === "Ok") {
                this.send = false;
                
                this.alertMessage('Произошла ошибка. Попробуйте позже.', false);
            }
            else {
                this.send = false;
                this.alertMessage('Произошла ошибка. Попробуйте позже.', true);
            }
        })
        .fail(() => {
            this.send = false;
            this.alertMessage('Произошла ошибка. Попробуйте позже.', true);
        })
    },
    checkRequired(data) {
        let validData = {
            phone: (val) => {
                val = val.replace(/[()-\s+]/g, '');

                let valid = (val.length > 10) ? true : false;

                return (valid) ? true : false;
            },
            email: (val) => {
                let re = /^[\w-]+@[\w-]+\.[a-z]{2,4}$/i;
                let valid = re.test(val);

                return (valid) ? true : false;
            }
        };

        for(let input in data) {
          let value = data[input].value;

          if (data[input].required && !value) {
            data[input].not_valid = true;
            let message = (input == 'check') 
              ? 'Вы не дали согласие на обработку персональных данных'
              : 'Заполнены не все обязательные данные'

            this.alertMessage(message, true);

            return false;
          }

          if (data[input].valid && !validData[data[input].valid](value)) {
            this.alertMessage('Даные введены неверно.', true);

            return false;
          }
        }

        return true;
    },
    alertMessage(message, danger){
        this.alertShow = true;
        this.alertDanger = danger;
        this.message = message;
        
        setTimeout(() => {
          if (this.alertShow) this.alertShow = false;
        }, 3000);
    }
  }
}

