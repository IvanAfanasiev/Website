$('document').ready(function(){
    currentCity = localStorage.getItem('currentCity');
    loadProducts();
});
let currentClass = "";
let currentCity = "";

function loadProducts(){
    currentClass = localStorage.getItem('currentClass');
    $.getJSON(currentClass + '_data.json', function (data) {
        var out = '';
        for(var key in data)
        {
            if(data[key][currentCity] <= 0){
                return;
            }


            out += '<div class="cardA">\n';
            out += '    <div class="imgA">\n';
            out += '        <img src="' + data[key]['img'] + '"></img>\n';
            out += '    </div>\n';
            out += '    <div class="bg">\n';
            out += '        <div class="descriptions">\n';
            out += '            <b class="descriptionA">' + key['name'] +'</b>\n';
            out += '            <p class="description2A">name: ' + key['name'] + '\n';
            out += '                                     price: ' + data[key]['price'] + 'zł/god.\n';
            out += '                                     description: ' + data[key]['description'] + '</p>\n';
            out += '        </div>\n';
            out += '        <button current-car="' + key +'" class="buy-btnA">\n';
            out += '            <legend>Buyy</legend>\n';
            out += '            <div class="block">доступен с 12.12.12</div>\n';
            out += '        </button>\n';
            out += '    </div>\n';
            out += '</div>\n';
        }

        $('#prdcts').html(out);
    })
}

// when button whit the class "buy-btnA" is pressed, the ChangeCurrentCar function is called
$('button.buy-btnA').on('click', ChangeCar);
function ChangeCar(){
    var cur_car = "";
    cur_car = $(this).attr('current-car');
    console.log(cur_car);
    localStorage.setItem('currentCar', cur_car);

    window.location.href = "../cart/cart.html";
    window.location("../cart/cart.html");
}