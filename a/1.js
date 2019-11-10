var otest =document.getElementsByClassName("nav")[0];
var node =document.getElementsByClassName("item")[0];
var newnode =document.createElement("li");
newnode.innerHTML = "首页";
otest.insertBefore(newnode, node);

var newElement =document.createElement("li");
otest.appendChild(newElement);
var textnode =document.createTextNode('关于');
newElement.appendChild(textnode);

var node2=document.getElementsByClassName("item")[2];
var newElement2=document.createElement("li");
otest.appendChild(newElement2);
var textnode2=document.createTextNode('文章');
newElement2.appendChild(textnode2);
otest.replaceChild(newElement2,node2);

var node3=document.getElementsByClassName("item")[1];
otest.removeChild(node3);




