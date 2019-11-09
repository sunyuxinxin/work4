var li = document.getElementById("container").getElementsByTagName("li");
const listArr = ['list1', 'list2', 'list3', 'list4', 'list5'];
listArr[i] = listArr;
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        for (let i = 0; i < listArr.length; i++) {
            li[i].onclick = function () {
                li[i].innerHTML = listArr[i];
            }
        }
    }, false);
}