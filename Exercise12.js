'use strict'
$(() => {

    $('.cancel_button').click(function () {
        if (confirm("Click OK to cancel transaction. Click cancel to continue.")) {
            $('.list_of_scanned_items').empty();
            $('input').val('');

        }
        //empty subtotal, tax, and total as well
    });

    $('.items').click(function () {
        let itemID = this.id;
        $('.list_of_scanned_items').append('<p>' + $('#' + itemID).val() + '</p>');
    })

    $('.system_configuration_button').click(function () {
        if (prompt('What is the taxrate?') > 0);
        //make tax_price whatever the number is /100
    })

    $('subtotal_price').html(`Subtotal : ${0}`);
    $('tax_price').html(`Tax : ${0}`);
    $('total_price').html(`Total : ${0}`);

    $('.delete_key').click(function () {
        if (confirm("Click OK to delete last item. Click cancel to continue.")) {
            $('.list_of_scanned_items p').last().remove();
        }
    })

    $('.list_of_scanned_items').dblclick(function () {
        if (confirm("Click OK to delete item. Click cancel to continue.")) {
            $('p').remove(); //make it remove only the item that is double clicked and after it has been confirmed
        }
    })

    $('.number_keys').click(function () {
        $('#input').val($('#input').val() + $(this).val());

    })

    $('.clear_key').click(function () {
        $('input').val('');
    })

    $(function () {
        let totalPrice = ($('.subtotal_price').val() + $('.tax_price').val());
    });
});

//system config button to change tax rate and a 'membership' rewards setting and a price override that requires an admin and password