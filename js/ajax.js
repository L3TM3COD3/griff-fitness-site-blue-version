var submitForm = function (ev) {
    ev.preventDefault();

    var form = $(ev.target);
        
    var request = ajaxForm(form);

    function doneWindow() {
        alert( 'Спасибо, мы свяжемся с Вами в самое ближайшее время!' );
      }

    function doneError() {
        alert( 'Произошла ошибка. Приносим извинения :(' );
      }  

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            doneWindow();    
            location.reload();            
        } else{
            doneError();    
            location.reload(); 
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#form-id').on('submit', submitForm);






