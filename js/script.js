//var url = "https://blog.canaisgratis.org/player3/canaishlb.php?canal=";
//var url = "https://blog.canaisgratis.org/imgs-videos/Canais/multishow.jpg";

//var url = "https://encripted-encripted-encripted-encripted-encripted-encripted.encripted-encripted-encripted-encripted-encripted-encripted.fun/player3/canaishlb.php?canal=";
//var url = "https://sqldatabasebacks.com/checar.php?data=/player3/canaishlb.php?canal=";
//var url = "https://canaisgratis.eu/player3/canaishlb.php?canal=";
//var url = "https://lojadebicicleta.com.br/player3/canaishlb.php?canal=";
var url = "https://canaisgratis.eu/player3/canais-bk3.php?canal=";




$(function() {
    changeChannel('disney');
});
        
function changeChannel(channel){
    document.getElementById("channel").innerHTML = "";

    if(channel != null){
        document.getElementById("channel").innerHTML = "<iframe name=\"Player\" id=\"Player\"src="+url+channel+" frameborder=\"0\" height=\"800\" scrolling=\"no\" width=\"100%\" allowfullscreen=\"\"> </iframe>";
    }
}

//https://sqldatabasebacks.com/checar.php?data=/player3/canaishlb.php?canal=multishow&p=&fe=
