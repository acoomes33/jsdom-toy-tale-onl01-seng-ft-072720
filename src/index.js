let addToy = false;
const toyCollection = document.getElementById("toy-collection")

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function getToys(){
  fetch("http://localhost:3000/toys")
  .then(resp => resp.json())
  .then(showToys)
}

function showToys(toys){
  for (toy of toys) {
    const toyDiv = document.createElement("div")
    toyDiv.classList.add("card")
    toyCollection.appendChild(toyDiv)
  }
}