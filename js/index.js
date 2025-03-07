// background change
document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.classList.forEach((className) => {
    document.body.classList.remove(className);
  });

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(randomColor);

  document.body.classList.add(randomColor);
});

//dynamic task cards

function loadCards() {
  const task_length = document.getElementById("task-assigned");
  task_length.innerText = cardData.length;
  const parent = document.getElementById("card-container");

  cardData.forEach((card) => {
    const child = document.createElement("div");
    child.classList.add("m-card", "bg-[#F4F7FF]", "p-5", "rounded-2xl");
    child.innerHTML = `
        <div class="card-details flex flex-col gap-3">
 <small class="bg-white px-2 py-1 w-22 rounded-sm">${card.company}</small>
 <h2 class="font-bold text-xl text-[#00303C]"> ${card.issue} </h2>
<div class="bg-white px-4 py-3 rounded-sm text-start">
<p class="text-sm text-[#808384] "> ${card.description} </p>
</div>
</div>

<div class="card-bottom flex justify-between items-center mt-5">
 <div class="date">
     <small class="text-[#00303C]">Deadline</small>
     <p class="font-semibold text-[#00303C] text-sm"> ${card.deadline} </p>
 </div>

 <div class="btn-com">
    <button  onclick="completeTask(event)" class="bg-blue-700  text-white px-4 py-2 rounded-lg cursor-pointer text-lg">Completed</button>
 </div>
</div>
        
        `;

    parent.appendChild(child);
  });
}

// date and time generator

const time=new Date();
const time_string=time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
const now = new Date();
const options1 = { weekday: 'short'};
const day_string = now.toLocaleDateString('en-US', options1);
const options2= {month: 'short', day: 'numeric', year: 'numeric' }
const date_string= now.toLocaleDateString('en-US', options2);

document.getElementById("day").innerText=day_string;
document.getElementById("date").innerText=date_string;

// task complete
let tasks = cardData.length;
let complete_tasks = parseInt(
  document.getElementById("task-completed").innerText
);
function completeTask(e) {
  console.log(e);
  tasks -= 1;

  if (tasks === 0) {
    alert("congratulation you have completed all tasks");
  }
  alert("Board update successfully");
  e.target.classList.remove("bg-blue-700", "cursor-pointer");
  e.target.classList.add("bg-gray-400");

  const task_length = document.getElementById("task-assigned");
  task_length.innerText = tasks;

  complete_tasks += 1;
  const task_completed = document.getElementById("task-completed");
  task_completed.innerText = complete_tasks;

  parent = document.getElementById("activity-container");

  const child = document.createElement("div");
  child.classList.add(
    "activity-card",
    "flex", "justify-center",
    "items-center",
    "mt-8"
  );

  const parent_card= e.target.closest(".m-card");
  const task_name= parent_card.querySelector("h2").innerText;
  console.log(task_name);
  child.innerHTML = `
  <div class="bg-[#F4F7FF] w-52  px-2 py-2 rounded-xl ">
                <p class="text-sm text-[#00303C]">You have Complete The Task ${task_name} at ${time_string} </p>
            </div>
  `;
  parent.appendChild(child);


}

document.getElementById("clear-history").addEventListener("click", function(){
    const parent = document.getElementById("activity-container");
    parent.innerHTML="";
})

window.onload = loadCards;



