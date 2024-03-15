let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue =  Math.round((pos * 100) / calcHeight);
    if(pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#12bdff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// var loader = document.getElementById("preloader");

// window.addEventListener("load", function(){
//     // loader.style.display = "none";
// })

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "moon.png";
    }else{
        icon.src = "sun.png";
    }
}
