let taskList = []
// let id = 0
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
    <li>${task.content}
    <div class="task-action">
      <i class="far fa-trash-alt" onclick="deleteTask('${index}')"></i>
      <i class="far fa-check-circle"></i>
    </div>
    </li>
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
  } else {
    taskList = [{ content: taskInput, isDone: false }, ...taskList]
    displayTaskList(taskList.content)
    setLocalStorage()
    getELE('#newTask').value = ''
  }
}
getELE("#addItem").onclick = addTask

let deleteTask = (index) => {
  taskList.filter((index) => {
    return index != index
  })
  taskList.splice(index, 1)
  setLocalStorage()
  displayTaskList()
}