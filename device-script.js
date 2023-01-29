function orientationChange() { // 573, 566
    console.log(window.innerHeight);
    console.log(window.innerWidth);
     if ( window.innerWidth < window.innerHeight || window.innerWidth / window.innerHeight < 1.8) {
         document.getElementById("hide-page").style.display = "flex";
     } else {
        document.getElementById("hide-page").style.display = "none";
    }
}

setInterval(orientationChange);