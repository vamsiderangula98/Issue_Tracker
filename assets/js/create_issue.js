const lableContainer = document.getElementById("label-list");
const addButton = document.getElementById("add-label-btn");
const label = document.getElementById("add-label");
const lables = document.getElementById("lables");

//adding lables dynamically on page
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  let lableName = label.value;
  if (lableName != "") {
    lables.value = lables.value + "^" + lableName; // we are giving string input of lebles in issue schema
    let div = document.createElement("div"); // latter we will convert it into array
    div.classList.add("tag");
    div.innerText = lableName;

    lableContainer.appendChild(div);
  }
  label.value = "";
  // console.log(lables.value)
});
