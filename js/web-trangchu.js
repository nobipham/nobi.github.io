function switchToVideo(count,obj){
    var trailer = document.getElementById("trailer " +count)
    var poster = document.getElementById("poster "+count)
    trailer.style.display = "block";
    poster.style.opacity = "0.3";
    document.getElementById("play "+count).style.display = "none" 
    document.getElementsByClassName("exit-trailer")[0].style.display = "block";
    trailer.play();
}
function backtoPoster(){
    var count = document.getElementsByClassName("carousel-item active")[0]
    var video = count.getElementsByTagName("video")[0]
    var poster = count.getElementsByTagName("img")[0]
    video.style.display = "none";
    poster.style.opacity = "1"
    video.pause();
    video.load();
    document.getElementsByClassName("exit-trailer")[0].style.display = "none";
    count.getElementsByClassName("play-trailer")[0].style.display = "flex";
}
