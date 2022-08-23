$('document').ready(function(){
    loadProducts();
});
var currentCity ="Gorzow Wielkopolski";
var cur_class = "";
$('div.menu-ico').on('click', function(){
    $('.phone_menu').toggleClass('phone_menuActive');
    $('.menu').toggleClass('menuActive');
    $('.menu-ico').toggleClass('menu-icoActive');
    $('.menu-ico li').toggleClass('menu_linesActive');
    console.log('menu');
});

$('div.menu_ref').on('click', function(){
    
    $('.phone_menu').toggleClass('phone_menuActive');
    $('.menu').toggleClass('menuActive');
    $('.menu-ico').toggleClass('menu-icoActive');
    $('.menu-ico li').toggleClass('menu_linesActive');
});



$('a.currentCity').on('click', function(){
    const list = document.querySelectorAll('.cities a');
    list.forEach((item) => item.classList.remove('Cities_Active'));


    $(this).toggleClass('Cities_Active');


    console.log('нажато на ' + $(this).attr('currentCity'));
});


$('a.currentCity').on('click', RefreshItems);
function RefreshItems(){
    currentCity = $(this).attr('currentCity');
    loadProducts();
}

// загрузить товары на страницу
function loadProducts(){
    // currentCity = localStorage.getItem('currentCity');
    $.getJSON('../js/product_classes.json', function (data) {
        // console.log(data);
        
        var out = '';
        
        for(var key in data){
            // out += '<p>' + data[key]['name'] + '</p>';

            out += '<div class="product">\n';
            out += '    <div class="text">\n';
            out += '        <div class="model">\n';
            out += '            <b>' + key + '</b>\n';
            out += '        </div>\n';
            out += '        <div class="rodzaj">\n';
            out += '            <p>' + data[key]['description'] + '</p>\n';
            out += '        </div>\n';
            out += '    </div>\n';
            if(!data[key][currentCity]){
                console.log(currentCity + " нет машин");
                out += '    <div class="mask"></div>\n';
            }
            out += '    <div class="img">\n';
            out +=          '<img src="' + data[key]['img'] + '"></img>\n';
            out += '    </div>\n'; 
            out += '    <div currentClass="'+ data[key]['class'] + '" class="class-btnA"></div>\n';
            out += '</div>\n';
            
        }

        $('#productWrapper').html(out);
    })
}



// when button whit the class "class-btnA" is pressed, the ChangeClass function is called
$('div.class-btnA').on('click', function(){
    console.log("asdasd");
    cur_class = $(this).attr('currentClass');
    console.log(cur_class);
    localStorage.setItem('currentClass', cur_class);

    window.location.href = "classes/class_list.html";
    window.location("classes/calss_list.html");
});


// for slider
var currentPage = 1;
var maxPage = 4;
document.getElementById('rad1').checked = true;
function PageL()
{
    currentPage--;
    if(currentPage < 1){
        currentPage = 1;
    }
    document.getElementById('rad' + currentPage).checked = true;
}
function PageR()
{
    currentPage++;
    if(currentPage > 4){
        currentPage = 4;
    }
    document.getElementById('rad' + currentPage).checked = true;
}
function Check(){
    for(var i = 1; i < maxPage; i++){
        if(document.getElementById('rad' + i).checked == true){
        console.log(i);
        }
    }
    currentPage = i;
}
function SetPage(){
    document.getElementById('rad' + currentPage).checked = true;
    currentPage++;
    if(currentPage > 4){
        currentPage = 1;
    }
}         
                                   

