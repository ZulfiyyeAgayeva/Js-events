function openLondon(){
    const london = document.getElementById("london");
    london.style.display = "block";
    paris.style.display = "none";
    tokio.style.display = "none";
}
function openParis(){
    const paris = document.getElementById("paris");
    paris.style.display = "block";
    london.style.display = "none";
    tokio.style.display = "none";
}
function openTokio(){
    const tokio = document.getElementById("tokio");
    tokio.style.display = "block";
    london.style.display = "none";
    paris.style.display = "none";
}

