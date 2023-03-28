//Working On -------------------------------------------------------------


//for adding divs
document.getElementById("mybutton").
            addEventListener("click", function () {
         document.getElementById("innerdiv").
            innerHTML += "<h3>Hello geeks</h3>";
        });














function addTask(position) {
    if(position >= lists.length) {
        console.log('error')
    } else {
        const newTask = document.getElementById('addTask').value;
        console.log(position)
        console.log("new task " + newTask);
        //lists > ("list" + position) > tasks.push[{name: newTask, completed: false}]
        lists.splice(tasks, newTask, {name: newTask, completed: false});
        console.log(lists)
    }
}


// To Do -----------------------------------------------------------------
function completeTask(){// runs on check clicked
    //if (completed == true) {
    //lists.remove();//replaces with undefined
    //Array.remove[]
    //lists[task].Delete
    //render()    
}
 function render() { //not sure what's going on here
    // this will hold the html that will be displayed in the sidebar
     let listsHtml = '<ul class="list-group">';
     // iterate through the lists to get their names
     lists.forEach((list) => {
    listsHtml += `<li class="list-group-item">${list.name}</li>`;
    });
   
    listsHtml += '</ul>';
    // print out the lists
    document.getElementById('displayLists').innerHTML = lists;
    //print out the name of the current list
   
    document.getElementById('listname').innerText = currentList.name;
    // iterate over the todos in the current list
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((list) => {
    todosHtml += `<li class="list-group-item">${todo.text}</li>`;
    });
    // print out the todos
    document.getElementById('current-list-todos').innerHTML = todosHtml;
}
function save() {
localStorage.setItem('currentList', JSON.stringify(currentList)); 
localStorage.setItem('lists', JSON.stringify(lists));
}



// done -------------------------------------------------------------
function changeList(position) {
    if(position >= lists.length) {
        console.log('error')
    } else {
        displayList(lists[position])
        console.log(position)
    }
}
function removeList(position){
    if(position >= lists.length) {
        console.log(position + ' dosent exist')
    } else {
        console.log('removelist ' + position)
        lists.pop([position]);
    }
}
function addList() {
    const newList = document.getElementById('addList').value;
    console.log(newList)
    lists.push({named: newList, tasks:[{name: '', completed:false}]});
    document.getElementById('listName').innerHTML = lists.name;
    console.log(lists)
    //render();
}
function getTasksHtml(tasks){
    let tasksHtml = "";
    for (let taskItem of tasks) {
        tasksHtml += `
            <input type="checkbox" ${taskItem.completed ? 'checked' : ''}" />
            <label>${taskItem.name}</label>
        `
    }
    return tasksHtml
}
function displayList(lists){
    let name = lists.named;
    let tasks = lists.tasks;
    let tasksHtml = getTasksHtml(tasks);
    let listName = document.querySelector('.listName')
    let tasksElement = document.querySelector(".tasks")

    listName.textContent = name
    tasksElement.innerHTML = tasksHtml 
}
const lists = [
    {named:"list0", tasks:[{name: 'apples', completed:false}, {name: 'bananas', completed:false}]},
    {named:"list1", tasks:[ {name: 'milk', completed:false}, {name: 'cheese', completed:false}]},
]