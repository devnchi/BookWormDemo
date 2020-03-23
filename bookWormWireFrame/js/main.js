// I worked on this code with my teammates, Elmer Osorio Jr., Ken Cruz, Anjelic Bethea, Zikre Haimanot, and Josh Wilkerson :)

let add=document.querySelector('#addToList');
let input;
let parentList= document.querySelector('#itemList')
let clearCompleted= document.querySelector('#clearCompleted');
let list=document.querySelector('#itemList')

let itemList=[]
let howManyLeft=document.querySelector('#howManyLeft').innerHTML=0
let clearAll=document.querySelector('#clearList')

add.addEventListener('click',()=>{
 input=document.querySelector('#input');
 list = document.querySelector('#itemList')
let listItem= document.createElement('li')
if(input.value===''){
  return;
}
itemList.push(input.value);
listItem.appendChild(document.createTextNode(input.value))
listItem.addEventListener('click',() => {
  event.target.classList.toggle('completed')
  list.appendChild(listItem)
  input.value=''
  howManyLeft--
  document.querySelector('#howManyLeft').innerHTML=howManyLeft
})
list.appendChild(listItem)
input.value=''
howManyLeft++
document.querySelector('#howManyLeft').innerHTML=howManyLeft

})
clearAll.addEventListener('click',()=>{
  let list=document.querySelectorAll('#itemList li')
  list.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  howManyLeft=0
  document.querySelector('#howManyLeft').innerHTML=0;
})

clearCompleted.addEventListener('click', ()=>{
  let list=document.querySelectorAll('.completed')
  list.forEach(el =>{
    el.parentNode.removeChild(el)
  })
  document.querySelector('#howManyLeft').innerHTML=document.querySelectorAll('#itemList li').length
  howManyLeft=document.querySelectorAll('#itemList li').length
})
