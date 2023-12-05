import "../css/style.css";
import {spicyFoods} from "./Menu";
import { DOMSelectors } from "./dom";

document.querySelector(".themebtn").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("hot");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("hot");
  }
});

function clearcards() {
  const card = document.querySelectorAll(".card");
  card.forEach((name) => name.remove());
};

function insert(arr) {
  arr.forEach((spicy) => DOMSelectors.container.insertAdjacentHTML("beforeend",
  `<div class="flexcontainer">
      <div class="card"> 
          <h4 class="name">${spicy.name}</h1>
          <img src="${spicy.imglink}" alt="Image" class="card-img"/> <br>
          <h5 class="game"> Scoville Level: ${spicy.scoville}</h2>
      </div>
  </div>`
  ))
}

insert(spicyFoods)

let buttons = document.querySelectorAll(".type-button");
buttons.forEach((btn) => btn.addEventListener("click", function(){
  clearcards();
  let filter = btn.value;
  if (btn == buttons[0]) {
    insert(spicyFoods)
  }
  else if (btn == buttons[2]) {
    let newarr = spicyFoods.filter((food) => food.scoville > 10000);
    insert(newarr)
  }
  else if (btn == buttons[3]) {
    let newarr = spicyFoods.filter((food) => food.scoville <= 10000);
    insert(newarr)
  }
  else {
    let newarr = spicyFoods.filter((food) => food.meat.includes(filter));
    insert(newarr)
  } 
}));

/*
function addshrimp() {
  const spicyfoodlist = spicyFoods.filter((spicy) => spicy.meat === "Shrimp")
  insert(spicyfoodlist)
};

function addchicken() {
  const spicyfoodlist = spicyFoods.filter((spicy) => spicy.meat === "Chicken")
  insert(spicyfoodlist)
};

function addvege() {
  const spicyfoodlist = spicyFoods.filter((spicy) => spicy.meat === "Vegatarian")
  insert(spicyfoodlist)
};

function addnotspicy() {
  const spicyfoodlist = spicyFoods.filter((spicy) => spicy.scoville <= 10000)
  insert(spicyfoodlist)
};

function addspicy() {
  const spicyfoodlist = spicyFoods.filter((spicy) => spicy.scoville > 10000)
  insert(spicyfoodlist)
};

insert(spicyFoods);

DOMSelectors.chicken.addEventListener("click", function() {
  clearcards();
  addchicken();
});

DOMSelectors.shrimp.addEventListener("click", function() {
  clearcards();
  addshrimp();
});

DOMSelectors.vege.addEventListener("click", function() {
  clearcards();
  addvege();
});

DOMSelectors.everything.addEventListener("click", function() {
  clearcards();
  insert(spicyFoods);
});

DOMSelectors.hot.addEventListener("click", function() {
  clearcards();
  addspicy();
});

DOMSelectors.nothot.addEventListener("click", function() {
  clearcards();
  addnotspicy();
});*/