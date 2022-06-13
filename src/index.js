document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTaskDescription(e.target.newTaskDescription.value)
    form.reset()
  })
});

function createTaskDescription (taskDescription, priorities) {
  let p = document.createElement('p')
  let bttn = document.createElement('button')
  bttn.addEventListener('click', handleDelete)
  bttn.textContent = 'x'
  p.textContent = `${taskDescription} `
  p.appendChild(bttn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}