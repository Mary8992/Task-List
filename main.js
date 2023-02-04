//container div:To Do List
let push = document.querySelector("#push");

push.addEventListener("click", addItem);

function addItem() {
    let newTask = document.querySelector("#newtask input");
    let tasks = document.querySelector("#tasks");

    if (newTask.value.length == 0) {
        alert("Please Enter a Task");
    } else {
        tasks.innerHTML += `
            <div class="task">
              <span id="taskname">
                ${newTask.value}
              </span>
              <button class="delete">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          `;
        //cancel button

        let current_tasks = document.querySelectorAll(".delete");

        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].addEventListener("click", removeItem);

            function removeItem() {
                if (confirm("Are you sure?")) {
                    this.parentNode.remove();
                }
            }
        }
    }
    newTask.value = "";
}
