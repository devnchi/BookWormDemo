// I got help with this code from Abigail Ezedomwen since we had similar application goals.

var update = document.querySelectorAll('.updateButton')
var trash = document.querySelectorAll('.fa-trash-alt')


Array.from(update).forEach(function(element) {
  element.addEventListener('click', function(){
    const noteTitle = this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[0].innerText
    const noteBody = this.parentNode.childNodes[8].innerText
    const userName = this.getAttribute("data-user")
    console.log(noteTitle)
    fetch('notes', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'noteTitle': noteTitle,
        'noteBody': noteBody,
        'user' : userName
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element){
  element.addEventListener('click', function(){
    const noteTitle = this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[0].innerText
    const noteBody = this.parentNode.childNodes[8].innerText
    const userName = this.getAttribute("data-user")
    console.log(userName, noteBody, noteTitle)
    fetch('notes', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'noteTitle': noteTitle,
        'noteBody': noteBody,
        'user': userName
      })
    }).then(function (response) {
      window.location.reload()
    })
  })
})
