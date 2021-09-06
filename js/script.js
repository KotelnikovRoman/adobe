let gifs = [
    "imgs/gif/peski.gif",
    "imgs/gif/osminog.gif"
];
let text = [
    "вы утонули в песках",
    "вас потопил осьминог"
];

let delete_gif = function() {
    $("#gifka").remove();
    $("#title_alert").remove();
}

let coordinats = function(name) {
    if(name == "peski") {
        $("body").append('<img id="gifka" src=' +gifs[0]+ ' alt="peski">');
        $("body").append('<h2 id="title_alert">' +text[0]+ '</h1>');
    }
    if(name == "osminog") {
        $("body").append('<img id="gifka" src=' +gifs[1]+ ' alt="peski">');
        $("body").append('<h2 id="title_alert">' +text[1]+ '</h1>');
    }
}

let click_map = function(event) {
    coordinats(event.target.id);
    setTimeout(delete_gif, 5000);
    console.log(event.pageX+ " " +event.pageY+ " element: " +event.target.id);
}

$("body").click(click_map);