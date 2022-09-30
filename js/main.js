let taskList = []
let taskCompleteList = []
let serial = 1
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
  taskList.map((task) => {
    content += `
    <li id="task-item">${task.content}
      <div class="task-action">
        <i class="far fa-trash-alt" onclick="removeTask('${task.id}')"></i>
        <i id="icon-check" class="far fa-check-circle" onclick="checkStatus('${task.id}')"></i>
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
    taskList = [{ id: `t-${serial++}`, content: taskInput, isComplete: false }, ...taskList]
    displayTaskList(taskList.content)
    setLocalStorage()
    getELE('#newTask').value = ''
  }
  console.log('taskList', taskList);
  console.log('taskCompleteList', taskCompleteList);
}
getELE("#addItem").onclick = addTask

// Remove Task
let removeTask = (id) => {
  let updateTask = taskList.filter((task) => {
    return task.id !== id
  })
  taskList = updateTask
  setLocalStorage()
  displayTaskList()
  console.log('taskList', taskList);
}

// Display task complete
let displayTaskComplete = () => {
  let content = ''
  taskCompleteList.map((taskCL) => {
    content += `
    <li id="task-item2">${taskCL.content}
      <div class="task-action">
        <i class="far fa-trash-alt" onclick="removeTask('${taskCL.id}')"></i>
        <i id="icon-check" class="far fa-check-circle" onclick="checkStatus('${taskCL.id}')"></i>
      </div>
    </li>
    `
  })
  getELE('#completed').innerHTML = content
}
displayTaskComplete()
// Check status
let checkStatus = (id) => {
  // console.log(index);
  // let updateTaskComplete = taskList.filter((task) => {
  //   return task.id !== id
  // })

  // taskList[index].isComplete != isComplete
  // if (taskList[index].isComplete != true) {
  //   getELE('#icon-check').style.background = 'green'
  // }
  // console.log(taskList[index].isComplete);

  // taskCompleteList = updateTaskComplete
  // console.log('taskList', taskList);


  taskList.map((task) => {
    if (task.id === id) {
      taskCompleteList.push(task) 
    }
  })
  displayTaskComplete(taskCompleteList)
  removeTask(id)
  // taskCompleteList[indexCheck].isComplete = true
  console.log('taskList', taskList);
  console.log('taskCompleteList', taskCompleteList);
}