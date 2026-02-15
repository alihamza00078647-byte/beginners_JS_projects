const userPassword = document.querySelector("#user-Password");
const image = document.querySelector("img");
const passwordStg = document.querySelector(".password");


console.log(userPassword);
console.log(image);

image.addEventListener("click", () => {
    // if we use ./eye-open-3.png it will make an error because of ./
    if (image.src.includes("eye-open-3.png")){  //Can also Use endsWith instead of includes  
        image.src = "./close.png";
        userPassword.type = "password";
    } else {
        image.src = "./eye-open-3.png";
        userPassword.type = "text";
    }
})
