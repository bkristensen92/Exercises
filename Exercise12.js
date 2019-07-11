'use strict'
$(() => {

    let itemsForSale = [
        { itemName: 'SmartWater', cost: 1.49, count: 1, taxable: false },
        { itemName: 'Ale 8', cost: 2.49, count: 1, taxable: false },
        { itemName: 'Nooma', cost: 2.39, count: 1, taxable: false },
        { itemName: 'Gatorade Fierce', cost: 1.69, count: 1, taxable: false },
        { itemName: 'Clif Bar', cost: 1.49, count: 1, taxable: false },
        { itemName: 'Bolt Energy Chew', cost: 2.09, count: 1, taxable: false },
        { itemName: 'Honey Stinger Waffle', cost: 1.39, count: 1, taxable: false },
        { itemName: 'Simply Trail Trail Mix', cost: 6.39, count: 1, taxable: false },
        { itemName: 'Country Archer Beef Jerky', cost: 5.39, count: 1, taxable: false },
        { itemName: 'Joshua Tree Climbing Salve', cost: 13.46, count: 1, taxable: true },
        { itemName: 'Mammut Climbing Harness', cost: 54.95, count: 1, taxable: true },
        { itemName: 'Mammut Climbing Rope', cost: 194.96, count: 1, taxable: true },
        { itemName: 'Mammut Chalk Bag', cost: 21.97, count: 1, taxable: true },
        { itemName: 'Black Diamond ATC', cost: 15.96, count: 1, taxable: true },
        { itemName: 'CampUSA Carabiner', cost: 12.95, count: 1, taxable: true },
        { itemName: 'CampUSA Quickdraws', cost: 74.95, count: 1, taxable: true },
        { itemName: 'Asana White Dirt', cost: 24.00, count: 1, taxable: true },
        { itemName: 'Tenaya Climbing Shoes', cost: 169.95, count: 1, taxable: true },
        { itemName: 'PrAna Stretch Zion Pants', cost: 59.82, count: 1, taxable: true },
        { itemName: 'Metolius Master Cams', cost: 269.78, count: 1, taxable: true },
    ]
    
    let itemsInCart = [];

    $('.cancel_button').click(function () {
        if (confirm("Click OK to cancel transaction. Click cancel to continue.")) {
            $('.list_of_scanned_items').empty();
            $('#input_number_of_items').val('');
            clearTotals();
            itemsInCart = [];
        }
    });

    itemsForSale.forEach(function (item, i) {
        let button = $('.items_for_sale_layout')[i];
        $(button).val(item.itemName);
    })

    $('.items_for_sale_layout').children('button').each(function () {
        let buttonItemIndex = $('#' + this.id).index();
        let itemForSale = itemsForSale[buttonItemIndex];
        $('#' + this.id).val(itemForSale.itemName + ' ' + '$ ' + itemForSale.cost);
        $('#' + this.id).text(itemForSale.itemName);
    });

    $('.items').click(function () {
        let noOfItems = $('#' + 'input_number_of_items').val();
        if(noOfItems > 0){
            let i;
            for(i = 0; i < noOfItems; i++)
            {
                pushItemIntoCart(this.id);
            }
        }
        else{
            pushItemIntoCart(this.id);
        }
        $('#' + 'input_number_of_items').val(0);
    });

    let currentTaxRate = .0725;
    $('.system_configuration_button').click(function () {
        let promptValue = prompt('What is the taxrate');
        if (promptValue > 0) {
            currentTaxRate = promptValue / 100;
        }
        console.log(currentTaxRate);
    })

    $()

    $('.delete_key').click(function () {
        if (confirm("Click OK to delete last item. Click cancel to continue.")) {
            $('.list_of_scanned_items p').last().remove();
            let itemID = $('.list_of_scanned_items p').last().id;
            let elementIndex = $('#' + itemID).index();
            $('#' + itemID).remove();
            itemsInCart.splice(elementIndex, 1);
            updatePrice('', true);
        }
    })

    $('.number_keys').click(function () {
        $('#input_number_of_items').val($('#input_number_of_items').val() + $(this).val());

    })

    $('.clear_key').click(function () {
        $('#input_number_of_items').val('');
    })

    function pushItemIntoCart(id) {
        let itemID = id;
        let cartIndex = $('#' + itemID).index();
        let itemForSale = itemsForSale[cartIndex];
        itemsInCart.push(itemForSale);
        let itemValue = $('#' + itemID).val();
        updatePrice(itemValue, false);
        
    };

    function updatePrice(itemValue, isDelete) {
        let subTotal = 0;
        let taxTotal = 0;
        let total = 0;
        itemsInCart.forEach(function (item, i) {
            let currentSubtotalCost = item.cost;
            let currentTaxCost = item.taxable ? currentTaxRate * item.cost : 0;
            subTotal = subTotal + currentSubtotalCost;
            taxTotal = taxTotal + currentTaxCost;
        });
        if(!isDelete) {
            let paragraphId = (itemsInCart.length + 1).toString() + 'listItemId';
            $('.list_of_scanned_items').append('<p class="listItem" id="' + paragraphId + '">' + itemValue + '</p>');
        }
        $('.subtotal_price').html(`Subtotal : ` + '$' + subTotal.toFixed(2));
        $('.tax_price').html(`Tax : ` + '$' + taxTotal.toFixed(2));
        total = subTotal + taxTotal;
        $('.total_price').html(`Total : ` + '$' + total.toFixed(2));
    }

        $('.list_of_scanned_items').dblclick(function (element) { 
            if(element.target.className == 'listItem'){
                console.log('#' + element.target.id);
                let itemID = element.target.id;
                let elementIndex = $('#' + itemID).index();
                $('#' + itemID).remove();
                itemsInCart.splice(elementIndex, 1);
                console.log(elementIndex);
                updatePrice('', true);
            }
        });

    function clearTotals() {
        $('.subtotal_price').html(`Subtotal : `);
        $('.tax_price').html(`Tax : `);
        $('.total_price').html(`Total : `);
    }

});