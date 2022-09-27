let taskList = []
let getELE = (id) => document.querySelector(id)

// Save to local storage
let setLocalStorage = () => {
  localStorage.setItem('TaskList', JSON.stringify(taskList))
}

// Get local storage
let getLocalStorage = () => {
  if (localStorage.getItem('TaskList') != undefined) {
    taskList = JSON.parse(localStorage.getItem('TaskList'))
  }
}
getLocalStorage()

// Task List
let displayTaskList = () => {
  let content = ''
  taskList.map((task, index) => {
    content += `
    <li>${task}</li>
    <span><i class="fa-solid fa-trash-can"></i></span>
    <span><i class="fa-regular fa-circle-check"></i></span>
  `
  })
  getELE('#todo').innerHTML = content
}
displayTaskList()

// add task
let addTask = () => {
  let taskInput = getELE("#newTask").value.trim()
  if (taskInput == '') {
    alert('Bạn cần nhập nội dung công việc')
  }
  taskList = [taskInput, ...taskList]
  displayTaskList(taskList)
  setLocalStorage()
  getELE('#newTask').value = ''
}
getELE("#addItem").onclick = addTask

