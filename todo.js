var input = document.getElementById('input');
var list = document.getElementById('list');
var Enter = document.getElementById('form');
var cnt = 0;

input.addEventListener('click', function () {
    input.value='';
});
Enter.addEventListener('submit', function (e) {
    e.preventDefault();
    var temp = document.createElement('li');
    temp.setAttribute("class", "list-group-item");
    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>Delete</button>";
    list.appendChild(temp);
    cnt++;
    input.value = '';
    input.focus();
    });

function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
}