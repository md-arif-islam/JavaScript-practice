let form = document.querySelector("#addForm");
let itemList = document.querySelector("#items");
let filter = document.querySelector("#filter");

// Form Submit Event
form.addEventListener("submit", addItem);
// Delete evente
itemList.addEventListener("click", removeItem);
// Filter Event
filter.addEventListener("keyup", filterItems);

// Add Items
function addItem(e) {
  e.preventDefault();

  // Get Input Value

  let newItem = document.querySelector("#item");
  let newItemValue = newItem.value;

  // Create a new li elements
  let li = document.createElement("li");
  // Add Class Name
  li.className = "list-group-item";

  // Create Delete Button element

  let Deletebtn = document.createElement("button");
  // Add Class Button
  Deletebtn.className = "btn btn-danger btn-sm float-right delete";

  Deletebtn.appendChild(document.createTextNode("X"));

  li.appendChild(Deletebtn);

  // Add TextNode With input value
  li.appendChild(document.createTextNode(newItemValue));
  itemList.appendChild(li);

  newItemValue = clearInterval();
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert lowercase

  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");

  // Convert To array

  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;

    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
