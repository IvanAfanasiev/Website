$('document').ready(function(){
    SetCar();
});
let currentCar = "";
let currentClass = "";

function SetCar(){
    currentClass = localStorage.getItem('currentClass');

    $.getJSON(currentClass + '_data.json', function (data){
        currentCar = localStorage.getItem('currentCar');
        console.log("ты сейчас просматриваешь " + currentCar);

        $('#name').html(currentCar);

        let immg = "";
        immg = '<img src="'+ data[currentCar]['img'] +'"></img>\n';
        $('#image').html(immg);
    })
}

let token = "";
let chatID = "";

function SendData(){
    
    let data_to_send = "";

    data_to_send += 'Name: ' + document.querySelector('.user_data_inpt-name').value + "%0A";
    data_to_send += 'Email: ' + document.querySelector('.user_data_inpt-email').value + "%0A";
    data_to_send += 'Phone: ' + document.querySelector('.user_data_inpt-phone').value + "%0A";
    data_to_send += 'Od: ' + document.querySelector('.date_inpt-od').value + "%0A";
    data_to_send += 'Do: ' + document.querySelector('.date_inpt-do').value + "%0A";
    data_to_send += 'Model: ' + "Renault Megane Grand Coupe 2022"; //CurrentCar
    // модель убрать


    const url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatID + "&text=";
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + data_to_send, true);
    xhttp.send();

    alert("Dziękujemy za zamówienie. Czekamy na Ciebie!");
}
