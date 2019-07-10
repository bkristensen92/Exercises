'use strict'
$(() => {

    let itemsForSale = [
        { itemName: 'SmartWater', cost: 1.49 , taxable: false },
        { itemName: 'Ale 8', cost: 2.49, taxable: false },
        { itemName: 'Nooma', cost: 2.39, taxable: false },
        { itemName: 'Gatorade Fierce', cost: 1.69, taxable: false },
        { itemName: 'Clif Bar', cost: 1.49, taxable: false },
        { itemName: 'Bolt Energy Chew', cost: 2.09, taxable: false },
        { itemName: 'Honey Stinger Waffle', cost: 1.39, taxable: false },
        { itemName: 'Simply Trail Trail Mix', cost: 6.39, taxable: false },
        { itemName: 'Country Archer Beef Jerky', cost: 5.39, taxable: false },
        { itemName: 'Joshua Tree Climbing Salve', cost: 13.46, taxable: true },
        { itemName: 'Mammut Climbing Harness', cost: 54.95, taxable: true },
        { itemName: 'Mammut Climbing Rope', cost: 194.96, taxable: true },
        { itemName: 'Mammut Chalk Bag', cost: 21.97, taxable: true },
        { itemName: 'Black Diamond ATC', cost: 15.96, taxable: true },
        { itemName: 'CampUSA Carabiner', cost: 12.95, taxable: true },
        { itemName: 'CampUSA Quickdraws', cost: 74.95, taxable: true },
        { itemName: 'Asana White Dirt', cost: 24.00, taxable: true },
        { itemName: 'Tenaya Climbing Shoes', cost: 169.95, taxable: true },
        { itemName: 'PrAna Stretch Zion Pants', cost: 59.82, taxable: true },
        { itemName: 'Metolius Master Cams', cost: 269.78, taxable: true },
    ]

    $('.cancel_button').click(function () {
        if (confirm("Click OK to cancel transaction. Click cancel to continue.")) {
            $('.list_of_scanned_items').empty();
            $('input').val('');

        }
        //empty subtotal, tax, and total as well
    });

    itemsForSale.forEach(function(item, i) {
        let button = $('.items_for_sale_layout') [i];
        $(button).val(item.itemName);
    }) 
    
    $('.items_for_sale_layout').children('button').each(function () {
    let buttonItemIndex = $('#' + this.id).index();
    let itemForSale = itemsForSale[buttonItemIndex];
    $('#' + this.id).val(itemForSale.itemName + ' ' + '$ ' + itemForSale.cost.toString());
    $('#' + this.id).text(itemForSale.itemName);
    });

    $('.items').click(function () {
        let itemID = this.id;
        let cartIndex = $('#' + this.id).index();
        let itemForSale = itemsForSale[cartIndex];
        itemsInCart.push(itemForSale);
        let subTotal = 0;
        itemsInCart.forEach(function(item, i) {
            subTotal += item.cost;
        });
        $('.subtotal_price').html(`Subtotal : ` + '$' + subTotal.toString());

        $('.list_of_scanned_items').append('<p>' + $('#' + itemID).val() + '</p>');
    })

        let currentTaxRate = 0;
    $('.system_configuration_button').click(function () {
        let promptValue = prompt('What is the taxrate');
        if (promptValue > 0) {
            currentTaxRate = promptValue / 100;
        }
        console.log(currentTaxRate);
    })

    let itemsInCart = [];
    $()

    $('.subtotal_price').html(`Subtotal : `);
    $('.tax_price').html(`Tax : `);
    $('.total_price').html(`Total : `);

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