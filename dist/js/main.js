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
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset'); //Очистка формы
        });
        return false;
    });
});