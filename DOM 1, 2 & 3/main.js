// Examini Document Object

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// document.all[10].textContent = "Hello";

// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);

// console.log(document.getElementById("header_title"));

// var header_title = document.getElementById("header_title");
// console.log(header_title);
// header_title.textContent = "Hello";
// header_title.innerHTML = "<h3>Good Bye<h3/>";

// header_title.style.borderBottom = "2px solid red";

// var items = document.getElementsByClassName("list_item");
// console.log(items[1]);

// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "##f4f4f4";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#ccc";
// }

// Query Selector

// let header = document.querySelector("header");

// header.style.background = "pink";
// header.style.padding = "10px";

// let input = document.querySelector("input");
// input.value = "Hello Word";

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "send";

// let seconditem = document.querySelector(".list_item:nth-child(2)");
// seconditem.style.color = "tomato";

// let odd = document.querySelectorAll(".list_item:nth-child(odd)");
// let even = document.querySelectorAll(".list_item:nth-child(even)");

// for (let i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "yellow";
// }

// Trevarsing The DOM  //

// let itemList = document.querySelector("#item");

// ParentNode;
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor = "yellow";

// ParentElements;
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "yellow";

// ClildsNode;
// itemList.style.color = "red";

// itemList.childNodes;
// itemList.children;
// itemList.firstChild;
// itemList.lastChild;
// itemList.nextSibling;
// itemList.previousSibling;

// let newDiv = document.createElement("div");

// newDiv.className = "hello";
// newDiv.id = "hello1";
// newDiv.setAttribute("title", "helloDiv");

// // Create a textNode
// let newDivText = document.createTextNode("Hello World");

// newDiv.appendChild(newDivText);
// console.log(newDiv);

// let button = document
//   .querySelector("#button")
//   .addEventListener("click", butonClick);

// function butonClick(e) {
//   // console.log("Button Clicked");
//   // document.querySelector("#header_title").textContent = "hello";

//   // console.log(e);

//   console.log(e.target);

let button = document.querySelector("#button");
let box = document.querySelector("#box");

box.addEventListener("mouseover", runEvent);

function runEvent(e) {
  console.log("Event Type:" + e.type);
}
