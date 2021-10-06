let gifs = [
    "imgs/gif/peski.gif",
    "imgs/gif/osminog.gif"
];
let text = [
    "вы утонули в песках",
    "вас потопил осьминог"
];

let attempts = 0;

//удаляет гифку с текстом
let delete_gif = () => {
    $("#gifka").detach();
    $("#title_alert").detach();
};

//движение корабля
let move_the_ship = obj => {
    $("html").click(function(event) {
        $(obj).offset({
            top: event.pageY,
            left: event.pageX
        });
    });
};

/*
name - id блока при клике на который
срабатывает определённое условие
*/
let id_name = name => {
    if(name == "peski") {
        $("body").append('<img id="gifka" src="' +gifs[0]+ '" alt="peski">');
        $("body").append('<h2 id="title_alert">' +text[0]+ '</h2>');
    }
    if(name == "osminog") {
        $("body").append('<img id="gifka" src="' +gifs[1]+ '" alt="peski">');
        $("body").append('<h2 id="title_alert">' +text[1]+ '</h2>');
    }
};

let my_time = 5000;
let click_map = event => {
    move_the_ship("#corabl");
    id_name(event.target.id);
    setTimeout(delete_gif, my_time);
};

$("body").click(click_map);