const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const entriesList = document.createElement("li");
const deleteButton = document.createElement("button");

entriesList.textContent = input.value;
deleteButton.textContent = "❌";
entriesList.append(deleteButton);
list.append(entriesList);
