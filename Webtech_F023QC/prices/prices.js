var rows = document.getElementsByTagName("tr");


for (var i = 1; i < rows.length; i++) {
    if (i % 2 == 0) {
        rows[i].style.backgroundColor = "grey";
        rows[i].style.color="white";
    } else {
        rows[i].style.backgroundColor = "white";
    }
}

setTimeout(loaded,3000)



function loaded(){
    var loader = document.getElementById("load");
    var tablee = document.getElementById("tabla");
    loader.style.visibility = "hidden";
    tablee.style.visibility = "visible";
}