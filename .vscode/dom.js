var items=document.getelementsbyclassname('list-group-item');
console.log(items);
items[1].textcontent='hi';
items[1].style.fontweight='bold'
items[1].style.backgroundcolor='yellow'
var li=document.getelementsbytagname('li');
console.log(li);
li[1].textcontent='hi';
li[1].style.fontweight='bold';
li[1].style.backgroundcolor='yellow'
var header=document.querySelector('#main-header');
header.style.borderbottom='solid 4px #ccc';
var input=document.querySelector('input');
input.value='hello world'
var submit=document.querySelector('input[type="submit"]');
submit.value="send"
var submit=document.querySelector('list-group-item');
items.style.color='red';

