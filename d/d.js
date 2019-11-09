
button1.onclick = function ()
 {
    var content = document.getElementById("input");
    var value = content.value;
    var p = document.createElement("p");
    value = "<p1>" + value + "</p1>";
    p.innerHTML = value;
    show.appendChild(p);
}
button2.onclick = function ()
 {
    var p = document.getElementsByTagName("p")[0];
    var show = document.getElementById("show")
    show.removeChild(p);
}

button3.onclick = function () 
{
    var content = document.getElementById("input");
    var newnode = document.createElement("p");
    var a = document.getElementsByTagName("p")[0];
    var value = content.value;
    value = "<p1>" + value + "</p1>";
    newnode.innerHTML = value;
    show.replaceChild(newnode, a);

}