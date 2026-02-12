const boxes = document.querySelectorAll(".box");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

let select = null;
// Start Dragging the Box
boxes.forEach(box => {
    box.addEventListener("dragstart", (e) => {
        select = e.target;
    });
});
// Prevent from Default Setting set by Browser
rightBox.addEventListener("dragover", (e) => {
    e.preventDefault();
});
// Drop Selected Item
rightBox.addEventListener("drop", (e) => {
    rightBox.appendChild(select);
});

leftBox.addEventListener("dragover", (e) => {
    e.preventDefault();
});
leftBox.addEventListener("drop", (e) => {
    leftBox.appendChild(select);
});

