//main div:Date and Time
let time = document.getElementById("time");
let date = document.getElementById("date");

setInterval(update, 1000);

function update() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    let timeString = `${hours}:${minutes}:${seconds}`;
    time.innerHTML = timeString;

    /*
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  options.timeZoneName = 'short';
  console.log(date.toLocaleDateString('en-US', options));
 */

    let weekDay = now.toLocaleDateString("en-US", { weekday: "long" });
    let monthDay = now.toLocaleDateString("en-US", { day: "numeric" });
    let year = now.toLocaleDateString("en-US", { year: "numeric" });
    let monthName = now.toLocaleDateString("en-US", { month: "long" });

    let dateString = `${weekDay}-${monthName} ${monthDay},${year}`;

    date.innerHTML = dateString;
}

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
