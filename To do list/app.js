const todoTask = document.querySelector(".to-do-app");
const addbtn = document.querySelector("#btn");
const inputField = document.querySelector("#dailyTask");
const parentEle = document.querySelector('.list-container');


//  ${inputField.value}`;


    
addbtn.addEventListener('click', () => {

    takeInput(inputField.value);
    inputField.value = "";
});




const takeInput = (data) => {
    const li = document.createElement('li');
    li.classList.add('todo-task');
    li.innerHTML = `<p>${data}</p>
    <i class="trash fa-solid fa-trash"></i>`;

    li.addEventListener('click', (e) => {
        
        if (e.target.classList.contains('trash')){
            e.target.closest('.todo-task').remove();
        }

        if (e.target.classList.contains('todo-task')){
            e.target.classList.toggle('line');
        }
    });


    parentEle.appendChild(li);
}