
const refs = {
    srchBtn: document.querySelector(".button"),
    input: document.querySelector(".input"),
    h3: document.querySelector(".totalPages"),
    form: document.querySelector(".form"),
    list: document.querySelector(".list")
};

let count =1


let srchName = ""


refs.form.addEventListener("submit", submitHandler )

function submitHandler(e) {
    e.preventDefault()
    srchName = refs.input.value
    const URL = `https://newsapi.org/v2/top-headlines?q=${srchName}&apiKey=80034d04cad945fe8252888e5e8ef60b&pageSize=10&page=${count}`
    console.log(srchName)
    count += 1
    refs.list.innerHTML = ""
    fetch(URL).then(response => response.json()).then((data) => {
        console.log(data)
        
        
        insertContent(data.articles)
        if (count > data.totalResults/10) {
            refs.srchBtn.disabled = true
    }
    }).catch(error => console.log(error));
}


function createlist(item) {
    return `<li>
    ${item.urlToImage ? `<img src="${item.urlToImage}" alt="${item.description}">`: ""
}
    <h2>${item.title ?? ""}</h2>
    <p>${item.description ? item.description : ""}</p>
    <a href="${item.url}" target="_blank">go to article</a>
    </li>`
};

function generateContent(array) {
return array?.reduce((acc, item) => acc + createlist(item), "")

};

function insertContent(array) {
    console.log(array)
    const result = generateContent(array);
    refs.list.insertAdjacentHTML("beforeend", result)
}
