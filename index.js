const KEY = "80034d04cad945fe8252888e5e8ef60b"
const BASE_URL = "https://newsapi.org/v2/"
const URL = `${BASE_URL}top-headlines?apiKey=${KEY}&category=sports&country=ua&pageSize=10`
const list = document.querySelector(".list")
// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=80034d04cad945fe8252888e5e8ef60b`)
    // .then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

// fetch(URL).then(response => response.json()).then(data => insertContent(data.articles)).catch(error => console.log(error));

// function createlist(item) {
//     return `<li>
//     ${item.urlToImage ? `<img src="${item.urlToImage}" alt="${item.description}">`: ""
// }
//     <h2>${item.title ?? ""}</h2>
//     <p>${item.description ? item.description : ""}</p>
//     <a href="${item.url}" target="_blank">go to article</a>
//     </li>`
// };

// function generateContent(array) {
// return array?.reduce((acc, item) => acc + createlist(item), "")

// };

// function insertContent(array) {
    
//     const result = generateContent(array);
//     list.insertAdjacentHTML("beforeend", result)
// }


/////////////////////second////////////////
fetchNews().then(insertContent).catch(error => error)  /////если нужно по кнопке поменять динамически данные 
// нужно вставить результат роботы функции

function fetchNews() {    
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=80034d04cad945fe8252888e5e8ef60b&
    category=sports&country=ua&pageSize=10`)
    .then(response => response.json())    
};
 

function createlist(item) {
    return `<li>
    ${item.urlToImage ? `<img src="${item.urlToImage}" alt="${item.description}">`: ""}
    <h2>${item.title ?? ""}</h2>
    <p>${item.description ? item.description : ""}</p>
    <a href="${item.url}" target="_blank">go to article</a>
    </li>`
};

function generateContent(array) {
return array.reduce((acc, item) => acc + createlist(item), "")

};

function insertContent(array) {
    console.log(array)
    const result = generateContent(array.articles);
    
    list.insertAdjacentHTML("beforeend", result)
};
