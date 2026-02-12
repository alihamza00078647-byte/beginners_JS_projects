const showDate = document.querySelector('.show');
const button = document.querySelector('button');
const birthDate = document.querySelector('#birthDate');
const currentDate = document.querySelector('#currentDate');




button.addEventListener('click', () => {
    
    if (birthDate.value == "" || currentDate.value == ""){
        alert("Please enter Age!!!");
        return;
    } 
    

    let prevYear =((birthDate.value).replaceAll("-", "")).slice(0, 4);
    let PrevMonth =((birthDate.value).replaceAll("-", "")).slice(4, 6);
    let PrevDay =((birthDate.value).replaceAll("-", "")).slice(6, 8);

    let currYear =((currentDate.value).replaceAll("-", "")).slice(0, 4);
    let currMonth =((currentDate.value).replaceAll("-", "")).slice(4, 6);
    let currDay =((currentDate.value).replaceAll("-", "")).slice(6, 8);

    let years = parseInt(currYear) - parseInt(prevYear);
    let months = parseInt(currMonth) - parseInt(PrevMonth);
    let days = parseInt(currDay) - parseInt(PrevDay);
    
    RemoveMinus(years, months, days);

});



function RemoveMinus(years, months, days){
    
    if (years < 0){
        years *= -1;
    }
    if (months < 0){
        months *= -1;
    }
    if (days < 0){
        days *= -1;
    }

    showDate.innerText = `${years} years : ${months} Months : ${days} Days`;
}
