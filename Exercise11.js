'use strict'
$(() => {

    $('.cancel_button').click(function () {
        if (confirm("Click OK to cancel transaction. Click cancel to continue.")) {
            location.reload();
        }
        //empty subtotal, tax, total, and list of scanned items
    });
    
    $('.items').click(function () {
        let itemID = this.id;
        $('.list_of_scanned_items').append($('#' + itemID).val() + '<br>' + '<br>');
    })

    $('.system_configuration_button').click(function () {
        prompt('What is the taxrate?');
    })

});

//system config button to change tax rate and a 'membership' rewards setting and a price override that requires an admin and password

/*
used for pricing purposes
<!--take prices out and make price check button-->
            <button class="items">SmartWater $1.49</button>
            <button class="items">f</button>
            <button class="items">Nooma $2.39</button>
            <button class="items">Gatorade Fierce $1.69</button> <!--make 2/$3-->
            <button class="items">Clif Bar $1.49</button>
            <button class="items">Bolt Energy Chew $2.09</button>
            <button class="items">Honey Stinger Waffle $1.39</button>
            <button class="items">Simply Trail Trail Mix $6.39</button>
            <button class="items">Country Archer Beef Jerky $5.39</button>
            <button class="items">Joshua Tree Climbing Salve $13.46</button>
            <button class="items">Mammut Climbing Harness $54.95</button>
            <button class="items">Mammut Climbing Rope $194.96</button>
            <button class="items">Mammut Chalk Bag $21.97</button>
            <button class="items">Black Diamond ATC $15.96</button>
            <button class="items">CampUSA Carabiner $12.95</button>
            <button class="items">CampUSA Quickdraws $74.95</button>
            <button class="items">Asana White Dirt $24.00</button>
            <button class="items">Tenaya Climbing Shoes $169.95</button>
            <button class="items">PrAna Stretch Zion Pants $59.82</button>
            <button class="items">Metolius Master Cam $269.78</button>
*/