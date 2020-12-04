$(function(){

    // Validation

    function validateForms(form) {
        $(form).validate({
            rules: {
                tel: "required"
            },
            messages: {
                tel: "Пожалуйста, введите свой номер телефона"
            }
        });
    }

    validateForms('#form');

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST", // Отдаем данные
            url: "mailer/smart.php", // куда будет отправляться запрос
            data: $(this).serialize() // Данные, которые отправляются
        }).done(function() {
            $(this).find("input").val(""); // Очищаем инпут
            $('.overlay, .modal').fadeIn('slow');
            $('form').trigger('reset'); //Очистка формы
        });
        return false;
    });

    // Маска ввода
    $('input[name=phone]').mask("+375 (99) 999-99-99");

    $('.form__btn').on('click', function() {
        $('.overlay, .modal').fadeIn('slow');
    }); // для проверки модального окна без сервера
    $('.modal__close').on('click', function() {
        $('.overlay, .modal').fadeOut('slow');
    });
});