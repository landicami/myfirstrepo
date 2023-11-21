// din_script_fil.js

// Välj paragrafen och knappen
const myParagraph = document.querySelector("#myParagraph");
const changeButton = document.querySelector("#changeButton");

// Lägg till klickhändelse på knappen
changeButton.addEventListener("click", () => {
  // Ändra innehållet i paragrafen
  myParagraph.textContent += "Här kommer nya p";
});

const myList = document.querySelector("ul");
const myItem = document.querySelector("li");
const itemsArray = [
  "Föremål 1",
  "Föremål 2",
  "Föremål 3",
  "Föremål 4",
  "Föremål 5",
];

itemsArray.forEach((item) => {
  console.log(item);
  const newItem = document.createElement("li");
  newItem.innerText = item;
  myList.appendChild(newItem);
});

myList.addEventListener("click", (e) => {
  e.target.remove();
});
