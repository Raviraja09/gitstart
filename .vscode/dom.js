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
console.log(newdiv);
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);


function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;


  var li = document.createElement('li');
 
  li.className = 'list-group-item';
 
  li.appendChild(document.createTextNode(newItem));


  var deleteBtn = document.createElement('button');

 
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

 
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}




