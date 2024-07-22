const error = document.querySelector("#error");

const input = document.querySelectorAll(".goal1");

const progressBar = document.querySelector(".progressBar");
const progressvalue = document.querySelector(".progressvalue");
const checkboxList = document.querySelectorAll(".checkbox");

const motivate = document.querySelector('img').nextElementSibling

const num = 1;
let count = 0;

// local storage
// const allGoals = {
//   first : {
//     name: 'Learn Js',
//     completed : false
//   },
//   second : {
//     name : 'React Js',
//     completed : false,
//   },
//   third : {
//     name : 'tailwind Css',
//     completed : false
//   }
// }

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first :{
    name :'',
    completed :false,
  },
  second:{
  name :'',
  completed :false,
  }
};

checkboxList.forEach((element) => {
  element.addEventListener("click", (event) => {
    const checkinput = [...input].every((element) => {
      return element.value;
    });
    if (checkinput) {
      element.parentElement.classList.toggle("completed");
      const img = document.createElement("img");
      img.src = "images/Vector 1.png";
      img.classList.add("vector");
      element.appendChild(img);

      count++;

      switch (count) {
        case 1:
          progressvalue.style.width = "33.3%";
          progressvalue.innerHTML = "<span>1/3 completed</span>";
          motivate.innerText = 'Just 2 down to Win'

          break;
        case 2:
          progressvalue.style.width = "66.3%";
          progressvalue.innerHTML = "<span>2/3 completed</span>";
          motivate.innerText = 'Too Close Be patient'
          break;
        case 3:
          progressvalue.style.width = "100%";
          progressvalue.innerHTML = "<span>3/3 completed</span>";
          motivate.innerText = 'Congratulations MileStone Achieve'
          break;
      }
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

input.forEach((element) => {
  element.value = allGoals[element.id].name;

  element.addEventListener("focus", (event) => {
    progressBar.classList.remove("show-error");
  });

  element.addEventListener("input", (event) => {
    // console.log(event.target.id);
    allGoals[element.id] = {
      name: element.value,
      completed: false,
    };
    //  console.log(allGoals);
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
