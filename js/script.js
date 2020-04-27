var url = "https://blog.canaisgratis.org/player3/canaishlb.php?canal=";

$(function() {
    changeChannel('disney');
});
        
function changeChannel(channel){
    document.getElementById("channel").innerHTML = "";

    if(channel != null){
        document.getElementById("channel").innerHTML = "<iframe name=\"Player\" id=\"Player\"src="+url+channel+" frameborder=\"0\" height=\"800\" scrolling=\"no\" width=\"100%\" allowfullscreen=\"\"> </iframe>";
    }
}

