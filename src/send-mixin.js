import $ from 'jquery';

export default {
  sendMail(event) {
    event.preventDefault();
  
    let button = $(this);
    let form = $(this).closest('form');
  
    // loader
    form.addClass('load');
  
    button.attr('disabled', 'disabled');
    
    let resRequired = this.checkRequired(form);
  
    if (!resRequired) {
        button.prop('disabled', false);
        form.removeClass('load');
  
        return;
    }
  
    // let dataForm = form.$serialize();
    let dataForm = {};
  
    form.find ('input, textearea').each((index, value) => {
        dataForm[value.name] = $(value).val();
    });
  
    if (form.find('.select')) {
        let valueSelect = form.find('.select__value__value').text();
  
        dataForm['select'] = valueSelect;
    }
  
    $.ajax({
        url: '../public/mail.php',
        type: 'POST',
        data: dataForm,
    })
    .done((msg) => {
        if(msg === "Ok"){
            let message = 'Ваша заявка принята. Мы скоро позвоним к Вам.';
            let succesTemplate = '<div class="alert alert-success"><p>'+ message +'</p></div>';
  
            form.removeClass('load');
            form.append(succesTemplate);
  
            let alert = form.find('.alert-success');
  
            setTimeout(() => {
                if (alert) {
                    alert.remove();
                }
            }, 3000);
        }
        else {
            let message = 'Произошла ошибка. Попробуйте позже.';
  
            button.prop('disabled', false);
            form.removeClass('load');
            this.alertDanger(form, message);
        }
    })
    .fail(function() {
        let message = 'Произошла ошибка. Попробуйте позже.';
  
        form.removeClass('load');
        button.prop('disabled', false);
        this.alertDanger(form, message);
    })
  },
  checkRequired(form) {
    let requiredList = form.find('.input__required');
    let validate = true;
    let validData = {
        phone: (val) => {
            val = val.replace(/[()-\s+]/g, '');
  
            /* let re = /^\d[\d\(\)\ -]{4,14}\d$/;
            let valid = re.test(val); */
  
            let valid = (val.length > 10) ? true : false;
  
            return (valid) ? true : false;
        },
        email: (val) => {
            let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
            let valid = re.test(val);
  
            return (valid) ? true : false;
        }
    };
  
    requiredList.each((index, value) => {
        let valueInput = value.value;
        let valid = value.dataset.valid;
  
        if (valid && validData[valid]) {
            validate = validData[valid](valueInput);
        }
  
        if (!valueInput || !validate) {
            value.classList.add('required');
  
            /* Убираем Error */
            form.find('input', 'textarea').on('click', (e) => {
                $(e.target).removeClass('required');
            });
        }
  
        if (!valueInput) {
            this.alertDanger(form, 'Заполнены не все обязательные данные');
  
            return false;
        }
        if (!validate) {
            this.alertDanger(form, 'Даные введены неверно.');
  
            return false;
        }
    });
  
    return validate;
  },
  alertDanger(form, message){
    var errorTemplate = `<div class="alert-close">
        <div class="alert alert-danger">` 
        + message 
        + '</div></div>';

    form.prop('disabled', false);
    form.append(errorTemplate);

    let alert = form.find('.alert-close');

    alert.on('click', () => {
        alert.remove();
    });
    
    setTimeout(() => {
        if (alert) {
            alert.remove();
        }
    }, 3000);
  }
}

