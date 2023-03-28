/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval1 = null;
let interval2 = null;
let interval3 = null;

const screen1 = document.querySelector(".screen");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3");

const name1 = document.querySelector(".name");
const name2 = document.querySelector(".name2");
const name3 = document.querySelector(".name3");

screen1.onmouseenter = (event) => {
let iteration = 0;

clearInterval(interval1);

interval1 = setInterval(() => {
name1.innerText = name1.innerText
.split("")
.map((letter, index) => {
if (index < iteration) {
return name1.dataset.value[index];
}



    return letters[Math.floor(Math.random() * 26)];
  })
  .join("");

if (iteration >= name1.dataset.value.length) {
  clearInterval(interval1);
}

iteration += 1 / 3;
}, 30);
};

screen2.onmouseenter = (event) => {
let iteration = 0;

clearInterval(interval2);

interval2 = setInterval(() => {
name2.innerText = name2.innerText
.split("")
.map((letter, index) => {
if (index < iteration) {
return name2.dataset.value[index];
}



    return letters[Math.floor(Math.random() * 26)];
  })
  .join("");

if (iteration >= name2.dataset.value.length) {
  clearInterval(interval2);
}

iteration += 1 / 3;
}, 30);
};

screen3.onmouseenter = (event) => {
let iteration = 0;

clearInterval(interval3);

interval3 = setInterval(() => {
name3.innerText = name3.innerText
.split("")
.map((letter, index) => {
if (index < iteration) {
return name3.dataset.value[index];
}



    return letters[Math.floor(Math.random() * 26)];
  })
  .join("");

if (iteration >= name3.dataset.value.length) {
  clearInterval(interval3);
}

iteration += 1 / 3;
}, 30);
};