// function shanchu() 
// { 
// document.getElementsByName("content").value="";
// }
window.onload=function(){
    var main=document.getElementById("main");
    var bt=document.getElementById("bt");
    bt.onclick=function(){
      var len=main.getElementsByTagName("li").length;
      var oul=main.getElementsByTagName("ul")[0];
      var oli=document.createElement("li");
      var input=document.createElement("input");
      var button=document.createElement("input");
      input.type="text";
      button.type="button";
      button.value="删除";
      oli.appendChild(input);
      oli.appendChild(button);
      oul.appendChild(oli);
      button.onclick=function(){
         button.parentNode.remove(button.parentNode);
      }
    } 
  }