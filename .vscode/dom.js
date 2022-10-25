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
var itemlist=document.queryselector('#items');
console.log(itemlist.parentnode);
itemlist.parentnode.style.backgroundcolor='red';
console.log(itemlist.parentnode.parentnode.parentnode);
console.log(itemlist.parentelement);
itemlist.parentelement.style.backgroundcolor='yellow';
console.log(itemlist.parentelement.parentelement.parentelement);
console.log(itemlist.child.nodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundcolor='yellow';
console.log(itemlist.firstchild);
console.log(itemlist.firstelementchild);
var newdiv=document.createelement('div');
newdiv.classname='hi';
newdiv.id='hi1';
newdiv.setattribute('title','hellodiv');
var newdivtext=document.createtextnode('helloworld');
console.log(newdiv);




