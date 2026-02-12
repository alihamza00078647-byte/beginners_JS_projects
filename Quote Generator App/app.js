// const API = "https://type.fit/api/quotes";
// const URL = `https://zenquotes.io/api/random`;
const API_Key = "https://api.quotable.io/quotes/random";
// GET 

const Quotes = async () => {
    try{
        const response = await fetch(API_Key);
        console.log(response);
        const data =  await response.json();
        console.log(data);
    } catch(e){
        console.log(e);
    }
}
Quotes();

