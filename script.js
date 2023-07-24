let btn = document.querySelectorAll(".item");
let showInput = document.querySelector(".input-result");
let computing = document.querySelector(".input-computing");
let equalAll = document.querySelector(".equal");
let clearAll = document.querySelector(".clear-all");
let deleteEnd = document.querySelector(".delete-end");
btn.forEach((item) => {
  item.addEventListener("click", function () {
    showInput.value += item.value;
  });
});
equalAll.addEventListener("click", function () {
  computing.value += eval(showInput.value);
});
clearAll.addEventListener("click", function () {
  showInput.value = "";
  computing.value = "";
});
deleteEnd.addEventListener("click", function () {
  let i = showInput.value;
  showInput.value = i.slice(0, -1);
});
